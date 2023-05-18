import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header>
      <div className="content_width content_header">
        <NavLink to="/">
          <figure className="logo_header">
            <img src="/assets/logo_kasa_red.svg" alt="logo kasa" />
          </figure>
        </NavLink>
        <ul className="nav_header">
          <li className="nav_header_item">
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li className="nav_header_item">
            <NavLink to="/a-propos">A propos</NavLink>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
