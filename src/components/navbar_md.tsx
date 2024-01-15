export function md_query_lg(path: string) {
  return (
  <>
    <div className="flex flex-row place-self-center justify-center w-[312px]">
      <p
      className={`border-solid border-3 rounded-md hover:bg-dodger-blue-800 hover:text-white transition-all m-3 p-1 text-xl ${
        path === "/stock" ? " bg-slate-300 dark:bg-slate-700" : ""
      }`}
    >
      {" "}
      <a href="/stock">estoque</a>
    </p>
    <p
      className={`border-solid border-3 rounded-md hover:bg-dodger-blue-800 hover:text-white transition-all m-3 p-1 text-xl ${
        path === "/sells" ? " bg-slate-300 dark:bg-slate-700" : ""
      }`}
    >
      {" "}
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
  </>
  )
}

export function md_query_sm(path: string) {
  // return (
  //   <>
  //     <ul className="">
  //       <li
  //         className={`border-solid border-3 rounded-md hover:bg-dodger-blue-800 hover:text-white transition-all m-3 p-1 text-xl ${
  //           path === "/stock" ? " bg-slate-300 dark:bg-slate-700" : ""
  //         }`}
  //       >
  //         {" "}
  //         <a href="/stock">estoque</a>
  //       </li>
  //       <li
  //         className={`border-solid border-3 rounded-md hover:bg-dodger-blue-800 hover:text-white transition-all m-3 p-1 text-xl ${
  //           path === "/sells" ? " bg-slate-300 dark:bg-slate-700" : ""
  //         }`}
  //       >
  //         {" "}
  //         <a href="/sells">venda</a>{" "}
  //       </li>
  //       <li
  //         className={`border-solid border-3 rounded-md hover:bg-dodger-blue-800 hover:text-white transition-all m-3 p-1 text-xl ${
  //           path === "/products" ? " bg-slate-300 dark:bg-slate-700" : ""
  //         }`}
  //       >
  //         {" "}
  //         <a href="/products">produtos</a>{" "}
  //       </li>
  //     </ul>
  //   </>
  // );
  return (
  // <div
  //     className="flex w-full items-center justify-center bg-gray-200 py-20"
  //   >
      <div className="w-48 group relative cursor-pointer py-2">
        <div className="flex items-center justify-between space-x-5 px-4 dark:text-white">
          <a
            className="menu-hover my-2 py-2 text-base font-medium text-black lg:mx-4 dark:text-white"
            onClick=""
          >
            Menu 
          </a>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </div>
        <div
          class="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible"
          onClick=""
        >
          <a
            className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
            >Product One</a
          >
 
          <a
            className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
            >Product Two</a
          >
          <a
            className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
            >Product Three
          </a>  
        </div>
      </div>
    // </div>
  );   

}
