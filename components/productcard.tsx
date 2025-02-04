import { Products } from "@/sanity.types";
import Image from "next/image";
import React from "react";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import PriceView from "./priceView";
import AddtoBag from "./addtobag";

interface ProductCard {
  product: Products;
}

const ProductCard = ({ product }: ProductCard) => {
  const imageUrl = product?.productImage
    ? urlFor(product.productImage).url()
    : "/path/to/fallback-image.jpg";

  return (
    <div className="font-montserrat border md:border-none p-5 md:p-0 rounded-md  overflow-hidden flex flex-col gap-4 group text-sm ">
      <div className="flex  items-center justify-center">
        <Link href={`/product/${product?.slug?.current}`}>
          <Image
            className={`overflow-hidden h-[436px] object-cover transition-transform group-hover:scale-105 duration-500`}
            src={imageUrl}
            alt="productImage"
            width={390}
            height={325}
            loading="lazy"
          />
        </Link>
      </div>
      {product?.stock === 0 && (
        <div className=" flex justify-center  bg-black   text-white   cursor-not-allowed">
          <p className="">Out of Stock</p>
        </div>
      )}
      <div className="flex flex-col gap-2 items-start w-full lg:px-1">
        <div className="flex gap-1 w-[100%] flex-col  ">
          {product?.status && (
            <div className=" text-base">
              {product.status.split("").map((char, index) => (
                <span key={index}>{char}</span>
              ))}
            </div>
          )}
          <h3 className="font-bold text-base">{product.product}</h3>
          <div>
            <PriceView price={product?.price} discount={product?.discount} />
          </div>
        </div>

        <div className="w-full">
          <AddtoBag product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
