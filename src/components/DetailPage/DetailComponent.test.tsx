import DetailComponent from "./DetailComponent";
import { createRoot } from "react-dom/client";
import { act } from "@testing-library/react";
describe("Detail component tests", () => {
  it("Should test component without crashing", () => {
    const div = document.createElement("div");
    act(() => {
      const root = createRoot(div);
      root.render(<DetailComponent />);
      root.unmount();
    });
    expect(div.innerHTML).toBe("");
  });

  it("Should test the api response for the detail page", () => {});
});
