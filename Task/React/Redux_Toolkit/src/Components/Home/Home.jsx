import React from "react";
import { Product } from "../Product/Product";
import ProductCart from "../Product/ProductCart";
function Home() {
  return (
    <div>
      <h1 className="text-3xl my-5">List Product</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
        {Product.map((Product, key) => (
          <>
            <ProductCart key={key} data={Product} />
          </>
        ))}
      </div>
    </div>
  );
}

export default Home;
