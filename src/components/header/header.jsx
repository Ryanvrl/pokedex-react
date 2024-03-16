import { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../contexts/theme-context'
import { Link } from 'react-router-dom'
import { Container } from '../../styled/styledHeader'

const Header = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <Container theme={theme}>
            <Link to='/'>
                <div className='logo'>
                    <h1 className="title">
                        <img src={"../../../assets/pokemon-logo.png" || "./assets/pokemon-logo.png"} alt="" className='logo-pokemon' />
                    </h1>

                    <img src={"../../assets/pikachu.gif" || "./assets/pikachu.gif"}alt="" className='pikachu' />
                </div>
            </Link>
        </Container>
    )
}


export { Header }