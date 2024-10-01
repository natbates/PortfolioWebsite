import { ThemeContext } from "./App";
import { useContext } from "react";
import "../styles/themeButton.css";

const ThemeButton = () =>
    {

        const {theme, toggleTheme} = useContext(ThemeContext);

        return (
            <button className = "theme-button" onClick={toggleTheme}></button>
        );
    } 


export default ThemeButton;