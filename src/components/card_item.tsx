import React from "react";
import Image from "next/image";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[]; 
}

const ProductCard: React.FC<Product> = ({
  id,
  title,
  description,
  price,
  discountPercentage,
  rating,
  stock,
  brand,
  category,
  thumbnail,
  images, 
}) => {
  return (
    <div
      className={`flex flex-col w-52 m-1 rounded-lg ${
        stock > 0
          ? "border-2 border-green-500 bg-green-500"
          : "border-2 border-red-500 bg-red-500"
      } shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]`}
    >
      <a href={`/products/${id}`}>
        <Image
          className="rounded-t-lg h-52 object-contain bg-white"
          width={208}
          height={208}
          src={thumbnail}
          alt={title}
        />
      </a>

      <div className="flex flex-col flex-grow justify-between p-1">
        <div id="text" className="p-3">
          <h5 className=" text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {title}
          </h5>
          <p className=" text-sm text-neutral-200">{description}</p>
          <p className=" text-base text-neutral-200">Preço: ${price}</p>
          <p id="stock"className=" text-base text-neutral-200">Estoque: {stock}</p>
        </div>

        <button
          type={stock > 0 ? "button" : undefined}
          disabled={stock <= 0}            
          className={`inline-block align-bottom rounded ${
            stock > 0
              ? "bg-primary hover:bg-dodger-blue-600 active:bg-dodger-blue-700"
              : "bg-slate-500 cursor-default"
          } px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out  focus:outline-none`}
        >
          Adicionar
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
