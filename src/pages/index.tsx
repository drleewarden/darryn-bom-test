import Layout from '@/components/layout';
import { useState } from 'react';

import axios from 'axios';
import Product from '@/components/Product';
export interface IProduct {
  name: string;
  description: string;
  salePrice: string;
  productId: string;
  unitPrice: number;
}
export type TProduct = {
  product: IProduct;
};
export default function IndexPage() {
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async function () {
    try {
      let result = await axios.get('/api/products');
      setProductList(result.data);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };
  fetchData();

  return (
    <Layout title="Home | test for bom">
      <main>
        <div className="flex min-h-screen flex-col items-center justify-center text-center">
          <h1 className="text-2xl">Welcome</h1>
          <p className="mt-2 text-gray-800">
            Please find everything done for the test below.
          </p>
          <div className="row">
            <h3>Products</h3>
            <div className="container">
              <div className="grid grid-cols-2 gap-4">
                {isLoading
                  ? []
                  : productList.map((product: IProduct) => {
                      return (
                        <div
                          className="col-md-3 d-flex"
                          style={{ marginBottom: '1em', width: 'auto' }}
                        >
                          <Product key={product.productId} product={product} />
                        </div>
                      );
                    })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
