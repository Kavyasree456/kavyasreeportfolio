import { ExternalLink, Github, Calendar, Users, Code, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'Student Learning Management System',
      description: 'A comprehensive MERN stack application for educational institutions with real-time features, user management, and course analytics.',
      longDescription: 'Built a full-featured LMS with student enrollment, course management, assignment submission, real-time chat, video conferencing integration, and detailed analytics dashboard for administrators.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=300&fit=crop',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Socket.io', 'JWT'],
      year: '2024',
      category: 'Full-Stack Web App',
      features: ['User Authentication', 'Course Management', 'Real-time Chat', 'File Upload', 'Analytics Dashboard', 'Responsive Design'],
      github: '', // no code link
      demo: 'https://lms-mernstack-mswd.netlify.app/', // demo link
      status: 'Completed'
    },
    {
      title: 'Mutual Funds Investment System',
      description: 'Java Spring Boot application for managing mutual fund investments with portfolio tracking and performance analytics.',
      longDescription: 'Developed a secure investment platform with user portfolio management, fund performance tracking, automated calculations, and detailed reporting for investment analysis.',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=300&fit=crop',
      technologies: ['Java', 'Spring Boot', 'Hibernate', 'MySQL', 'Thymeleaf', 'Bootstrap'],
      year: '2024',
      category: 'Backend System',
      features: ['Portfolio Management', 'Performance Tracking', 'Secure Transactions', 'Reporting', 'User Dashboard', 'Data Visualization'],
      github: 'https://github.com/Kavyasree456/JFSDSDPProjectEverGrow', // code link
      demo: '#', // no demo link
      status: 'Completed'
    },
    {
      title: 'Personal Portfolio Website',
      description: 'Modern, responsive portfolio website built with React and Tailwind CSS featuring smooth animations and optimized performance.',
      longDescription: 'Created a professional portfolio website showcasing projects, skills, and experience with modern design principles, smooth animations, and excellent performance scores.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=300&fit=crop',
      technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'Framer Motion'],
      year: '2025',
      category: 'Frontend Website',
      features: ['Responsive Design', 'Smooth Animations', 'Dark/Light Mode', 'SEO Optimized', 'Fast Loading', 'Modern UI/UX'],
      github: 'https://github.com/Kavyasree456',
      demo: '#',
      status: 'In Progress'
    },
    {
      title: 'AI-Powered Sentiment Analyzer',
      description: 'Python-based machine learning application for analyzing sentiment in text data with real-time processing capabilities.',
      longDescription: 'Implemented a sentiment analysis tool using Python and ML libraries to process social media data, analyze public sentiment, and generate insights for business intelligence.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=300&fit=crop',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Flask', 'Chart.js'],
      year: '2023',
      category: 'Machine Learning',
      features: ['Text Processing', 'ML Algorithms', 'Real-time Analysis', 'Data Visualization', 'API Integration', 'Batch Processing'],
      github: 'https://github.com/Kavyasree456',
      demo: '#',
      status: 'Completed'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-surface/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            A showcase of innovative solutions and technical expertise across various domains
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card-modern overflow-hidden animate-fade-in-up rounded-3xl" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} - ${project.description}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                <div className="absolute top-4 right-4">
                  <div className={`skill-modern ${project.status === 'Completed' ? 'bg-success/20 text-success' : 'bg-warning/20 text-warning'}`}>
                    {project.status}
                  </div>
                </div>

                <div className="absolute top-4 left-4">
                  <div className="skill-modern bg-primary/20 text-primary border-primary/30">
                    {project.category}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 gradient-text">{project.title}</h3>
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{project.year}</span>
                </div>

                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.longDescription}</p>

                <div className="mb-6 flex space-x-3">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="glass-card px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-neon flex items-center justify-center flex-1"
                    >
                      <Github className="h-4 w-4 mr-2" /> Code
                    </a>
                  )}
                  {project.demo && project.demo !== '#' && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-modern flex items-center justify-center flex-1 py-2 text-sm"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" /> Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
