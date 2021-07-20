import React from 'react';
import { render, screen } from '@testing-library/react';
import Services from './Services';


describe("Services", () => {
	it("renders with expected label", () => {
		render(<Services />);
		expect(screen.getByRole('label')).toBeInTheDocument();
		expect(screen.getByRole('label').textContent).toBe("Nos Services :");
	})
})

describe("Services", () => {
	it("renders with a services list", () => {
		render(<Services />);
		expect(screen.getByRole('services-list')).toBeInTheDocument();
	})
})