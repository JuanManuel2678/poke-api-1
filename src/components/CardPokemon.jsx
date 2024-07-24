import { Link } from "react-router-dom";
import { primerMayuscula } from "../helper/helper,js";

export const CardPokemon = ({ pokemon }) => {
  
  return (

    <Link to={`/pokemon/${pokemon.id}`} className="cursor-pointer">

      <li className="w-[280px] h-[370px]  flex flex-col justify-around font-kode rounded-md">
        <figure className="bg-[#f2f2f2] content-center flex items-center justify-center rounded-xl h-[65%]">
          <img
            src={pokemon.sprites.other.dream_world.front_default}
            alt={`pokemon ${pokemon.name}`}
            className="w-full h-full object-contain"
          />
        </figure>

        <div className="h-[35%] p-2 flex flex-col justify-between ml-2">
          <span className="block text-[#888] ">N° 0{pokemon.id}</span>
          <h1 className="text-black text-xl font-bold">{primerMayuscula(pokemon.name)}</h1>
          <div className="flex gap-3  ">
            {pokemon &&
              pokemon.types.map((type) => (
                <span
                  key={type.index}
                  className={`border-[2px] py-1 px-3 rounded-md text-[12px] mt-1 text-black font-semibold bg-${type.type.name} mb-2 `}
                >
                  {type.type.name}
                </span>
              ))}
          </div>
        </div>
      </li>
    </Link>

  );
};
