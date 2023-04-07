import { NavLink } from 'react-router-dom'

function Card({ id, title, srcImg }) {
  return (
    <article className="article_card">
      <NavLink to={`/logements/${id}`}>
        <h2 className="title_card">{title}</h2>
        <figure className="image_card">
          <img src={srcImg} alt={title} />
        </figure>
      </NavLink>
    </article>
  )
}

export default Card
