import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Pokemons } from "../components/pokemons/pokemons";
import { PokemonInfo } from "../components/pokemon-info/pokemon-info";
import { ThemeProvider } from "../components/contexts/theme-context";
import { Header } from '../components/header/header'


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