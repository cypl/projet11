function ContentList({ content }) {
  return (
    <ul>
      {content.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

export default ContentList
