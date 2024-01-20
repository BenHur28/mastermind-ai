import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import LandingPage from "@/app/(landing)/page";

describe("Landing Page", () => {
	it("renders the langing page", () => {
		render(<LandingPage />);

		const div = screen.getByTestId("landing");

		expect(div).toBeInTheDocument();
	});
});
