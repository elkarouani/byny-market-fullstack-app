import React from 'react';
import { render, screen } from "@testing-library/react";
import ServiceCard from "./ServiceCard";


describe("Service Card", () => {
  it("renders with a service illustration", () => {
    render(<ServiceCard />);
    expect(screen.getByRole('illustration')).toBeInTheDocument();
  });
});

describe("Service Card", () => {
  it("renders with a service title", () => {
    render(<ServiceCard />);
    expect(screen.getByRole('title')).toBeInTheDocument();
  });
});

describe("Service Card", () => {
  it("renders with a service description", () => {
    render(<ServiceCard />);
    expect(screen.getByRole('description')).toBeInTheDocument();
  });
});