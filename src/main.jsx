import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import About from './pages/About'
import Contact from './pages/contact'
// import Events from './Event'
import Footer from './footer'
// import Navbar from './Navbar'
import Home from './pages/home'
import Projects from './projectcom'
import Testimonials from './dadka waxy dhaheen'
import Xaflada from './ka qaybgadka'
// import Header from './header'
import { BrowserRouter } from 'react-router-dom'
import Nar from './nav'
// import App from './pages/Navbar'
// import Jinow from './header'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<BrowserRouter>
<Nar/>

{/* <Header/> */}
    {/* <Navbar/>  */}
{/* <Jinow/> */}
    <Home/>

    {/* <App/> */}
    <Xaflada/>
    <Projects/>
<Testimonials/>
    <About/>
    <Contact/>
    {/* <Events/> */}
    <Footer/>
</BrowserRouter>  
    
  </StrictMode>,
)
