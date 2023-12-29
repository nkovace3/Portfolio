// import React, { useEffect, useRef } from 'react';
// import '../App.css';
// function Projects() {
//   const projectsRef = useRef(null);
//   return (
//     <div className = 'projects section' id='projects' ref={projectsRef}>
//         <h1>Projects</h1>
//         <p>Test</p>
//         <p>Test</p>
//         <p>Test</p>
//         <p>Test</p>
//         <p>Test</p>
//         <p>Test</p>
//         <p>Test</p>
//         <p>Test</p>
//         <p>Test</p>
//         <p>Test</p>
//         <p>Test</p>
//         <p>Test</p>
//         <p>Test</p>
//         <p>Test</p>
//         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16" id = 'icon'>
//           <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
//         </svg>
//     </div>  );
// }

// export default Projects;
import React, { useRef } from 'react';
import '../App.css';

function Projects() {
  const projectsRef = useRef(null);

  return (
    <div className='projects section' id='projects' ref={projectsRef}>
      <h1 style={{ marginBottom: '320px' }}>Projects</h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-caret-down-fill"
        viewBox="0 0 16 16"
        id='icon'
      >
        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
      </svg>
    </div>
  );
}

export default Projects;
