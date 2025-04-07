
import { Award, BookOpen, Monitor, Users } from 'lucide-react';

interface Achievement {
  year: string;
  title: string;
  description: string;
  icon: JSX.Element;
}

const Achievements = () => {
  const achievements: Achievement[] = [
    {
      year: "2023",
      title: "Tech Conference Speaker",
      description: "Delivered a keynote speech on 'The Future of Cross-Platform Development' at the Annual Tech Summit.",
      icon: <Monitor className="h-8 w-8 text-flutter-teal" />,
    },
    {
      year: "2022",
      title: "Open Source Contribution Award",
      description: "Recognized for significant contributions to open-source projects in the developer community.",
      icon: <Award className="h-8 w-8 text-flutter-teal" />,
    },
    {
      year: "2021",
      title: "Technical Article Publication",
      description: "Published a series of articles on modern development practices in a leading tech magazine.",
      icon: <BookOpen className="h-8 w-8 text-flutter-teal" />,
    },
    {
      year: "2020",
      title: "Community Leadership",
      description: "Led a developer community of 500+ members, organizing workshops and coding challenges.",
      icon: <Users className="h-8 w-8 text-flutter-teal" />,
    },
  ];

  return (
    <section id="achievements" className="py-24 bg-gray-50 dark:bg-slate-900">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold heading-gradient mb-4">
            Achievements & Milestones
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Key highlights from my professional journey that showcase my expertise and recognition.
          </p>
          <div className="h-1 w-20 bg-flutter-teal mx-auto mt-4"></div>
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-flutter-blue before:via-flutter-teal before:to-flutter-blue before:hidden md:before:block">
          {achievements.map((achievement, index) => (
            <div key={index} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 dark:bg-slate-700 group-odd:md:translate-x-5 group-even:md:-translate-x-5 shadow-md">
                <div className="w-3 h-3 rounded-full bg-flutter-blue"></div>
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-xl animate-fade-in">
                <div className="flex items-center mb-3">
                  {achievement.icon}
                  <span className="text-sm text-flutter-blue font-bold ml-3">
                    {achievement.year}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass-card p-6 rounded-xl text-center">
            <div className="text-4xl font-bold heading-gradient mb-2">10+</div>
            <div className="text-gray-600 dark:text-gray-300">Projects Completed</div>
          </div>
          
          <div className="glass-card p-6 rounded-xl text-center">
            <div className="text-4xl font-bold heading-gradient mb-2">5+</div>
            <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
          </div>
          
          <div className="glass-card p-6 rounded-xl text-center">
            <div className="text-4xl font-bold heading-gradient mb-2">15+</div>
            <div className="text-gray-600 dark:text-gray-300">Technologies Mastered</div>
          </div>
          
          <div className="glass-card p-6 rounded-xl text-center">
            <div className="text-4xl font-bold heading-gradient mb-2">3+</div>
            <div className="text-gray-600 dark:text-gray-300">Industry Awards</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
