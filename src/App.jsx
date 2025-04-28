
import AboutUs from './About Us/AboutUs'
import './App.css'
import Work from './Work/Work'
import Hero from './Hero/Hero'
import Testimonials from './Testimonials/Testimonials'
import WhyUs from './Why Us/WhyUs'
import Plans from './Plans/Plans'
import ResumeBuild from './ResumeBuild/ResumeBuild'
import ContactUs from './ContactUs/ContactUs'
import Footer from './Footer/Footer'

function App() {


  return (
    <div className="max-w-[1500px] mx-auto px-4">
    <Hero/>
    <Work/>
    <div id="about-us">
      <AboutUs/>
    </div>
    <div id="testimonials">
      <Testimonials/>
    </div>
    <WhyUs/>
    <div id="plans">
      <Plans/>
    </div>
    <ResumeBuild/>
    <ContactUs/>
    <Footer/>
  </div>
  )
}

export default App
