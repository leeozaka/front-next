"use client";

import { items } from "@/components/items";
import Image from "next/image";
import { usePathname } from "next/navigation";

const ProductPage = () => {  
  const id = usePathname().replace("/products/", "");
  const product = items.find((item) => item.id === Number(id));

  return (
    <div>
      {product ? (
        <div>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <Image
            src={product.photo}
            alt={product.name}
            width={208}
            height={208}
          />
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default ProductPage;
