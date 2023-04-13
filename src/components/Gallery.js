import { useState } from 'react'
import GalleryCounter from './GalleryCounter'

function Gallery({ content }) {
  const [slideIndex, setSlideIndex] = useState(1) // la galerie commence sur la première slide
  const galleryLength = content.length
  return (
    <div className="gallery_wrapper">
      <div className="gallery">
        {galleryLength > 1 && (
          <GalleryCounter index={slideIndex} total={galleryLength} />
        )}
      </div>
    </div>
  )
}

export default Gallery
