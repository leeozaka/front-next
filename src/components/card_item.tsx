import React from "react";
import Image from "next/image";
import { Product } from "@/components/items";

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
      className={`flex flex-col w-52 h-[500px] m-1 rounded-lg ${
        stock > 0
          ? "border-2 border-green-500 bg-green-500"
          : "border-2 border-red-500 bg-red-500"
      } shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]`}
    >
      <a href={`/products/${id}`}>
        <Image
          className="rounded-t-lg h-52 object-contain bg-white dark:bg-slate-600"
          width={208}
          height={208}
          src={thumbnail}
          alt={title}
        />
      </a>

      <div className="flex flex-col flex-grow justify-between p-1">
        <div id={title} className="flex flex-col flex-grow mt-2">
          <h5 className=" w-auto text-pretty font-bold leading-tight text-neutral-800 dark:text-neutral-50">
            {title}
          </h5>
          <p className="flex-grow h-[120px] text-sm overflow-y-auto text-neutral-200">
            {description}
          </p>
        </div>

        <div className="flex flex-col justify-center">
          <p className=" text-base text-neutral-200">Preço: ${price}</p>
          <p id="stock" className=" text-base text-neutral-200">
            Estoque: {stock}
          </p>

          <button
            type={stock > 0 ? "button" : undefined}
            disabled={stock <= 0}
            className={`inline-block align-bottom rounded mt-2 ${
              stock > 0
                ? "bg-primary hover:bg-dodger-blue-600 active:bg-dodger-blue-700"
                : "bg-slate-500 cursor-default"
            } px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out  focus:outline-none`}
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
