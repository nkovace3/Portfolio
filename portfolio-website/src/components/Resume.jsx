import React, { useEffect, useRef } from 'react';
import '../App.css';
function Resume() {
  const resumeRef = useRef(null);
  return (
    <div className = 'resume section' id='resume' ref={resumeRef}>
      <h1 style={{ marginBottom: '100vh' }}>Resume</h1>
    </div>  );
}

export default Resume;