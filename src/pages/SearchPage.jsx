import { useContext } from "react"
import { PokemonContext } from "../context/PokemonContext"
// import { CardPokemon } from "../components/CardPokemon"
import { useLocation } from "react-router"


export const SearchPage = () => {

  const location = useLocation()
  console.log(location)

  const { globalPokemons } = useContext(PokemonContext)

  // funcion de filtrado 
  const filteredPokemons = globalPokemons.filters(pokemon => pokemon.name.includes(location.state.toLowerCase()))


  return (
    <h1>search page</h1>
    // <div className="min-w-[1000px] min-h-[1000px] flex flex-col ">

    //     <p className="w-full font-semibold text-xl">
    //       Se encontraron <span>{filteredPokemons.length}</span> resultados:
    //     </p>

    //     <div className="w-full ">
    //         {filteredPokemons.map(pokemon => (
    //             <CardPokemon  pokemon={pokemon} key={pokemon.id} />
    //         ))

    //         }
    //     </div>
      
    // </div>
  )
}


