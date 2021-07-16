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
