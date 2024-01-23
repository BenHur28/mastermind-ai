import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import LandingPage from "@/app/(landing)/page";
import VideoPage from "@/app/(dashboard)/(routes)/video/page";
import MusicPage from "@/app/(dashboard)/(routes)/music/page";

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

describe("Music Page", () => {
	it("renders the music page", () => {
		render(<MusicPage />);

		const div = screen.getByTestId("music page");

		expect(div).toBeInTheDocument();
	});
});
