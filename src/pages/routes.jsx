import { Route, Routes } from "react-router-dom";
import { Pokemons } from "../components/pokemons/pokemons";
import { DetalhesPokemon } from "../components/detalhes-pokemon/detalhes-pokemon";

const AppRoutes = () => {
  return (
   
      <Routes>
        <Route exact path="/" element={<Pokemons />} />
        <Route exact path='/pokemon/:idPoke' element={<DetalhesPokemon />} />
      </Routes>
    
  );
};

export { AppRoutes };