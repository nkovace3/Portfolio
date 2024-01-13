import React, { useEffect, useRef, useState } from 'react';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import '../App.css';
import LinkedIn from '../images/LinkedIn.png';
import Github from '../images/Github.png';
import Resume from '../images/Resume.jpg';

function Intro() {
  const introRef = useRef(null);
  const [price, setPrice] = useState(101.62);
  const [trend, setTrend] = useState('+0.0 (+0.0%)');

  useEffect(() => {
    const handleScroll = () => {
      const introRect = introRef.current.getBoundingClientRect();
      const isInViewport = introRect.top >= 0 && introRect.bottom <= window.innerHeight;

      if (isInViewport) {
        console.log('Intro section is visible');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const priceInterval = setInterval(() => {
      const trendElement = document.querySelector('.intro-trend');
      setPrice((prevPrice) => {
        const newPrice = (Math.random() * (103.00 - 100.00) + 100.00).toFixed(2);

        if (newPrice >= prevPrice) {
          const newTrend = '+' + (newPrice - prevPrice).toFixed(2).toString() + ' (+' + (((newPrice / prevPrice) - 1) * 100).toFixed(2).toString() + '%)';
          trendElement.classList.add('green');
          trendElement.classList.remove('red');
          trendElement.classList.remove('grey');
          setTrend(newTrend);
        } else {
          const newTrend = '-' + Math.abs((newPrice - prevPrice)).toFixed(2).toString() + ' (-' + Math.abs(((newPrice / prevPrice) - 1) * 100).toFixed(2).toString() + '%)';
          trendElement.classList.add('red');
          trendElement.classList.remove('green');
          trendElement.classList.remove('grey');
          setTrend(newTrend);
        }

        return newPrice;
      });
    }, 1000);

    // Cleanup interval to avoid memory leaks
    return () => {
      clearInterval(priceInterval);
    };
  }, []);

  return (
    <div className='intro section' id='intro' ref={introRef}>
      <h1 style={{ marginBottom: '5vh', marginTop: '10vh', textAlign: 'center', fontSize: '3vw' }}>Welcome to Nikola Kovacevic, Inc. (NIK)</h1>
      <div className="price-trend-container" style={{ display: 'flex', justifyContent: 'center', marginLeft: '1em' }}>
        <h1 className='intro-price' style={{ marginRight: '0.5em', textAlign: 'left', fontSize: '3vw' }}>{price}</h1>
        <h1 className='intro-trend' style={{ textAlign: 'left', marginBottom: '5vh', fontSize: '3vw' }}>{trend}</h1>
      </div>
      <div className="d-flex justify-content-center" style={{ marginBottom: '5vh' }}>
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
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <KeyboardDoubleArrowDownIcon style={{ fontSize: '3em', marginBottom: '100vh' }} />
    </div>
    </div>
  );
}

export default Intro;

