
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with payment integration, product management, and real-time inventory tracking.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      repoUrl: "#",
      featured: true,
    },
    {
      title: "Health & Fitness App",
      description: "Mobile application for fitness tracking, meal planning, and workout routines using Flutter framework.",
      image: "/placeholder.svg",
      technologies: ["Flutter", "Firebase", "RESTful API"],
      liveUrl: "#",
      repoUrl: "#",
      featured: true,
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing projects and skills, built with React and Tailwind CSS.",
      image: "/placeholder.svg",
      technologies: ["React", "TailwindCSS", "Framer Motion"],
      liveUrl: "#",
      repoUrl: "#",
      featured: true,
    },
    {
      title: "Task Management System",
      description: "Collaborative task management tool with real-time updates and team collaboration features.",
      image: "/placeholder.svg",
      technologies: ["Vue.js", "Express", "PostgreSQL", "WebSockets"],
      liveUrl: "#",
      repoUrl: "#",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);
  
  return (
    <section id="projects" className="py-24 bg-white dark:bg-dark-slate">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold heading-gradient mb-4">My Projects</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise.
            Each project represents unique challenges and solutions.
          </p>
          <div className="h-1 w-20 bg-flutter-teal mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <div 
              key={index}
              className="group glass-card rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-flutter-blue/10 text-flutter-blue text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      className="text-sm flex items-center text-flutter-blue hover:text-flutter-blue-dark"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} className="mr-1" /> Live Demo
                    </a>
                  )}
                  {project.repoUrl && (
                    <a 
                      href={project.repoUrl} 
                      className="text-sm flex items-center text-flutter-blue hover:text-flutter-blue-dark"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Github size={16} className="mr-1" /> Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#contact" className="flutter-button">
            Let's Work Together
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
