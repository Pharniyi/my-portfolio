import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import AiIot from "./pages/AiIot";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Services from "./pages/Services";

function App() {

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />  
        <AiIot />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
