import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Lodging() {
  const { id } = useParams() // = élément qui se trouve dans l'URL, après le : dans la Route

  return (
    <div>
      <Header />
      <p>{id}</p>
      <Footer />
    </div>
  )
}

export default Lodging
