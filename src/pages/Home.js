import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/Banner'

function Home() {
  return (
    <div>
      <Header />
      <Banner
        title="Chez vous, partout et ailleurs"
        srcImage="/assets/banner_home.jpg"
      />
      <Footer />
    </div>
  )
}

export default Home
