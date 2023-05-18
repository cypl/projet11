import PropTypes from 'prop-types'

function ContentParagraph({ content }) {
  return <p>{content}</p>
}

ContentParagraph.propTypes = {
  content: PropTypes.string,
}

export default ContentParagraph
