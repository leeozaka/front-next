/* eslint-disable @next/next/no-async-client-component */
"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import GetStaticProps from "@/components/getData";

export default async function ProductPage() { 
  const id = usePathname().replace("/products/", "");

  const items = await GetStaticProps().then((result) => result.props.products);
  const product = items.find((item: { id: number; }) => item.id === Number(id));

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
         Produto nao encontrado!  
        </p>
      )}
    </div>
  );
}
