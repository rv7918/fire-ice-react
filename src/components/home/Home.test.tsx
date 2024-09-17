import {
  screen,
  render,
  act,
  fireEvent,
  cleanup,
} from "@testing-library/react";
import { createRoot } from "react-dom/client";
import HomeComponent from "./Home";
import App from "../../App";
import { BrowserRouter } from "react-router-dom";

describe("Home tests", () => {
  afterAll(() => {
    cleanup();
  });

  it("Should test the component and not crash", () => {
    const div = document.createElement("div");
    act(() => {
      const root = createRoot(div);
      root.render(<HomeComponent />);
      root.unmount();
    });
    expect(div.innerHTML).toBe("");
  });

  it("Should test that the home component loads the api", async () => {
    act(() => {
      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );
    });
    const apiTextTitle = await screen.findByText("House Algood");
    expect(apiTextTitle).toBeInTheDocument();
    const PaginateBtnNext = await screen.findByTestId("next-btn");
    expect(PaginateBtnNext).toBeInTheDocument();
    fireEvent.click(PaginateBtnNext);
    const apiNextText = await screen.findByText("House of Test");
    expect(apiNextText).toBeInTheDocument();
    const paginateBtnPrevious = await screen.findByTestId("prev-btn");
    expect(paginateBtnPrevious).toBeInTheDocument();
    fireEvent.click(paginateBtnPrevious);
    expect(apiTextTitle).toBeInTheDocument();
    fireEvent.click(apiTextTitle);
    const region = await screen.findByText("Region: The Westerlands");
    expect(region).toBeInTheDocument();
  });
});
