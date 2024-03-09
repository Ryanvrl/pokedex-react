
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
