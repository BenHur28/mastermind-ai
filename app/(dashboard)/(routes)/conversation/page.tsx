"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const formSchema = z.object({
	message: z.string().min(1, {
		message: "Message is required",
	}),
});

const ConversationPage = () => {
	const [messages, setMessages] = useState<string[]>([]);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			message: "",
		},
	});

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		setMessages([...messages, values.message]);
		console.log(values);
	};

	return (
		<div>
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
											placeholder="How far is the moon from the earth?"
											{...field}
										/>
									</FormControl>
								</FormItem>
							)}
						/>
						<Button className="col-span-12 lg:col-span-2 w-full" type="submit">
							Submit
						</Button>
					</form>
				</Form>
			</div>
			<div className="space-y-4 mt-4">
				<div className="flex flex-col-reverse gap-y-4">
					{messages.map((message) => (
						<div
							key={message}
							className="p-8 w-full flex items-start gap-x-8 rounded-lg"
						>
							<p className="text-sm">{message}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ConversationPage;
