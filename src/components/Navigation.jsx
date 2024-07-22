import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { PokemonContext } from "../context/PokemonContext";

export const Navigation = () => {



      const {search, searchName} = useContext(PokemonContext)



  return (
    <>
      <header className="max-w-[1200px] flex items-center justify-between p-[40px] mx-auto">

        <Link to="/" className="w-[150px]">
          <img src="/Pokédex_logo.png" alt="logo pokedex" />
        </Link>

        <form className="flex items-center gap-[15px]">

          <div className="m-[20px] flex items-center gap-[10px] border-[1.5px] border-[#888]
          px-[20px] py-[15px] rounded-[25px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-[20px] h-[20px] stroke-slate-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <input 
            type="search" 
            onChange={searchName}
            // name=""
            // id=""
            value={search}
            placeholder="buscar nombre de Pokemon" 
            className="w-[300px] text-[15px] border-0 focus:outline-none font-kode"  />
          </div>
          <button className="py-[15px] px-[30px] bg-[#006d77] text-[#fff] rounded-3xl hover:text-[#000] hover:bg-[#83c5be]">Buscar</button>
        </form>
      </header>
      <Outlet />
    </>
  );
};
