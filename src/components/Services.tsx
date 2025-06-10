import React, { useEffect, useState } from 'react';
import { Share2, Shield, Rocket, Code, ChevronDown, ChevronUp, TrendingUp, Zap, Star, Play, Target, Users } from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('services');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Viral content strategies that convert',
      color: 'from-blue-500 to-cyan-500',
      delay: '0ms'
    },
    {
      icon: Shield,
      title: 'Paid Advertising',
      description: 'High-ROI campaigns across all platforms',
      color: 'from-purple-500 to-pink-500',
      delay: '200ms'
    },
    {
      icon: Rocket,
      title: 'Brand Development',
      description: 'Complete brand identity & positioning',
      color: 'from-green-500 to-emerald-500',
      delay: '400ms'
    },
    {
      icon: Code,
      title: 'Content Creation',
      description: 'Engaging multimedia content that sells',
      color: 'from-orange-500 to-red-500',
      delay: '600ms'
    }
  ];

  const successStrategies = [
    {
      icon: TrendingUp,
      title: 'Viral Content Mastery',
      description: "We've created 50+ viral posts with over 1M views each. Our secret? Understanding your audience's emotions and crafting content that sparks conversations, shares, and saves.",
      stat: 'Average 278K views per viral post',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Zap,
      title: 'High-Converting Ad Campaigns',
      description: 'Our ad campaigns consistently deliver 8:1 ROAS across all platforms. We use advanced audience targeting, compelling ad creatives, and continuous optimization to maximize your ad spend.',
      stat: 'Average 8:1 ROAS across 200+ campaigns',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Users,
      title: 'Follower Growth Strategies',
      description: "We've grown accounts from 0 to 100K+ followers in under 6 months using organic strategies, influencer partnerships, and engagement optimization techniques.",
      stat: '50+ accounts have reached 43K followers',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Star,
      title: 'Brand Positioning Excellence',
      description: 'We position brands as industry leaders through thought leadership content, strategic partnerships, and consistent brand messaging that resonates with target audiences.',
      stat: '95% client brand recognition increase',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: Target,
      title: 'Revenue Acceleration',
      description: 'Our comprehensive marketing strategies have generated over $15M in revenue for our clients through strategic campaign planning and execution.',
      stat: '$3.18M revenue generated',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Play,
      title: 'Video Content That Converts',
      description: 'Our video content averages 3x higher engagement than static posts. We create compelling stories that showcase your brand and drive action.',
      stat: '3x higher engagement on video content',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-slate-600 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: isVisible ? service.delay : '0ms',
                animationDelay: service.delay 
              }}
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mb-8">
          <button 
            onClick={() => setShowDetails(!showDetails)}
            className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center gap-2 mx-auto"
          >
            How We're So Successful
            {showDetails ? (
              <ChevronUp className="w-5 h-5 group-hover:animate-bounce" />
            ) : (
              <ChevronDown className="w-5 h-5 group-hover:animate-bounce" />
            )}
          </button>
        </div>

        {showDetails && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
            {successStrategies.map((strategy, index) => (
              <div
                key={strategy.title}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-slate-600 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${strategy.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <strategy.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {strategy.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors duration-300">
                  {strategy.description}
                </p>
                
                <div className={`text-sm font-medium px-3 py-1 rounded-full bg-gradient-to-r ${strategy.color} bg-opacity-20 text-white border border-opacity-30`}>
                  {strategy.stat}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;