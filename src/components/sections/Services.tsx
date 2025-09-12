import { Code, BarChart3, Cloud, Database, GraduationCap, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Services = () => {
  const services = [
    {
      title: 'Full-Stack Web Development',
      description: 'Modern, responsive web applications using React, Node.js, and cloud technologies. From concept to deployment with scalable architecture.',
      icon: <Code className="h-8 w-8" />,
      color: 'bg-primary',
      features: ['React.js & TypeScript', 'Node.js Backend', 'RESTful APIs', 'Database Design', 'Responsive UI/UX'],
      deliverables: ['Custom Web Application', 'Admin Dashboard', 'API Documentation', 'Deployment Setup']
    },
    {
      title: 'Data Analysis & Visualization',
      description: 'Transform your data into actionable insights with statistical analysis, interactive dashboards, and predictive modeling.',
      icon: <BarChart3 className="h-8 w-8" />,
      color: 'bg-secondary',
      features: ['Statistical Analysis', 'Data Visualization', 'Python/SQL', 'Dashboard Creation', 'Report Generation'],
      deliverables: ['Data Analysis Report', 'Interactive Dashboards', 'Insights Presentation', 'Recommendations']
    },
    
    {
      title: 'Database Design & Optimization',
      description: 'Efficient database architecture and performance optimization for MySQL, MongoDB, and PostgreSQL systems.',
      icon: <Database className="h-8 w-8" />,
      color: 'bg-success',
      features: ['Schema Design', 'Query Optimization', 'Performance Tuning', 'Data Migration', 'Backup Strategies'],
      deliverables: ['Database Schema', 'Optimized Queries', 'Performance Report', 'Maintenance Plan']
    },
    {
      title: 'Mentorship & Training',
      description: 'Personalized coaching for coding fundamentals, project guidance, and career development in technology.',
      icon: <GraduationCap className="h-8 w-8" />,
      color: 'bg-warning',
      features: ['1-on-1 Mentoring', 'Code Reviews', 'Career Guidance', 'Project Support', 'Interview Prep'],
      deliverables: ['Learning Roadmap', 'Project Portfolio', 'Skill Assessment', 'Career Plan']
    },
    
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Services</h2>
          <p className="section-subtitle">
            Comprehensive solutions to bring your ideas to life with modern technology
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-hover card-glow animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6 h-full">
                {/* Service Header */}
                <div className="mb-6">
                  <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center text-white mb-4`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-primary text-sm">Key Features</h4>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverables */}
                <div className="mt-auto">
                  <h4 className="font-semibold mb-3 text-secondary text-sm">Deliverables</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.deliverables.map((deliverable, delIndex) => (
                      <Badge key={delIndex} variant="outline" className="text-xs">
                        {deliverable}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <Card className="max-w-3xl mx-auto card-glow">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h3 className="text-2xl font-bold mb-4 gradient-text">Ready to Start Your Project?</h3>
                  <p className="text-muted-foreground mb-4">
                    Let's discuss your requirements and create a solution that exceeds your expectations.
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                      <span>Free initial consultation</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                      <span>Flexible engagement models</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                      <span>Ongoing support & maintenance</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="mb-6">
                    <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                      <Zap className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <a 
                    href="mailto:kavyasreeperuboina@gmail.com"
                    className="btn-hero"
                  >
                    Get Started Today
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;