import { useContext } from "react"
import { PokemonContext } from "../context/PokemonContext"
import { CardPokemon } from "../components/CardPokemon"


export const SearchPage = () => {


  const { globalPokemon, search } = useContext(PokemonContext)

  // funcion de filtrado 
  const filteredPokemon = !search ? globalPokemon : globalPokemon.filter(pokemon => pokemon.name.toLowerCase().include(search.toLowerCase())) 

  return (
    <div className="min-w-[1000px] min-h-[1000px] flex flex-col ">
        <p className="w-full font-semibold text-xl">
          Se encontraron <span>{filteredPokemon.length}</span> resultados:
        </p>
        <div className="w-full ">
            {filteredPokemon.map(pokemon => (
                <CardPokemon  pokemon={pokemon} key={pokemon.id} />
            ))

            }
        </div>
      
    </div>
  )
}


