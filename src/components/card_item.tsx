import React from "react";

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
    <div className={`block w-52 m-1 rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ${classmodifier}`}>
      <a href="#{id} ">
        {/* todo: ao clicar na imagem vai para a pagina do produto */}
        <img className="rounded-t-lg" src={photo} alt={name} />
      </a>
      
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          {name}
        </h5>
        <p className="mb-4 text-base text-neutral-200">{description}</p>
        <p className="mb-4 text-base text-neutral-200">Preço: ${price}</p>
        <p className="mb-4 text-base text-neutral-200">Estoque: {stock}</p>
        <button
          type="button"
          className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        >
          Adicionar
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
