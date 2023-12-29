import React, { useEffect, useRef } from 'react';
import '../App.css';

function AboutMe() {
  const aboutMeRef = useRef(null);
  return (
    <div className = 'about-me section' id='about-me' ref={aboutMeRef}>
      <h1 style={{ marginBottom: '100vh' }}>About "NIK"</h1>
    </div>
  );
}

export default AboutMe;