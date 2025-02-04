import { Category, Products } from "@/sanity.types";

import ProductCard from "./productcard";
import React from "react";
import Categories from "./Categories";
interface Productlist {
  products: Products[];
  title?: boolean;
  categories: Category[];
}
const ProductList = ({ products, categories }: Productlist) => {
  return (
    <div className="">
      <Categories categories={categories} />

      <div className="grid grid-cols-1 sm:grid-cols-2 px-5 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
        {products?.map((product) => (
          <ProductCard key={product?._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
