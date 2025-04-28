import React from 'react';
import Header from '../Header/Header';
import HeroPhoto from "../assets/Hiring Trends.png"

const Hero = () => {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #5DBAF9 0%, #3B82F6 40%, #0649E7 70%, #022183 100%)'
      }}>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center py-16 px-4">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-start justify-between">
          {/* Left Side Content - Using a semi-transparent container */}
          <div className="md:max-w-xl p-6 backdrop-blur-sm">
            <h1 style={{ 
              fontSize: '80px',
              fontFamily: 'Sora, sans-serif',
              fontWeight: 600,
              color: 'white',
              lineHeight: '1.2',
            }}>
              Land job interviews
              <div style={{ marginTop: '1rem' }}>
                <span style={{ color: "#0649E7" }}>10x</span>
                <span>faster</span>
              </div>
            </h1>

            <p className="text-white text-sm md:text-base my-6">
              Custom-built resumes that match your goals, keywords, and recruiter expectations.
            </p>

            <button className="cursor-pointer px-6 py-3 rounded-full bg-white text-[#022183] font-semibold hover:bg-[#022183] hover:text-white transition-colors duration-300">
              Get Started →
            </button>
          </div>

          {/* Right Side Content */}
          <div className="md:ml-8 mt-10 md:mt-0 relative">
            <img
              src={HeroPhoto}
              alt="Hiring Trends"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;