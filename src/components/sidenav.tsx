import { useState } from "react";
import { Product } from "./get_data";

export default function Sidenav({ data }: { data: Product[] }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <nav
        id="sidenav-7"
        className="top-0 rounded-md z-[5] w-60 flex-shrink-0 flex-grow-0 overflow-auto bg-white dark:bg-slate-800"
      >
        <div className="flex flex-col text-center">
          <p className="text-lg text-primary">I am a sidenav</p>
          <p className="text-lg text-primary">
            Eu quero por info&apos;s de prod&apos;s aqui
          </p>
          <label>
            <input
              className="mr-2"
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            Check me!
          </label>
        </div>

        <div id="sm" className="">
          <div className="w-48 group relative cursor-pointer py-2">
            <div className="flex items-center justify-between space-x-5 px-4 dark:text-white">
              <a
                className="menu-hover my-2 py-2 text-base font-medium text-black lg:mx-4 dark:text-white"
                href="/"
              >
                categorias
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
              {data
                .filter(
                  (value, index, array) =>
                    index ==
                    array.findIndex(
                      (product) => product.category == value.category,
                    ),
                )
                .map((a: Product) => (
                  <a
                    key={a.id}
                    className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2 dark:hover:text-dodger-blue-600 dark:text-white"
                    href="#"
                  >
                    {a.category}
                  </a>
                ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
