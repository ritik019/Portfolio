import { ThemeProvider } from './context/ThemeContext';
import SmoothScroll from './components/SmoothScroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CaseStudies from './components/CaseStudies';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <ThemeProvider>
      <SmoothScroll>
        <Navbar />
        <main>
          <Hero />
          <About />
          <CaseStudies />
          <Projects />
          <Skills />
          <Resume />
          <Contact />
        </main>
      </SmoothScroll>
    </ThemeProvider>
  );
}

export default App;
