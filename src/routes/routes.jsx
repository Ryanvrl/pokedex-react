import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Pokemons } from "../pages/Home/pokemons";
import { PokemonInfo } from "../pages/pokemon-info/pokemon-info";

const AppRoutes = () => {
  return (
    <BrowserRouter>        
        <Routes>
          <Route exact path="/" element={<Pokemons />} />
          <Route exact path='/pokemon/:namePoke' element={<PokemonInfo />} />
        </Routes>
    </BrowserRouter>

  );
};

export { AppRoutes };