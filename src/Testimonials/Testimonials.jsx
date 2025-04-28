import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Holly',
    position: 'senior executive',
    story: 'who got over 10 job interviews and an offer she accepted',
  },
  {
    id: 2,
    name: 'Holly',
    position: 'senior executive',
    story: 'who got over 10 job interviews and an offer she accepted',
  },
  {
    id: 3,
    name: 'Holly',
    position: 'senior executive',
    story: 'who got over 10 job interviews and an offer she accepted',
  },
];

const Testimonials = () => {
  return (
    <div className="bg-[#FEFEFE] py-16">
         <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-[#0649E7] mb-10">What our clients have to say</h2>

      <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="w-full md:w-1/3 bg-[#FEFEFE] border border-[#EBF1FF] rounded-2xl shadow-md hover:shadow-lg transition p-4 flex flex-col items-center">
            {/* Video Placeholder */}
            <div className="bg-[#EBF1FF] rounded-xl w-full h-48 flex items-center justify-center">
              <button className="w-12 h-12 bg-[#0649E7] rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>

            {/* Testimonial Text */}
            <div className="bg-[#0649E7] text-[#FEFEFE] w-full mt-4 rounded-b-2xl p-4 text-left relative">
              <p>
                {testimonial.name} is a <span className="font-bold">{testimonial.position}</span> {testimonial.story}
              </p>
              <div className="absolute bottom-4 right-2">
                <button className="w-8 h-8 rounded-full bg-[#FEFEFE] flex items-center justify-center text-[#0649E7]">
                <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="28.5" cy="28.5" r="28.5" fill="#FEFEFE"/>
<path d="M23.678 36.102L22.222 34.646L33.012 23.882H22.04V21.932H35.482L36.314 22.738V36.232H34.364V25.416L23.678 36.102Z" fill="#0649E7"/>
</svg>

                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Buttons */}
      <div className="flex flex-col md:flex-row justify-center gap-4">
        <button className="px-6 py-3 border border-[#0649E7] text-[#0649E7] rounded-full hover:bg-[#EBF1FF] transition">
          More customer testimonials ↗
        </button>
        <button className="px-6 py-3 bg-[#0649E7] text-[#FEFEFE] rounded-full hover:bg-[#022183] transition">
          Get Started →
        </button>
      </div>
      </div>
    </div>
  );
};

export default Testimonials;
