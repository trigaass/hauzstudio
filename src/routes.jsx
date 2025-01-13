import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./screens/home"
import { Portifolio } from "./screens/portifolio/portifolio"
import { About } from "./screens/sobre"

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/portifolio" element={<Portifolio />}/>
                <Route path="/sobre" element={<About />} />
            </Routes>
        </BrowserRouter>
    )
}