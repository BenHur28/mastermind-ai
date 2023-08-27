import { UserButton } from "@clerk/nextjs";

const DashboardPage = () => {
	return (
		<div>
			DashboardPage
			<div>
				<UserButton afterSignOutUrl="/" />
			</div>
		</div>
	);
};

export default DashboardPage;
