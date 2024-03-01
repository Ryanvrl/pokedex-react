import { createContext, useState } from "react"

const themes = {
    light: {
        name: 'Light',
        color: '#fff',
        background: '#fff',
        colorPokemon: '#000',
        backgroundPokemon: ' #cfcfcf',
        backgroundInfos: '#8c8b8b',
    },
    dark: {
        name: 'Dark',
        color: '#000',
        background: '#000',
        colorPokemon: '#fff',
        backgroundPokemon: ' #152736',
        backgroundInfos: '#051018',
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