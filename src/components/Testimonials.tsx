import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
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

    const element = document.getElementById('testimonials');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      stars: 5,
      text: "KDI Marketing transformed our social presence. We went from 2K to 35K followers in just 60 days, and our sales increased by 340%. The viral content they created was incredible!",
      author: "Sarah Chen",
      company: "Luxe Fashion Co.",
      delay: '0ms'
    },
    {
      stars: 5,
      text: "Their paid ad campaigns generated $150K in revenue within 3 months. The ROI was unbelievable - every dollar spent returned $8. KDI knows digital marketing like no other agency.",
      author: "Michael Rodriguez",
      company: "TechStart Solutions",
      delay: '200ms'
    },
    {
      stars: 5,
      text: "The branding work KDI delivered was phenomenal. Our engagement rates shot up 450% and we're now the talk of the food industry. They made us viral!",
      author: "Emily Watson",
      company: "Organic Eats Chain",
      delay: '400ms'
    }
  ];

  const renderStars = (count: number) => {
    return Array.from({ length: count }, (_, i) => (
      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.1),transparent)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Client Success Stories
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-slate-600 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: isVisible ? testimonial.delay : '0ms' 
              }}
            >
              <div className="flex items-center gap-1 mb-6 group-hover:scale-110 transition-transform duration-300">
                {renderStars(testimonial.stars)}
              </div>
              
              <blockquote className="text-gray-300 mb-6 italic leading-relaxed group-hover:text-white transition-colors duration-300">
                "{testimonial.text}"
              </blockquote>
              
              <div className="border-t border-slate-700 pt-4">
                <div className="font-semibold text-white group-hover:text-yellow-400 transition-colors duration-300">
                  {testimonial.author}
                </div>
                <div className="text-gray-400 text-sm">
                  {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;