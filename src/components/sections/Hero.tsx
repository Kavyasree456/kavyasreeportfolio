import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import kavyaProfile from '@/assets/kavya-profile.jpg';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

const Hero = ({ setActiveSection }: HeroProps) => {
  const handleViewPortfolio = () => {
    setActiveSection('projects');
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactMe = () => {
    setActiveSection('contact');
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Animated Mesh Background */}
      <div className="mesh-bg"></div>
      
      {/* Floating Orbs */}
      <div className="floating-orb w-96 h-96 -top-48 -left-48" style={{ animationDelay: '0s' }}></div>
      <div className="floating-orb w-64 h-64 -top-32 -right-32" style={{ animationDelay: '2s' }}></div>
      <div className="floating-orb w-80 h-80 -bottom-40 -right-20" style={{ animationDelay: '4s' }}></div>

      <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="animate-fade-in-up">
              {/* Glass Card Container */}
              <div className="glass-card rounded-3xl p-8 mb-8">
                <div className="mb-6">
                  <p className="text-lg text-primary font-semibold mb-2 flex items-center gap-2">
                    <span className="animate-bounce">👋</span> Hello, I'm
                  </p>
                  <h1 className="hero-title">
                    Peruboina<br />
                    Kavya Sree
                  </h1>
                  <div className="neon-border rounded-2xl p-4 mt-4">
                    <p className="hero-subtitle">
                      Aspiring Software Engineer | Data Science Enthusiast
                    </p>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                  Computer Science Engineering student specializing in Data Science at KL University. 
                  Passionate about building innovative solutions with modern technologies and data-driven insights.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 mb-8">
                <button onClick={handleViewPortfolio} className="btn-modern group">
                  <span className="relative z-10 flex items-center justify-center">
                    View Portfolio
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
                <button onClick={handleContactMe} className="glass-card px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-glass group">
                  <span className="flex items-center justify-center">
                    Contact Me
                    <Mail className="ml-2 h-5 w-5 transition-transform group-hover:rotate-12" />
                  </span>
                </button>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <Button 
                  variant="outline" 
                  size="sm"
                  asChild
                  className="glass-card hover:shadow-neon border-0 transition-all duration-300 hover:scale-110"
                >
                  <a 
                    href="https://linkedin.com/in/kavyasree-peruboina" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  asChild
                  className="glass-card hover:shadow-neon border-0 transition-all duration-300 hover:scale-110"
                >
                  <a 
                    href="https://github.com/Kavyasree456" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  asChild
                  className="glass-card hover:shadow-neon border-0 transition-all duration-300 hover:scale-110"
                >
                  <a 
                    href="mailto:kavyasreeperuboina@gmail.com"
                    aria-label="Email"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Column - Profile Image */}
            <div className="animate-scale-in relative">
              <div className="relative max-w-md mx-auto">
                {/* Multiple Animated Background Gradients */}
                <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-30 animate-float"></div>
                <div className="absolute inset-4 bg-gradient-secondary rounded-full blur-2xl opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
                
                {/* Profile Image Container with Glass Effect */}
                <div className="relative glass-card p-2 rounded-full animate-glow">
                  <div className="w-80 h-80 rounded-full overflow-hidden shadow-hero bg-gradient-primary p-1">
                    <img
  src="/profile.png"   // <-- notice the leading slash
  alt="Peruboina Kavya Sree - Software Engineer and Data Science Student"
  className="w-full h-full rounded-full object-cover transition-transform duration-700 hover:scale-110"
/>

                  </div>
                </div>
                
                {/* Enhanced Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 glass-card rounded-full flex items-center justify-center text-2xl shadow-lg animate-float neon-border" style={{ animationDelay: '0.5s' }}>
                  ⭐
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 glass-card rounded-full flex items-center justify-center text-xl shadow-lg animate-float neon-border" style={{ animationDelay: '1s' }}>
                  💻
                </div>
                <div className="absolute top-1/4 -left-8 w-10 h-10 glass-card rounded-full flex items-center justify-center text-lg shadow-lg animate-float neon-border" style={{ animationDelay: '1.5s' }}>
                  📊
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="glass-card w-8 h-12 rounded-full flex justify-center items-end pb-2 neon-border">
              <div className="w-1 h-4 bg-primary rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;