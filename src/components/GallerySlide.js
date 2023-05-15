import PropTypes from 'prop-types'

function GallerySlide({ slide }) {
  // /**
  //  * Fonction qui permet de récupérer le nom du fichier dans l'URL
  //  * @param {*} url
  //  * @returns le nom du fichier image sans l'extension
  //  */
  // function getFileName(url) {
  //   const parts = url.slide.split('/')
  //   const lastPart = parts[parts.length - 1]
  //   const file = lastPart.split('.')
  //   return file[0] // = le nom du fichier sans l'extension
  // }

  // const fileName = getFileName({ slide })

  return (
    <figure className="gallery_slide">
      <img src={slide} alt={slide} />
    </figure>
  )
}

GallerySlide.propTypes = {
  slide: PropTypes.string,
}

export default GallerySlide
