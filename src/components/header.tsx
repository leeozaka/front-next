export default function Header() {
  return (
    <>
      <div className="flex flex-row justify-between text-black bg-white h-13">
        <div className="flex flex-row place-self-center">
          <p className="border-solid border-3 rounded-md hover:bg-dodger-blue-800 hover:text-white transition-all m-3 p-1 text-xl">
            {" "}
            <a href="/estoque">estoque</a>
          </p>
          <p className="border-solid border-3 rounded-md hover:bg-dodger-blue-800 hover:text-white transition-all m-3 p-1 text-xl">
            {" "}
            <a href="/vendas">venda</a>{" "}
          </p>
          <p className="border-solid border-3 rounded-md hover:bg-dodger-blue-800 hover:text-white transition-all m-3 p-1 text-xl">
            {" "}
            <a href="/produtos">produtos</a>{" "}
          </p>
        </div>

        <div className="place-self-center p-2">
          <p className="text-2xl font-black ">
            {" "}
            <a href="/"> Atletics </a>{" "}
          </p>
        </div>

        <div className="flex place-self-center pr-3">
          <p className=" pr-2 text-xl ">
            {" "}
            <a href="/login">login</a>{" "}
          </p>
          <p className=" pr-2 text-xl ">|</p>
          <p className=" text-xl text-dodger-blue-950">
            {" "}
            <a href="/admin">area administrativa</a>{" "}
          </p>
        </div>
      </div>
    </>
  );
}
