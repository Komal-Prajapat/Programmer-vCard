import React from 'react';

const Appointment = () => {
  return (
    <>
      <div className="container mt-16">
        <h1 className='font-bold'>Make An Appointment</h1>
        <hr className='bg-red-300 h-1 w-24 m-auto' />

        <form action="" className="mt-4">
          <label htmlFor="date" className='text-left block ml-3'>Date</label>
          <input type="date" id="date" className='w-[95%] m-auto border p-2 rounded-sm' />

          <div className="time flex mt-4">
            <button className='bg-blue-100 ml-3 p-2 rounded-sm timebutton'>8:10-20:00</button>
            <button className='bg-blue-100 ml-3 p-2 rounded-sm timebutton'>8:10-20:00</button>
            <button className='bg-blue-100 ml-3 p-2 rounded-sm timebutton'>8:10-20:00</button>
            <button className='bg-blue-100 ml-3 p-2 rounded-sm timebutton'>8:10-20:00</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Appointment;
