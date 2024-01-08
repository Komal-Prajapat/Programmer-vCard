import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const Service = () => {
  return (
    <>
      <h1 className='mt-3 font-bold text-3xl text-center'>Our Services</h1>
      <hr className='w-24 bg-orange-300 h-1 m-auto mb-6' />

      {/* Service Card 1 */}
      <div className="service-card flex items-center bg-white rounded-lg shadow-md p-6 mb-4">
        {/* Icon */}
        <div className="service-icon w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-6">
          <FontAwesomeIcon icon={faGlobe} className="text-orange-300 text-2xl" />
        </div>

        {/* Content */}
        <div className="service-info ..">
          <h2 className='font-bold text-xl mb-2 '>Web Development</h2>
          <p className='text-gray-700'>
            Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Cupiditate quidem at quis.
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>

      {/* Service Card 2 */}
      <div className="service-card flex items-center bg-white rounded-lg shadow-md p-6 mb-4">
        {/* Icon */}
        <div className="service-icon w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-6">
          <FontAwesomeIcon icon={faGlobe} className="text-orange-300 text-2xl" />
        </div>

        {/* Content */}
        <div className="service-info">
          <h2 className='font-bold text-xl mb-2'>Another Service</h2>
          <p className='text-gray-700'>
            Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Cupiditate quidem at quis.
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    </>
  );
};

export default Service;
