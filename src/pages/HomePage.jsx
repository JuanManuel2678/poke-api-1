import { useContext } from "react";
import { FilterBar, PokemonList } from "../components";
import { PokemonContext } from "../context/PokemonContext";

export const HomePage = () => {

  const { showModal, setShowModal, onClickLoadMore } = useContext(PokemonContext)

  return (
    <>
      <div className="max-w-[1200px] min-w-[700px] my-0 mx-auto flex" onClick={() => setShowModal(true)}>

        <div className="flex items-center gap-4 mb-5 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokWidth="1.5"
            stroke="currentColor"
            className="w-[30px] h-[30px] stroke-[#000]"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
            />
          </svg>
          <span>Filtrar</span>
        </div>

      </div>

      <div className="flex ">
      {showModal && (<FilterBar setShowModal={setShowModal}/>)}
      <div className="flex flex-col justify-center "> 
      <PokemonList />
      <div className="w-full flex justify-center  py-4">
        <button className=" px-4 py-2 rounded-lg bg-[#006d77] text-[#fff] hover:bg-[#6ae0eb] hover:text-black font-bold" onClick={onClickLoadMore}>Cargar Mas</button>
      </div>
      </div>
      
      </div>
    </>
  );
};
