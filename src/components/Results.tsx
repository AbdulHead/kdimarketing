import React, { useEffect, useState, useRef } from 'react';
import { ChevronDown, ChevronUp, Star } from 'lucide-react';

const AnimatedCounter = ({ 
  end, 
  duration = 2000, 
  prefix = '', 
  suffix = '',
  isVisible 
}: { 
  end: number; 
  duration?: number; 
  prefix?: string; 
  suffix?: string;
  isVisible: boolean;
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const animationRef = useRef<number>();

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3);
      countRef.current = Math.floor(end * easeOut);
      setCount(countRef.current);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [end, duration, isVisible]);

  return (
    <span className="font-bold">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

const Results = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTestimonials, setShowTestimonials] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('results');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const results = [
    {
      value: 35000,
      suffix: 'K',
      title: 'Followers in 60 Days',
      description: 'Fashion brand viral growth',
      color: 'from-green-400 to-emerald-500',
      actualValue: 35
    },
    {
      value: 890,
      prefix: '$',
      suffix: 'K',
      title: 'Ad Sales Revenue',
      description: 'E-commerce campaign ROI',
      color: 'from-blue-400 to-cyan-500',
      actualValue: 890
    },
    {
      value: 450,
      suffix: '%',
      title: 'Engagement Increase',
      description: 'Restaurant chain growth',
      color: 'from-purple-400 to-pink-500',
      actualValue: 450
    }
  ];

  const allTestimonials = [
    {
      stars: 5,
      text: "KDI Marketing transformed our social presence. We went from 2K to 35K followers in just 60 days, and our sales increased by 340%. The viral content they created was incredible!",
      author: "Sarah Chen",
      company: "Luxe Fashion Co."
    },
    {
      stars: 5,
      text: "Their paid ad campaigns generated $150K in revenue within 3 months. The ROI was unbelievable - every dollar spent returned $8. KDI knows digital marketing like no other agency.",
      author: "Michael Rodriguez",
      company: "TechStart Solutions"
    },
    {
      stars: 5,
      text: "The branding work KDI delivered was phenomenal. Our engagement rates shot up 450% and we're now the talk of the food industry. They made us viral!",
      author: "Emily Watson",
      company: "Organic Eats Chain"
    },
    {
      stars: 5,
      text: "Incredible! Our membership sign-ups increased by 600% in just 4 months. KDI's targeted ads brought us the exact customers we wanted.",
      author: "David Park",
      company: "FitCore Gyms"
    },
    {
      stars: 5,
      text: "From 50 to 75K Instagram followers in 3 months! Our booking rates went through the roof. KDI's content strategy is pure magic.",
      author: "Lisa Thompson",
      company: "Beauty Bliss Spa"
    },
    {
      stars: 5,
      text: "Car sales up 280% thanks to KDI's Facebook and Google ads. They understand our market better than we do. Absolutely phenomenal work!",
      author: "James Wilson",
      company: "AutoMax Dealership"
    },
    {
      stars: 5,
      text: "Our coffee shops went from local unknown to city-wide sensation. 15 locations opened in 6 months thanks to KDI's viral marketing campaigns.",
      author: "Amanda Foster",
      company: "Cozy Café Network"
    },
    {
      stars: 5,
      text: "Service calls increased 400% and we're booked solid for months. KDI's local SEO and social media work brought us incredible visibility.",
      author: "Ryan Mitchell",
      company: "TechRepair Pro"
    },
    {
      stars: 5,
      text: "Appointment bookings up 350% and a waiting list 2 months long! KDI's Instagram strategy made us the most sought-after salon in the city.",
      author: "Nicole Johnson",
      company: "Glamour Hair Studio"
    }
  ];

  const renderStars = (count: number) => {
    return Array.from({ length: count }, (_, i) => (
      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
    ));
  };

  return (
    <section id="results" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(139,92,246,0.1),transparent)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Proven Results
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {results.map((result, index) => (
            <div
              key={result.title}
              className={`text-center group transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-slate-600 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group">
                <div className={`text-6xl sm:text-7xl lg:text-8xl font-bold mb-4 bg-gradient-to-r ${result.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                  <AnimatedCounter 
                    end={result.actualValue}
                    prefix={result.prefix}
                    suffix={result.suffix}
                    isVisible={isVisible}
                    duration={2500}
                  />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {result.title}
                </h3>
                
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {result.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-8">
          <button 
            onClick={() => setShowTestimonials(!showTestimonials)}
            className="group bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-500 hover:to-teal-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25 flex items-center gap-2 mx-auto"
          >
            See All 20+ Testimonials
            {showTestimonials ? (
              <ChevronUp className="w-5 h-5 group-hover:animate-bounce" />
            ) : (
              <ChevronDown className="w-5 h-5 group-hover:animate-bounce" />
            )}
          </button>
        </div>

        {showTestimonials && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up">
            {allTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.author}-${index}`}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-all duration-500 transform hover:scale-105 hover:shadow-xl group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-1 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {renderStars(testimonial.stars)}
                </div>
                
                <blockquote className="text-gray-300 mb-4 italic text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="border-t border-slate-700 pt-3">
                  <div className="font-semibold text-white text-sm group-hover:text-yellow-400 transition-colors duration-300">
                    {testimonial.author}
                  </div>
                  <div className="text-gray-400 text-xs">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Results;