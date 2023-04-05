import React from 'react'
// import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Lodging from './pages/Lodging'
import Error from './pages/Error'

function App() {
  // const [data, setData] = useState([])

  // useEffect(() => {
  //   fetch('./data/logements.json')
  //     .then((r) => r.json())
  //     .then((d) => {
  //       setData(d)
  //     })
  // }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/lodging" element={<Lodging />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>

    // <div className="App">
    //   {data.map((lodging) => (
    //     <p key={lodging.id}>{lodging.title}</p>
    //   ))}
    // </div>
  )
}

export default App
