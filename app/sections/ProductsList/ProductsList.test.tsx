import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductsList from './ProductsList';


describe("Products List", () => {
	it("renders with expected title", () => {
		render(<ProductsList />);
		expect(screen.getByRole('products-list-title')).toBeInTheDocument();
		expect(screen.getByRole('products-list-title').textContent).toBe("Products :");
	})
})

describe("Products List", () => {
	it("renders with a products list", () => {
		render(<ProductsList />);
		expect(screen.getByRole('products-list')).toBeInTheDocument();
	})
})

describe("Products List", () => {
  it("renders with expected navigation numbers list", () => {
    render(<ProductsList />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
});