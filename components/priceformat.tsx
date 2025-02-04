import React from "react";
interface FormatPrice {
  amount: number | undefined;
}
const PriceFormat = ({ amount }: FormatPrice) => {
  const formattedAmount = new Number(amount).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
  return <div>{formattedAmount}</div>;
};

export default PriceFormat;
