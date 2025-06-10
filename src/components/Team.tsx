import React, { useEffect, useState } from 'react';

const Team = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const teamMembers = [
    {
      initials: 'DK',
      name: 'Dereson Kim',
      role: 'Ad Specialist',
      description: 'Dereson is our Ad Specialist with expertise in creating high-converting advertising campaigns across all major platforms.',
      color: 'from-blue-500 to-blue-600',
      delay: '0ms'
    },
    {
      initials: 'IJ',
      name: 'Isaac Jia',
      role: 'Content Creation',
      description: 'Isaac leads our content creation team, developing engaging multimedia content that drives brand awareness and sales.',
      color: 'from-purple-500 to-purple-600',
      delay: '200ms'
    },
    {
      initials: 'KH',
      name: 'Kevin Huang',
      role: 'Budgeting Specialist',
      description: 'Kevin manages budgeting and financial optimization, ensuring maximum ROI for all our marketing campaigns.',
      color: 'from-green-500 to-green-600',
      delay: '400ms'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(16,185,129,0.1),transparent)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Meet Our Team
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-slate-600 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: isVisible ? member.delay : '0ms' 
              }}
            >
              <div className="text-center">
                <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${member.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl`}>
                  <span className="text-white text-2xl font-bold">
                    {member.initials}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {member.name}
                </h3>
                
                <p className={`text-sm font-medium mb-4 bg-gradient-to-r ${member.color} bg-clip-text text-transparent`}>
                  {member.role}
                </p>
                
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;