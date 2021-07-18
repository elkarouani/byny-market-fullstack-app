import React from 'react';
import { render, screen } from '@testing-library/react';
import NewProducts from './NewProducts';


describe("New Products", () => {
	it("renders with expected label", () => {
		render(<NewProducts />);
		expect(screen.getByRole('label')).toBeInTheDocument();
		expect(screen.getByRole('label').textContent).toBe("Les Nouveaux :");
	})
})

describe("New Products", () => {
	it("renders with a products list", () => {
		render(<NewProducts />);
		expect(screen.getByRole('products-list')).toBeInTheDocument();
	})
})

describe("New Products", () => {
  it("renders with expected left arrow on mobile screens", () => {
    render(<Header />);
    const left_arrow_icon = screen.getByRole("scroll-left") as HTMLImageElement;
    expect(left_arrow_icon.src).toContain("leftarrow");
    expect(left_arrow_icon.alt).toBe("leftarrow");
  });
});

describe("New Products", () => {
  it("renders with expected right arrow on mobile screens", () => {
    render(<NewProducts />);
    const right_arrow_icon = screen.getByRole("scroll-right") as HTMLImageElement;
    expect(right_arrow_icon.src).toContain("rightarrow");
    expect(right_arrow_icon.alt).toBe("rightarrow");
  });
});