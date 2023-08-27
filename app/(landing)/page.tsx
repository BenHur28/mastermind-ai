import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

const LandingPage = () => {
	return (
		<div>
			<p>LandingPage - You are not signed in ...probably...</p>
			<div>
				<Link href="/sign-in" className="bg-black text-white">
					Sign In
				</Link>
				<Link href="/sign-up" className="bg-black text-white">
					Sign Up
				</Link>
			</div>
			<div>
				<UserButton afterSignOutUrl="/" />
			</div>
		</div>
	);
};

export default LandingPage;
