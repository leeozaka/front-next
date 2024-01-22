import React from "react";
import Image from "next/image";
import { Product } from "@/components/get_data";

export default function ProductCard({ item }: { item: Product }) {
  return (
    <div
      className={`flex flex-col w-52 h-[500px] m-1 rounded-lg ${
        item.stock > 0
          ? "border-2 border-green-500 bg-green-500"
          : "border-2 border-red-500 bg-red-500"
      } shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]`}
    >
      <a href={`/products/${item.id}`}>
        <Image
          className="rounded-t-lg h-52 object-contain bg-white dark:bg-slate-600"
          width={208}
          height={208}
          src={item.thumbnail}
          alt={item.title}
        />
      </a>

      <div className="flex flex-col flex-grow justify-between p-1">
        <div id={item.title} className="flex flex-col flex-grow mt-2">
          <h5 className=" w-auto text-pretty font-bold leading-tight text-neutral-800 dark:text-neutral-50">
            {item.title}
          </h5>
          <p className="flex-grow h-[120px] text-sm overflow-y-auto text-neutral-200">
            {item.description}
          </p>
        </div>

        <div className="flex flex-col justify-center">
          <p className=" text-base text-neutral-200">Preço: ${item.price}</p>
          <p id="stock" className=" text-base text-neutral-200">
            Estoque: {item.stock}
          </p>

          <button
            type={item.stock > 0 ? "button" : undefined}
            disabled={item.stock <= 0}
            className={`inline-block align-bottom rounded mt-2 ${
              item.stock > 0
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
}
