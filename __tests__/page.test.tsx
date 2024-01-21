import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import LandingPage from "@/app/(landing)/page";
import VideoPage from "@/app/(dashboard)/(routes)/video/page";

jest.mock("next/navigation", () => ({
	useRouter() {
		return {
			prefetch: () => null,
		};
	},
}));

describe("Landing Page", () => {
	it("renders the langing page", () => {
		render(<LandingPage />);

		const div = screen.getByTestId("landing");

		expect(div).toBeInTheDocument();
	});
});

describe("Video Page", () => {
	it("renders the video page", () => {
		render(<VideoPage />);

		const div = screen.getByTestId("video page");

		expect(div).toBeInTheDocument();
	});
});
