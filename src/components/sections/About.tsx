import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const education = [
    {
      degree: 'B.Tech Computer Science & Engineering (Data Science)',
      institution: 'KL University',
      period: '2022 - 2026',
      cpi: '9.74',
      status: 'Expected 2026',
    },
    {
      degree: 'Higher Secondary Certificate (MPC)',
      institution: 'Sri Chaitanya College',
      period: '2020 - 2022',
      cpi: '9.41',
      status: 'Completed',
    },
    {
      degree: 'Secondary School Certificate',
      institution: 'Sri Chaitanya School',
      period: '2019 - 2020',
      cpi: '10.0',
      status: 'Completed',
    },
  ];

  const certifications = [
    'AWS Cloud Practitioner',
    'Google Cloud Associate',
    'Salesforce AI Specialist',
    'Red Hat EX183 Certification',
    'Oracle Java SE 11 Developer',
  ];

  return (
    <section id="about" className="py-20 bg-surface/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Passionate about technology, driven by data, and committed to creating innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Personal Bio */}
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-6 gradient-text">My Journey</h3>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                I'm a dedicated Computer Science and Engineering student at KL University, specializing in 
                Data Science with an exceptional academic record of 9.74 CPI. My passion lies at the 
                intersection of software engineering and data science, where I love building intelligent 
                solutions that make a real impact.
              </p>
              <p>
                Throughout my academic journey, I've gained hands-on experience in full-stack development, 
                cloud technologies, and data analysis. I believe in continuous learning and have earned 
                multiple industry certifications to stay current with emerging technologies.
              </p>
              <p>
                When I'm not coding, I enjoy mentoring fellow students, participating in hackathons, and 
                exploring the latest trends in AI and machine learning. My goal is to contribute to 
                innovative projects that solve real-world problems and create positive change.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <Card className="card-hover">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">9.74</div>
                  <div className="text-sm text-muted-foreground">Current CPI</div>
                </CardContent>
              </Card>
              <Card className="card-hover">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Certifications</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold mb-6 gradient-text">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="card-hover card-glow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <GraduationCap className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h4 className="text-lg font-semibold mb-2">{edu.degree}</h4>
                        <div className="flex items-center text-muted-foreground mb-2">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span className="text-sm">{edu.institution}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span className="text-sm">{edu.period}</span>
                          </div>
                          <div className="flex items-center">
                            <Award className="h-4 w-4 mr-1 text-secondary" />
                            <span className="font-semibold text-secondary">{edu.cpi} CPI</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-2xl font-bold mb-8 text-center gradient-text">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <p className="font-medium text-sm">{cert}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;