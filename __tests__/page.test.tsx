import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import LandingPage from "@/app/(landing)/page";
import VideoPage from "@/app/(dashboard)/(routes)/video/page";
import MusicPage from "@/app/(dashboard)/(routes)/music/page";
import ImagePage from "@/app/(dashboard)/(routes)/image/page";
import CodePage from "@/app/(dashboard)/(routes)/code/page";
import DashboardPage from "@/app/(dashboard)/(routes)/dashboard/page";

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

describe("Image Page", () => {
	it("renders the image page", () => {
		render(<ImagePage />);

		const div = screen.getByTestId("image page");

		expect(div).toBeInTheDocument();
	});
});

describe("Conversation Page", () => {
	it("renders the conversation page", () => {
		render(<ImagePage />);

		const div = screen.getByTestId("conversation page");

		expect(div).toBeInTheDocument();
	});
});

describe("Code Page", () => {
	it("renders the code page", () => {
		render(<CodePage />);

		const div = screen.getByTestId("code page");

		expect(div).toBeInTheDocument();
	});
});

describe("Dashboard", () => {
	it("renders the dashboard page", () => {
		render(<DashboardPage />);

		const div = screen.getByTestId("dashboard");

		expect(div).toBeInTheDocument();
	});
});
