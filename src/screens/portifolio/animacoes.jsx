import { Card } from "../../components/cards"
import data from "../../../data/data.json"
import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import '../home/home.css'

export const Animacoes = () => {
    return (
        <div className="portifolio">
            <Header />
            <div className='feed'>
                <h1 className="sercdesc">Promove uma maior interação com o projeto por meio dos detalhes, sons e movimentos que provocam sensações e sentimentos co expectador</h1>
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