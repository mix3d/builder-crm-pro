import { describe, it, expect } from "vitest";
import { cn } from "./utils";

describe("cn", () => {
  it("should merge class names correctly", () => {
    expect(cn("px-2 py-1", "bg-red text-white")).toBe("px-2 py-1 bg-red text-white");
  });

  it("should handle conflicting Tailwind classes", () => {
    expect(cn("px-2 px-4")).toBe("px-4");
  });

  it("should handle conditional classes", () => {
    expect(cn("px-2", true && "py-1", false && "bg-red")).toBe("px-2 py-1");
  });

  it("should handle undefined and null values", () => {
    expect(cn("px-2", undefined, null, "py-1")).toBe("px-2 py-1");
  });
});
