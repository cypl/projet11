import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Collapse from '../components/Collapse'
import { useFetchJson } from '../hooks/useFetchJson'

function About() {
  const [data, setData] = useState([])
  useFetchJson('../data/about.json', setData)

  return (
    <div>
      <Header />
      <Banner srcImage="/assets/banner_about.jpg" />
      <section className="section_base">
        <div className="content_width">
          <div className="content_about">
            {data.map((aboutItem) => (
              <Collapse
                key={aboutItem.id}
                title={aboutItem.title}
                content={aboutItem.content}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default About
