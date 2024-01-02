import Nav from 'react-bootstrap/Nav';
import React, { useRef } from 'react';
import '../App.css';

function NavBar({ currentSection }) {
  const mainContainerRef = useRef(null);

  const scrollToSection = (sectionClassName) => {
    const mainContainer = document.querySelector('.main-container');
    const section = document.querySelector(`.${sectionClassName}`);

    if (mainContainer && section) {
      const mainContainerRect = mainContainer.getBoundingClientRect();
      const sectionRect = section.getBoundingClientRect();
      const offset = sectionRect.top - mainContainerRect.top;

      mainContainer.scrollTo({
        top: mainContainer.scrollTop + offset,
        behavior: 'smooth',
      });
    }
  };

  const handleClick = (section, event) => {
    scrollToSection(section);
    event.currentTarget.blur(); // Remove focus after clicking
  };

  return (
    <Nav className="nav" variant="underline">
      <Nav.Item>
        <Nav.Link
          onClick={(event) => handleClick('intro', event)}
          className={currentSection === 0 ? 'active' : ''}
        >
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          onClick={(event) => handleClick('about-me', event)}
          className={currentSection === 1 ? 'active' : ''}
        >
          About
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          onClick={(event) => handleClick('resume', event)}
          className={currentSection === 2 ? 'active' : ''}
        >
          Past
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          onClick={(event) => handleClick('projects', event)}
          className={currentSection === 3 ? 'active' : ''}
        >
          Portfolio
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          onClick={(event) => handleClick('contact', event)}
          className={currentSection === 4 ? 'active' : ''}
        >
          Contact
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavBar;
