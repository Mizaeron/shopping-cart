import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import App from "./App";
import Home from "./pages/Home/Home";

test("renders navbar links", () => {
  render(<App />);

  expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Cart" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Shop" })).toBeInTheDocument();
});

test("renders images", () => {
  render(<Home />);

  expect(screen.getByAltText("coffee")).toBeInTheDocument();
  expect(screen.getByAltText("dumbells")).toBeInTheDocument();
});
