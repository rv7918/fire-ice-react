import DetailComponent from "./DetailComponent";
import { createRoot } from "react-dom/client";

describe("Detail component tests", () => {
  it("Should test component without crashing", () => {
    const div = document.createElement("div");
    const root = createRoot(div);
    root.render(<DetailComponent />);
    root.unmount();
    expect(div.innerHTML).toBe("");
  });
});
