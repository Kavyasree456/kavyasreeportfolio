import { useState, useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

const queryClient = new QueryClient();

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'services', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for header

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-background font-inter">
          <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
          
          <main>
            <Hero setActiveSection={setActiveSection} />
            <About />
            <Experience />
            <Skills />
            <Services />
            <Projects />
            <Contact />
          </main>

          {/* Footer */}
          <footer className="bg-surface border-t border-border py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-bold gradient-text">Kavya Sree</h3>
                  <p className="text-sm text-muted-foreground">
                    Aspiring Software Engineer | Data Science Enthusiast
                  </p>
                </div>
                
                <div className="flex space-x-4 text-sm text-muted-foreground">
                  <span>© 2025 Peruboina Kavya Sree</span>
                  <span>•</span>
                  <span>Built with React & Tailwind CSS</span>
                </div>
              </div>
            </div>
          </footer>
        </div>
        
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default Index;
