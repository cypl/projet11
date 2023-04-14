function GalleryButton({ action, target }) {
  return (
    <div
      className={target === 'next' ? 'gallery_btn next' : 'gallery_btn prev'}
      onClick={action}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 448"
        className="gallery_btn_svg"
      >
        <path d="M201.4,326.65c12.5,12.5,32.8,12.5,45.3,0l160-160c12.5-12.5,12.5-32.8,0-45.3s-32.8-12.5-45.3,0l-137.4,137.4L86.6,121.45c-12.5-12.5-32.8-12.5-45.3,0s-12.5,32.8,0,45.3l160,160,.1-.1Z" />
      </svg>
    </div>
  )
}
export default GalleryButton
