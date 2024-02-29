import { useContext } from "react"
import styled from "styled-components"
import { ThemeContext, themes } from "../contexts/theme-context"

const Theme = () => {
    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <Button onClick={() => setTheme(theme === themes.ligth ? themes.dark : themes.ligth)} theme={theme}>Change theme</Button>
    )
}

const Button = styled.button`
    width: 200px;
    background: none;
    border: none;
    color: ${(theme) => theme.theme.color};
    cursor: pointer;
    padding: 20px;
    border-radius: 10px;
    background-color:  #E3350D;
    
    font-weight: 700;
    
    @media (max-width: 550px) {
        width: 130px;
    }

    @media (max-width: 330px) {
        font-size: 13px;
    }
`

export { Theme }