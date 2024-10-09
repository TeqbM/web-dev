import React from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Blog from './Pages/Blog'
import Home from './Pages/Home'

function App() {

  return (
    <>

      <BrowserRouter>
        <Header />
        <main className='py-3'>
          <Routes>
            <Route index element={<Home />}/>
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>

     </>
  )
}

export default App








