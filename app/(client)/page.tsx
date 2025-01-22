import Banner from "@/components/banner";
import ProductList from "@/components/productlist";
import { getallCategories, getallProducts, getsaleBanner } from "@/sanity/helpers";
import { Products } from "@/sanity.types";
export default async function Home() {
  try{
    const [products, banners, categories] = await Promise.all([
      getallProducts(),
      getsaleBanner(),
      getallCategories(),
    ]);
    if (!products || !banners || !categories) {
      return <div className="container mx-auto p-4">Error loading data</div>;
    }
    return (
     <div> 
     <Banner banners={banners}  />
     <ProductList products={products} title={true} categories={categories} />
     </div>
    );
  } catch (error) {
  console.error('Error loading home page data:', error);
  return <div>Something went wrong</div>;
}
}
