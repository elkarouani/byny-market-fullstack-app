import React from 'react';
import { render, screen } from "@testing-library/react";
import Service from "./Service";


describe("Service", () => {
  it("renders with a service illustration", () => {
    render(<Service />);
    expect(screen.getByRole('illustration')).toBeInTheDocument();
  });
});

describe("Service", () => {
  it("renders with a service title", () => {
    render(<Service />);
    expect(screen.getByRole('title')).toBeInTheDocument();
  });
});

describe("Service", () => {
  it("renders with a service description", () => {
    render(<Service />);
    expect(screen.getByRole('description')).toBeInTheDocument();
  });
});