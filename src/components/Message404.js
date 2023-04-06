import { NavLink } from 'react-router-dom'

function Message404() {
  return (
    <section className="section_message404">
      <div className="content_width content_message404">
        <h1 className="title_message404">404</h1>
        <p className="txt_message404">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <p className="return_message404">
          <NavLink to="/">Retourner sur la page d'accueil.</NavLink>
        </p>
      </div>
    </section>
  )
}
export default Message404
