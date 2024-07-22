import { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { useParams } from "react-router";
import { Loader } from "../components";
import { primerMayuscula } from "../helper/helper,js";

export const PokemonPage = () => {
  const { getPokemonById } = useContext(PokemonContext);

  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState({});

  const { id } = useParams();

  async function fetchPokemon(id) {
    const data = await getPokemonById(id);
    setPokemon(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchPokemon(id);
  }, []);

  return (
    <main className="min-w-[700px] w-full h-[1200px] mx-auto flex flex-col font-kode">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="flex items-center h-1/2 w-full p-4">

            <div className="w-1/2 h-full">

              <span className="flex justify-center text-[200px] font-bold text-[#83c5be] px-5">#{pokemon.id}</span>
              <h1 className="text-center pb-[10px] text-[50px] font-bold">{primerMayuscula(pokemon.name)}</h1>
              <div className="flex justify-start gap-4 my-[30px] ml-[120px]">
                {
                  pokemon.types.map(type => (
                    <span  key={type.type.name} className={`text-[15px] py-[5px] px-[20px] border border-black rounded-md font-semibold bg-${type.type.name}`} >{type.type.name}</span>
                  ))
                }
                
              </div>
              <div className="flex justify-evenly gap-[20px] mt-[5px]">
                <div >
                  <p className="font-bold underline decoration-solid">Altura</p>
                  <span>{pokemon.height}0 cm </span>
                </div>
                <div >
                  <p className="font-bold underline decoration-solid">Peso</p>
                  <span>{pokemon.weight}Kg</span>
                </div>
              </div>

            </div>

            <figure className="w-1/2 h-full">
              <img
              className="w-full h-full object-contain"
                src={pokemon.sprites.other.dream_world.front_default}
                alt={`Pokemon ${pokemon?.name}`}
              />
            </figure>

          </div>
          <div className="h-1/2 w-full flex flex-col gap-12 p-5 ">

            <h1 className="mb-[10px] text-[40px] font-bold text-center">Estadisticas</h1>

            <div class="flex flex-col gap-[20px] items-center w-full py-[20px] px-[100px]">

              <div className="flex items-center gap-[5px] justify-between w-full px-[10px]">
                <span className="flex-[20%] font-bold text-[18px]">Hp</span>
                <div className="w-full h-[40px] bg-[#006d77] rounded-xl"></div>
                <span className=" font-bold text-[18px] ml-[60px]">{pokemon.stats[0].base_stat}</span>
              </div>

              <div className="flex items-center gap-[5px]  justify-between w-full px-[10px]">
                <span className="flex-[20%] font-bold text-[18px]">Attack</span>
                <div className="w-full h-[40px] bg-[#006d77] rounded-xl"></div>
                <span className=" font-bold text-[18px] ml-[60px]">{pokemon.stats[1].base_stat}</span>
              </div>

              <div className="flex items-center gap-[5px]  justify-between w-full px-[10px]">
                <span className="flex-[20%] font-bold text-[18px]">Defense</span>
                <div className="w-full h-[40px] bg-[#006d77] rounded-xl"></div>
                <span className=" font-bold text-[18px] ml-[60px]">{pokemon.stats[2].base_stat}</span>
              </div>

              <div className="flex items-center gap-[5px]  justify-between w-full px-[10px]">
                <span className="flex-[20%] font-bold text-[18px]">Special Attack</span>
                <div className="w-full h-[40px] bg-[#006d77] rounded-xl"></div>
                <span className=" font-bold text-[18px] ml-[60px]">{pokemon.stats[3].base_stat}</span>
              </div>

              <div className="flex items-center gap-[5px]  justify-between w-full px-[10px]">
                <span className="flex-[20%] font-bold text-[18px]">special Defense</span>
                <div className="w-full h-[40px] bg-[#006d77] rounded-xl"></div>
                <span className=" font-bold text-[18px] ml-[60px]">{pokemon.stats[4].base_stat}</span>
              </div>
              
              <div className="flex items-center gap-[5px]  justify-between w-full px-[10px]">
                <span className="flex-[20%] font-bold text-[18px]">Speed</span>
                <div className="w-full h-[40px] bg-[#006d77] rounded-xl"></div>
                <span className=" font-bold text-[18px] ml-[60px]">{pokemon.stats[5].base_stat}</span>
              </div>

            </div>

          </div>
        </>
      )}
    </main>
  );
};
