"use client";
import { ShoppingBagIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import userCartStore from "@/store";
const CartIcon = () => {
  const [isclient, setisclient] = useState(false);
  const getGroupedItems = userCartStore((state) => state.getGroupedItems());

  useEffect(() => {
    setisclient(true);
  }, []);
  if (!isclient) {
    return null;
  }
  return (
    <Link
      href={"/cart"}
      className=" flex font-montserrat items-center text-sm gap-2 border hoverEffect border-gray-300 px-2 py-1 rounded-md shadow-md hover:shadow-none"
    >
      <ShoppingBagIcon className="h-8" />
      <span className="block md:hidden font-bold text-mahrron ">
        {getGroupedItems?.length ? getGroupedItems?.length : 0}
      </span>
      <div className="item-center hidden md:flex flex-col">
        <p className="text-xs">
          <span className="font-bold text-mahrron">
            {getGroupedItems?.length ? getGroupedItems?.length : 0}
          </span>{" "}
          items
        </p>
        <p className=" font-semibold">Cart</p>
      </div>
    </Link>
  );
};

export default CartIcon;
