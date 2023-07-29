import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Service from './components/Service';
import Contact from './components/Contact';
import Testimonial from './components/Testimonial';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <div className='font-Inter'>
      <Navbar />
      <Hero />
      <Service />
      <Testimonial />
      <Contact />
    </div>
  );
};

export default App;