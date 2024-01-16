"use client";

import { usePathname } from "next/navigation";
import { md_query_lg, md_query_sm } from "./navbar_md";

export default function Header() {
  const path = usePathname();
  const nav_lg = md_query_lg(path);
  const nav_sm = md_query_sm();
  
  return (
    <>
      <div className={`flex flex-row justify-between text-black bg-white h-13 dark:bg-gray-900 dark:text-white `}>
        {document.body.clientWidth > 768 ?  nav_lg : nav_sm}
        <div className="flex items-center justify-center">
          <p className="text-2xl text-dodger-blue-950  font-black absolute center dark:text-dodger-blue-600">
            <a href="/"> Atletics </a>
          </p>
        </div>

        <div className="flex place-self-center justify-center p-2 m-2 w-[312px]">
          <p className=" pr-2 text-xl ">
            <a href="/login">login</a>{" "}
          </p>

          <div>
            
            <p className=" pr-2 text-xl ">|</p>
            <p className={`text-xl text-dodger-blue-950 text-nowrap dark:text-dodger-blue-500 invisible sm:visible`}/>
              <a href="/admin">area administrativa</a>
          </div>

          </div>
        </div>
      </>
  );
}
