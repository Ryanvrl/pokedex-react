import { AppRoutes } from './routes/routes'
import { ThemeProvider } from './components/contexts/theme-context'

import { GlobalStyle } from './styled/styledGlobal'

function App() {

  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <AppRoutes />
      </ThemeProvider>
    </>
  )
}



export default App
