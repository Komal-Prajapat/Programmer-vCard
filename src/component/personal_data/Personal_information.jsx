import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBirthdayCake, faEnvelope, faLocation, faMobile, faPhone } from '@fortawesome/free-solid-svg-icons';

const PersonalInformation = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:jackie@gmail.com';
  };

  const handleMobileClick = () => {
    window.location.href = 'tel:+9178541254789';
  };

  const handleBirthdayClick = () => {
    // You can navigate to a specific page or display a modal with birthday details
    window.location.href = '/birthday-details';
  };

  const handleLocationClick = () => {
    // You can navigate to a specific page or display a modal with location details
    window.location.href = '/location-details';
  };

  return (
    <>
      <h1 className='font-bold mt-5'>Contact US</h1>
      <hr className='bg-red-300 h-1 w-12 m-auto' />
      <div className="container bg-blue-50 w-full h-[100px] mt-16">
        <div className="row flex">
          <div className="email w-[200px] h-[70px] m-4 info_box email relative -top-14 text-white ml-8 hover:bg-pink-400" onClick={handleEmailClick}>
            <div className="icon bg-pink-500 w-6 pl-1 rounded-full">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            </div>
            <p className='text-black'>E-mail address</p>
            <p className='font-bold text-black'>jackie@gmail.com</p>
          </div>

          <div className="email w-[200px] h-[70px] m-4 info_box email relative -top-14 text-white ml-8 hover:bg-orange-300 " onClick={handleMobileClick}>
            <div className="icon bg-orange-400 w-6 pl-1 rounded-full">
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
            </div>
            <p className='text-black'>Mobile number</p>
            <p className='font-bold text-black'>+91 78541254789</p>
          </div>

        </div>

        <div className="row flex">
          <div className="email w-[200px] h-[70px] m-4 info_box email relative -top-14 text-white ml-8 hover:bg-blue-300" onClick={handleBirthdayClick}>
            <div className="icon bg-blue-400 w-6 pl-1 rounded-full">
              <FontAwesomeIcon icon={faBirthdayCake} className="mr-2" />
            </div>
            <p className='text-black'>Date of birthday</p>
            <p className='font-bold text-black'>9 Nov2002</p>
          </div>

          <div className="mobile w-[200px] h-[70px] m-4 info_box email relative -top-14 text-white ml-8 hover:bg-purple-300" onClick={handleLocationClick}>
            <div className="icon bg-purple-500 w-6 pl-1 rounded-full">
              <FontAwesomeIcon icon={faLocation} className="mr-2" />
            </div>
            <p className='text-black'>Location</p>
            <p className='font-bold text-black'>New York, USA</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalInformation;
