
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-2xl font-bold heading-gradient">
              Portfolio
            </a>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Building amazing digital experiences.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8 text-center md:text-left">
            <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-flutter-blue dark:hover:text-flutter-teal transition-colors">
              About
            </a>
            <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-flutter-blue dark:hover:text-flutter-teal transition-colors">
              Projects
            </a>
            <a href="#achievements" className="text-gray-600 dark:text-gray-300 hover:text-flutter-blue dark:hover:text-flutter-teal transition-colors">
              Achievements
            </a>
            <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-flutter-blue dark:hover:text-flutter-teal transition-colors">
              Contact
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {currentYear} Your Name. All rights reserved.
          </p>
          
          <a 
            href="#home" 
            className="mt-4 md:mt-0 w-10 h-10 rounded-full bg-flutter-blue/10 hover:bg-flutter-blue flex items-center justify-center text-flutter-blue hover:text-white transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
