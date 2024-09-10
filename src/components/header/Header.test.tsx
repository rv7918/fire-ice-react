import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

describe("Header unit tests", () => {
  it("Should test the header text", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const logoText = screen.getByText("Fire & Ice");
    expect(logoText).toBeInTheDocument();
  });
});
