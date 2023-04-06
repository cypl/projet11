function Banner({ title, srcImage }) {
  const titleExist = title
  const srcImageExist = srcImage
  return (
    <section className="banner">
      <div className="content_width banner_content">
        {srcImageExist ? (
          <figure className="banner_image">
            <img src={srcImage} alt={title} />
          </figure>
        ) : (
          ''
        )}
        {titleExist ? <h1 className="banner_title">{title}</h1> : ''}
      </div>
    </section>
  )
}

export default Banner
