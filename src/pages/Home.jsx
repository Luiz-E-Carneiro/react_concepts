import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Home() {
    const {theme} = useContext(ThemeContext);
    
    return (
        <>
            <div>
                <h2>Aplicação React - Fundamentos</h2>
                <p>Abacaxi ... 🍍</p>

                <h4>Tema: {theme}</h4>
                
            </div>
        </>
    );
}