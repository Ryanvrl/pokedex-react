import { createGlobalStyle } from 'styled-components'
import { AppRoutes } from './routes/routes'

function App() {
  return (
    <>
      <GlobalStyle />     
      <AppRoutes />
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
