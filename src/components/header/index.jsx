import "./header.css";
import { useLocation } from "react-router-dom";

export const Header = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <div className="header">
            <div className="logoh">
                <a href="/"><img src="/hauz logo.png" alt="Hauz Logo" /></a>
            </div>
            <div className="linksh">
                <a href="/" className={currentPath === "/" ? "active" : ""}>home</a>
                <a href="/sobre" className={currentPath === "/sobre" ? "active" : ""}>sobre</a>
                <a href="/portifolio" className={currentPath === "/portifolio" ? "active" : ""}>portfólio</a>
                <a href="https://linktr.ee/hauzstudio3d" target="_blank" className={currentPath === "/contato" ? "active" : ""}>contato</a>
            </div>
        </div>
    );
};
