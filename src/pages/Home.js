import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Card from '../components/Card'

function Home() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('../data/logements.json')
      .then((r) => r.json())
      .then((d) => {
        setData(d)
      })
  }, [])

  useEffect(() => {
    document.title = 'KASA - Location de logement'
  }, [])

  return (
    <div>
      <Header />
      <Banner
        title="Chez vous, partout et ailleurs"
        srcImage="/assets/banner_home.jpg"
      />
      <section className="section_base">
        <div className="content_width content_cards">
          {data.map((lodging) => (
            <Card
              key={lodging.id}
              id={lodging.id}
              title={lodging.title}
              srcImg={lodging.cover}
            />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Home
