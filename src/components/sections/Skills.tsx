import { Code, Database, Cloud, Wrench, Users, Brain } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="h-6 w-6" />,
      color: 'bg-primary',
      skills: ['Java', 'Python (Basics)', 'C Programming', 'SQL', 'JavaScript', 'TypeScript'],
      proficiency: 85
    },
    {
      title: 'Frameworks & Libraries',
      icon: <Wrench className="h-6 w-6" />,
      color: 'bg-secondary',
      skills: ['React.js', 'Spring Boot', 'Hibernate', 'Node.js', 'Express.js', 'Tailwind CSS'],
      proficiency: 80
    },
    {
      title: 'Databases',
      icon: <Database className="h-6 w-6" />,
      color: 'bg-accent',
      skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'Database Design', 'Query Optimization'],
      proficiency: 78
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud className="h-6 w-6" />,
      color: 'bg-success',
      skills: ['AWS', 'Google Cloud Platform', 'Docker', 'CI/CD', 'GitHub Actions', 'Linux'],
      proficiency: 75
    },
    {
      title: 'Development Tools',
      icon: <Wrench className="h-6 w-6" />,
      color: 'bg-warning',
      skills: ['Git/GitHub', 'VS Code', 'Eclipse IDE', 'Postman', 'Maven', 'npm/yarn'],
      proficiency: 90
    },
    {
      title: 'Soft Skills',
      icon: <Users className="h-6 w-6" />,
      color: 'bg-primary',
      skills: ['Leadership', 'Team Collaboration', 'Problem Solving', 'Communication', 'Time Management', 'Mentoring'],
      proficiency: 88
    }
  ];

  const technicalHighlights = [
    {
      title: 'Full-Stack Development',
      description: 'MERN Stack expertise with modern web technologies',
      icon: <Code className="h-8 w-8" />,
    },
    {
      title: 'Data Science',
      description: 'Statistical analysis and machine learning fundamentals',
      icon: <Brain className="h-8 w-8" />,
    },
    {
      title: 'Cloud Computing',
      description: 'AWS and GCP certified with hands-on experience',
      icon: <Cloud className="h-8 w-8" />,
    },
    {
      title: 'Database Management',
      description: 'Design, optimization, and administration',
      icon: <Database className="h-8 w-8" />,
    },
  ];

  return (
    <section id="skills" className="py-20 bg-surface/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        {/* Technical Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {technicalHighlights.map((highlight, index) => (
            <div key={index} className="card-modern text-center animate-fade-in-up neon-border rounded-3xl p-6" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white shadow-glow">
                {highlight.icon}
              </div>
              <h3 className="font-bold mb-2 gradient-text">{highlight.title}</h3>
              <p className="text-sm text-muted-foreground">{highlight.description}</p>
            </div>
          ))}
        </div>

        {/* Detailed Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="card-modern animate-fade-in-up p-6 rounded-3xl" style={{ animationDelay: `${index * 0.2}s` }}>
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center text-white mr-4 shadow-glow`}>
                  {category.icon}
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold mb-1 gradient-text">{category.title}</h3>
                  {/* Proficiency Bar */}
                  <div className="w-full bg-muted/30 rounded-full h-2 backdrop-blur-sm">
                    <div 
                      className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out shadow-glow"
                      style={{ width: `${category.proficiency}%` }}
                    ></div>
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {category.proficiency}% Proficiency
                  </div>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-modern">
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <Card className="max-w-4xl mx-auto card-glow">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Always Learning, Always Growing</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I believe in continuous improvement and staying updated with the latest technologies. 
                Currently exploring advanced machine learning techniques and cloud-native architectures.
              </p>
              
              {/* Current Learning */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-primary">Currently Learning</h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {['Machine Learning', 'Docker & Kubernetes', 'GraphQL', 'Next.js', 'Microservices'].map((tech, index) => (
                    <Badge key={index} variant="outline" className="skill-badge">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <a 
                href="#contact"
                className="btn-outline"
              >
                Let's Build Something Together
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;