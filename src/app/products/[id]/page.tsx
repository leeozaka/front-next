"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import GetStaticProps, { Product } from "@/components/get_data";

export default function ProductPage({ params }: { params: Product }) {
  const id = params.id;
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    GetStaticProps().then((result) => setData(result.props.products));
  }, []);

  const product = data.find((item: { id: number }) => item.id === Number(id));

  return (
    <div
      id="sells-wrapper"
      className="flex justify-center flex-grow mt-8 dark:text-white"
    >
      {product ? (
        <div id="product" className="flex w-3/4 justify-center">
          <Image
            className="rounded-lg h-52 object-contain bg-white mr-4"
            src={product.thumbnail}
            alt={product.title}
            width={400}
            height={400}
          />
          <div className="flex text-xl flex-col justify-between">
            <h1 className="p-1 font-extrabold">{product.title}</h1>
            <p className="p-1">{product.description}</p>
            <div className="flex flex-row p-2">
              <p className="">R${product.price}</p>
              <p className="text-sm">,00</p>
            </div>
          </div>
        </div>
      ) : (
        <a />
        // <p className="flex h-svh text-4xl items-center justify-center">
        // </p>
      )}
    </div>
  );
}
