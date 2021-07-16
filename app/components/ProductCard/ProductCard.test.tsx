import React from 'react';
import { render, screen } from "@testing-library/react";
import ProductCard from "./ProductCard";


describe("Product Card", () => {
  it("renders with a product illustration", () => {
    render(<ProductCard />);
    expect(screen.getByRole('illustration')).toBeInTheDocument();
  });
});

describe("Product Card", () => {
  it("renders with a product title", () => {
    render(<ProductCard />);
    expect(screen.getByRole('title')).toBeInTheDocument();
  });
});

describe("Product Card", () => {
  it("renders with a product description", () => {
    render(<ProductCard />);
    expect(screen.getByRole('description')).toBeInTheDocument();
  });
});

describe("Product Card", () => {
  it("renders with a product price", () => {
    render(<ProductCard />);
    expect(screen.getByRole('price')).toBeInTheDocument();
  });
});

describe("Product Card", () => {
  it("renders with expected add to cart action", () => {
    render(<ProductCard />);
    expect(screen.getByRole('add-to-cart')).toBeInTheDocument();
    expect(screen.getByRole('add-to-cart').textContent).toBe("Choisir");
  });
});