import { PokemonProvider } from "./context/PokemonProvider"
import { Enrutador } from "./emrutador/Enrutador"


function App() {
  
  return (
    <PokemonProvider>
        <Enrutador />
    </PokemonProvider>
  )
}

export default App
