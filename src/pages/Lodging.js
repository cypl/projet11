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
import NavLodging from '../components/NavLodging'

function Lodging() {
  const { id } = useParams()

  const [data, setData] = useState({})
  const [isDataLoading, setDataLoading] = useState(false)
  const [dataNext, setDataNext] = useState() // correspond juste à un ID
  const [dataPrev, setDataPrev] = useState() // correspond juste à un ID

  useEffect(() => {
    async function fetchData() {
      setDataLoading(true) // ajouter le loader
      // ajouter un setTimeOut
      setTimeout(async () => {
        try {
          const response = await fetch('../data/logements.json')
          const dataLodging = await response.json()
          const d = dataLodging.find((item) => item.id === id)
          if (!d) throw new Error('fail')

          setData(d)

          // Données pour la navigation d'un logement à l'autre
          const lodgingIndex = dataLodging.indexOf(d)
          const totalLodging = dataLodging.length

          // Si on arrive au bout de la liste
          lodgingIndex === totalLodging - 1
            ? setDataNext(dataLodging[0].id) // on revient au début
            : setDataNext(dataLodging[lodgingIndex + 1].id) // sinon on passe à la suivante

          // Si on arrive au début de la liste
          lodgingIndex === 0
            ? setDataPrev(dataLodging[totalLodging - 1].id) // on va directement à la fin
            : setDataPrev(dataLodging[lodgingIndex - 1].id) // sinon on passe à la précédente
        } catch (error) {
          // console.log(error)
          setDataLoading(false)
          setData(undefined)
        } finally {
          setDataLoading(false) // retirer le loader
        }
      }, 1000)
    }
    fetchData()
  }, [id])

  return (
    <div>
      <Header />
      {isDataLoading && <LoaderSection />}

      {data === undefined && !isDataLoading && <Message404 />}

      {data && data.title && (
        <section className="section_base">
          <div className="content_width content_lodging">
            <Gallery content={data.pictures} index={0} />
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
          <NavLodging dataPrev={dataPrev} dataNext={dataNext} />
        </section>
      )}

      <Footer />
    </div>
  )
}

export default Lodging
