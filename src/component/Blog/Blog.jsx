import React from 'react';
import Gallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'; // Import the styles

const Blog = () => {
  const images = [
    {
      original: 'https://www.mooc.org/hubfs/applications-of-computer-programming.jpg',
      thumbnail: 'https://www.mooc.org/hubfs/applications-of-computer-programming.jpg',
      description: 'Image 1 description',
    },
    {
      original: 'https://www.mooc.org/hubfs/applications-of-computer-programming.jpg',
      thumbnail: 'https://www.mooc.org/hubfs/applications-of-computer-programming.jpg',
      description: 'Image 2 description',
    },
    // Add more images as needed
  ];

  return (
    <div>
      <h1 className='mt-5 mb-2 font-bold text-center'>Blog</h1>
        <hr className='w-11 mb-3 bg-pink-400 h-1 m-auto'></hr>

      <Gallery items={images} />
    </div>
  );
};

export default Blog;
