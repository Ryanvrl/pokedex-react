import React from "react";
import { useContext } from "react"
import { ThemeContext, themes } from "../contexts/theme-context"
import { ButtonTheme } from "../../styled/styledDarkMode";


const DarkMode = () => {
    const { theme, setTheme } = useContext(ThemeContext)

    const handleChange = (e) => {
        setTheme(theme.name == 'Light' ? themes.dark : themes.light)
    }

    const selectedTheme = () => {
        if (JSON.parse(localStorage.getItem('theme')) == null) {
            return false
        }
        const theme = JSON.parse(localStorage.getItem('theme'))
        if (theme.name == 'Dark') {
            return true
        }
        return false
    }

    return (
        <ButtonTheme className='dark_mode' theme={theme}>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={handleChange}
                defaultChecked={selectedTheme()}
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                <img src="./assets/Moon.svg" alt="" className="moon" />
                <img src="./assets/Sun.svg" alt="" className="sun" />
            </label>
        </ButtonTheme>
    );
};

export default DarkMode;