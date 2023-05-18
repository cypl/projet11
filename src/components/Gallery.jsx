import { useEffect, useState } from 'react'
import GalleryCounter from './GalleryCounter'
import GallerySlide from './GallerySlide'
import GalleryButton from './GalleryButton'
import PropTypes from 'prop-types'

function Gallery({ content }) {
  const [slideIndex, setSlideIndex] = useState(0) // la galerie commence sur la première slide du tableau
  const [images, setContent] = useState(content)

  function nextSlideIndex(slideIndex) {
    slideIndex !== images.length - 1
      ? setSlideIndex((slideIndex) => slideIndex + 1)
      : setSlideIndex(0)
  }

  function prevSlideIndex(slideIndex) {
    slideIndex !== 0
      ? setSlideIndex((slideIndex) => slideIndex - 1)
      : setSlideIndex(images.length - 1)
  }

  useEffect(() => {
    // ce hook sert uniquement à générer un nouveau rendu du composant
    // lorsque le state slideIndex change.
  }, [slideIndex])

  // ce hook sert à forcer le retour de slideIndex à 0 lorsque l'on change de logement
  // la gallerie repart alors sur la première image.
  useEffect(() => {
    setSlideIndex(0)
    setContent(content)
  }, [content])

  return (
    <div className="gallery_wrapper">
      <div className="gallery">
        <GallerySlide slide={images[slideIndex]} />
        {images.length > 1 && (
          <GalleryButton
            action={() => prevSlideIndex(slideIndex)}
            target="prev"
          />
        )}
        {images.length > 1 && (
          <GalleryButton
            action={() => nextSlideIndex(slideIndex)}
            target="next"
          />
        )}
        {images.length > 1 && (
          <GalleryCounter index={slideIndex + 1} total={images.length} />
        )}
      </div>
    </div>
  )
}

Gallery.propTypes = {
  content: PropTypes.array,
}

export default Gallery
