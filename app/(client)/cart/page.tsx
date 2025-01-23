"use client";

import Loader from "@/components/loader";
import CartAccessDenied from "@/components/cartaccessdenied";
import { useAuth, useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import useCartStore from "@/store";
import userCartStore from "@/store";

import Container from "@/components/container";
import { ShoppingBagIcon, Trash2 } from "lucide-react";
import PriceFormat from "@/components/priceformat";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import toast from "react-hot-toast";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import ProductQuantityButton from "@/components/productquantity";
import EmptyCart from "@/components/emptycart";
const CartPage = () => {
  const {
    deleteCartItem,
    getTotalPrice,
    getItemCount,
    getSubTotalPrice,
    resetCart,
  } = useCartStore();
  const [isClient, setIsClient] = useState(false);
  const [loading, setLoading] = useState(false);
  const groupedItems = userCartStore((state) => state.getGroupedItems());
  const { user } = useUser();
  const { isSignedIn } = useAuth();
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return <Loader />;
  }
  const handleCheckoutProccess = () => {
    toast.success("procced to checkOut");
  };
  const handleDeleteProduct = (id: string) => {
    deleteCartItem(id);
    toast.success("product deleted successfully");
  };
  const handleRestCart = () => {
    const resetConfirm = window.confirm(
      "Are you sure you want to reset your cart?"
    );
    if (resetConfirm) {
      resetCart();
      toast.success("cart reset successfully");
    }
  };
  return (
    <div>
      {isSignedIn ? (
        <Container>
          {groupedItems?.length ? (
            <>
              <div className="flex gap-2 font-montserrat items-center py-5">
                <ShoppingBagIcon className="h-6 w-6" />
                <h1 className="text-2xl text-hashblack font-montserrat font-semibold">
                  Shopping Cart
                </h1>
              </div>
              <div className="grid lg:grid-cols-3 md:gap-8 pb-40 ">
         <div className="lg:col-span-2 font-montserrat">
                  <div className=" grid grid-cols-5 items-center justify-center md:grid-cols-6 border rounded-tr-lg rounded-tl-l bg-slate-50 p-2.5 text-sm sm:text-base font-semibold  text-hashblack ">
                    <h2 className="col-span-2 md:col-span-3">Product</h2>
                    <h2>Price</h2>
                    <h2>Quantity</h2>
                    <h2 className="pl-5">Total</h2>
                      </div>
                      <div className="bg-slate-50 mt-1 border-t-0 rounded-br-lg rounded-bl-lg ">
                    {groupedItems.map(({ product }) => {
                      const itemCount = getItemCount(product._id);
                      return (
                        <div
                          key={product?._id}
                          className="grid grid-cols-5 md:grid-cols-6 border-b p-2.5  last:border-b-0"
                        >
                          <div className="col-span-2 md:col-span-3 flex items-center">
                            <Trash2
                              onClick={() => {
                                handleDeleteProduct(product._id);
                              }}
                              className="w-4 h-4 md:w-5 md:h-5 mr-1 text-hashblack hover:text-mahrron "
                            />
                            {product?.productImage && (
                              <Link
                                href={`/product/${product?.slug?.current}`}
                                className="border p-0.5 md:p-1 mr-2 rounded-md overflow-hidden group"
                              >
                                <Image
                                  src={urlFor(product?.productImage).url()}
                                  alt="productImage"
                                  width={300}
                                  height={300}
                                  className="w-10 h-10 md:w-full md:h-14 object-cover group-hover:scale-105 overflow-hidden "
                                />
                              </Link>
                            )}
                            <h2 className="text-xs sm:text-sm lg:text-lg">
                              {product?.product}
                            </h2>
                          </div>
                          <div className=" text-sm md:text-lg flex justify-center items-center">
                            <PriceFormat amount={product?.price} />
                          </div>
                          <ProductQuantityButton
                            product={product}
                            className="text-sm gap-0 md:gap-1 "
                          />
                          <div className=" text-sm md:text-lg flex justify-center items-center">
                            <PriceFormat
                              amount={
                                product?.price ? product.price * itemCount : 0
                              }
                            />
                          </div>
                        </div>
                      );
                    })}
                    <Button onClick={handleRestCart} className="m-5 ">
                      Reset Cart
                    </Button>
                     </div>
                  </div>
                <div className="lg:col-span-1 font-montserrat">
                  <div className="hidden md:inline-block w-full rounded-lg border p-6  bg-slate-50">
                    <h2 className="text-xl mb-4 text-hashblack font-semibold">
                      Order Summary
                    </h2>
                    <div className="space-y-4">
                      <div className="flex items-center  justify-between space-x-3 ">
                        <span className="font-medium">SubTotal</span>
                        <PriceFormat amount={getSubTotalPrice()} />
                      </div>
                      <div className="flex items-center  justify-between space-x-3 ">
                        <span className="font-medium">Discount</span>
                        <PriceFormat
                          amount={getSubTotalPrice() - getTotalPrice()}
                        />
                      </div>
                      <Separator />
                      <div className="flex items-center  justify-between space-x-3 ">
                        <span className="font-medium">Total</span>
                        <PriceFormat amount={getTotalPrice()} />
                      </div>
                      <div className="flex flex-col gap-2">
                        <Button onClick={handleCheckoutProccess}>
                          Proceed to Checkout
                        </Button>
                        <Link
                          href={"/"}
                          className="font-medium text-center text-primary text-sm hover:underline hoverEffect "
                        >
                          Coutinue Shoppping
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
            <div className="font-montserrat md:hidden fixed w-full rounded-lg bottom-0 border p-6  bg-slate-50">
                    <h2 className="text-xl mb-4 text-hashblack font-semibold">
                      Order Summary
                    </h2>
                    <div className="space-y-4">
                      <div className="flex items-center  justify-between space-x-3 ">
                        <span className="font-medium">SubTotal</span>
                        <PriceFormat amount={getSubTotalPrice()} />
                      </div>
                      <div className="flex items-center  justify-between space-x-3 ">
                        <span className="font-medium">Discount</span>
                        <PriceFormat
                          amount={getSubTotalPrice() - getTotalPrice()}
                        />
                      </div>
                      <Separator />
                      <div className="flex items-center  justify-between space-x-3 ">
                        <span className="font-medium">Total</span>
                        <PriceFormat amount={getTotalPrice()} />
                      </div>
                      <div className="flex flex-col gap-2">
                        <Button onClick={handleCheckoutProccess}>
                          Proceed to Checkout
                        </Button>
                        <Link
                          href={"/"}
                          className="font-medium text-center text-primary text-sm hover:underline hoverEffect "
                        >
                          Coutinue Shoppping
                        </Link>
                      </div>
                    </div>
                  </div>
                
              </div>
            </>
          ) : (
            <div>
              <EmptyCart />
            </div>
          )}
        </Container>
      ) : (
        <CartAccessDenied />
      )}
    </div>
  );
};

export default CartPage;
