import { Link, Routes, Route } from 'react-router-dom'
import Home from './assets/page/home'
import Contact from './assets/page/contact'
import Services from './assets/page/services'
import Navbar from './components/navbar'
import About from './assets/page/about'
import Slug from './assets/page/slug'

function App() {

  return (
    <>
      

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
        <Route path='/products/:id' element={<Slug />} />
        <Route path='*' element={<div className='text-red-500 text-2xl'>404 Not Found</div>} />
      </Routes>

    </>
  )
}

export default App
