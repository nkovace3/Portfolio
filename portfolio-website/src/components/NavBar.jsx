// import Nav from 'react-bootstrap/Nav';
// import React, { useRef } from 'react';

// function NavBar() {
//   const mainContainerRef = useRef(null);
//   const scrollToSection = (sectionClassName) => {
//     const mainContainer = document.querySelector('.main-container');
//     const section = document.querySelector(`.${sectionClassName}`);
    
//     if (mainContainer && section) {
//       const mainContainerRect = mainContainer.getBoundingClientRect();
//       const sectionRect = section.getBoundingClientRect();
//       const offset = sectionRect.top - mainContainerRect.top;
  
//       mainContainer.scrollTo({
//         top: mainContainer.scrollTop + offset,
//         behavior: 'smooth',
//       });
//     }
//   };

//   return (
//     <Nav variant="underline" defaultActiveKey="/home">
//       <Nav.Item>
//         <Nav.Link onClick={() => scrollToSection('intro')}>Home</Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link onClick={() => scrollToSection('about-me')}>About</Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link onClick={() => scrollToSection('resume')}>Resume</Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link onClick={() => scrollToSection('projects')}>Projects</Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link onClick={() => scrollToSection('contact')}>Contact</Nav.Link>
//       </Nav.Item>
//     </Nav>
//   );
// }

// export default NavBar;
// NavBar.js

// import Nav from 'react-bootstrap/Nav';
// import React, { useRef } from 'react';
// import '../App.css'; // Import the updated CSS

// function NavBar({currentSection}) {
//   const mainContainerRef = useRef(null);
//   const scrollToSection = (sectionClassName) => {
//     const mainContainer = document.querySelector('.main-container');
//     const section = document.querySelector(`.${sectionClassName}`);
    
//     if (mainContainer && section) {
//       const mainContainerRect = mainContainer.getBoundingClientRect();
//       const sectionRect = section.getBoundingClientRect();
//       const offset = sectionRect.top - mainContainerRect.top;
  
//       mainContainer.scrollTo({
//         top: mainContainer.scrollTop + offset,
//         behavior: 'smooth',
//       });
//     }
//   };

//   return (
//     <Nav className="nav" variant="underline" defaultActiveKey="/home">
//       <Nav.Item>
//         <Nav.Link
//           onClick={() => scrollToSection('intro')}
//           className={currentSection === 0 ? 'active' : ''}
//         >
//           Home
//         </Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link
//           onClick={() => scrollToSection('about-me')}
//           className={currentSection === 1 ? 'active' : ''}
//         >
//           About
//         </Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link
//           onClick={() => scrollToSection('resume')}
//           className={currentSection === 2 ? 'active' : ''}
//         >
//           Resume
//         </Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link
//           onClick={() => scrollToSection('projects')}
//           className={currentSection === 3 ? 'active' : ''}
//         >
//           Projects
//         </Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link
//           onClick={() => scrollToSection('contact')}
//           className={currentSection === 4 ? 'active' : ''}
//         >
//           Contact
//         </Nav.Link>
//       </Nav.Item>
//     </Nav>
//   );
// }

// export default NavBar;
// function NavBar({ currentSection, setCurrentSection }) {
//   const mainContainerRef = useRef(null);

//   const scrollToSection = (sectionClassName, sectionIndex) => {
//     const mainContainer = document.querySelector('.main-container');
//     const section = document.querySelector(`.${sectionClassName}`);
    
//     if (mainContainer && section) {
//       const mainContainerRect = mainContainer.getBoundingClientRect();
//       const sectionRect = section.getBoundingClientRect();
//       const offset = sectionRect.top - mainContainerRect.top;
  
//       mainContainer.scrollTo({
//         top: mainContainer.scrollTop + offset,
//         behavior: 'smooth',
//       });

//       // Update the currentSection state
//       setCurrentSection(sectionIndex);
//     }
//   };

//   return (
//     <Nav className="nav" variant="underline" defaultActiveKey="/home">
//       {/* Use the onClick handler to update the currentSection state */}
//       <Nav.Item>
//         <Nav.Link
//           onClick={() => scrollToSection('intro', 0)}
//           className={currentSection === 0 ? 'active' : ''}
//         >
//           Home
//         </Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link
//           onClick={() => scrollToSection('about-me', 1)}
//           className={currentSection === 1 ? 'active' : ''}
//         >
//           About
//         </Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link
//           onClick={() => scrollToSection('resume', 2)}
//           className={currentSection === 2 ? 'active' : ''}
//         >
//           Resume
//         </Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link
//           onClick={() => scrollToSection('projects', 3)}
//           className={currentSection === 3 ? 'active' : ''}
//         >
//           Projects
//         </Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link
//           onClick={() => scrollToSection('contact', 4)}
//           className={currentSection === 4 ? 'active' : ''}
//         >
//           Contact
//         </Nav.Link>
//       </Nav.Item>
//     </Nav>
//   );
// }

// export default NavBar;
// function NavBar({ currentSection, setCurrentSection }) {
//   const mainContainerRef = useRef(null);

//   const scrollToSection = (sectionClassName, sectionIndex) => {
//     const mainContainer = document.querySelector('.main-container');
//     const section = document.querySelector(`.${sectionClassName}`);
    
//     if (mainContainer && section) {
//       const mainContainerRect = mainContainer.getBoundingClientRect();
//       const sectionRect = section.getBoundingClientRect();
//       const offset = sectionRect.top - mainContainerRect.top;
  
//       mainContainer.scrollTo({
//         top: mainContainer.scrollTop + offset,
//         behavior: 'smooth',
//       });

//       // Update the currentSection state
//       setCurrentSection(sectionIndex);
//     }
//   };

//   return (
//     <Nav className="nav" variant="underline" defaultActiveKey="/home">
//       {/* Use the onClick handler to update the currentSection state */}
//       <Nav.Item>
//         <Nav.Link
//           onClick={() => scrollToSection('intro', 0)}
//           className={currentSection === 0 ? 'active' : ''}
//         >
//           Home
//         </Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link
//           onClick={() => scrollToSection('about-me', 1)}
//           className={currentSection === 1 ? 'active' : ''}
//         >
//           About
//         </Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link
//           onClick={() => scrollToSection('resume', 2)}
//           className={currentSection === 2 ? 'active' : ''}
//         >
//           Resume
//         </Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link
//           onClick={() => scrollToSection('projects', 3)}
//           className={currentSection === 3 ? 'active' : ''}
//         >
//           Projects
//         </Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link
//           onClick={() => scrollToSection('contact', 4)}
//           className={currentSection === 4 ? 'active' : ''}
//         >
//           Contact
//         </Nav.Link>
//       </Nav.Item>
//     </Nav>
//   );
// }

// export default NavBar;
import Nav from 'react-bootstrap/Nav';
import React, { useRef } from 'react';
import '../App.css'; // Import the updated CSS

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
    <Nav className="nav" variant="underline" defaultActiveKey="/home">
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
          Highlights
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          onClick={(event) => handleClick('projects', event)}
          className={currentSection === 3 ? 'active' : ''}
        >
          Projects
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
