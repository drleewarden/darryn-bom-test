import React from 'react';
interface IProduct {
  name: string;
  description: string;
  salePrice: string;
  productId: string;
  unitPrice: number;
}
type Product = {
  product: IProduct;
};
const Product = ({ product }: Product) => {
  const { productId, name, description, unitPrice } = product;
  const margin = unitPrice * 0.25;
  const salePrice = parseFloat(
    unitPrice.toString() + margin.toString(),
  ).toFixed(2);

  return (
    <div>
      <div className="flex justify-center">
        <div className="flex flex-col rounded-lg bg-white shadow-lg md:max-w-xl md:flex-row">
          <img
            className=" h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
            alt=""
          />
          <div className="flex flex-col justify-start p-6">
            <h5 className="mb-2 text-xl font-medium text-gray-900">{name}</h5>
            <p className="mb-4 text-base text-gray-700">{description}</p>
            <p className="text-xs text-gray-600">Last updated 3 mins ago</p>
            <div>${salePrice}</div>
            <div># {productId}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
