import React from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Blog from './Pages/Blog'
import Home from './Pages/Home'
import Gallery from './Pages/Gallery'
import SingleBlog from './Pages/SingleBlog'


function App() {

  return (
    <>

      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route index element={<Home />}/>
            <Route path="/blog/" element={<Blog />} />
            <Route path="/blog/:id" element={<SingleBlog />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>

     </>
  )
}

export default App








