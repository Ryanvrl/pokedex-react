
import { createGlobalStyle } from 'styled-components'
import { Header } from './components/header/header'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './pages/routes'
import { ThemeProvider } from './components/contexts/theme-context'

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider>
        <BrowserRouter>
          <Header />
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>

    </>
  )
}

const GlobalStyle = createGlobalStyle`
      @font-face {
        font-family: 'logo';
        src: url('./src/fonts/Pokemon Hollow.ttf');    
      }

      @font-face {
        font-family: 'op2';
        src: url('./src/fonts/Pokemon Solid.ttf');    
      }

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box; 
      }

      body {
        height: 100vh;
        
      }

      div {
        height: 100%;
      }
`

export default App
