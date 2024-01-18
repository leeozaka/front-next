"use client";

import { usePathname } from "next/navigation";

export default function Header() {
  const path = usePathname();

  return (
    <>
      <div
        className={`flex flex-row justify-between text-black bg-white h-13 dark:bg-gray-900 dark:text-white `}
      >
        <div id="xl" className="hidden md:flex">
          <div className="flex flex-row place-self-center justify-center w-[312px]">
            <p
              className={`border-solid border-3 rounded-md hover:bg-dodger-blue-800 hover:text-white transition-all m-3 p-1 text-xl ${
                path === "/stock" ? " bg-slate-300 dark:bg-slate-700" : ""
              }`}
            >
              <a href="/stock">estoque</a>
            </p>
            <p
              className={`border-solid border-3 rounded-md hover:bg-dodger-blue-800 hover:text-white transition-all m-3 p-1 text-xl ${
                path === "/sells" ? " bg-slate-300 dark:bg-slate-700" : ""
              }`}
            >
              <a href="/sells">venda</a>{" "}
            </p>
            <p
              className={`border-solid border-3 rounded-md hover:bg-dodger-blue-800 hover:text-white transition-all m-3 p-1 text-xl ${
                path === "/products" ? " bg-slate-300 dark:bg-slate-700" : ""
              }`}
            >
              <a href="/products">produtos</a>{" "}
            </p>
          </div>
        </div>

        <div id="sm" className="md:hidden">
          <div className="w-48 group relative cursor-pointer py-2">
            <div className="flex items-center justify-between space-x-5 px-4 dark:text-white">
              <a
                className="menu-hover my-2 py-2 text-base font-medium text-black lg:mx-4 dark:text-white"
                href="/"
              >
                Menu
              </a>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6 hidden sm:block dark:text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </div>
            <div className="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible dark:bg-gray-700 dark:text-white">
              <a
                className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2 dark:hover:text-dodger-blue-600 dark:text-white"
                href="/products"
              >
                Produtos
              </a>
              <a
                className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2 dark:hover:text-dodger-blue-600 dark:text-white"
                href="/sells"
              >
                Vendas
              </a>
              <a
                className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2 dark:hover:text-dodger-blue-600 dark:text-white"
                href="/stock"
              >
                Estoque
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <p className="text-2xl text-dodger-blue-950  font-black absolute center dark:text-dodger-blue-600">
            <a href="/"> Atletics </a>
          </p>
        </div>

        <div className="flex justify-end p-2 m-2 w-[192px] sm:justify-center sm:w-[312px]">
          <div className="flex text-xl items-center">
            <p className="pr-2 text-xl ">
              <a href="/login">login</a>
            </p>

            <div className="hidden sm:flex items-center">
              <p className="m-2 cursor-default ">|</p>
              <a
                className="flex text-dodger-blue-950  text-nowrap dark:text-dodger-blue-500"
                href="/admin"
              >
                area administrativa
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
