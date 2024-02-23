import { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../contexts/theme-context'
import { Link } from 'react-router-dom'


const Header = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <Container>
            <Link to='/'>
                <div className='logo'>
                    <h1 className="title" style={{ color: theme.color }}>Pokédex</h1>

                    <img src={"../src/images/pikachu.gif" ?? "./src/images/pikachu.gif"} alt="" className='pikachu' />
                </div>
            </Link>
        </Container>
    )
}

const Container = styled.header`
        @font-face {
            font-family: 'logo';
            src: url('./src/fonts/Pokemon Hollow.ttf');    
        }

        @font-face {
            font-family: 'logo';
            src: url('../src/fonts/Pokemon Hollow.ttf');    
        }

        font-family: logo;
        background-color: #E3350D;
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
        }
        
        .title {
            font-size: 40px;
            letter-spacing: 6px;
        }

        .pikachu {    
            width: 50px;
            position: absolute;
            bottom: 20%;
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

        @media (max-width: 600px) {
            .title {
                font-size: 30px;  
            }
        }
`

export { Header }