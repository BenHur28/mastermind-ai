const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="relative h-full">
			<div className="hidden h-full md:flex md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
				<div>Side Bar</div>
			</div>
		</div>
	);
};

export default DashboardLayout;
