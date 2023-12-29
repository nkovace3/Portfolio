import React, { useEffect, useRef } from 'react';
import '../App.css';
function Contact() {
  const contactRef = useRef(null);
  return (
    <div className = 'contact section' id='contact' ref={contactRef}>
      <h1 style={{ marginBottom: '100vh' }}>Contact</h1>
    </div>  );
}

export default Contact;