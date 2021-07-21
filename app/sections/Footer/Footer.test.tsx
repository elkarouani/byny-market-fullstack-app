import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';


describe("Footer", () => {
  it("renders with expected label", () => {
    render(<Footer />);
    expect(screen.getByRole('label')).toBeInTheDocument();
    expect(screen.getByRole('label').textContent).toBe("Navigation :");
  })
})

describe("Footer", () => {
  it("renders with the first link", () => {
    render(<Footer />);
    expect(screen.getByRole('first-link')).toBeInTheDocument();
    expect(screen.getByRole('first-link').textContent).toBe("First link");
  })
})

describe("Footer", () => {
  it("renders with the second link", () => {
    render(<Footer />);
    expect(screen.getByRole('second-link')).toBeInTheDocument();
    expect(screen.getByRole('second-link').textContent).toBe("Second link");
  })
})

describe("Footer", () => {
  it("renders with the third link", () => {
    render(<Footer />);
    expect(screen.getByRole('third-link')).toBeInTheDocument();
    expect(screen.getByRole('third-link').textContent).toBe("Third link");
  })
})

describe("Footer", () => {
  it("renders with the author description", () => {
    render(<Footer />);
    expect(screen.getByRole('author-description')).toBeInTheDocument();
    expect(screen.getByRole('author-description').textContent).toBe("All Rights Reserved KDragon | 2021");
  })
})
