'use client'
import { Products } from "@/sanity.types";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import toast from "react-hot-toast";
import ProductQuantity from "./productquantity";
import PriceFormat from "./priceformat";
import { useEffect, useState } from "react";
import userCartStore from "@/store";

export interface Bag{
    product: Products
    className?: string
}

const AddtoBag = ({product}: Bag) => {
   const [Client, setClient] = useState(false);
   const {addItem, getItemCount} = userCartStore()
   useEffect(() => {
     setClient(true);
   },[]);
    if (!Client) {
      return null;
    }
   
    const productCount = getItemCount(product._id );
      const isproductOutOfStock = product.stock == 0

    const handleAddToCart = () => {
      addItem(product);
      toast.success(`${product?.product?.substring(0,12)}...added successfully`);
    }
    const discountedPrice = product?.price && product?.discount
    ? (product.price - (product.discount * product.price) / 100) * productCount
    : 0;
    
console.log(productCount)
  return (
    <div>
    {productCount ? (
      <div className=" w-[100%] font-montserrat">
      <div className="flex w-full items-center justify-between">
      <span className="text-sm  text-muted-foreground">
      Quantity</span>
      <ProductQuantity product={product} />
      </div>
      <div className=" flex items-center justify-between border-t mt-2 pt-1">
        <span className="font-semibold">Subtotal</span>
        <PriceFormat amount={discountedPrice} />
      </div>
      </div>):(
        <div>
      <Button variant={'default'}
      disabled={isproductOutOfStock}
      onClick={handleAddToCart}
    className={cn("  w-[50%] rounded-full hoverEffect disabled:text-gray-400 disabled:bg-gray-300  disabled:cursor-not-allowed  py-7 hover:bg-slate-500")}>ADD TO BAG</Button>
      </div>)}
      </div>
  )
}

export default AddtoBag;