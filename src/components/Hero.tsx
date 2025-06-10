import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 1 }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-slate-900/20" style={{ zIndex: 2 }} />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6">
            <span className="inline-block animate-slide-in-left text-white drop-shadow-2xl">KDI</span>
            <span className="inline-block animate-slide-in-right bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent ml-4">
              Marketing
            </span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-4 animate-fade-in font-light">
            Scale Your Brand
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-400 mb-12 animate-fade-in-delayed max-w-2xl mx-auto leading-relaxed">
            Ready to Scale Your Brand? Let's Talk!
          </p>
          
          <div className="flex justify-center animate-fade-in-up-delayed">
            <button
              onClick={scrollToContact}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
            >
              Work With Us
            </button>
          </div>
        </div>
      </div>
      
      <button
        onClick={() => {
          const element = document.getElementById('services');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-blue-400 transition-colors duration-300 animate-bounce z-10"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;