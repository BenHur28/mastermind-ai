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
import { Code } from "lucide-react";
import { useRouter } from "next/navigation";
import { Loading } from "@/components/loading";
import { Empty } from "@/components/empty";
import { cn } from "@/lib/utils";
import { UserAvatar } from "@/components/user-avatar";
import { BotAvatar } from "@/components/bot-avatar";

const formSchema = z.object({
	message: z.string().min(1, {
		message: "Message is required",
	}),
});

const ConversationPage = () => {
	const router = useRouter();
	const [messages, setMessages] = useState<any[]>([]);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			message: "",
		},
	});

	const isLoading = form.formState.isSubmitting;

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		try {
			const userMessage = { role: "user", content: values.message };
			const newMessages = [...messages, userMessage];
			const response = await axios.post("/api/code", {
				messages: newMessages,
			});

			setMessages((current) => [...current, userMessage, response.data]);
			form.reset();
		} catch (error: any) {
			console.log(error);
		} finally {
			router.refresh();
		}
	};

	return (
		<div>
			<Heading
				title="Generate Code"
				description="Our most advanced code generator."
				icon={Code}
				iconColor="text-green-500"
				bgColor="bg-green-500/10"
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
							name="message"
							render={({ field }) => (
								<FormItem className="col-span-12 lg:col-span-10">
									<FormControl className="m-0 p-0">
										<Input
											className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
											disabled={isLoading}
											placeholder="How far is the moon from the earth?"
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
			</div>
			<div className="space-y-4 mt-4">
				{isLoading && (
					<div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
						<Loading />
					</div>
				)}
				{messages.length === 0 && !isLoading && (
					<Empty label="No conversation started." />
				)}
				<div className="flex flex-col-reverse gap-y-4">
					{messages.map((message) => (
						<div
							key={message.content}
							className={cn(
								"p-8 w-full flex items-start gap-x-8 rounded-lg",
								message.role === "user"
									? "bg-white border border-black-/10"
									: "bg-muted"
							)}
						>
							{message.role === "user" ? <UserAvatar /> : <BotAvatar />}
							<p className="text-sm">{message.content}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ConversationPage;