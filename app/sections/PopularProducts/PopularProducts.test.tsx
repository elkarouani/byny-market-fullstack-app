import React from 'react';
import { render, screen } from '@testing-library/react';
import PopularProducts from './PopularProducts';


describe("Popular Products", () => {
	it("renders with expected label", () => {
		render(<PopularProducts />);
		expect(screen.getByRole('label')).toBeInTheDocument();
		expect(screen.getByRole('label').textContent).toBe("Les Plus Vendus :");
	})
})

describe("Popular Products", () => {
	it("renders with a products list", () => {
		render(<PopularProducts />);
		expect(screen.getByRole('products-list')).toBeInTheDocument();
	})
})

describe("Popular Products", () => {
  it("renders with expected left arrow on mobile screens", () => {
    render(<PopularProducts />);
    const left_arrow_icon = screen.getByRole("scroll-left") as HTMLImageElement;
    expect(left_arrow_icon.src).toContain("leftarrow");
    expect(left_arrow_icon.alt).toBe("leftarrow");
  });
});

describe("Popular Products", () => {
  it("renders with expected right arrow on mobile screens", () => {
    render(<PopularProducts />);
    const right_arrow_icon = screen.getByRole("scroll-right") as HTMLImageElement;
    expect(right_arrow_icon.src).toContain("rightarrow");
    expect(right_arrow_icon.alt).toBe("rightarrow");
  });
});