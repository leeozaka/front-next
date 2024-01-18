"use client";

import React, { useState, useEffect } from "react";
import GetStaticProps from "@/components/get_data";
import { Product } from "@/components/items";

const ProductsPage: React.FC = () => {
  const [items, setItems] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    GetStaticProps().then((result) => {
      setItems(result.props.products);
    });
  }, []);

  function handleSubmit(searchTerm: string) {
    const actualItem = items.find(
      (item) => item.title.toLowerCase() === searchTerm.toLowerCase()
    );
    return actualItem
      ? (window.location.href = `/products/${actualItem.id}`)
      : undefined;
  }

  return (
    <>
      <div className="flex flex-col justify-center m-6">
        <form
          id="wrap-input"
          className="flex justify-center"
          onSubmit={(e) => {
            e.preventDefault();
            const result = handleSubmit(searchTerm);
            if (!result) {
              document.getElementById(
                "not-found"
              )!.innerHTML = `${searchTerm}&nbsp;`;
              document.getElementById(
                "not-found-helper"
              )!.innerHTML = `não encontrado`;
            }
          }}
        >
          <input
            className="w-1/2 p-2 text-center border-2 rounded-lg dark:bg-gray-800 dark:text-white dark:border-dodger-blue-950"
            type="text"
            placeholder="Pesquisar"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <button
            type="submit"
            className="p-2 rounded-lg border-2 bg-dodger-blue-950 text-white dark:border-dodger-blue-950 "
          >
            Buscar
          </button>
        </form>
        <div className="flex justify-center pt-2">
          <p id="not-found" className="text-red-500 font-bold "></p>
          <p id="not-found-helper"></p>
        </div>
      </div>
    </>
  );
};
export default ProductsPage;
