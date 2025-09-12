import { Briefcase, Calendar, MapPin, Code, Users, GitBranch } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Development Intern',
      company: 'Rossell Techsys',
      period: 'Summer 2024',
      location: 'Remote',
      type: 'Internship',
      description: 'Built backend solutions and optimized database performance for enterprise apps.',
      achievements: [
        'Implemented background job scheduling using Spring Boot',
        'Optimized queries, improving performance by 40%',
        'Developed RESTful APIs and collaborated on microservices architecture'
      ],
      technologies: ['Spring Boot', 'Java Multithreading', 'MySQL', 'RESTful APIs', 'Microservices'],
      icon: <Code className="h-6 w-6" />,
      color: 'bg-primary'
    },
    {
      title: 'Web Development Intern',
      company: 'NeoCodeathon',
      period: '2023',
      location: 'Remote',
      type: 'Internship',
      description: 'Developed full-stack web applications for event management.',
      achievements: [
        'Built MERN-based event management application from scratch',
        'Created responsive UI/UX with React and Tailwind CSS',
        'Integrated APIs for payment and notifications'
      ],
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'REST APIs', 'JavaScript', 'Tailwind CSS'],
      icon: <GitBranch className="h-6 w-6" />,
      color: 'bg-secondary'
    },
    {
      title: 'Peer Mentor',
      company: 'KL University',
      period: '2023 - Present',
      location: 'Vijayawada, India',
      type: 'Leadership Role',
      description: 'Mentoring junior students in programming fundamentals, web development, and project guidance.',
      achievements: [
        'Guided 50+ juniors in coding and project development',
        'Conducted workshops on web development and data structures',
        'Led study groups for competitive programming preparation'
      ],
      technologies: ['Teaching', 'Mentorship', 'Project Management', 'Technical Training'],
      icon: <Users className="h-6 w-6" />,
      color: 'bg-accent'
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            Building expertise through hands-on projects and meaningful contributions
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>

                <Card className="md:ml-20 card-hover card-glow">
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      {/* Left Column */}
                      <div className="lg:col-span-1">
                        <div className="flex items-center mb-4">
                          <div className={`w-12 h-12 ${exp.color} rounded-lg flex items-center justify-center text-white mr-4`}>
                            {exp.icon}
                          </div>
                          <div>
                            <Badge variant="outline" className="mb-2">{exp.type}</Badge>
                            <h3 className="text-xl font-bold">{exp.title}</h3>
                          </div>
                        </div>

                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Briefcase className="h-4 w-4 mr-2" />
                            <span className="font-medium text-foreground">{exp.company}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Right Column */}
                      <div className="lg:col-span-2">
                        <p className="text-muted-foreground mb-6">{exp.description}</p>

                        <div className="mb-6">
                          <h4 className="font-semibold mb-3 text-primary">Key Achievements</h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="flex items-start">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                                <span className="text-sm text-muted-foreground">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3 text-primary">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <Badge key={techIndex} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Card className="max-w-2xl mx-auto card-glow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Ready for New Challenges</h3>
              <p className="text-muted-foreground mb-6">
                I'm actively seeking opportunities to contribute to innovative projects and continue growing as a software engineer.
              </p>
              <a 
                href="mailto:kavyasreeperuboina@gmail.com"
                className="btn-hero inline-flex items-center"
              >
                Let's Work Together
                <Briefcase className="ml-2 h-5 w-5" />
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
