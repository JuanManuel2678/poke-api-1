import { Navigate, Route, Routes } from "react-router"
import { Navigation } from "../components/Navigation"
import { PokemonPage } from '../pages/PokemonPage'
import { HomePage } from "../pages/HomePage"
import { SearchPage } from "../pages/SearchPage"


export const Enrutador = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigation />}>
           <Route index element={<HomePage />}/>
           <Route path='pokemon/:id' element={<PokemonPage />} />
           <Route path='search' element={<SearchPage />}/>
        </Route>

            <Route path="*" element={<Navigate to='/'/>}/>
     
    </Routes>
  )
}

