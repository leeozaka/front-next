"use client";

import Image from "next/image";
import { Product } from "@/components/items";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import GetStaticProps from "@/components/getData";

const ProductPage = () => {
  const [items, setItems] = useState<Product[]>([]);
  const id = usePathname().replace("/products/", "");
  const product = items.find((item) => item.id === Number(id));

  useEffect(() => {
    GetStaticProps().then((result) => {
      setItems(result.props.products);
    });
  }
  , []);

  return (
    <div>
      {product ? (
        <div id="product" className="flex justify-center w-full ">
          <Image
            src={product.thumbnail}
            alt={product.title}
            width={400}
            height={400}
          />
          <div className="flex text-xl flex-col justify-center">
            <h1 className="p-1 font-extrabold">{product.title}</h1>
            <p className="p-1">{product.description}</p>
            <div className="flex flex-row p-2">
              <p className="">R${product.price}</p>
              <p className="text-sm">,00</p>
            </div>
          </div>
        </div>
      ) : (
        <p className="flex h-svh text-4xl items-center justify-center">
          Product not found
        </p>
      )}
    </div>
  );
};

export default ProductPage;
