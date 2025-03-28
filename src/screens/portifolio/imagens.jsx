import { Card } from "../../components/cards"
import data from "../../../data/data.json"
import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import '../home/home.css'

export const Imagens = () => {
    return (
        <div className="portifolio">
            <Header />
            <div className='feed'>
            <h1 className="sercdesc">Imagens que se conectam com pessoas. O nosso objetivo é valarizar a arquitetura e estilo de vida, onde desenvolvemos a ambientação que melhor se adequa co seu projeto</h1>
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