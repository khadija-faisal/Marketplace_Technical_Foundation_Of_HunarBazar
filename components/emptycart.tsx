import { ShoppingBagIcon } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
const EmptyCart = () => {
  return (
    <div className="bg-slate-50 flex flex-col gap-5 items-center justify-center py-10">
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="inline-block"
      >
        <ShoppingBagIcon size={40} className="text-hashblack mx-auto" />
      </motion.div>
      <Image
        src={"/emptycart.png"}
        alt="empty cart"
        width={300}
        height={300}
        className="mx-auto rounded-lg shadow-md"
      />
      <h2 className="text-2xl  font-semibold font-montserrat text-hashblack">
        Your Cart is Empty{" "}
      </h2>
      <p className="text-primary text-center font-montserrat max-w-md max-auto">
        Looks like you haven&rsquo;t added anything to your cart yet Explore our
        products and fond something you Love
      </p>
      <Link
        href={"/"}
        className=" text-white inline-block bg-hashblack hover:bg-mahrron font-montserrat rounded-lg font-semibold px-6 py-3 "
      >
        Start Shopping
      </Link>
    </div>
  );
};

export default EmptyCart;
