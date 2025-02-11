import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import AddtoBag from "@/components/addtobag";
import { Products } from "@/sanity.types";
import userCartStore from "./store";
import { toast } from "react-hot-toast";

// Mock the userCartStore
jest.mock("./store", () => ({
  __esModule: true,
  default: jest.fn(),
}));

// Mock react-hot-toast
jest.mock("react-hot-toast");

const mockProduct: Products = {
  _id: "1",
  product: "Handmade Ceramic Vase",
  price: 45.99,
  stock: 10,
  discount: 20,
};

describe("AddtoBag Component", () => {
  const mockAddItem = jest.fn();
  const mockGetItemCount = jest.fn();

  beforeEach(() => {
    (userCartStore as unknown as jest.Mock).mockImplementation(() => ({
      addItem: mockAddItem,
      getItemCount: mockGetItemCount,
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders ADD TO BAG button when product not in cart", async () => {
    mockGetItemCount.mockReturnValue(0);
    
    render(<AddtoBag product={mockProduct} />); 
    
    expect(await screen.findByRole("button", { name: /ADD TO BAG/i })).toBeInTheDocument();
  });

  test("adds product to cart when clicked", async () => {
    mockGetItemCount.mockReturnValue(0);
    
    render(<AddtoBag product={mockProduct} />);
    const button = await screen.findByRole("button", { name: /ADD TO BAG/i });
    
    fireEvent.click(button);
    
    expect(mockAddItem).toHaveBeenCalledWith(mockProduct);
    expect(toast.success).toHaveBeenCalledWith(
      "Handmade Cer...added successfully"
    );
  });

  test("disables button when product is out of stock", async () => {
    mockGetItemCount.mockReturnValue(0);
    const outOfStockProduct = { ...mockProduct, stock: 0 };
    
    render(<AddtoBag product={outOfStockProduct} />);
    const button = await screen.findByRole("button", { name: /ADD TO BAG/i });
    
    expect(button).toBeDisabled();
    expect(button).toHaveClass("disabled:cursor-not-allowed");
  });

  test("shows quantity selector when product is in cart", async () => {
    mockGetItemCount.mockReturnValue(1);
    
    render(<AddtoBag product={mockProduct} />);
    
    expect(await screen.findByText(/Quantity/i)).toBeInTheDocument();
    expect(await screen.findByText(/Subtotal/i)).toBeInTheDocument();
  });

  test("calculates discounted price correctly", async () => {
    mockGetItemCount.mockReturnValue(2);
    
    render(<AddtoBag product={mockProduct} />);
    
    // Calculate expected discounted price
    const discountedPricePerItem = (mockProduct.price ?? 0) - ((mockProduct.price ?? 0) * (mockProduct.discount! / 100));
    const expectedTotal = (discountedPricePerItem * 2).toFixed(2);
    
    await waitFor(() => {
      expect(screen.getByText((content, element) => content.includes(expectedTotal))).toBeInTheDocument();
    });
  });
});