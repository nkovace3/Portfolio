import React, { useEffect, useRef, useState } from 'react';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import '../App.css';

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

        console.log(prevPrice, newPrice);
        return newPrice;
      });
    }, 1000);

    // Cleanup interval to avoid memory leaks
    return () => {
      clearInterval(priceInterval);
    };
  }, []);

  const scrollToAboutMe = () => {
    const aboutMeSection = document.getElementById('about-me');
    const mainContainer = document.getElementById('main-container');

    if (aboutMeSection && mainContainer) {
      const sectionOffsetTop = aboutMeSection.offsetTop;
      const mainContainerOffsetTop = mainContainer.offsetTop;

      const offsetRelativeToMainContainer = sectionOffsetTop - mainContainerOffsetTop;

      requestAnimationFrame(() => {
        mainContainer.scrollTo({
          top: offsetRelativeToMainContainer,
          behavior: 'smooth',
        });
      });
    }
  };

  return (
    <div className='intro section' id='intro' ref={introRef}>
      <h1 style={{ marginBottom: '5vh', marginTop: '15vh', textAlign: 'center' }}>Welcome to Nikola Kovacevic, Inc. (NIK)</h1>
      <div className="price-trend-container" style={{ display: 'flex', justifyContent: 'center', marginLeft: '1em' }}>
        <h1 className='intro-price' style={{ marginRight: '0.5em', textAlign: 'left' }}>{price}</h1>
        <h1 className='intro-trend' style={{ textAlign: 'left', marginBottom: '10vh' }}>{trend}</h1>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <KeyboardDoubleArrowDownIcon style={{ fontSize: '4em', marginBottom: '100vh' }} />
    </div>
    </div>
  );
}

export default Intro;

