import { createContext, useState } from "react"

const themes = {
    light: {
        name: 'Light',
        color: '#fff',
        background: '#F0F4F8',
        colorPokemon: '#000',
        colorPokemonHover: '#fff',
        backgroundPokemon: ' #cfcfcf',
        backgroundInfos: '#8c8b8b',
    },
    dark: {
        name: 'Dark',
        color: '#fff',
        background: '#202C37',
        colorPokemon: '#fff',
        colorPokemonHover: '#fff',
        backgroundPokemon: '#cfcfcf',
        backgroundInfos: '#202C37',
    }
}

const ThemeContext = createContext({})

const getThemeFromLocalStore = () => {
    if (JSON.parse(localStorage.getItem('theme')) == null) {
        return themes.light
    }
    const theme = JSON.parse(localStorage.getItem('theme'))

    return theme
}

const saveThemeToLocalStore = (theme) => {
    localStorage.setItem("theme", JSON.stringify(theme))
}

const ThemeProvider = (props) => {
    const [theme, setTheme] = useState(getThemeFromLocalStore)

    saveThemeToLocalStore(theme)
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProvider, themes }