import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

const ThemeToggleButton = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);

    return(
        <button onClick={toggleTheme}>Alterar Tema de {theme==='dark' ? 'dark' : 'light'} para {theme==='dark' ? 'light' : 'dark'}</button>
    );
}

export default ThemeToggleButton