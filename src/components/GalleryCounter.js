import PropTypes from 'prop-types'

function GalleryCounter({ index, total }) {
  return (
    <p className="gallery_counter">
      {index}/{total}
    </p>
  )
}

GalleryCounter.propTypes = {
  index: PropTypes.number,
  total: PropTypes.number,
}

export default GalleryCounter
