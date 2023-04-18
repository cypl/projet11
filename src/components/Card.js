import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

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

Card.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  srcImg: PropTypes.string,
}

export default Card
