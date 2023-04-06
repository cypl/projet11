import { useParams } from 'react-router-dom'
// import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Lodging() {
  const { id } = useParams()

  return (
    <div>
      <Header />
      <p>{id}</p>
      <Footer />
    </div>
  )
}

export default Lodging
