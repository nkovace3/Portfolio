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
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import LinkedIn from '../images/LinkedIn.png';
import Github from '../images/Github.png';
import Resume from '../images/Resume.jpg';
import '../App.css';

function Contact() {
  const contactRef = useRef(null);
  const form = useRef();
  const [showAlert, setShowAlert] = useState(false);

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
          setShowAlert(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleAlertClose = () => {
    setShowAlert(false);
  };

  return (
    <div className="contact section" id="contact" ref={contactRef}>
      <h1 style={{ marginLeft: '2vh', marginBottom: '5vh' }}>Investor Relations</h1>
      <p style={{ textAlign: 'center', marginBottom: '5vh' }}>Let's get in touch about adding "NIK" to your portfolio, today!</p>
      <Form ref={form} onSubmit={sendEmail}>
        <div className="mb-3 d-flex justify-content-between" style={{ marginLeft: '40vh', marginRight: '40vh' }}>
          <Form.Group className="mr-3" style={{ width: '40vh' }}>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="user_name" />
          </Form.Group>
          <Form.Group className="mr-3" style={{ width: '40vh' }}>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="user_email" />
          </Form.Group>
        </div>
        <Form.Group className="mb-3" style={{ marginLeft: '40vh', marginRight: '40vh' }}>
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} name="message" />
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button type="submit" style={{ width: '96.5vh', marginBottom: '3vh' }}>
            Send
          </Button>
        </div>
      </Form>

      {/* Alert */}
      <Alert show={showAlert} variant="success" onClose={handleAlertClose} dismissible>
        <Alert.Heading>Email Sent Successfully!</Alert.Heading>
        <p>Thank you for reaching out. We'll get back to you soon.</p>
      </Alert>

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
        <p>© Developed by Nikola Kovacevic, 2024 | nkovacevic.hba2025@ivey.ca | 519-719-9119</p>
      </div>
    </div>
  );
}

export default Contact;

