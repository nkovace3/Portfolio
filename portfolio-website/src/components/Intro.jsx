// import React, { useEffect, useRef } from 'react';
// import '../App.css';
// import RisingStock from '../images/RisingStock.webp';
// import {
//   MDBBtn,
//   MDBCol,
//   MDBContainer,
//   MDBRipple,
//   MDBRow,
// } from "mdb-react-ui-kit";

// function Intro() {
//   const introRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const introRect = introRef.current.getBoundingClientRect();
//       const isInViewport = introRect.top >= 0 && introRect.bottom <= window.innerHeight;

//       if (isInViewport) {
//         console.log('Intro section is visible');
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const scrollToAboutMe = () => {
//     const aboutMeSection = document.getElementById('about-me');
//     const mainContainer = document.getElementById('main-container');
  
//     if (aboutMeSection && mainContainer) {
//       const sectionOffsetTop = aboutMeSection.offsetTop;
//       const mainContainerOffsetTop = mainContainer.offsetTop;
  
//       const offsetRelativeToMainContainer = sectionOffsetTop - mainContainerOffsetTop;
  
//       requestAnimationFrame(() => {
//         mainContainer.scrollTo({
//           top: offsetRelativeToMainContainer,
//           behavior: 'smooth',
//         });
//       });
//     }
//   };
  

//   return (
//     <div className='intro section' id='intro' ref={introRef}>
//       <MDBContainer className="py-5 custom-height">
//         <MDBRow className="gx-5">
//           <MDBCol md="6" className="mb-4">
//             <MDBRipple
//               className="bg-image hover-overlay ripple shadow-2-strong rounded-5"
//               rippleTag="div"
//               rippleColor="light"
//             >
//               <img
//                 src={RisingStock}
//                 className="w-100"
//               />
//               <a href="#!">
//                 <div
//                   className="mask"
//                   style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
//                 ></div>
//               </a>
//             </MDBRipple>
//           </MDBCol>
//           <MDBCol md="6" className="mb-4">
//             <span className="badge bg-danger px-2 py-1 shadow-1-strong mb-3">
//               Today's News
//             </span>
//             <h4>
//               <strong>Exciting Prospects Ahead for Young Stock "NIK"</strong>
//             </h4>
//             <p className="text-muted">
//               In today's tumultuous market, one young contender is capturing the attention of investors and analysts alike. 
//               "NIK," a relatively new entrant to the stock scene, is making waves with its promising performance and bullish outlook for the future.
//             </p>
//             <MDBBtn onClick={scrollToAboutMe}>Learn More</MDBBtn>
//           </MDBCol>
//         </MDBRow>
//       </MDBContainer>
//     </div>
//   );
// }

// export default Intro;
import React, { useEffect, useRef } from 'react';
import '../App.css';
import RisingStock from '../images/RisingStock.webp';
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";

function Intro() {
  const introRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const introRect = introRef.current.getBoundingClientRect();
      const isInViewport = introRect.top >= 0 && introRect.bottom <= window.innerHeight;

      if (isInViewport) {
        console.log('Intro section is visible');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToAboutMe = () => {
    const aboutMeSection = document.getElementById('about-me');
    const mainContainer = document.getElementById('main-container');
  
    if (aboutMeSection && mainContainer) {
      const sectionOffsetTop = aboutMeSection.offsetTop;
      const mainContainerOffsetTop = mainContainer.offsetTop;
  
      const offsetRelativeToMainContainer = sectionOffsetTop - mainContainerOffsetTop;
  
      requestAnimationFrame(() => {
        mainContainer.scrollTo({
          top: offsetRelativeToMainContainer,
          behavior: 'smooth',
        });
      });
    }
  };
  

  return (
    <div className='intro section' id='intro' ref={introRef}>
      <MDBContainer className="py-5 custom-height">
        <MDBRow className="gx-5">
          <MDBCol md="6" className="mb-4">
            <img src={RisingStock} className="w-100" alt="Rising Stock" />
          </MDBCol>
          <MDBCol md="6" className="mb-4">
            <span className="badge bg-danger px-2 py-1 shadow-1-strong mb-3">
              Today's News
            </span>
            <h4>
              <strong>Exciting Prospects Ahead for Young Stock "NIK"</strong>
            </h4>
            <p className="text-muted">
              In today's tumultuous market, one young contender is capturing the attention of investors and analysts alike. 
              "NIK," a relatively new entrant to the stock scene, is making waves with its promising performance and bullish outlook for the future.
            </p>
            <button className="btn btn-danger" onClick={scrollToAboutMe}>Learn More</button>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default Intro;

