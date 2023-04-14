import { useState } from 'react'
import GalleryCounter from './GalleryCounter'
import GallerySlide from './GallerySlide'
import GalleryButton from './GalleryButton'

function Gallery({ content }) {
  const [slideIndex, setSlideIndex] = useState(0) // la galerie commence sur la première slide du tableau
  const galleryLength = content.length
  const isOneImage = galleryLength === 1
  function nextSlide(index) {
    if (index === content.length - 1) {
      setSlideIndex(0)
    } else {
      setSlideIndex(index + 1)
    }
  }
  function prevSlide(index) {
    if (index === 0) {
      setSlideIndex(content.length - 1)
    } else {
      setSlideIndex(index - 1)
    }
  }
  return (
    <div className="gallery_wrapper">
      <div className="gallery">
        <GallerySlide slide={content[slideIndex]} />
        {!isOneImage && (
          <GalleryButton action={() => prevSlide(slideIndex)} target="prev" />
        )}
        {!isOneImage && (
          <GalleryButton action={() => nextSlide(slideIndex)} target="next" />
        )}
        {galleryLength > 0 && (
          <GalleryCounter index={slideIndex + 1} total={galleryLength} />
        )}
      </div>
    </div>
  )
}

export default Gallery
