import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {  faWhatsapp, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Contact_Icon = () => {


  const openWhatsApp = (number) => {
    // Replace with your actual WhatsApp functionality
    alert('Opening WhatsApp with number: ' + number);
  };


  const openMail = (mailTo) => {
    // Replace with your actual mail functionality
    window.location.href = mailTo;
  };

  const openFacebook = () => {
    // Replace with your actual Facebook functionality
    alert('Opening Facebook');
  };

  const openInstagram = () => {
    // Replace with your actual Instagram functionality
    alert('Opening Instagram');
  };

  const openTwitter = () => {
    // Replace 'your_twitter_username' with your actual Twitter username
    const twitterProfileUrl = `https://twitter.com/your_twitter_username`;
    window.open(twitterProfileUrl, '_blank');
  };

  return (
    <div className="flex flex-wrap  items-center justify-center bg-gray-100 rounded-full p-2 space-x-4 sm:justify-start   w-[50%]
    m-auto
    ">
      

      {/* WhatsApp icon */}
      <div className=" cursor-pointer hover:text-green-700 text-center ml-3">
        <FontAwesomeIcon icon={faWhatsapp} className="text-1xl" onClick={() => openWhatsApp('+9893785834')} />
        {/* <p className="text-xs">WhatsApp</p> */}
      </div>

    

      {/* Mail icon */}
      <div className=" cursor-pointer hover:text-purple-700 text-center ml-3">
        <FontAwesomeIcon icon={faEnvelope} className="text-1xl" onClick={() => openMail('mailto:komalprajapat267@mail.com')} />
        {/* <p className="text-xs">Mail</p> */}
      </div>

      {/* Facebook icon */}
      <div className=" cursor-pointer hover:text-blue-700 text-center ml-3">
        <FontAwesomeIcon icon={faFacebook} className="text-1xl" onClick={() => openFacebook()} />
        {/* <p className="text-xs">Facebook</p> */}
      </div>

      {/* Instagram icon */}
      <div className=" cursor-pointer hover:text-pink-700 text-center ml-3">
        <FontAwesomeIcon icon={faInstagram} className="text-1xl" onClick={() => openInstagram()} />
        {/* <p className="text-xs">Instagram</p> */}
      </div>

      <div className=" cursor-pointer hover:text-blue-700 text-center ml-3">
        <FontAwesomeIcon icon={faTwitter} className="text-1xl" onClick={() => openTwitter()} />
        {/* <p className="text-xs">Twitter</p> */}
      </div>
    </div>
  );
};

export default Contact_Icon;
