import { createContext, useState } from "react"

const themes = {
    ligth: {
        color: '#fff',
        background: '#fff',
        colorPokemon: '#000',
        backgroundPokemon: ' #cfcfcf',
        backgroundInfos: '#8c8b8b',
    },
    dark: {
        color: '#000',
        background: '#000',
        colorPokemon: '#fff',
        backgroundPokemon: ' #152736',
        backgroundInfos: '#051018',
    }
}

const ThemeContext = createContext({})

const ThemeProvider = (props) => {
    const [ theme, setTheme ] = useState(themes.ligth)

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProvider, themes}