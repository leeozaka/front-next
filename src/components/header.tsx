"use client";

import { usePathname } from "next/navigation";

export default function Header() {
  const path = usePathname(); 

  return (
    <>
      <div className="flex flex-row justify-between text-black bg-white h-13">
        <div className="flex flex-row place-self-center justify-center w-[312px]">
          <p
            className={`border-solid border-3 rounded-md hover:bg-dodger-blue-800 hover:text-white transition-all m-3 p-1 text-xl ${
              path === "/stock" ? " bg-slate-300" : ""
            }`}
          >
            {" "}
            <a href="/stock">estoque</a>
          </p>
          <p
            className={`border-solid border-3 rounded-md hover:bg-dodger-blue-800 hover:text-white transition-all m-3 p-1 text-xl ${
              path === "/sells" ? " bg-slate-300" : ""
            }`}
          >
            {" "}
            <a href="/sells">venda</a>{" "}
          </p>
          <p
            className={`border-solid border-3 rounded-md hover:bg-dodger-blue-800 hover:text-white transition-all m-3 p-1 text-xl ${
              path === "/products" ? " bg-slate-300" : ""
            }`}
          >
            {" "}
            <a href="/products">produtos</a>{" "}
          </p>
        </div>

        <div className="flex items-center justify-center">
          <p className="text-2xl text-dodger-blue-950  font-black absolute center">
            <a href="/"> Atletics </a>
          </p>
        </div>

        <div className="flex place-self-center justify-center p-2 m-2 w-[312px]">
          <p className=" pr-2 text-xl ">
            {" "}
            <a href="/login">login</a>{" "}
          </p>
          <p className=" pr-2 text-xl ">|</p>
          <p className={`text-xl text-dodger-blue-950 text-nowrap`}>
            {" "}
            <a href="/admin">area administrativa</a>{" "}
          </p>
        </div>
      </div>
    </>
  );
}
