import React from 'react';
import { render, screen } from "@testing-library/react";
import Header from "./Header";


describe("Header", () => {
  it("renders with expected logo image", () => {
    render(<Header />);
    const image = screen.getByRole("img", {name: /logo/i}) as HTMLImageElement;
    expect(image.src).toContain("logo");
    expect(image.alt).toBe("logo");
  });
});

describe("Header", () => {
  it("renders with expected menu icon", () => {
    render(<Header />);
    const menu_icon = screen.getByRole("img", {name: /menu/i}) as HTMLImageElement;
    expect(menu_icon.src).toContain("menu");
    expect(menu_icon.alt).toBe("menu");
  });
});