import "./header.css";
import { useLocation } from "react-router-dom";

export const Header = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const isServicosActive = currentPath.startsWith("/servicos");

    return (
        <div className="header">
            <div className="logoh">
                <a href="/"><img src="/hauz logo.png" alt="Hauz Logo" /></a>
            </div>
            <div className="linksh">
                <a href="/" className={currentPath === "/" ? "active" : ""}>home</a>
                <a href="/sobre" className={currentPath === "/sobre" ? "active" : ""}>sobre</a>
                <div className="dropdown">
                    <p className={isServicosActive ? "active" : ""}>serviços</p>
                    <div className="dropdown-menu">
                        <a href="/servicos/imagens">Imagens 3D</a>
                        <a href="/servicos/animacoes">Filmes e Animações</a>
                        <a href="/servicos/plantas">Plantas Humanizadas</a>
                        <a href="/portifolio/item4">Item 4</a>
                    </div>
                </div>
                <a href="https://linktr.ee/hauzstudio3d" target="_blank" className={currentPath === "/contato" ? "active" : ""}>contato</a>
            </div>
        </div>
    );
};