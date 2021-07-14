import React from 'react';
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("renders with expected text content", () => {
    render(<Header />);
    expect(
      screen.getByTestId("headline").textContent
    ).toBe("Created by KDragon");
  });
});