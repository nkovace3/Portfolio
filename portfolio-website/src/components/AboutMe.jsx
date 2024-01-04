// import React, { useRef } from 'react';
// import '../App.css';
// import ListGroup from 'react-bootstrap/ListGroup';
// import Container from 'react-bootstrap/Container';
// import Me from '../images/Me.jpg';

// function AboutMe() {
//   const aboutMeRef = useRef(null);

//   return (
//     <div className='about-me section' id='about-me' ref={aboutMeRef}>
//       <h1 style={{ marginLeft: '12vh', marginBottom: '10vh', fontSize: '2.5vw' }}>About "NIK"</h1>
//       <Container className="d-flex justify-content-center" style={{ marginBottom: '100vh' }}>
//         <div style={{ display: 'flex', maxWidth: '90%', gap: '3vh' }}>
//           <ListGroup variant="flush">
//             <p><strong>History</strong></p>
//             <ListGroup.Item>
//               <div className="list-item-content">
//                 <span className="left-text">School:</span><strong>Western University</strong>
//               </div>
//             </ListGroup.Item>
//             <ListGroup.Item>
//               <div className="list-item-content">
//                 <span className="left-text">Year:</span><strong>4</strong>
//               </div>
//             </ListGroup.Item>
//             <ListGroup.Item>
//               <div className="list-item-content">
//                 <span className="left-text" style={{ marginRight: '3vh' }}>Program:</span><strong>Software Engineering & Ivey HBA</strong>
//               </div>
//             </ListGroup.Item>
//             <ListGroup.Item>
//               <div className="list-item-content">
//                 <span className="left-text">City:</span><strong>London, Ontario, Canada</strong>
//               </div>
//             </ListGroup.Item>
//             <ListGroup.Item>
//               <div className="list-item-content">
//                 <span className="left-text">Seeking:</span><strong>Summer 2024 Internship</strong>
//               </div>
//             </ListGroup.Item>
//           </ListGroup>

//           <ListGroup variant="flush">
//             <p><strong>Coursework Portfolio</strong></p>
//             <ListGroup.Item>
//               <div className="list-item-content">
//                 <span className="left-text">Web Technologies</span>
//               </div>
//             </ListGroup.Item>
//             <ListGroup.Item>
//               <div className="list-item-content">
//                 <span className="left-text">Database Management Systems</span>
//               </div>
//             </ListGroup.Item>
//             <ListGroup.Item>
//               <div className="list-item-content">
//                 <span className="left-text">Data Structures & Algorithms</span>
//               </div>
//             </ListGroup.Item>
//             <ListGroup.Item>
//               <div className="list-item-content">
//                 <span className="left-text">Leading People & Organizations</span>
//               </div>
//             </ListGroup.Item>
//             <ListGroup.Item>
//               <div className="list-item-content">
//                 <span className="left-text">Project & Process Management</span>
//               </div>
//             </ListGroup.Item>
//           </ListGroup>

//           <ListGroup variant="flush">
//             <p><strong>Interests Portfolio</strong></p>
//             <ListGroup.Item>
//               <div className="list-item-content">
//                 <span className="left-text">NBA Analytics</span>
//               </div>
//             </ListGroup.Item>
//             <ListGroup.Item>
//               <div className="list-item-content">
//                 <span className="left-text">Volleyball</span>
//               </div>
//             </ListGroup.Item>
//             <ListGroup.Item>
//               <div className="list-item-content">
//                 <span className="left-text">Classic Movies</span>
//               </div>
//             </ListGroup.Item>
//             <ListGroup.Item>
//               <div className="list-item-content">
//                 <span className="left-text">Electronic Music & DJing</span>
//               </div>
//             </ListGroup.Item>
//             <ListGroup.Item>
//               <div className="list-item-content">
//                 <span className="left-text">Live Concerts</span>
//               </div>
//             </ListGroup.Item>
//           </ListGroup>

//           <ListGroup variant="flush">
//             <p><strong>Market Profile</strong></p>
//             <ListGroup.Item>
//               <div className="list-item-content" style={{ display: 'flex', alignItems: 'center' }}>
//                 <img src={Me} alt="Me" style={{ width: '20vh', marginRight: '1rem' }} />
//               </div>
//             </ListGroup.Item>
//           </ListGroup>
//         </div>
//       </Container>
//     </div>
//   );
// }

// export default AboutMe;
import React, { useRef } from 'react';
import '../App.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Me from '../images/Me.jpg';

function AboutMe() {
  const aboutMeRef = useRef(null);

  return (
    <div className='about-me section' id='about-me' ref={aboutMeRef}>
      <h1 style={{ marginLeft: '12vh', marginBottom: '10vh', fontSize: '2.5vw' }}>About "NIK"</h1>
      <Container className="d-flex justify-content-center" style={{ marginBottom: '100vh' }}>
        <div style={{ display: 'flex', maxWidth: '90%', gap: '3vh' }}>
          <ListGroup variant="flush">
            <p><strong>History</strong></p>
            <ListGroup.Item style={{ whiteSpace: 'nowrap' }}>
              <div className="list-item-content">
                <span className="left-text">School:</span><strong>Western University</strong>
              </div>
            </ListGroup.Item>
            <ListGroup.Item style={{ whiteSpace: 'nowrap' }}>
              <div className="list-item-content">
                <span className="left-text">Year:</span><strong>4</strong>
              </div>
            </ListGroup.Item>
            <ListGroup.Item style={{ whiteSpace: 'nowrap' }}>
              <div className="list-item-content">
                <span className="left-text" style={{ marginRight: '3vh' }}>Program:</span><strong>Software Engineering & Ivey HBA</strong>
              </div>
            </ListGroup.Item>
            <ListGroup.Item style={{ whiteSpace: 'nowrap' }}>
              <div className="list-item-content">
                <span className="left-text">City:</span><strong>London, Ontario, Canada</strong>
              </div>
            </ListGroup.Item>
            <ListGroup.Item style={{ whiteSpace: 'nowrap' }}>
              <div className="list-item-content">
                <span className="left-text">Seeking:</span><strong>Summer 2024 Internship</strong>
              </div>
            </ListGroup.Item>
          </ListGroup>

          <ListGroup variant="flush">
            <p><strong>Coursework Portfolio</strong></p>
            <ListGroup.Item style={{ whiteSpace: 'nowrap' }}>
              <div className="list-item-content">
                <span className="left-text">Web Technologies</span>
              </div>
            </ListGroup.Item>
            <ListGroup.Item style={{ whiteSpace: 'nowrap' }}>
              <div className="list-item-content">
                <span className="left-text">Database Management Systems</span>
              </div>
            </ListGroup.Item>
            <ListGroup.Item style={{ whiteSpace: 'nowrap' }}>
              <div className="list-item-content">
                <span className="left-text">Data Structures & Algorithms</span>
              </div>
            </ListGroup.Item>
            <ListGroup.Item style={{ whiteSpace: 'nowrap' }}>
              <div className="list-item-content">
                <span className="left-text">Leading People & Organizations</span>
              </div>
            </ListGroup.Item>
            <ListGroup.Item style={{ whiteSpace: 'nowrap' }}>
              <div className="list-item-content">
                <span className="left-text">Project & Process Management</span>
              </div>
            </ListGroup.Item>
          </ListGroup>

          <ListGroup variant="flush">
            <p><strong>Interests Portfolio</strong></p>
            <ListGroup.Item style={{ whiteSpace: 'nowrap' }}>
              <div className="list-item-content">
                <span className="left-text">NBA Analytics</span>
              </div>
            </ListGroup.Item>
            <ListGroup.Item style={{ whiteSpace: 'nowrap' }}>
              <div className="list-item-content">
                <span className="left-text">Volleyball</span>
              </div>
            </ListGroup.Item>
            <ListGroup.Item style={{ whiteSpace: 'nowrap' }}>
              <div className="list-item-content">
                <span className="left-text">Classic Movies</span>
              </div>
            </ListGroup.Item>
            <ListGroup.Item style={{ whiteSpace: 'nowrap' }}>
              <div className="list-item-content">
                <span className="left-text">Electronic Music & DJing</span>
              </div>
            </ListGroup.Item>
            <ListGroup.Item style={{ whiteSpace: 'nowrap' }}>
              <div className="list-item-content">
                <span className="left-text">Live Concerts</span>
              </div>
            </ListGroup.Item>
          </ListGroup>

          <ListGroup variant="flush">
            <p><strong>Market Profile</strong></p>
            <ListGroup.Item style={{ whiteSpace: 'nowrap' }}>
              <div className="list-item-content" style={{ display: 'flex', alignItems: 'center' }}>
                <img src={Me} alt="Me" style={{ width: '20vh', marginRight: '1rem' }} />
              </div>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </Container>
    </div>
  );
}

export default AboutMe;

