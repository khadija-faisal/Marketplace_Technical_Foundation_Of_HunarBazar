import { defineQuery } from "next-sanity";

export const SALE_QUERY = defineQuery(`*[_type == 'sale' && active == true] | order(name asc){
     title,
    description,
    salebadge,
    discountamount,
    coupon,
    validStart,
    validEnd,
    "imageUrl": Image.asset->url,
    "image2Url": Image2.asset->url,
}`)

export const PRODUCTS_QUERY = defineQuery(`*[_type == 'products' ] | order(name asc)`)

export const CATEGORIES_QUERY = defineQuery(`*[_type == 'category'] | order(name asc)`)

export const PRODUCT_BY_SLUG = defineQuery(`*[_type == 'products' && slug.current == $slug] | order(name asc)[0]`);

export const PRODUCT_SEARCH_QUERY = defineQuery(`*[_type == "products" && (
  lower(product) match lower($searchParam + "*") || 
  lower(description) match lower($searchParam + "*")
)]`);


export const PRODUCT_BY_CATEGORY = defineQuery(`*[_type == "products" && references(*[_type == "category" && slug.current == $CategorySlug]._id)] | order(product asc)`);


