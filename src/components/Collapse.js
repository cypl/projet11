import { useState } from 'react'
import ContentParagraph from './ContentParagraph'
import ContentList from './ContentList'

function Collapse({ title, content }) {
  let [open, setOpen] = useState(false)
  function openCollapse() {
    open ? setOpen(false) : setOpen(true)
  }
  // Vérification du type de content
  const isContentParagraph = typeof content === 'string'
  const isContentList = content instanceof Array

  return (
    <article className={open ? 'collapse active' : 'collapse'}>
      <div className="collapse_title" onClick={openCollapse}>
        <p>{title}</p>
      </div>
      <div className="collapse_content">
        {/* Dans le cas où on affiche un seul paragraphe */}
        {isContentParagraph ? <ContentParagraph content={content} /> : ''}
        {/* Dans le cas où on affiche une liste d'éléments */}
        {isContentList ? <ContentList content={content} /> : ''}
      </div>
    </article>
  )
}

export default Collapse
