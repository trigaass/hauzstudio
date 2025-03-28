import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./screens/home"
import { About } from "./screens/sobre"
import { Imagens } from "./screens/portifolio/imagens"
import { Animacoes } from "./screens/portifolio/animacoes"
import { Plantas } from "./screens/portifolio/plantas"

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<About />} />
                <Route path="/servicos/imagens" element={<Imagens />}/>
                <Route path="/servicos/animacoes" element={<Animacoes />}/>
                <Route path="/servicos/plantas" element={<Plantas />}/>
            </Routes>
        </BrowserRouter>
    )
}