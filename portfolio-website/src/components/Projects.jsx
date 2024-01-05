import React, { useRef } from 'react';
import Table from 'react-bootstrap/Table';
import '../App.css';
import SuperMan from '../images/Superman.png';
import GoGrocery from '../images/GoGrocery.png';
import Cowboy from '../images/Cowboy.png';
import ProductRecommendation from '../images/ProductRecommendation.webp';
import HouseLeague from '../images/HouseLeague.png';
import Movie from '../images/Movie.png';

function Projects() {
  const projectsRef = useRef(null);

  return (
    <div className='projects section' id='projects' ref={projectsRef}>
      <h1 style={{ marginLeft: '12vh', marginBottom: '3vh', fontSize: '2.5vw' }}>Tech Portfolio</h1>
      <div style = {{display: 'flex', justifyContent: 'center'}}>
      <Table hover className="text-nowrap" style={{ tableLayout: 'auto', width: '80%', marginBottom: '200vh' }}>
        <thead style={{ borderBottom: 'none' }}>
          <tr>
            <th style={{ width: 'auto' }}>Project Name</th>
            <th style={{ width: 'auto', textAlign: 'center', borderTop: 'none' }}>Stack</th>
            <th style={{ width: 'auto', textAlign: 'center', borderTop: 'none' }}>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ width: 'auto' }}>
              <a href="https://github.com/nkovace3/Superhero-Database" target="_blank" rel="noopener noreferrer">
              Superhero Database
              <img src={SuperMan} alt="Superman Logo" style={{ width: '2.5vh', marginLeft: '1vh' }} />
              </a>
            </td>
            <td style={{ width: 'auto', textAlign: 'left' }}>
              MongoDB, Express.js, React, Node.js, Firebase
            </td>
            <td style={{ width: 'auto', whiteSpace: 'normal' }}>
              Full-stack site that provides users with ability to create an account, add, edit, delete lists of
              favourite superheros, add reviews to other users' lists, assign admin privileges, query database, and more.
              Earned project grade of 100%.
            </td>
          </tr>
          <tr>
            <td style={{ width: 'auto'}}>
              <a href="https://github.com/nkovace3/AI-Product-Recommendation" target="_blank" rel="noopener noreferrer">
              Product Recommendation System
              <img src={ProductRecommendation} alt="AI Logo" style={{ width: '2.5vh', marginLeft: '1vh', borderBottom: 'none' }} />
              </a>
            </td>
            <td style={{ width: 'auto', textAlign: 'left'}}>
              Python, React, Django, TensorFlow, scikit-learn, Electron.js
            </td>
            <td style={{ width: 'auto', whiteSpace: 'normal' }}>
              AI-based full-stack app that recommends new products for customers to try based on their previous shopping histories.
            </td>
          </tr>
          <tr>
            <td style={{ width: 'auto'}}>
              <a href="https://github.com/nkovace3/Wild-Wild-West-Game" target="_blank" rel="noopener noreferrer">
              Wild, Wild West!
              <img src={Cowboy} alt="Cowboy Logo" style={{ width: '3vh', marginLeft: '1vh'}} />
              </a>
            </td>
            <td style={{ width: 'auto', textAlign: 'left'}}>
              C#, Unity
            </td>
            <td style={{ width: 'auto', whiteSpace: 'normal' }}>
              Medium-sized role-player-game that takes place in the wild west. Includes three unique playable characters, player health, NPC behaviour, and player combat across three levels.
            </td>
          </tr>
          <tr >
            <td style={{ width: 'auto'}}>
              <a href="https://github.com/nkovace3/GoGrocery" target="_blank" rel="noopener noreferrer">
              GoGrocery
              <img src={GoGrocery} alt="GoGrocery Logo" style={{ width: '8vh', marginLeft: '1vh' }} />
              </a>
            </td>
            <td style={{ width: 'auto', textAlign: 'left'}}>
              Python, Flask, OCR API, Spoonacular API
            </td>
            <td style={{ width: 'auto', whiteSpace: 'normal'}}>
              Full-stack app that scans users' grocery receipts with camera and then recommends recipes with the ingredients. Won <strong>3rd Place Prize</strong> at eHacks Hackathon.
            </td>
          </tr>
          <tr >
            <td style={{ width: 'auto', borderBottom: 'none' }}>
              <a href="https://github.com/nkovace3/HouseLeagueAI" target="_blank" rel="noopener noreferrer">
              HouseLeagueAI
              <img src={HouseLeague} alt="HouseLeague Logo" style={{ width: '2vh', marginLeft: '1vh' }} />
              </a>
            </td>
            <td style={{ width: 'auto', textAlign: 'left', borderBottom: 'none' }}>
              Python, OpenAI API
            </td>
            <td style={{ width: 'auto', whiteSpace: 'normal', borderBottom: 'none' }}>
              Application that develops AI-generated news article for youth sports games based on the coach's submission of game stats, top performances, storyline, and more.
            </td>
          </tr>
          <tr >
            <td style={{ width: 'auto', borderBottom: 'none' }}>
              <a href="https://github.com/nkovace3/Movie-Theatre-Database" target="_blank" rel="noopener noreferrer">
              Movie Theatre Dashboard
              <img src={Movie} alt="Movie Logo" style={{ width: '1.5vh', marginLeft: '1vh' }} />
              </a>
            </td>
            <td style={{ width: 'auto', textAlign: 'left', borderBottom: 'none' }}>
              MySQL, Node.js, Express.js, CSS, JavaScript, HTML
            </td>
            <td style={{ width: 'auto', whiteSpace: 'normal', borderBottom: 'none' }}>
              Database with interactive dashboard that features information about theatres, movies, showtimes, tickets purchases, and clients in a region, as well as data visualization for all metrics.
            </td>
          </tr>
        </tbody>
      </Table>
      </div>
    </div>
  );
}

export default Projects;

