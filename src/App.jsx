
// import './App.css'
import { useRef } from "react"
import AboutMe from "./components/AboutMe"
import Contact from "./components/Contact"
import HomePage from "./components/HomePage"
import NavBar from "./components/NavBar"
import Services from "./components/Services"
import Testing from "./components/Testing"
import MyWork from "./components/MyWork"
import Footer from "./components/Footer"


function App() {
  const aboutMeRef = useRef(null);
  const servicesRef = useRef(null);
  const myworkRef = useRef(null);
  const contactRef = useRef(null);


  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

 

  return (
    <>
    <div className="bg-gradient-to-r from-gray-50 to-gray-50">
    <NavBar
     scrollToAbout={() => scrollToSection(aboutMeRef)}
     scrollToServices={() => scrollToSection(servicesRef)}
     scrollToContact={() => scrollToSection(contactRef)}
     scrollToMyWork={() => scrollToSection(myworkRef)}
     />
    <HomePage/>
    <AboutMe ref={aboutMeRef}/>
    <Services ref={servicesRef}/>
    <MyWork ref={myworkRef}/>
    <Contact ref={contactRef}/>
    <Footer/>
   

    </div>
        
    </>
  )
}

export default App
