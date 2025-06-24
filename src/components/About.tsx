import React from 'react';
import { User, Target, Lightbulb, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  const characteristics = [
    {
      icon: Target,
      title: 'Detail-Oriented',
      description: 'I pay meticulous attention to every aspect of development, ensuring clean, maintainable code.'
    },
    {
      icon: Lightbulb,
      title: 'Innovative',
      description: 'Always exploring new technologies and creative solutions to complex problems.'
    },
    {
      icon: Users,
      title: 'Collaborative',
      description: 'Strong team player who thrives in collaborative environments and values open communication.'
    }
  ];

  const stats = [
    { number: '3+', label: 'Years Experience' },
    { number: '25+', label: 'Projects Completed' },
    { number: '15+', label: 'Technologies Mastered' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A passionate full-stack developer dedicated to creating innovative solutions 
            that make a meaningful impact in the digital world.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <User className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">My Story</h3>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              As an IT student and full-stack developer, I've always been fascinated by the power of 
              technology to transform ideas into reality. My journey began with a curiosity about how 
              websites work, which quickly evolved into a passion for creating seamless digital experiences.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I specialize in modern web technologies and have experience working with startups, 
              creative agencies, and corporate clients. My approach combines technical expertise 
              with creative problem-solving to deliver solutions that not only work flawlessly 
              but also provide exceptional user experiences.
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or mentoring fellow developers. I believe in continuous 
              learning and staying at the forefront of industry trends.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Developer workspace" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-xl">
              <div className="flex items-center space-x-3">
                <Award className="w-8 h-8 text-accent-500" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Certified</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Full-Stack Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Characteristics */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            What Drives Me
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {characteristics.map((char, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <char.icon className="w-12 h-12 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {char.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {char.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="text-white">
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;