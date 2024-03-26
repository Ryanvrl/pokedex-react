import { useContext } from 'react'
import { ThemeContext } from '../contexts/theme-context'
import { Link } from 'react-router-dom'
import { Container } from '../../styled/styledHeader'
import logo from '../../assets/pokemon-logo.png'
import pikachu from '../../assets/pikachu.gif'

const Header = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <Container theme={theme}>
            <Link to='/'>
                <div className='logo'>
                    <h1 className="title">
                        <img src={logo} alt="" className='logo-pokemon' />
                    </h1>

                    <img src={pikachu}alt="" className='pikachu' />
                </div>
            </Link>
        </Container>
    )
}

export { Header }