import { Card } from "../../components/cards"
import data from "../../../data/data.json"
import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import '../home/home.css'

export const Plantas = () => {
    return (
        <div className="portifolio">
            <Header />
            <div className='feed'>
            <h1 className="sercdesc">E a projeção detalhada de cada ambiente representado de forma precisa e didôtica com o objetivo de facilitar o entendimento do seu projeto.</h1>
                {data.posts
                    .filter((post) => post.categoria === "home")
                    .map((post) => (
                        <Card key={post.id} id={post.id} />
                    ))}
            </div>
            <Footer />
        </div>
    )
}