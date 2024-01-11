export default function Home() {
  return (
    <>
      <div>
        <div className="flex flex-col justify-center items-center bg-gray-200 h-screen">
          <p className="text-6xl font-black">Bem vindo ao Atletics</p>
          <p className="text-2xl font-black">
            Aqui você pode gerenciar seu estoque, vendas e produtos
          </p>
          <br />

          <button
            type="button"
            className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] "
          >
            <a href="/login">Login</a>
          </button>
        </div>
      </div>
    </>
  );
}
