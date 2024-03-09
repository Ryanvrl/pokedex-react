import { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../contexts/theme-context'
import { Link } from 'react-router-dom'

const Header = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <Container theme={theme}>
            <Link to='/'>
                <div className='logo'>
                    <h1 className="title">
                        <img src="./images/pokemon-logo.png" alt="" className='logo-pokemon'/>
                    </h1>

                    <img src="./public/images/pikachu.gif" alt="" className='pikachu' />
                </div>
            </Link>
        </Container>
    )
}

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

export { Header }