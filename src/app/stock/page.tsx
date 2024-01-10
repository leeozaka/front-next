"use client";

import React, { useState } from "react";
import ProductCard from "@/components/card_item";
import Sidenav from "@/components/sidenav";

const items = [
  {
    id: 1,
    photo:
      "https://www.comprecimed.com.br/cdn/shop/files/136126.png?v=1687548792&width=1000",
    name: "Loira",
    price: 10,
    description: "Teste de 1",
    stock: 1,
  },
  {
    id: 2,
    photo:
      "https://www.drogariaminasbrasil.com.br/media/product/47f/hidratante-labial-carmed-maca-do-amor-com-cor-efeito-gloss-10g-cimed-914.jpg",
    name: "Morena",
    price: 20,
    description: "Esse é o brabo",
    stock: 10,
  },
  {
    id: 3,
    photo:
      "https://lojaslivia.fbitsstatic.net/img/p/hidratante-labial-carmed-10-gr-beijinho-105260/290428.jpg?w=800&h=800&v=no-change&qs=ignore",
    name: "Ruiva",
    price: 30,
    description: "Esse mais ou menos",
    stock: 0,
  },
];

const StockPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-center">
        <input
          className="w-1/2 p-2 m-2 text-center"
          type="text"
          placeholder="Pesquisar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="flex">
        <Sidenav />

        <div className="flex flex-grow justify-center align-center">
          <div className="flex flex-wrap flex-grow-0">
            {filteredItems.map((item) => (
              <ProductCard
                key={item.id}
                photo={item.photo}
                name={item.name}
                price={item.price}
                description={item.description}
                stock={item.stock}
                classmodifier={item.stock > 0 ? "active" : "inactive"}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockPage;
