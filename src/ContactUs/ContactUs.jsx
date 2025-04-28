import React from 'react';

const ContactUs = () => {
  return (
    <div className="flex items-center justify-between bg-[#0649E7] rounded-2xl px-8 py-8 w-full max-w-5xl mx-auto">
      {/* Left: Text */}
      <div className="text-white text-left">
        <p className="text-sm font-semibold leading-none">STILL HAVE</p>
        <p className="text-sm font-semibold leading-none">DOUBTS?</p>
      </div>

      {/* Center: Main Call */}
      <h2 style={{ 
        fontSize: '40px',
        fontFamily: 'DM Sans, sans-serif',
        fontWeight: 500,
        color: 'white'
      }}>
        Contact us
      </h2>

      {/* Right: Circle Button */}
      <div className="bg-[#FEFEFE] rounded-full p-4 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#0649E7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
};

export default ContactUs;
