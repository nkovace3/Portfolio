// // import Container from 'react-bootstrap/Container';
// // import Nav from 'react-bootstrap/Nav';
// // import Navbar from 'react-bootstrap/Navbar';
// // import React from 'react';

// // const NavBar = () => {
// //   const scrollToSection = (sectionClassName) => {
// //     const section = document.querySelector(`.${sectionClassName}`);
// //     if (section) {
// //       section.scrollIntoView({ behavior: 'smooth' });
// //     }
// //   };

// //   return (
// //     <Navbar expand="lg" className="p-2">
// //         <Container>
// //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
// //         <Navbar.Collapse id="basic-navbar-nav">
// //             <Nav className="me-auto">
            
// //             </Nav>
// //             <Nav className="ms-auto">
// //             <Nav.Link onClick={() => scrollToSection('intro')}>Intro</Nav.Link>
// //             <Nav.Link onClick={() => scrollToSection('about-me')}>About Me</Nav.Link>
// //             </Nav>
// //         </Navbar.Collapse>
// //         </Container>
// //     </Navbar>
// //     );
// // };

// // export default NavBar;
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import React from 'react';

// const NavBar = () => {
//   const scrollToSection = (sectionClassName) => {
//     const section = document.querySelector(`.${sectionClassName}`);
//     if (section) {
//       section.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <Navbar expand="lg" className="p-2" style={{ zIndex: 1002 }}>
//       <Container>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto">
//             <Nav.Link onClick={() => scrollToSection('intro')}>Intro</Nav.Link>
//             <Nav.Link onClick={() => scrollToSection('about-me')}>About Me</Nav.Link>
//             {/* Add similar lines for other sections */}
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default NavBar;
import React, { useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  const mainContainerRef = useRef(null);

//   const scrollToSection = (sectionClassName) => {
//     console.log('Scrolling to:', sectionClassName);
//     const section = document.querySelector(`.${sectionClassName}`);
//     console.log('Found section:', section);
//     if (section && mainContainerRef.current) {
//       const offsetTop = section.offsetTop - mainContainerRef.current.offsetTop;
//       mainContainerRef.current.scrollTo({ top: offsetTop, behavior: 'smooth' });
//     }
//   };
// const scrollToSection = (sectionClassName) => {
//     const mainContainer = document.querySelector('.main-container');
//     const section = document.querySelector(`.${sectionClassName}`);
    
//     if (mainContainer && section) {
//       const sectionTop = section.offsetTop;
//       mainContainer.scrollTop = sectionTop;
//     }
//   };
const scrollToSection = (sectionClassName) => {
    const mainContainer = document.querySelector('.main-container');
    const section = document.querySelector(`.${sectionClassName}`);
    
    if (mainContainer && section) {
      const mainContainerRect = mainContainer.getBoundingClientRect();
      const sectionRect = section.getBoundingClientRect();
      const offset = sectionRect.top - mainContainerRect.top;
  
      mainContainer.scrollTop += offset;
    }
  };
  

  return (
    <Navbar expand="lg" className="p-2" style={{ zIndex: 1002 }}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="ms-auto">
            <Nav.Link onClick={() => scrollToSection('intro')}>Home</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('about-me')}>About Me</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('resume')}>Resume</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('projects')}>Projects</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('contact')}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;


