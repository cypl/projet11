import PropTypes from 'prop-types'

function ContentList({ content }) {
  return (
    <ul>
      {content.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

ContentList.propTypes = {
  content: PropTypes.array,
}

export default ContentList
