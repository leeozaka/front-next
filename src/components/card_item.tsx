import React from "react";
import Image from "next/image";

interface Product {
  key: number;
  photo: string;
  name: string;
  price: number;
  description: string;
  stock: number;
  classmodifier: string;
}

const ProductCard: React.FC<Product> = ({
  key,
  photo,
  name,
  price,
  description,
  stock,
  classmodifier,
}) => {
  return (
    <div
      className={`flex flex-col w-52 m-1 rounded-lg ${
        classmodifier == "active"
          ? "border-2 border-green-500 bg-green-500"
          : "border-2 border-red-500 bg-red-500"
      } shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]`}
    >
      <a href="#{id} ">
        {/* todo: ao clicar na imagem vai para a pagina do produto */}

        <Image
          className="rounded-t-lg h-52"
          width={208}
          height={208}
          src={photo}
          alt={name}
        />
      </a>

      <div className="flex flex-col p-5 justify-between">
        <div id="text">          
        <h5 className=" text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          {name}
        </h5>
        <p className=" text-base text-neutral-200">{description}</p>
        <p className=" text-base text-neutral-200">Preço: ${price}</p>
        <p className=" text-base text-neutral-200">Estoque: {stock}</p>
        </div>

        <button
          type={classmodifier == "active" ? "button" : undefined}
          className={`inline-block align-bottom rounded ${
            classmodifier == "active"
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
