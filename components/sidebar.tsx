"use client";

import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { LayoutDashboard } from "lucide-react";

const monteserat = Montserrat({ weight: "600", subsets: ["latin"] });

const routes = [
	{
		label: "Dashboard",
		icon: LayoutDashboard,
		href: "/dashboard",
	},
];

const Sidebar = () => {
	return (
		<div className="text-white space-y-4 py-4 flex flex-col h-full bg-[#111827]">
			<div className="px-3 py-2 flex-1">
				<Link href="/dashboard" className="flex items-center pl-3 mb-14">
					<div className="relative w-8 h-8 mr-4">
						<Image fill alt="" src="/logo.png" />
					</div>
					<h1 className={cn("text-2xl font-bold", monteserat.className)}>
						Mastermind
					</h1>
				</Link>
			</div>
		</div>
	);
};

export default Sidebar;
