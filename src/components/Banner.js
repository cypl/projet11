import PropTypes from 'prop-types'

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

Banner.propTypes = {
  title: PropTypes.string,
  srcImg: PropTypes.string,
}

export default Banner
