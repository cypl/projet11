function GallerySlide({ slide }) {
  return (
    <figure className="gallery_slide">
      <img src={slide} alt={slide} />
    </figure>
  )
}
export default GallerySlide
