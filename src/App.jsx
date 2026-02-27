import { ThemeProvider } from './context/ThemeContext';
import SmoothScroll from './components/SmoothScroll';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Journey from './components/Journey';
import CaseStudies from './components/CaseStudies';
import ProductThinking from './components/ProductThinking';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <ThemeProvider>
      <SmoothScroll>
        <ScrollProgress />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Journey />
          <CaseStudies />
          <ProductThinking />
          <Skills />
          <Resume />
          <Contact />
        </main>
      </SmoothScroll>
    </ThemeProvider>
  );
}

export default App;
