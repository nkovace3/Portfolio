import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
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
      <h1 style={{ marginLeft: '7.5vw', marginBottom: '5vh', fontSize: '4vh' }}>Investor Relations</h1>
      <p style={{ textAlign: 'center', marginBottom: '5vh', fontSize: '2vh' }}>Let's get in touch about adding "NIK" to your portfolio, today!</p>
      <Form ref={form} onSubmit={sendEmail} >
        <div className="mb-3 d-flex justify-content-between" style={{ marginLeft: '22.5vw', marginRight: '22.5vw' }}>
          <Form.Group className="mr-3" style={{ width: '40vh' }}>
            <Form.Label style = {{fontSize: '2vh'}}>Name</Form.Label>
            <Form.Control type="text" name="user_name" style = {{height: '5vh'}}/>
          </Form.Group>
          <Form.Group className="mr-3" style={{ width: '40vh' }}>
            <Form.Label style = {{fontSize: '2vh'}}>Email address</Form.Label>
            <Form.Control type="email" name="user_email" style = {{height: '5vh'}}/>
          </Form.Group>
        </div>
        <Form.Group className="mb-3" style={{ marginLeft: '40vh', marginRight: '40vh' }}>
          <Form.Label style = {{fontSize: '2vh'}}>Message</Form.Label>
          <Form.Control as="textarea" rows={3} name="message" style = {{height: '10vh'}} />
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button type="submit" style={{ width: '35%', marginBottom: '3vh', height: '4vh', fontSize: '1.5vh' }}>
            Send
          </Button>
        </div>
      </Form>

      
      <div className="d-flex justify-content-center">
        <p style = {{ fontSize: '80%', paddingBottom: '10vh'}}>© Developed by Nikola Kovacevic, 2024 | nkovacevic.hba2025@ivey.ca | 519-719-9119</p>
      </div>
    </div>
  );
}

export default Contact;

