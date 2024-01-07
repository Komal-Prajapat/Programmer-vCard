// PersonalInformation.js
import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBirthdayCake, faEnvelope, faLocation, faMobile } from '@fortawesome/free-solid-svg-icons';

const PersonalInformation = () => {
  return (
    <>
      <div className="container bg-blue-50 w-full h-[100px] mt-16">
        <div className="row flex">
          <div className="email w-[200px] h-[70px] m-4 info_box email relative -top-14 text-white ml-8">
            <div className="icon bg-pink-500 w-6 pl-1 rounded-full ">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2 " />
              </div>
              <p className='text-black'>E-mail address</p>
            <p className='font-bold text-black'>jackie@gmail.com</p>
          </div>

          <div className="email w-[200px] h-[70px] m-4 info_box email relative -top-14 text-white ml-8">
            <div className="icon bg-orange-400 w-6 pl-1 rounded-full ">
            <FontAwesomeIcon icon={faMobile} className="mr-2 " />
              </div>
              <p className='text-black'>Mobile number</p>
            <p className='font-bold text-black'>+91 78541254789</p>
          </div>

        </div>
            

        <div className="row flex">
          <div className="email w-[200px] h-[70px] m-4 info_box email relative -top-14 text-white ml-8">
            <div className="icon bg-blue-400 w-6 pl-1 rounded-full ">
            <FontAwesomeIcon icon={faBirthdayCake} className="mr-2 " />
              </div>
              <p className='text-black'>Date of birdthday</p>
            <p className='font-bold text-black'>9 Novermber 2002</p>
          </div>

          <div className="mobile w-[200px] h-[70px] m-4 info_box email relative -top-14 text-white ml-8">
            <div className="icon bg-purple-500 w-6 pl-1 rounded-full ">
            <FontAwesomeIcon icon={faLocation} className="mr-2 " />
              </div>
              <p className='text-black'>Location</p>
            <p className='font-bold text-black'>New York , USA</p>
          </div>

        </div>
      </div>

      
    </>
  );
};

export default PersonalInformation;
