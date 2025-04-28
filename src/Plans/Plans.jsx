import React from 'react';

const Plans = () => {
  return (
    <div className="bg-[#FEFEFE] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#0649E7] mb-12">Job Application Service Plans</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Plan 1 */}
          <div className="bg-[#FEFEFE] p-8 rounded-2xl border border-[#022183] flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-[#0649E7] mb-4">April Promo</h3>
              <p className="text-3xl font-bold text-[#0649E7] mb-4">$35<span className="text-lg font-normal">/week</span></p>
              <ul className="text-sm text-[#0649E7] space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="10" fill="#4AD257"/>
                      <path d="M5 11L7.5 13.5L15 6" stroke="#FEFEFE" stroke-width="2"/>
                    </svg>
                  </span>
                  Curated jobs from 1M+ listings, refreshed every 48 hours
                </li>
                {/* Repeat the same pattern for other list items */}
              </ul>
              <ul className="text-sm text-[#0649E7] space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="10" fill="#4AD257"/>
                      <path d="M5 11L7.5 13.5L15 6" stroke="#FEFEFE" stroke-width="2"/>
                    </svg>
                  </span>
                  Up to 20 human-applied roles per week (no bots, no fluff — just real company sites)
                </li>
                {/* Repeat the same pattern for other list items */}
              </ul>
              <ul className="text-sm text-[#0649E7] space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="10" fill="#4AD257"/>
                      <path d="M5 11L7.5 13.5L15 6" stroke="#FEFEFE" stroke-width="2"/>
                    </svg>
                  </span>
                  Need more? Add extra apps for just $1.5 each
                </li>
                {/* Repeat the same pattern for other list items */}
              </ul>
              <ul className="text-sm text-[#0649E7] space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="10" fill="#4AD257"/>
                      <path d="M5 11L7.5 13.5L15 6" stroke="#FEFEFE" stroke-width="2"/>
                    </svg>
                  </span>
                  Your own dedicated application analyst
                </li>
                {/* Repeat the same pattern for other list items */}
              </ul>
              <ul className="text-sm text-[#0649E7] space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="10" fill="#4AD257"/>
                      <path d="M5 11L7.5 13.5L15 6" stroke="#FEFEFE" stroke-width="2"/>
                    </svg>
                  </span>
                  Personalized with up to 10 filters & 5 job titles
                </li>
                {/* Repeat the same pattern for other list items */}
              </ul>
            </div>
            <button className="bg-[#0649E7] text-[#FEFEFE] font-semibold py-2 px-4 rounded-full hover:bg-[#022183] transition">
              Get Started →
            </button>
          </div>

          {/* Plan 2 */}
          <div className="relative bg-[#FEFEFE] p-8 rounded-2xl border border-[#022183] flex flex-col justify-between">
            <div className="absolute top-4 right-4 bg-[#0649E7] text-[#FEFEFE] text-xs font-bold py-1 px-3 rounded-full">
              Popular
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#0649E7] mb-4">Starter</h3>
              <p className="text-3xl font-bold text-[#0649E7] mb-4">$50<span className="text-lg font-normal">/week</span></p>
              <ul className="text-sm text-[#0649E7] space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span>
                  
                  </span>
                  All the perks of the Promo Plan, plus:
                </li>
                {/* Repeat for other list items */}
              </ul>
              <ul className="text-sm text-[#0649E7] space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="10" fill="#4AD257"/>
                      <path d="M5 11L7.5 13.5L15 6" stroke="#FEFEFE" stroke-width="2"/>
                    </svg>
                  </span>
                  Resume review & story-focused feedback
                </li>
                {/* Repeat for other list items */}
              </ul>
              <ul className="text-sm text-[#0649E7] space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="10" fill="#4AD257"/>
                      <path d="M5 11L7.5 13.5L15 6" stroke="#FEFEFE" stroke-width="2"/>
                    </svg>
                  </span>
                  Dedicated search specialist
                </li>
                {/* Repeat for other list items */}
              </ul>
              <ul className="text-sm text-[#0649E7] space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="10" fill="#4AD257"/>
                      <path d="M5 11L7.5 13.5L15 6" stroke="#FEFEFE" stroke-width="2"/>
                    </svg>
                  </span>
                  Up to 50 job apps/week
                </li>
                {/* Repeat for other list items */}
              </ul>
              <ul className="text-sm text-[#0649E7] space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="10" fill="#4AD257"/>
                      <path d="M5 11L7.5 13.5L15 6" stroke="#FEFEFE" stroke-width="2"/>
                    </svg>
                  </span>
                  Extra apps at $1.5 each
                </li>
                {/* Repeat for other list items */}
              </ul>
              <ul className="text-sm text-[#0649E7] space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="10" fill="#4AD257"/>
                      <path d="M5 11L7.5 13.5L15 6" stroke="#FEFEFE" stroke-width="2"/>
                    </svg>
                  </span>
                  Analyst support within 6 hours (SLA/PST hours)
                </li>
                {/* Repeat for other list items */}
              </ul>
            </div>
            <button className="bg-[#0649E7] text-[#FEFEFE] font-semibold py-2 px-4 rounded-full hover:bg-[#022183] transition">
              Get Started →
            </button>
          </div>

          {/* Plan 3 */}
          <div className="bg-[#FEFEFE] p-8 rounded-2xl border border-[#022183] flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-[#0649E7] mb-4">Plus</h3>
              <p className="text-3xl font-bold text-[#0649E7] mb-4">$100<span className="text-lg font-normal">/week</span></p>
              <ul className="text-sm text-[#0649E7] space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  
                  Everything in Starter, with more muscle:
                </li>
                {/* Repeat for other list items */}
              </ul>
              <ul className="text-sm text-[#0649E7] space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="10" fill="#4AD257"/>
                      <path d="M5 11L7.5 13.5L15 6" stroke="#FEFEFE" stroke-width="2"/>
                    </svg>
                  </span>
                  Up to 75 apps/week
                </li>
                {/* Repeat for other list items */}
              </ul>
              <ul className="text-sm text-[#0649E7] space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="10" fill="#4AD257"/>
                      <path d="M5 11L7.5 13.5L15 6" stroke="#FEFEFE" stroke-width="2"/>
                    </svg>
                  </span>
                  Apply to 15 job titles
                </li>
                {/* Repeat for other list items */}
              </ul>
              <ul className="text-sm text-[#0649E7] space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="10" fill="#4AD257"/>
                      <path d="M5 11L7.5 13.5L15 6" stroke="#FEFEFE" stroke-width="2"/>
                    </svg>
                  </span>
                  Analyst + full application team on Pacific hours
                </li>
                {/* Repeat for other list items */}
              </ul>
           
            </div>
            <button className="bg-[#0649E7] text-[#FEFEFE] font-semibold py-2 px-4 rounded-full hover:bg-[#022183] transition">
              Get Started →
            </button>
          </div>
        </div>


      {/* Advance Plan */}
{/* Advance Plan */}
<div className="bg-[#0649E7] p-8 rounded-2xl flex flex-col text-[#FEFEFE]">
  <div className="mb-6">
    <h3 className="text-xl font-semibold mb-1">Advance</h3>
    <p className="text-sm">Top-tier support for serious job hunters:</p>
  </div>
  
  {/* Divider line */}
  <div className="w-full h-px bg-[#FEFEFE] opacity-30 mb-6"></div>
  
  <div className="flex flex-col md:flex-row justify-between">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 mb-6 md:mb-0">
      <div className="flex items-center gap-2">
        <span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="10" fill="#4AD257"/>
            <path d="M5 11L7.5 13.5L15 6" stroke="#FEFEFE" stroke-width="2"/>
          </svg>
        </span>
        <span className="text-sm">Everything in Plus</span>
      </div>
      <div className="flex items-center gap-2">
        <span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="10" fill="#4AD257"/>
            <path d="M5 11L7.5 13.5L15 6" stroke="#FEFEFE" stroke-width="2"/>
          </svg>
        </span>
        <span className="text-sm">Custom Resumes & Cover Letters</span>
      </div>
      <div className="flex items-center gap-2">
        <span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="10" fill="#4AD257"/>
            <path d="M5 11L7.5 13.5L15 6" stroke="#FEFEFE" stroke-width="2"/>
          </svg>
        </span>
        <span className="text-sm">20 fully customized applications/week</span>
      </div>
      <div className="flex items-center gap-2">
        <span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="10" fill="#4AD257"/>
            <path d="M5 11L7.5 13.5L15 6" stroke="#FEFEFE" stroke-width="2"/>
          </svg>
        </span>
        <span className="text-sm">Help with complex job searches</span>
      </div>
      <div className="flex items-center gap-2 md:col-span-2">
        <span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="10" fill="#4AD257"/>
            <path d="M5 11L7.5 13.5L15 6" stroke="#FEFEFE" stroke-width="2"/>
          </svg>
        </span>
        <span className="text-sm">Access to senior resume experts, Founder & Exec Coaches</span>
      </div>
    </div>
    
    <div className="flex flex-col items-center md:items-end">
      <p className="text-3xl font-bold mb-4">$150<span className="text-lg font-normal">/week</span></p>
      <button className="bg-[#FEFEFE] text-[#0649E7] font-semibold py-2 px-4 rounded-full hover:bg-[#EBF1FF] transition">
        Get Started →
      </button>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default Plans;