import { Banner } from '../../components/baner'
import { Footer } from '../../components/footer'
import { Header } from '../../components/header'
import { Card } from '../../components/cards'
import data from "../../../data/data.json"
import '../home/home.css'

export const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <div className='feed'>
        {data.posts
          .filter((post) => post.categoria === "home")
          .map((post) => (
            <Card key={post.id} id={post.id} />
          ))}
      </div>
      <Footer />
    </>
  )
}