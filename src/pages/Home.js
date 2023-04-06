import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Cards from '../components/Cards'

function Home() {
  return (
    <div>
      <Header />
      <Banner
        title="Chez vous, partout et ailleurs"
        srcImage="/assets/banner_home.jpg"
      />
      <Cards />
      <Footer />
    </div>
  )
}

export default Home
