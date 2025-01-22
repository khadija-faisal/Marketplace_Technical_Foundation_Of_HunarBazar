import { sanityFetch } from "../lib/live";
import {
  CATEGORIES_QUERY,
  PRODUCTS_QUERY,
  SALE_QUERY,
  PRODUCT_BY_SLUG,
  PRODUCT_SEARCH_QUERY,
  PRODUCT_BY_CATEGORY
} from "./queries";

export const getsaleBanner = async () => {
  try {
    const banner = await sanityFetch({
      query: SALE_QUERY,
    });

    return banner?.data || [];
  } catch (error) {
    console.error("Error to fetch Sale-Banner Data", error);
    return [];
  }
};
export const getallProducts = async () => {
  try {
    const products = await sanityFetch({
      query: PRODUCTS_QUERY,
    });
    return products?.data || [];
  } catch (error) {
    console.error("Error to fetch Product Data", error);
    return [];
  }
};

export const getallCategories = async () => {
  try {
    const categories = await sanityFetch({
      query: CATEGORIES_QUERY,
    });
    return categories?.data || [];
  } catch (error) {
    console.error("Error to fetch categories Data", error);
    return [];
  }
};

export const getProductbySlug = async (slug: string) => {
  try {
    const productbySlug = await sanityFetch({
      query: PRODUCT_BY_SLUG,
      params: { slug },
    });
    return productbySlug?.data || null;
  } catch (error) {
    console.error("Error to fetch Product by Slug", error);
    return null;
  }
};
export const getProductbyName = async (searchParam: string) => {
  try {
    console.log("Searching with parameter:", searchParam);
    const productbyName = await sanityFetch({
      query: PRODUCT_SEARCH_QUERY,
      params: {
        searchParam: searchParam.toLowerCase(),
      },
    });
    console.log("Search results:", productbyName);
    return productbyName?.data || [];
  } catch (error) {
    console.error("Error to fetch Product by Name", error);
    return [];
  }
};

export const getProductbyCategories = async (CategorySlug: string) => {
  try {
    console.log("Searching with parameter:", CategorySlug);
    const productbyCategory = await sanityFetch({
      query: PRODUCT_BY_CATEGORY,
      params: {
         CategorySlug ,
      },
    });
    console.log("Search results:", productbyCategory);
    return productbyCategory?.data || [];
  } catch (error) {
    console.error("Error to fetch Product by Category", error);
    return [];
  }
};
