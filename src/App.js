import React, { useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const scrollActive = () => {
      const scrollDown = window.scrollY;
      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        const sectionsClass = document.querySelector(`.nav__menu a[href*="${sectionId}"]`);
        
        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
          if (sectionsClass) {
            sectionsClass.classList.add('active-link');
          }
        } else {
          if (sectionsClass) {
            sectionsClass.classList.remove('active-link');
          }
        }
      });
    };
    window.addEventListener('scroll', scrollActive);
    return () => window.removeEventListener('scroll', scrollActive);
  }, []);

  return (
    <div className="App">
      <Header />
      <main className="l-main">
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
