import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Message404 from '../components/Message404'
import Collapse from '../components/Collapse'
// import TagList from '../components/TagList'

function Lodging() {
  const { id } = useParams()

  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchData() {
      // ajouter un state loading
      try {
        const response = await fetch('../data/logements.json')
        const dataLodging = await response.json()
        setData(dataLodging.find((item) => item.id === id))
      } catch (error) {
        console.log(error)
      } finally {
        // retirer le state loading
      }
    }
    fetchData()
  }, [data, id])

  return (
    <div>
      <Header />
      {data === undefined ? (
        <Message404 />
      ) : (
        <section className="section_base">
          <div className="content_width content_lodging">
            <header className="head_lodging">
              <h1 className="head_lodging__title">{data.title}</h1>
              <p className="head_lodging__location">{data.location}</p>
              {/* <TagList taglist={data.tags} /> */}
            </header>
            <div className="infos_lodging">
              <article>
                <Collapse
                  title="Description"
                  contentSingle={data.description}
                />
              </article>
              <article>
                <Collapse title="Équipements" contentList={data.equipments} />
              </article>
            </div>
          </div>
        </section>
      )}
      <Footer />
    </div>
  )
}

export default Lodging
