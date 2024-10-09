import React, { useEffect } from 'react';
import Carousel from './Carousel';
import './scroll.css';
import ghost1 from './img/ghost_1.png';
import ghost2 from './img/ghost_2.png';
import ghost3 from './img/ghost_3.png';
import ghost4 from './img/ghost_4.png';
import ghost5 from './img/ghost_5.png';
import ghost6 from './img/ghost_6.png';

const slides = [ghost1, ghost2, ghost3, ghost4, ghost5, ghost6];

function App() {

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <div className="top-nav">
        <nav className="navbar">
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#nav-link">Nav-link</a></li>
          </ul>
        </nav>
      </div>
      <section id="h" className="section">
        <div className="content">
          <div className="max-w-lg">
            <Carousel>
              {slides.map((src, index) => (
                <img key={index} src={src} alt={`Slide ${index}`} />
              ))}
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
