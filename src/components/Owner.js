import PropTypes from 'prop-types'

function Owner({ name, picture }) {
  return (
    <div className="owner">
      <p className="owner_name">{name}</p>
      <figure className="owner_picture">
        <img src={picture} alt="{name}" />
      </figure>
    </div>
  )
}

Owner.propTypes = {
  name: PropTypes.string,
  picture: PropTypes.string,
}

export default Owner
