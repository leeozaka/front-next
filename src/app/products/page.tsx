"use client";

import React, { useState } from "react";
import { items } from "@/components/items";

const ProductsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSubmit(searchTerm: string) {
    for (let i = 0; i < items.length; i++) {
      if (items[i].name === searchTerm) {
        return (window.location.href = `/products/${items[i].id}`);
      }
    }
    return (
      <div>
        <p>Product not found</p>
      </div>
    );
  }

  return (
    <>
      <div className="flex justify-center m-0">
        <input
          className="w-1/2 p-2 text-center border-2 rounded-lg "
          type="text"
          placeholder="Pesquisar"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          onSubmit={() => handleSubmit(searchTerm)}
        />{" "}
        <button
          className="p-2 rounded-lg border-2 bg-dodger-blue-950 text-white"
          onClick={() => handleSubmit(searchTerm)}
        >
          Buscar        </button>
      </div>
    </>
  );
};
export default ProductsPage;
