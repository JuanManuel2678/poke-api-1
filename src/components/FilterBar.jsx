import { useContext, } from "react";
import { PokemonContext } from "../context/PokemonContext";


export const FilterBar = ({setShowModal}) => {
  
  const { pokeType } = useContext(PokemonContext)

  return (

    <aside className=" fixed top-0 min-w-[250px] min-h-[950px] flex  bg-[#f2f2f2]/80 p-6 rounded-e-lg">

      <div className="flex flex-col gap-[5px] w-full mt-36 pt-6  ">

        <button className=" flex ml-[170px] hover:bg-black rounded-xl mr-2" onClick={() => setShowModal(false)}>
        <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke-width="1.5" 
      stroke="currentColor" 
      className="hover:stroke-slate-50 w-[25px]">

         <path 
         stroke-linecap="round" 
         stroke-linejoin="round" 
         d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
      </svg>
        </button>

        <span className="text-center w-full pb-[25px] font-bold text-[22px]">
          Tipo
        </span>
        { pokeType && 
                pokeType.map(tipo => (       
                   <div className="flex gap-[10px] ml-[15px] " key={tipo.index}>

                  <input type="checkbox" name={tipo.name} id={tipo.name} className="cursor-pointer"/>
        
                  <label htmlFor={tipo.name} className="cursor-pointer hover:text-green-800 font-semibold">{tipo.name}</label>
                </div> )) }

      </div>

    </aside>
  );
};
