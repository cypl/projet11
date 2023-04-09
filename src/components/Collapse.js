import { useState } from 'react'

function Collapse({ title, contentSingle, contentList }) {
  let [open, setOpen] = useState(false)
  function openCollapse() {
    open ? setOpen(false) : setOpen(true)
  }
  const isContentSingle = contentSingle
  const isContentList = contentList

  return (
    <article className={open ? 'collapse active' : 'collapse'}>
      <div className="collapse_title" onClick={openCollapse}>
        <p>{title}</p>
      </div>
      <div className="collapse_content">
        {/* Dans le cas où on affiche un seul paragraphe */}
        {isContentSingle ? <p>{contentSingle}</p> : ''}
        {/* Dans le cas où on affiche une liste d'éléments */}
        {isContentList ? (
          <ul>
            {contentList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : (
          ''
        )}
      </div>
    </article>
  )
}

export default Collapse
