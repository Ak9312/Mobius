import React from 'react';

const Work = () => {
  const steps = [
    {
      number: 1,
      title: 'Submit Intake Form'
    },
    {
      number: 2,
      title: 'We do the search and curation for list of jobs'
    },
    {
      number: 3,
      title: 'You approve, we do the outreach and interviews'
    },
    {
      number: 4,
      title: 'You get the interviews'
    }
  ];

  return (
    <div className="w-full bg-white py-8">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-left text-blue-600 text-lg font-medium mb-8">How we work?</h2>
        
        <div className="flex justify-between= items-start ">
          {steps.map((step, index) => {
            // Determine if this is the last item to avoid rendering the connecting line
            const isLast = index === steps.length - 1;
            
            return (
              <div key={step.number} className=" flex flex-col  w-1/4 px-2 ">
                {/* Circle with number */}
                <div className="w-15 h-15 rounded-full border border-blue-500 flex items-center justify-center mb-2">
                  <span className="text-2xl font-semibold
">{step.number}</span>
                </div>
                
                {/* Blue line */}
                <div className="w-8/12 h-0.5 bg-blue-500 mb-3"></div>
                
                {/* Step text */}
                <div >
                <p className="text-left text-sm max-w-xs" style={{ color: "#0649E7" }}>
                  {step.title}
                </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;