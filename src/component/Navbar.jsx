import React, { useEffect } from 'react';
import SmoothScroll from 'smooth-scroll';
import Home from './home/Home';
import Appointment from './Appointment';
import Service from './Service';
import Gallery from './gallery/Gallery';
import Prodcuts from './products/Products';
import Blog from './Blog/Blog';

const Navbar = () => {
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

  return (
    <div>
      {/* <nav>
        <ul>
          <li><a href="#section1">Section 1</a></li>
          <li><a href="#section2">Section 2</a></li>
          <li><a href="#section3">Section 3</a></li>
        </ul>
      </nav> */}

      <div className=' container w-full sm:w-[40%] h-[400px] sm:m-auto'>

     <div className="homepage m-0">
        <Home></Home>
     </div>
      
      <div className="appointment">
        <Appointment></Appointment>
      </div>

      <div className="appointment">
       <Service></Service>
      </div>

      
      <div className="GALLERY">
       <Gallery></Gallery>
      </div>

      {/* <div className="GALLERY">
      <Prodcuts></Prodcuts>
      </div> */}

      <div className="Blog">
     <Blog></Blog>
      </div>

      </div>
    </div>
  );
};

export default Navbar;
