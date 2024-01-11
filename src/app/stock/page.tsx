"use client";

import React, { useState } from "react";
import ProductCard from "@/components/card_item";
import Sidenav from "@/components/sidenav";
import { items } from "@/components/items";

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
          <div className="flex flex-wrap flex-grow-0 justify-center ">
            {filteredItems.sort((b, a) => a.stock - b.stock).map((item) => (
              <ProductCard
                key={item.id}
                id={item.id}
                photo={item.photo}
                name={item.name}
                price={item.price}
                description={item.description}
                stock={item.stock} 

              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockPage;
