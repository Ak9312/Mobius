import React from 'react';
import Ashwin from "../assets/Ashwin.png"
import Nicole from "../assets/Nicole.png"
import { FaLinkedinIn } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#022183] to-[#0649E7] text-white p-8">
      <div className="max-w-4xl mx-auto pt-16">
        <h1 className="text-3xl font-light mb-16">About Us</h1>
        
        {/* Team Member 1 */}
        <div className="flex flex-col md:flex-row items-start mb-16">
          <div className="relative mb-6 md:mb-0 md:mr-8">
            <div className="w-40 h-40 rounded-full bg-[#FEFEFE] flex items-center justify-center overflow-hidden">
              <img src={Ashwin} alt="Ashwin" />
            </div>
            {/* LinkedIn icon with styling */}
            <div className="absolute bottom-0 right-0 transform translate-x-1/4 -translate-y-1/4">
              <a href="#" className="block">
                <div className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-md flex items-center justify-center">
                  <FaLinkedinIn className="text-blue-800 text-lg" />
                </div>
              </a>
            </div>
          </div>
          
          <div className="max-w-xl">
            <h2 className="text-xl font-medium mb-1">Ashwin</h2>
            <p className="text-sm text-[#E8F1FF] mb-3">
              is the founder of mobiusninja.ai. He is an accomplished senior executive 
              with over 20 years of experience in cloud infrastructure and financial services. 
              With over 2 decades of experience in tech, he has held significant product 
              and GTM roles. Ashwin is an MBA holder from Yale University.
            </p>
            <p className="text-sm text-[#E8F1FF]">
              Ashwin's vision with Mobius is to give job seekers a significant advantage 
              in securing the roles of their dreams.
            </p>
          </div>
        </div>
        
        {/* Team Member 2 */}
        <div className="flex flex-col md:flex-row items-start mb-16">
          <div className="relative mb-6 md:mb-0 md:mr-8">
            <div className="w-40 h-40 rounded-full bg-[#FEFEFE] flex items-center justify-center overflow-hidden">
              <img src={Nicole} alt="Nicole" />
            </div>
            {/* LinkedIn icon with styling */}
            <div className="absolute bottom-0 right-0 transform translate-x-1/4 -translate-y-1/4">
              <a href="#" className="block">
                <div className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-md flex items-center justify-center">
                  <FaLinkedinIn className="text-blue-800 text-lg" />
                </div>
              </a>
            </div>
          </div>
          
          <div className="max-w-xl">
            <h2 className="text-xl font-medium mb-1">Nicole</h2>
            <p className="text-sm text-[#E8F1FF] mb-3">
              is an Executive coach at Mobius specializing in resume builds and career advisory.
            </p>
            <p className="text-sm text-[#E8F1FF]">
              With a B.S. in Business Administration from UC Berkeley and 7+ years of experience 
              in AI-driven product strategy, she has seen firsthand how traditional job-seeking 
              approaches fail candidates. She leverages a targeted, results-driven approach to help 
              clients confidently stand out and land roles that truly match their skills and potential.
            </p>
          </div>
        </div>
        
        {/* Footer Links */}
        <div className="mt-12 text-center ">
          <a href="#" className="text-sm flex justify-center items-center mb-4 hover:underline">
            Learn more about our Board of Advisors
            <span className="ml-1">↗</span>
          </a>
          <a href="#" className="text-sm flex justify-center items-center hover:underline">
            Follow us on our LinkedIn page
            <span className="ml-1">↗</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;