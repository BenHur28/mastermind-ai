import Link from "next/link";

const LandingPage = () => {
	return (
		<div data-testid="landing">
			<p>LandingPage - You are not signed in ...probably...</p>
			<div>
				<Link href="/sign-in" className="bg-black text-white">
					Sign In
				</Link>
				<Link href="/sign-up" className="bg-black text-white">
					Sign Up
				</Link>
			</div>
		</div>
	);
};

export default LandingPage;
