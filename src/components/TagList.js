import PropTypes from 'prop-types'

function TagList({ taglist }) {
  return (
    <ul className="tag_list">
      {taglist.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  )
}

TagList.propTypes = {
  taglist: PropTypes.array,
}

export default TagList
