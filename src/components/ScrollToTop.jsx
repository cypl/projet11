import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Ce composant permet de revenir en haut de la page, après un changement de page
 * @returns
 */
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
