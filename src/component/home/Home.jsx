import React from 'react';
// import Typewriter from 'react-simple-typewriter';
import Contact_Icon from '../Contact_Icon';

const Home = () => {
  return (
    <div className='text-center '>
      <img src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg" alt="" className='h-[200px] w-full' />

      <div className='w-[150px] h-[150px] m-auto mt-[-70px] relative rounded-full overflow-hidden border-2 border-blue-500'>
        <img className='w-full h-full object-cover rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFb6FyQeCKb0i4kDlmB_qLNGWVwJ7msimfhA&usqp=CAU " alt="" />
      </div>

      {/* <div>
      <h1 className='mt-2 font-bold hover:text-blue-400 hover:scale-x-100'>
        <Typewriter words={['I-SoftZone']} loop={1} cursor />
      </h1>
      <p className='text-sm mb-3 animate__animated hover:scale-10'>
        <Typewriter words={['Pranay Gupta']} loop={1} cursor />
      </p>
    </div> */}
      <Contact_Icon></Contact_Icon>

      <p className='mt-3 w-[85%] m-auto'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro soluta, dolores odio eum saepe molestias. Sunt repellat quaerat sapiente facere aspernatur, enim facilis?</p>

      {/* <Personal_information></Personal_information> */}


      
    </div>
  );
};

export default Home;
