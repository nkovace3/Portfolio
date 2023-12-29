import React, { useEffect, useState } from 'react';
import './App.css';
import StockChart from './components/StockChart';
import Intro from './components/Intro';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import NavBar from './components/NavBar';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const mainContainer = document.querySelector('.main-container');

    const handleScroll = () => {
      const newScrollPosition = mainContainer.scrollTop;
      setScrollPosition(newScrollPosition);

      // Calculate the section index based on scroll position within the main container
      const sectionHeight = mainContainer.clientHeight;
      const newSectionIndex = Math.floor(newScrollPosition / sectionHeight);
      setCurrentSection(newSectionIndex);
    };

    mainContainer.addEventListener('scroll', handleScroll);

    return () => {
      mainContainer.removeEventListener('scroll', handleScroll);
    };
  }, []);  

  return (
    <div>
      <NavBar />
      <StockChart scrollPosition={scrollPosition} currentSection={currentSection} />
      <div className='main-container'>
        <Intro />
        <AboutMe />
        <Resume />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;

