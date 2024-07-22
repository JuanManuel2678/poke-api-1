import { useContext } from "react"
import { PokemonContext } from "../context/PokemonContext"
import { CardPokemon } from "./CardPokemon"



export const PokemonList = () => {

    const { allPokemons } = useContext(PokemonContext)


  return (

    <ul className="min-w-[700px] w-full  p-2 mx-auto flex flex-wrap justify-center gap-[20px] ">
      {allPokemons && 
            allPokemons.map(pokemon => (<CardPokemon key={pokemon.id} pokemon={pokemon} />))

      }  
    </ul>
 
  )
}


// card-list-pokemon  container

