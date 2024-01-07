import React, { useState, useEffect } from 'react';
import SmoothScroll from 'smooth-scroll';
import Home from './home/Home';
import Appointment from './Appointment';
import Service from './Service';
import Gallery from './gallery/Gallery';
import Products from './products/Products';
import Blog from './Blog/Blog';
import Contact_Icon from './Contact_Icon';
import PersonalInformation from './personal_data/Personal_information';
// import './Navbar.css'; // Import your CSS file for styling

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    // Initialize smooth-scroll when the component mounts
    const scroll = new SmoothScroll('a[href*="#"]', {
      speed: 1000,
    });

    // Clean up the smooth-scroll instance when the component unmounts
    return () => {
      scroll.destroy();
    };
  }, []); // Empty dependency array to run the effect only once on mount

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <div>
      {/* Button to toggle navigation */}
      <button onClick={toggleNav} className="nav-toggle-button navbarbutton">
        {isNavOpen ? '<' : '>'}
      </button>

      {/* Navigation bar */}
      <nav className={`navbar ${isNavOpen ? 'open' : ''} pt-[10%]`} >
        <ul>
          <li><a href="#home" onClick={closeNav}>home</a></li>
          <li><a href="#Contact" onClick={closeNav}>Contact</a></li>
          <li><a href="#Appointment" onClick={closeNav}>Appointment</a></li>
          <li><a href="#Gallery" onClick={closeNav}>Gallery</a></li>
          <li><a href="#Blog" onClick={closeNav}>Blog</a></li>
        </ul>
      </nav>

      {/* Main content */}
      <div className='container w-full sm:w-[40%] h-[400px] sm:m-auto'>
        <div className="homepage m-0" id="home">
          <Home></Home>
        </div>
        
        <div className="appointment" id='Contact'>

          <PersonalInformation></PersonalInformation>
        </div>

        <div className="appointment"  id='Appointment'>
        <Appointment></Appointment>
        </div>
        <div className='Service' id='service'>
          <Service></Service>
        </div>

        <div className="gallery"  id='Gallery'>
          <Gallery></Gallery>
        </div>

        {/* Uncomment the following section if you have a Products component */}
        {/* <div className="products">
          <Products></Products>
        </div> */}

        <div className="blog"  id='Blog'>
          <Blog></Blog>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
