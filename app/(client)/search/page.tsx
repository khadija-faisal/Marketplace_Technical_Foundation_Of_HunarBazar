import React from 'react'
import { getProductbyName } from '@/sanity/helpers'
import { CircleX } from 'lucide-react';

import ProductList from '@/components/productlist';
import { getallCategories } from '@/sanity/helpers';
interface Props {
    searchParams:{
        query:string
    }
}
const SearchPage = async ({searchParams}: Props) => {
    const { query } = await searchParams;
    console.log("search query",query);
const products = await getProductbyName(query);
const categories = await getallCategories()
console.log("search result",products);
if(!products?.length){
  return (
    <div className='py-40 w-full shadow-md gap-2 text-center flex flex-col justify-center items-center'>
    <div className=' px-10 flex gap-2 items-center '>
    <CircleX  className='w-10 h-10 text-mahrron'/>
      <h1 className=' font-montserrat  text-hashblack text-3xl sm:text-4xl font-semibold'>No Products Found For <span className='text-mahrron'>{query}</span> </h1>
    </div>
    <p className=' text-hashblack text-lg font-montserrat'>Try searching wih different keyword</p>
  </div>
  )
  
}
  return (
   <div className='px-5 py-10 h-full'>
     <h1 className=' pl-5 text-hashblack font-montserrat font-semibold  text-4xl '>
      Search Result for <span className='text-mahrron'>{query}</span>
     </h1>
     <ProductList products={products} title={true}  categories={categories} />
     </div>
   
  )
}

    
export default SearchPage