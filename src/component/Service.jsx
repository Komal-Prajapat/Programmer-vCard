import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const Service = () => {
  return (
    <>
      <h1 className='mt-3 font-bold '>Our Services</h1>
      <hr className='w-24 bg-orange-300 h-1 m-auto'/>
      <div className="webdesign flex mt-3">
   

        {/* Website Icon */}
        <div className="website-icon w-11 h-[50px] bg-blue-100 rounded-lg flex items-center justify-center">
          <FontAwesomeIcon icon={faGlobe} className="text-orange-300" />
        </div>

        {/* Web Development */}
        
        <div className="webdata w-[89%] text-left ml-3">
          <h1 className='font-bold'>Web Development</h1>
          <p>Lorem ipsum, dolor sit amecupiditate quidem at quis.
          Lorem ipsum dolor sit amet.</p>
        </div>
      </div>

      <div className="webdesign flex mt-3">
   

        {/* Website Icon */}
        <div className="website-icon w-11 h-[50px] bg-blue-100 rounded-lg flex items-center justify-center">
          <FontAwesomeIcon icon={faGlobe} className="text-orange-300" />
        </div>

        {/* Web Development */}
        
        <div className="webdata w-[89%] text-left ml-3">
          <h1 className='font-bold'>Web Development</h1>
          <p>Lorem ipsum, dolor sit amecupiditate quidem at quis.
          Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </>
  );
};

export default Service;
