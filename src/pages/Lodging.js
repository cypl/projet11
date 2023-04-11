import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Message404 from '../components/Message404'
import Collapse from '../components/Collapse'
import TagList from '../components/TagList'
import Owner from '../components/Owner'
import Rating from '../components/Rating'

function Lodging() {
  const { id } = useParams()

  const [data, setData] = useState()

  useEffect(() => {
    async function fetchData() {
      // ajouter un state loading
      try {
        const response = await fetch('../data/logements.json')
        const dataLodging = await response.json()
        // ajouter un setTimeOut
        setData(dataLodging.find((item) => item.id === id))
      } catch (error) {
        console.log(error)
      } finally {
        // retirer le state loading
      }
    }
    fetchData()
  }, [id])

  return (
    <div>
      <Header />
      {data === undefined ? (
        <Message404 />
      ) : (
        <section className="section_base">
          <div className="content_width content_lodging">
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
