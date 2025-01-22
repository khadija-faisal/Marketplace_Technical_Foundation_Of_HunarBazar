import PriceFormat from "./priceformat";

interface Price {
    price: number | undefined;
    discount: number | undefined;
   
}

const PriceView = ({price, discount, }: Price) => {
 const discountedPrice = price !== undefined && discount !== undefined ? (
    <PriceFormat amount={price - (discount * price) / 100} />
  ) : null
  return (
    <div>
        <div className="font-semibold flex gap-3 text-sm sm:text-lg lg:text-xl items-center">
            
            <span className="text-red-700">
              {discountedPrice}
            </span>
            <span className="line-through text-sm sm:text-lg">
              <PriceFormat amount={price}/>  
            </span>
        </div>
    </div>
  )
}

export default PriceView;