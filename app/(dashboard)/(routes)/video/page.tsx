"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Heading from "@/components/heading";
import { Video } from "lucide-react";
import { useRouter } from "next/navigation";
import { Loading } from "@/components/loading";
import { Empty } from "@/components/empty";

const formSchema = z.object({
	prompt: z.string().min(1, {
		message: "Prompt is required",
	}),
});

const VideoPage = () => {
	const router = useRouter();
	const [video, setVideo] = useState<string>();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			prompt: "",
		},
	});

	const isLoading = form.formState.isSubmitting;

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		try {
			setVideo(undefined);
			const response = await axios.post("/api/video", values);
			console.log(response);

			setVideo(response.data[0]);
			form.reset();
		} catch (error: any) {
			console.log(error);
		} finally {
			router.refresh();
		}
	};

	return (
		<div data-testid="video page">
			<Heading
				title="Generate videos"
				description="Turn your prompt into videos."
				icon={Video}
				iconColor="text-orange-500"
				bgColor="bg-orange-500/10"
			/>
			<div className="px-4 lg:px-8">
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="
                            rounded-lg 
                            border 
                            w-full 
                            p-4 
                            px-3 
                            md:px-6 
                            focus-within:shadow-sm
                            grid
                            grid-cols-12
                            gap-2
                        "
					>
						<FormField
							control={form.control}
							name="prompt"
							render={({ field }) => (
								<FormItem className="col-span-12 lg:col-span-10">
									<FormControl className="m-0 p-0">
										<Input
											className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
											disabled={isLoading}
											placeholder="Dogs doing tricks"
											{...field}
										/>
									</FormControl>
								</FormItem>
							)}
						/>
						<Button
							className="col-span-12 lg:col-span-2 w-full"
							type="submit"
							disabled={isLoading}
							size="icon"
						>
							Submit
						</Button>
					</form>
				</Form>
				{isLoading && (
					<div className="p-20">
						<Loading />
					</div>
				)}
				{!video && !isLoading && <Empty label="No video generated." />}
				{video && (
					<video
						controls
						className="w-full aspect-video mt-8 rounded-lg border bg-black"
					>
						<source src={video} />
					</video>
				)}
			</div>
		</div>
	);
};

export default VideoPage;
