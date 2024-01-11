"use client";

import React, { useState } from "react";
import { items } from "@/components/items";

const ProductsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSubmit(searchTerm: string) {
    const actualItem = items.find(
      (item) => item.name.toLowerCase() === searchTerm.toLowerCase()
    );
    if (actualItem) {
      return (window.location.href = `/products/${actualItem.id}`);
    }
    document.getElementById("not-found")!.innerHTML = `${searchTerm}&nbsp;`;
    document.getElementById("not-found-helper")!.innerHTML = `não encontrado`;
  }

  return (
    <>
      <div className="flex flex-col justify-center m-0">
        <div id="wrap-input" className="flex justify-center">
          <input
            className="w-1/2 p-2 text-center border-2 rounded-lg "
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
            onClick={() => handleSubmit(searchTerm)}
          >
            Buscar
          </button>
        </div>
        <div className="flex justify-center pt-2">
          <p id="not-found" className="text-red-500 font-bold "></p>
          <p id="not-found-helper"></p>
        </div>
      </div>
    </>
  );
};
export default ProductsPage;
