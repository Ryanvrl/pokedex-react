import styled from "styled-components"

const Container = styled.header`
        padding: 10px;
        background-color: ${(theme) => theme.theme.background};
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 10vh;

        a {
            text-decoration: none;
        }
  
        .logo { 
            position: relative;
            overflow: hidden;
            z-index: 0;
        }
        
        .title {
            font-size: 40px;
            letter-spacing: 6px;
        }

        .logo-pokemon {
            position: relative;
            z-index: -3;
            width: 270px;
        }

        .pikachu {    
            width: 50px;
            position: absolute;
            bottom: 10%;
            animation: run 5s infinite linear;
        }

        @keyframes run {
            from {
                left: -90px;
            }

            to {
                left: 100%;
            }
        }
`

export { Container }