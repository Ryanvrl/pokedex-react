import styled from "styled-components"
import { createGlobalStyle } from 'styled-components'

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

export { GlobalStyle }