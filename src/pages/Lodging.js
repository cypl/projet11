import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Message404 from '../components/Message404'
import Collapse from '../components/Collapse'
import TagList from '../components/TagList'
import Owner from '../components/Owner'
import Rating from '../components/Rating'
import LoaderSection from '../components/LoaderSection'
import Gallery from '../components/Gallery'

function Lodging() {
  const { id } = useParams()

  const [data, setData] = useState()
  const [isDataLoading, setDataLoading] = useState(false)

  useEffect(() => {
    async function fetchData() {
      setDataLoading(true) // ajouter le loader
      try {
        const response = await fetch('../data/logements.json')
        const dataLodging = await response.json()
        // ajouter un setTimeOut
        setTimeout(() => {
          setData(dataLodging.find((item) => item.id === id))
        }, 1000)
        setTimeout(() => {
          setDataLoading(false) // retirer le loader
        }, 1001)
      } catch (error) {
        console.log(error)
      } finally {
        // setDataLoading(false) // retirer le loader
      }
    }
    fetchData()
  }, [id])

  return (
    <div>
      <Header />
      {isDataLoading && <LoaderSection />}

      {data === undefined && !isDataLoading && <Message404 />}

      {data && (
        <section className="section_base">
          <div className="content_width content_lodging">
            <Gallery content={data.pictures} />
            <header className="head_lodging">
              <div className="head_lodging__left">
                <h1 className="head_lodging__title">{data.title}</h1>
                <p className="head_lodging__location">{data.location}</p>
                <TagList taglist={data.tags} />
              </div>
              <div className="head_lodging__right">
                <Owner name={data.host.name} picture={data.host.picture} />
                <Rating rating={data.rating} />
              </div>
            </header>
            <div className="infos_lodging">
              <div>
                <Collapse title="Description" content={data.description} />
              </div>
              <div>
                <Collapse title="Équipements" content={data.equipments} />
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  )
}

export default Lodging
