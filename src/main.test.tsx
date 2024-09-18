import { act } from "@testing-library/react";
import App from "./App";
import { createRoot } from "react-dom/client";

describe("App tests", () => {
  it("Should test the component and not crash", () => {
    const div = document.createElement("div");
    act(() => {
      const root = createRoot(div);
      root.render(<App />);
      root.unmount();
    });
    expect(div.innerHTML).toBe("");
  });
});
