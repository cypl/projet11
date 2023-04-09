import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Collapse from '../components/Collapse'

function About() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('./data/about.json')
      .then((r) => r.json())
      .then((d) => {
        setData(d)
      })
  }, [])

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
                contentSingle={aboutItem.content}
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
