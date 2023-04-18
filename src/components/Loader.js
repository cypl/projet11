import PropTypes from 'prop-types'

function Loader({ big }) {
  const bigLoader = big === true
  return <div className={bigLoader ? 'loader big' : 'loader'}></div>
}

Loader.propTypes = {
  big: PropTypes.bool,
}

export default Loader
