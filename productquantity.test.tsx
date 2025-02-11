import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ProductQuantityButton from "@/components/productquantity";
import { Products } from "@/sanity.types";
import userCartStore from "./store";
import { toast } from "react-hot-toast";

// Mock the Zustand store
jest.mock("./store", () => ({
  __esModule: true,
  default: jest.fn(),
}));

// Mock react-hot-toast
jest.mock("react-hot-toast");

const mockProduct: Products = {
  _id: "1",
  product: "Handwoven Silk Scarf",
  price: 89.99,
  stock: 5,
};

describe("ProductQuantityButton Component", () => {
  const mockAddItem = jest.fn();
  const mockRemoveItem = jest.fn();
  const mockGetItemCount = jest.fn();

  beforeEach(() => {
    (userCartStore as unknown as jest.Mock).mockImplementation(() => ({
      addItem: mockAddItem,
      removeItem: mockRemoveItem,
      getItemCount: mockGetItemCount,
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders quantity buttons with initial count", async () => {
    mockGetItemCount.mockReturnValue(2);
    render(<ProductQuantityButton product={mockProduct} />);
    
    expect(await screen.findByText("2")).toBeInTheDocument();
    expect(screen.getByLabelText("decrease")).toBeInTheDocument();
    expect(screen.getByLabelText("increase")).toBeInTheDocument();
  });

  test("increments quantity when plus button is clicked", async () => {
    mockGetItemCount.mockReturnValue(1);
    render(<ProductQuantityButton product={mockProduct} />);
    
    fireEvent.click(screen.getByLabelText("increase"));
    
    expect(mockAddItem).toHaveBeenCalledWith(mockProduct);
    await waitFor(() => {
      expect(toast.success).toHaveBeenCalledWith("add one more product to cart");
    });
  });

  test("decrements quantity when minus button is clicked (count > 1)", async () => {
    mockGetItemCount.mockReturnValue(2);
    render(<ProductQuantityButton product={mockProduct} />);
    
    fireEvent.click(screen.getByLabelText("decrease"));
    
    expect(mockRemoveItem).toHaveBeenCalledWith("1");
    await waitFor(() => {
      expect(toast.success).toHaveBeenCalledWith("Removing one product from cart");
    });
  });

  test("removes product completely when quantity reaches 0", async () => {
    mockGetItemCount.mockReturnValue(1);
    render(<ProductQuantityButton product={mockProduct} />);
    
    fireEvent.click(screen.getByLabelText("decrease"));
    
    expect(mockRemoveItem).toHaveBeenCalledWith("1");
    await waitFor(() => {
      expect(toast.success).toHaveBeenCalledWith(`${mockProduct.product?.substring(0, 11)}....remove sucessfully`);
    });
  });

  test("disables increment button when out of stock", async () => {
    const outOfStockProduct = { ...mockProduct, stock: 0 };
    mockGetItemCount.mockReturnValue(1);
    
    render(<ProductQuantityButton product={outOfStockProduct} />);
    const incrementButton = screen.getByLabelText("increase");
    
    expect(incrementButton).toBeDisabled();
  });
});