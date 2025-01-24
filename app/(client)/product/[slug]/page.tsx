import { getProductbySlug } from "@/sanity/helpers";
import { LucideStar } from "lucide-react";
import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Container from "@/components/container";
import PriceView from "@/components/priceView";
import AddtoBag from "@/components/addtobag";
import { RxBorderSplit } from "react-icons/rx";
import { FaRegQuestionCircle } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { FiShare2 } from "react-icons/fi";

type Props = {
  params:  { slug: any }
  
}

const ProductDetailPage = async ({ params }: Props) => {

  const { slug } = params;
  if (!slug) {
    return <Container>Product not found</Container>;
  }

  const product = await getProductbySlug(slug);

  if (!product) {
    return <Container>Product not found</Container>;
  }

  return (
    <Container>
      <div className="font-montserrat w-full flex flex-col md:flex-row gap-10 py-10 items-center">
        <div className="md:w-1/2">
          <Image
            src={product?.productImage ? urlFor(product.productImage).url() : ""}
            alt={"Product Image"}
            width={700}
            height={700}
            className="shadow-md p-10 md:p-0 overflow-hidden transition-transform group hover:scale-105 duration-500"
          />
        </div>
        <div className=" flex md:w-1/2 flex-col gap-4">
          {product?.status && (
            <div className=" text-lg font-semibold text-mahrron">
              {product.status.split("").map((char, index) => (
                <span key={index}>{char}</span>
              ))}
            </div>
          )}
          <h2 className="text-black font-semibold text-2xl lg:text-4xl">
            {product?.product}
          </h2>

          <div>
            <PriceView price={product?.price} discount={product?.discount} />
          </div>
          <div className="flex items-center text-[#000000] jus mr-6 gap-1">
            <span className="underline font-medium">Reviews</span>
            {Array.from({ length: 5 }).map((_, index) => {
              const isLastStar = index === 4;
              return (
                <LucideStar
                  className="w-5"
                  fill={!isLastStar ? "#00000" : "transparent"}
                  key={index}
                />
              );
            })}
          </div>
          {product?.stock ? (
            <span className="bg-slate-100 w-32 text-center text-base px-6 py-4 font-semibold rounded-lg text-green-500">
              In Stock
            </span>
          ) : (
            <span className="bg-slate-100 w-32 text-center text-base px-6 py-4 font-semibold rounded-lg underline text-hashblack">
              out of Stock
            </span>
          )}
          <div className="w-[90%]  bg-black h-[1px]"></div>
          <p>
            <span className=" font-semibold">30</span> people are viewing
          </p>
          <p className="text-black lg:text-lg">{product?.description}</p>
          {product && <AddtoBag product={product} />}
          <div className="flex flex-wrap item-center justify-between gap-3 border-b border-b-hashblack py-5 -mt-3">
            <div className="flex items-center gap-2 text-sm text-black hover:text-mahrron hoverEffext">
              <RxBorderSplit className=" text-lg" />
              <span>Compare Color</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-black hover:text-mahrron hoverEffext">
              <FaRegQuestionCircle className=" text-lg" />
              <span>Ask a Question</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-black hover:text-mahrron hoverEffext">
              <TbTruckDelivery className=" text-lg" />
              <span>Delivery and Return</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-black hover:text-mahrron hoverEffext">
              <FiShare2 className=" text-lg" />
              <span>share</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetailPage;
