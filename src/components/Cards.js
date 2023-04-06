import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

function Cards() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('./data/logements.json')
      .then((r) => r.json())
      .then((d) => {
        setData(d)
      })
  }, [])

  return (
    <section className="section_cards">
      <div className="content_width content_cards">
        {data.map((lodging) => (
          <article key={lodging.id} className="article_card">
            <NavLink to={`/logements/${lodging.id}`} key={lodging.id}>
              <h2 className="title_card">{lodging.title}</h2>
              <figure className="image_card">
                <img src={lodging.cover} alt={'Aperçu de ' + lodging.title} />
              </figure>
            </NavLink>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Cards
