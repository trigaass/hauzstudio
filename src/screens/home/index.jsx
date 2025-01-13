import { useNavigate } from 'react-router-dom'
import { Banner } from '../../components/baner'
import { Footer } from '../../components/footer'
import { Header } from '../../components/header'
import { Card } from '../../components/cards'
import  data  from "../../../data/data.json"
import '../home/home.css'

export const Home = () => {
  const navigate = useNavigate();
  const maxCards = 9;

  const handleClick = () => {
    navigate("/portifolio");
  }

  return (
    <>
      <Header />
      <Banner />
      <div className='feed'>
      {data.posts.slice(0, maxCards).map((post) => (
                <Card key={post.id} id={post.id} />
            ))}
      <a href="/portifolio">Ver todos os projetos</a>
      </div>
      <Footer />
    </>
  )
}