import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Pokemons } from "../pages/Home/pokemons";
import { PokemonInfo } from "../pages/pokemon-info/pokemon-info";
import { ThemeProvider } from "../components/contexts/theme-context";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route exact path="/" element={<Pokemons />} />
          <Route exact path='/pokemon/:idPoke' element={<PokemonInfo />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>

  );
};

export { AppRoutes };