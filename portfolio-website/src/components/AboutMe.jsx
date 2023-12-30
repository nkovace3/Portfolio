// import React, { useRef } from 'react';
// import '../App.css';
// import ListGroup from 'react-bootstrap/ListGroup';
// import Container from 'react-bootstrap/Container';
// import Me from '../images/Me.jpg';

// function AboutMe() {
//   const aboutMeRef = useRef(null);

//   return (
//     <div className='about-me section' id='about-me' ref={aboutMeRef}>
//       <h1 style={{ marginLeft: '10px' }}>About "NIK"</h1>
//       <div className="d-flex align-items-center justify-content-center">
//       <Container style={{ maxWidth: '200vh', marginBottom: '100vh'}}>
//         <div className="d-flex">
//           <ListGroup variant="flush">
//           <p><strong>History</strong></p>
//           <ListGroup.Item>
//              <div className="list-item-content">
//                <span className="left-text">School:</span><strong>Western University</strong>
//              </div>
//            </ListGroup.Item>
//            <ListGroup.Item>
//              <div className="list-item-content">
//                <span className="left-text">Year:</span><strong>4</strong>
//              </div>
//            </ListGroup.Item>
//            <ListGroup.Item>
//              <div className="list-item-content">
//                <span className="left-text" style={{ marginRight: '20px' }}>Program:</span><strong>Software Engineering & Ivey HBA</strong>
//              </div>
//            </ListGroup.Item>
//            <ListGroup.Item>
//              <div className="list-item-content">
//              <span className="left-text">City:</span><strong>London, Ontario, Canada</strong>
//              </div>
//            </ListGroup.Item>
//           </ListGroup>
//           <ListGroup variant="flush">
//           <p><strong>Coursework Portfolio</strong></p>
//           <ListGroup.Item>
//              <div className="list-item-content">
//                <span className="left-text">Web Technologies</span>
//              </div>
//            </ListGroup.Item>
//            <ListGroup.Item>
//            <div className="list-item-content">
//                <span className="left-text">Database Management Systems</span>
//              </div>
//            </ListGroup.Item>
//            <ListGroup.Item>
//            <div className="list-item-content">
//                <span className="left-text">Data Structures & Algorithms</span>
//              </div>
//            </ListGroup.Item>
//            <ListGroup.Item>
//            <div className="list-item-content">
//                <span className="left-text">Leading People & Organizations</span>
//              </div>
//            </ListGroup.Item>
//            <ListGroup.Item>
//            <div className="list-item-content">
//                <span className="left-text">Project & Process Management</span>
//              </div>
//            </ListGroup.Item>
//           </ListGroup>
//           <ListGroup variant="flush">
//           <p><strong>Diversified Interests Portfolio</strong></p>
//           <ListGroup.Item>
//              <div className="list-item-content">
//                <span className="left-text">Electronic Music & DJing</span>
//              </div>
//            </ListGroup.Item>
//            <ListGroup.Item>
//            <div className="list-item-content">
//                <span className="left-text">NBA Analytics</span>
//              </div>
//            </ListGroup.Item>
//            <ListGroup.Item>
//            <div className="list-item-content">
//                <span className="left-text">Volleyball</span>
//              </div>
//            </ListGroup.Item>
//            <ListGroup.Item>
//            <div className="list-item-content">
//                <span className="left-text">Classic Movies</span>
//              </div>
//            </ListGroup.Item>
//            <ListGroup.Item>
//            <div className="list-item-content">
//                <span className="left-text">Live Concerts</span>
//              </div>
//            </ListGroup.Item>
//           </ListGroup>
//           <div>
//           <p style = {{maxWidth: '600px'}}><strong>Market Profile</strong></p>
//              <img src={Me} className="w-50" alt="Me" style={{ maxWidth: '600px' }} />
//           </div>
//         </div>
//       </Container>
//       </div>
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
      <h1 style={{ marginLeft: '10px', marginBottom: '10vh' }}>About "NIK"</h1>
      <Container className="d-flex justify-content-center" style = {{marginBottom: '100vh'}}>
        <div className="d-flex justify-content-between" style={{ maxWidth: '200vh', width: '100%' }}>
          <ListGroup variant="flush">
            <p><strong>History</strong></p>
            <ListGroup.Item>
              <div className="list-item-content">
                <span className="left-text">School:</span><strong>Western University</strong>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="list-item-content">
                <span className="left-text">Year:</span><strong>4</strong>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="list-item-content">
                <span className="left-text" style={{ marginRight: '30px' }}>Program:</span><strong>Software Engineering & Ivey HBA</strong>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="list-item-content">
                <span className="left-text">City:</span><strong>London, Ontario, Canada</strong>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="list-item-content">
                <span className="left-text">Seeking:</span><strong>Summer 2024 Internship</strong>
              </div>
            </ListGroup.Item>
          </ListGroup>
          <ListGroup variant="flush">
            <p><strong>Coursework Portfolio</strong></p>
            <ListGroup.Item>
              <div className="list-item-content">
                <span className="left-text">Web Technologies</span>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="list-item-content">
                <span className="left-text">Database Management Systems</span>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="list-item-content">
                <span className="left-text">Data Structures & Algorithms</span>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="list-item-content">
                <span className="left-text">Leading People & Organizations</span>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="list-item-content">
                <span className="left-text">Project & Process Management</span>
              </div>
            </ListGroup.Item>
          </ListGroup>
          <ListGroup variant="flush">
            <p><strong>Diversified Interests Portfolio</strong></p>
            <ListGroup.Item>
              <div className="list-item-content">
                <span className="left-text">Electronic Music & DJing</span>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="list-item-content">
                <span className="left-text">NBA Analytics</span>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="list-item-content">
                <span className="left-text">Volleyball</span>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="list-item-content">
                <span className="left-text">Classic Movies</span>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="list-item-content">
                <span className="left-text">Live Concerts</span>
              </div>
            </ListGroup.Item>
          </ListGroup>
          <div style={{ marginLeft: '20px', display: 'inline-block' }}>
  <p style={{ marginBottom: '10px', display: 'block', maxWidth: '100%' }}><strong>Market Profile</strong></p>
  <div style={{ display: 'inline-block', maxWidth: '200px' }}>
    <img src={Me} className="w-100" alt="Me" />
  </div>
</div>



        </div>
      </Container>
    </div>
  );
}

export default AboutMe;

