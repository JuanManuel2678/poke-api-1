import { useEffect, useState } from 'react'
import { PokemonContext } from './PokemonContext'
import { useForm } from '../hook/useForm'

export const PokemonProvider = ({ children }) => {

  const [pokeType, setPokeType] = useState([]) // pokemon por tipo 
  const [allPokemons, setAllPokemos] = useState([]) // mostarr 50 pokemon 
  const [globalPokemos, setGlobalPokemons] = useState([]) // mostar todos los pokemon
  const [search, setSearch] = useState('')
  
  const [offset, setOffSet] = useState(0)
  const [showModal, setShowModal] = useState(false) // mostarr el modal 
  

  // Utilizar CustomHook - useForm
  const {valueSearch, onInputChange, onResetForm} = useForm({
    valueSearch: ''
  })



  // estados para aplicaciones Simples
  const [loading, setLoading] = useState(true)
  // const [active, setActive] = useState(false)

  // 1. llamr 50 pokemos a la api 
  async function getAllPokemon (limit = 50 ) {
    const url = ('https://pokeapi.co/api/v2/')
    const rs = await fetch(`${url}pokemon?limit=${limit}&offset=${offset}`)
    const rsJson = await rs.json()

    const promises = rsJson.results.map(async(pokemon) => {
      const rs = await fetch(pokemon.url)
      const rsJson = await rs.json()
      return rsJson
    })
      const result = await Promise.all(promises)
      setAllPokemos([...allPokemons, ...result])
      setLoading(false)
  }

  const searchName = (e) => {
    setSearch(e.target.value)
    console.log(e.target.value)
  }   

  // btn cargar mas
  const onClickLoadMore = () => {
    setOffSet(offset + 50 )
  }


  // llamr a todos los pokemon 
   async function getGlobalPokemons () {
    const url = ('https://pokeapi.co/api/v2/')
    const rs = await fetch(`${url}pokemon?limit=100000&offset=0`)
    const rsJson = await rs.json()

    const promises = rsJson.results.map(async(pokemon) => {
      const rs = await fetch(pokemon.url)
      const rsJson = await rs.json()
      return rsJson
    })
      const result = await Promise.all(promises)
      setGlobalPokemons(result)
      setLoading(false)
   }
 
   // llamar a un pokemon por id para ver su informacion 
   async function getPokemonById (id) {
    const url = ('https://pokeapi.co/api/v2/')
    const rs = await fetch(`${url}pokemon/${id}`)
    const rsJson = await rs.json()
    return rsJson
   }
  
   // llamar pokemon por tipo 
   async function getType () {
    const rs = await fetch('https://pokeapi.co/api/v2/type')
    const rsJson = await rs.json()

    setPokeType(rsJson.results)
  }   

  useEffect(() => {
    getAllPokemon()
  }, [])

  useEffect(() => {
    getGlobalPokemons()
  }, [])

  useEffect(() => {
    getType()
  }, [])

  return (
    <PokemonContext.Provider
     value={{
      valueSearch,
      onInputChange,
      onResetForm,
      allPokemons,
      globalPokemos,
      getPokemonById,
      pokeType,
      showModal,
      setShowModal,
      search,
      setSearch,
      searchName,
      onClickLoadMore,
    }}
    >
        {children}
    </PokemonContext.Provider>
  )
}


