
import { Code, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Frontend Development', level: 90 },
    { name: 'Backend Development', level: 85 },
    { name: 'UI/UX Design', level: 80 },
    { name: 'Mobile Development', level: 85 },
    { name: 'Database Management', level: 75 },
  ];

  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-slate-900">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold heading-gradient mb-4">About Me</h2>
          <div className="h-1 w-20 bg-flutter-teal mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">My Story</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm a passionate software developer with expertise in creating elegant, 
              efficient solutions to complex problems. My journey in technology 
              began over 5 years ago, and I've been constantly learning and evolving since.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              With a strong foundation in both frontend and backend development, 
              I specialize in building responsive web applications using modern 
              frameworks and practices. I'm particularly interested in Flutter and 
              cross-platform development.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open-source projects, or sharing my knowledge through 
              blog posts and community engagement.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="glass-card p-6 rounded-xl">
                <Code className="h-10 w-10 text-flutter-blue mb-3" />
                <h4 className="text-lg font-semibold mb-2">Development</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Building web and mobile apps with modern tech</p>
              </div>
              
              <div className="glass-card p-6 rounded-xl">
                <Briefcase className="h-10 w-10 text-flutter-blue mb-3" />
                <h4 className="text-lg font-semibold mb-2">Experience</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">5+ years of professional software development</p>
              </div>
              
              <div className="glass-card p-6 rounded-xl">
                <GraduationCap className="h-10 w-10 text-flutter-blue mb-3" />
                <h4 className="text-lg font-semibold mb-2">Education</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">BSc in Computer Science from University Name</p>
              </div>
            </div>
          </div>

          <div className="animate-fade-in-right">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Skills & Expertise</h3>
            
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-flutter-blue font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-gradient-to-r from-flutter-blue to-flutter-teal h-2.5 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Technologies I Work With</h3>
              <div className="flex flex-wrap gap-3">
                {['HTML/CSS', 'JavaScript', 'TypeScript', 'React', 'Flutter', 'Node.js', 'Python', 'Firebase', 'MongoDB', 'SQL', 'Git', 'AWS'].map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-white dark:bg-dark-slate rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
