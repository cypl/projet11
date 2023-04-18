import { useEffect, useState } from 'react'
import GalleryCounter from './GalleryCounter'
import GallerySlide from './GallerySlide'
import GalleryButton from './GalleryButton'
import PropTypes from 'prop-types'

function Gallery({ content }) {
  const [slideIndex, setSlideIndex] = useState(0) // la galerie commence sur la première slide du tableau
  const [images, setContent] = useState(content)

  useEffect(() => {
    setSlideIndex(0)
    setContent(content)
  }, [content])

  function nextSlide() {
    setSlideIndex((current) => {
      return (current + 1) % images.length
    })
  }
  function prevSlide() {
    setSlideIndex((current) => {
      return images.length - 1 + current
    })
  }

  return (
    <div className="gallery_wrapper">
      <div className="gallery">
        <GallerySlide slide={images[slideIndex]} />
        {images.length > 1 && (
          <GalleryButton action={() => prevSlide()} target="prev" />
        )}
        {images.length > 1 && (
          <GalleryButton action={() => nextSlide()} target="next" />
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
