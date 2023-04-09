function TagList({ taglist }) {
  return (
    <ul className="tag_list">
      {taglist.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  )
}

export default TagList
