import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import CartItem from "@/modules/cart/cart-item";

// Mock Redux's useDispatch
const mockDispatch = vi.fn();
vi.mock("react-redux", () => ({
  ...vi.importActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

// Mock the thunk actions
vi.mock("@/store/thunks/cart-thunks", () => ({
  removeProductFromCart: (id: number) => ({
    type: "REMOVE_PRODUCT",
    payload: id,
  }),
  updateProductQuantity: (id: number, quantity: number) => ({
    type: "UPDATE_QUANTITY",
    payload: { id, quantity },
  }),
}));

describe("CartItem Component", () => {
  const mockCartItem = {
    id: 1,
    title: "Test Product",
    price: 50,
    quantity: 2,
    image: "/test-image.jpg",
  };

  it("renders cart item correctly", () => {
    render(<CartItem {...mockCartItem} />);

    // Assert that the product details are rendered correctly
    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("Price: $100")).toBeInTheDocument(); // 50 * 2 = 100
    expect(screen.getByDisplayValue("2")).toBeInTheDocument(); // Quantity input value
    expect(screen.getByAltText("Product")).toHaveAttribute(
      "src",
      "/test-image.jpg"
    );
  });

  it("dispatches updateProductQuantity when quantity changes", () => {
    render(<CartItem {...mockCartItem} />);

    const quantityInput = screen.getByRole("spinbutton");
    fireEvent.change(quantityInput, { target: { value: "3" } });

    // Assert that the correct action was dispatched
    expect(mockDispatch).toHaveBeenCalledWith({
      type: "UPDATE_QUANTITY",
      payload: { id: 1, quantity: 3 },
    });
  });

  it("dispatches removeProductFromCart when delete button is clicked", () => {
    render(<CartItem {...mockCartItem} />);

    const deleteButton = screen.getByText("Delete");
    fireEvent.click(deleteButton);

    // Assert that the correct action was dispatched
    expect(mockDispatch).toHaveBeenCalledWith({
      type: "REMOVE_PRODUCT",
      payload: 1,
    });
  });
});
