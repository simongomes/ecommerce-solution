import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Product from "@/modules/product/components/product";

const mockAddToCart = vi.fn();

const defaultProps = {
  id: 1,
  title: "Test Product",
  price: 99.99,
  description: "Test Description",
  image: "test-image-url.jpg",
  category: "test-category",
  rating: { rate: 4.5, count: 10 },
  related: false,
  addToCart: mockAddToCart,
};

describe("Product Component", () => {
  it("renders product title and price", () => {
    render(
      <Router>
        <Product {...defaultProps} />
      </Router>
    );

    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("$99.99")).toBeInTheDocument();
  });

  it("renders product image", () => {
    render(
      <Router>
        <Product {...defaultProps} />
      </Router>
    );

    const image = screen.getByAltText("example");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "test-image-url.jpg");
  });

  it("handles image error and applies fallback src", () => {
    render(
      <Router>
        <Product {...defaultProps} />
      </Router>
    );

    const image = screen.getByAltText("example");
    fireEvent.error(image);

    expect(image).toHaveAttribute("src", "test-category");
  });

  it("calls addToCart function when Add To Cart button is clicked", () => {
    render(
      <Router>
        <Product {...defaultProps} />
      </Router>
    );

    const addToCartButton = screen.getByText("Add To Cart");
    fireEvent.click(addToCartButton);

    expect(mockAddToCart).toHaveBeenCalledWith(1);
  });

  it("does not render Add To Cart button if related is true", () => {
    render(
      <Router>
        <Product {...defaultProps} related={true} />
      </Router>
    );

    expect(screen.queryByText("Add To Cart")).not.toBeInTheDocument();
  });

  it("renders the product rating", () => {
    render(
      <Router>
        <Product {...defaultProps} />
      </Router>
    );

    expect(screen.getByText("Rating 4.5")).toBeInTheDocument();
  });
});
