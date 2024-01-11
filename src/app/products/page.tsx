"use client";

import React, { useState } from "react";
import { items } from "@/components/items";

const ProductsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSubmit(searchTerm: string) {
    const actualItem = items.find(
      (item) => item.name.toLowerCase() === searchTerm.toLowerCase()
    );
    return actualItem
      ? (window.location.href = `/products/${actualItem.id}`)
      : undefined;
  }

  return (
    <>
      <div className="flex flex-col justify-center m-0">
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
            className="w-1/2 p-2 text-center border-2 rounded-lg"
            type="text"
            placeholder="Pesquisar"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <button
            type="submit"
            className="p-2 rounded-lg border-2 bg-dodger-blue-950 text-white"
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
