import React from 'react';
import { render, screen } from "@testing-library/react";
import CategoriesDropDown from "./CategoriesDropDown";


describe("Categories DropDown", () => {
  it("renders with expected label", () => {
    render(<CategoriesDropDown />);
    const label = screen.getByRole('label') as HTMLSpanElement;
    expect(label.textContent).toBe("Catégories");
  });
});

describe("Categories DropDown", () => {
  it("renders with expected drop down icon", () => {
    render(<CategoriesDropDown />);
    const dropdown_icon = screen.getByRole("dropdown-icon") as HTMLImageElement;
    expect(dropdown_icon.src).toContain("dropdown");
    expect(dropdown_icon.alt).toBe("dropdown");
  });
});