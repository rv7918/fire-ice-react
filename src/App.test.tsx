import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

describe("App tests", () => {
  it("should render the title", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const appTitle = screen.getByText("Fire & Ice");
    expect(appTitle).toBeInTheDocument();
  });
});
