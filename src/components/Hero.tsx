
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center bg-gradient-to-b from-white to-blue-50 dark:from-dark-slate dark:to-slate-900 overflow-hidden relative pt-20"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight heading-gradient mb-6">
              Hi, I'm <span className="text-flutter-blue">Your Name</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              Professional Developer & Designer
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-xl">
              I specialize in creating beautiful, high-performance applications 
              with clean, maintainable code. Let's build something amazing together.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="flutter-button">
                Get in Touch
              </a>
              <a href="#projects" className="px-6 py-3 border border-flutter-blue text-flutter-blue rounded-full font-medium hover:bg-flutter-blue hover:text-white transition-all duration-300 hover:-translate-y-1">
                View My Work
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center animate-float">
            <div className="rounded-full w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-flutter-blue to-flutter-teal flex items-center justify-center overflow-hidden shadow-2xl">
              {/* Replace with your profile image */}
              <div className="text-white text-lg font-medium">Your Photo</div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="text-flutter-blue h-8 w-8" />
          </a>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-flutter-teal opacity-10 rounded-full"></div>
      <div className="absolute top-36 -right-20 w-72 h-72 bg-flutter-blue opacity-10 rounded-full"></div>
    </section>
  );
};

export default Hero;
