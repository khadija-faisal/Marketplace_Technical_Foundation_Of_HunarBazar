import { Products } from "@/sanity.types";
import React from "react";
import { Minus } from "lucide-react";
import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import toast from "react-hot-toast";
import userCartStore from "@/store";
interface QuantityButton {
  product: Products;
   className?: string;
 
}
const ProductQuantityButton = ({ product }: QuantityButton) => {
  const isproductOutOfStock = product.stock == 0;
  const { addItem, removeItem, getItemCount } = userCartStore();
  const handleRemoveProduct = () => {
    removeItem(product._id);
    if (productCount > 1) {
      toast.success("Removing one product from cart");
    } else {
      toast.success(
        `${product.product?.substring(0, 11)}....remove sucessfully`
      );
    }
  };
  const handleAddProduct = () => {
    addItem(product);
    toast.success("add one more product to cart");
  };
  const productCount = getItemCount(product._id);
 // const isproductOutOfStock = product.stock == 0;

 return (
  <div className="flex items-center gap-1 sm:gap-3 text-base">
    <Button 
      variant="outline" 
      size="icon"
      onClick={handleRemoveProduct}
      aria-label="decrease"
    >
      <Minus />
    </Button>
    <span className="font-montserrat">{productCount}</span>
    <Button 
      variant="outline" 
      size="icon"
      onClick={handleAddProduct}
      aria-label="increase"
      disabled={product.stock === 0}
    >
      <Plus />
    </Button>
  </div>
)
};

export default ProductQuantityButton;
