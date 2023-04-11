import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Card from '../components/Card'
import { useFetchJson } from '../hooks/useFetchJson'

function Home() {
  const [data, setData] = useState([])
  useFetchJson('../data/logements.json', setData)

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
