import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { CardPokemon } from "./CardPokemon";
import { Loader } from "./Loader";

export const PokemonList = () => {


  const { allPokemons, loanding, filteredPokemons } =
    useContext(PokemonContext);


  return (
    <>

      { loanding ? (
        <Loader />
      ) : (

        <ul className="min-w-[700px] w-full  p-2 mx-auto flex flex-wrap justify-center gap-[20px] ">
          {allPokemons &&
            allPokemons.map((pokemon) => (
              <CardPokemon key={pokemon.id} pokemon={pokemon} />
            ))}
        </ul>

      )}
    </>

  );
};

// card-list-pokemon  container
