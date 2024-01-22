"use client";

import React, { useState, useEffect } from "react";
import ProductCard from "@/components/card_item";
import Sidenav from "@/components/sidenav";
import GetStaticProps, { Product } from "@/components/get_data";

export default function StockPage() {
  const [items, setItems] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    GetStaticProps().then((result) => {
      setItems(result.props.products);
    });
  }, []);

  const filteredItems = items.filter(
    (item: Product) =>
      item.id === Number(searchTerm) ||
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.brand.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="dark:bg-slate-700">
      <div className="flex justify-center">
        <input
          className={`w-1/2 color-white p-2 m-2 text-center  border-2 rounded-md dark:bg-slate-600 dark:text-white ring-2 transition-all duration-500 ${
            filteredItems.length > 0 && searchTerm.length > 0
              ? "ring-green-500"
              : searchTerm.length === 0
                ? "ring-slate-500"
                : "ring-red-500"
          } focus:outline-none`}
          type="text"
          placeholder="Pesquisar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="flex">
        <Sidenav data={filteredItems} />

        <div className="flex flex-grow justify-center align-center">
          <div className="flex flex-wrap flex-grow-0 justify-center ">
            {filteredItems
              .sort(
                (b: { stock: number }, a: { stock: number }) =>
                  a.stock - b.stock,
              )
              .map((item: Product) => (
                <ProductCard item={item} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
