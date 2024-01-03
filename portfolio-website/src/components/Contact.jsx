// import React, { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import LinkedIn from '../images/LinkedIn.png';
// import Github from '../images/Github.png';
// import '../App.css';

// function Contact() {
//   const contactRef = useRef(null);
//   const form = useRef();
//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm('service_w0koyl8', 'template_j2rj5b8', form.current, 'Ue1AdxHZt5xV0Qz-O')
//       .then(
//         (result) => {
//           console.log(result.text);
//           // Reset the form fields
//           form.current.reset();
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };

//   return (
//     <div className="contact section" id="contact" ref={contactRef}>
//       <h1 style={{ marginLeft: '2vh', marginBottom: '5vh' }}>Investor Relations</h1>
//       <p style={{ textAlign: 'center', marginBottom: '5vh' }}>Let's get in touch about adding "NIK" to your portfolio, today!</p>
//       <Form ref={form} onSubmit={sendEmail}>
//         <div className="mb-3 d-flex justify-content-between" style={{ marginLeft: '40vh', marginRight: '40vh' }}>
//           <Form.Group className="mr-3" style = {{width: '40vh'}}>
//             <Form.Label>Name</Form.Label>
//             <Form.Control type="text" name="user_name" />
//           </Form.Group>
//           <Form.Group className="mr-3" style = {{width: '40vh'}}>
//             <Form.Label>Email address</Form.Label>
//             <Form.Control type="email" name="user_email" />
//           </Form.Group>
//         </div>
//         <Form.Group className="mb-3" style = {{marginLeft: '40vh', marginRight: '40vh'}}>
//           <Form.Label>Message</Form.Label>
//           <Form.Control as="textarea" rows={3} name="message" />
//         </Form.Group>
//         <div className="d-flex justify-content-center">
//           <Button type="submit" style={{ width: '96.5vh', marginBottom: '3vh'}}>Send</Button>
//         </div>
//       </Form>
//       <div className="d-flex justify-content-center" style={{marginBottom: '3vh'}}>
//         <a href="https://linkedin.com/in/nikola-kova" target="_blank" rel="noopener noreferrer">
//           <img src={LinkedIn} alt="LinkedIn Logo" style={{ width: '3vh', marginLeft: '1vh', borderBottom: 'none' }} />
//         </a>
//         <a href="https://github.com/nkovace3/" target="_blank" rel="noopener noreferrer">
//           <img src={Github} alt="Github Logo" style={{ width: '3vh', marginLeft: '1vh', borderBottom: 'none' }} />
//         </a>
//       </div>
//       <div className='d-flex justify-content-center'>
//         <p>© Developed by <strong>Nikola Kovacevic</strong>, 2024</p>
//       </div>
//     </div>
//   );
// }

// export default Contact;
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import LinkedIn from '../images/LinkedIn.png';
import Github from '../images/Github.png';
import Resume from '../images/Resume.jpg';
import '../App.css';

function Contact() {
  const contactRef = useRef(null);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_w0koyl8', 'template_j2rj5b8', form.current, 'Ue1AdxHZt5xV0Qz-O')
      .then(
        (result) => {
          console.log(result.text);
          // Reset the form fields
          form.current.reset();
          // Show the success alert
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact section" id="contact" ref={contactRef}>
      <h1 style={{ marginLeft: '2vh', marginBottom: '5vh', fontSize: '2.5vw' }}>Investor Relations</h1>
      <p style={{ textAlign: 'center', marginBottom: '5vh', fontSize: '1vw' }}>Let's get in touch about adding "NIK" to your portfolio, today!</p>
      <Form ref={form} onSubmit={sendEmail} style={{fontSize: '1vw'}} >
        <div className="mb-3 d-flex justify-content-between" style={{ marginLeft: '40vh', marginRight: '40vh' }}>
          <Form.Group className="mr-3" style={{ width: '40vh' }}>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="user_name" style = {{height: '5vh'}}/>
          </Form.Group>
          <Form.Group className="mr-3" style={{ width: '40vh' }}>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="user_email" style = {{height: '5vh'}}/>
          </Form.Group>
        </div>
        <Form.Group className="mb-3" style={{ marginLeft: '40vh', marginRight: '40vh' }}>
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} name="message" style = {{height: '10vh'}} />
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button type="submit" style={{ width: '35vw', marginBottom: '3vh', height: '5vh' }}>
            Send
          </Button>
        </div>
      </Form>

      <div className="d-flex justify-content-center" style={{ marginBottom: '3vh' }}>
        <a href="https://linkedin.com/in/nikola-kova" target="_blank" rel="noopener noreferrer">
          <img src={LinkedIn} alt="LinkedIn Logo" style={{ width: '3vh', marginLeft: '1vh', borderBottom: 'none' }} />
        </a>
        <a href="https://github.com/nkovace3/" target="_blank" rel="noopener noreferrer">
          <img src={Github} alt="Github Logo" style={{ width: '3vh', marginLeft: '1vh', borderBottom: 'none' }} />
        </a>
        <a href="https://drive.google.com/file/d/1Gzh53I-6Ja2AA6wZmMT2PIAyFm6qUHkE/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <img src={Resume} alt="Resume Logo" style={{ width: '3vh', marginLeft: '1vh', borderBottom: 'none' }} />
        </a>
      </div>
      <div className="d-flex justify-content-center">
        <p style = {{marginBottom: '100vh', fontSize: '1vw'}}>© Developed by Nikola Kovacevic, 2024 | nkovacevic.hba2025@ivey.ca | 519-719-9119</p>
      </div>
    </div>
  );
}

export default Contact;

