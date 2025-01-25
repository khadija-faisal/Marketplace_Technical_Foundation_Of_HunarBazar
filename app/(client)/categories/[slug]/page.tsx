import ProductList from "@/components/productlist";
import { getallCategories, getProductbyCategories } from "@/sanity/helpers";

interface CategoriesParam {
  params: Promise<{ slug: string }>;
}

const CategoriesPage = async ({ params }: CategoriesParam) => {
  const { slug } = await params;
  const categories = await getallCategories();
  const product = await getProductbyCategories(slug);

  return (
    <main className="px-5 py-10 h-full">
      <h1 className=" pl-5 text-hashblack font-montserrat font-semibold text-3xl  md:text-4xl ">
        Search Result for{" "}
        <span className="text-mahrron">
          {slug
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}{" "}
          Collection
        </span>
      </h1>
      <ProductList products={product} title={true} categories={categories} />
    </main>
  );
};

export default CategoriesPage;
