import { Mail, Phone, Linkedin, Github, Send, MessageCircle, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_6whszdq';
const TEMPLATE_ID = 'template_mf1aoyt';
const PUBLIC_KEY = 'rG33CiEfzKUCZJ3Yp';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: 'Email',
      value: 'kavyasreeperuboina@gmail.com',
      href: 'mailto:kavyasreeperuboina@gmail.com',
      color: 'bg-primary'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: 'Phone',
      value: '+91-9177977022',
      href: 'tel:+919177977022',
      color: 'bg-secondary'
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: 'LinkedIn',
      value: 'kavyasree-peruboina',
      href: 'https://linkedin.com/in/kavyasree-peruboina',
      color: 'bg-accent'
    },
    {
      icon: <Github className="h-6 w-6" />,
      label: 'GitHub',
      value: 'Kavyasree456',
      href: 'https://github.com/Kavyasree456',
      color: 'bg-success'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject || 'Contact from Portfolio',
      message: formData.message
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(
        () => {
          toast({ title: "Message sent!", description: "Thank you! I will get back to you soon." });
          setFormData({ name: '', email: '', subject: '', message: '' });
        },
        () => {
          toast({ title: "Oops!", description: "Something went wrong. Please try again." });
        }
      );
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Let's discuss your ideas and create something amazing together
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 w-full">
            <h3 className="text-2xl font-bold mb-6 gradient-text">Let's Connect</h3>
            <p className="text-muted-foreground mb-8">
              I'm always excited to discuss new opportunities, interesting projects, or just have a chat about technology.
            </p>

            <div className="space-y-4 mb-8">
              {contactInfo.map((contact, idx) => (
                <Card key={idx} className="card-hover">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 ${contact.color} rounded-lg flex items-center justify-center text-white`}>
                        {contact.icon}
                      </div>
                      <div className="flex-grow">
                        <div className="text-sm text-muted-foreground">{contact.label}</div>
                        <a 
                          href={contact.href}
                          target={contact.href.startsWith('http') ? '_blank' : undefined}
                          rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="font-medium hover:text-primary transition-colors"
                        >
                          {contact.value}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 w-full">
            <Card className="card-glow animate-fade-in-up relative overflow-visible">
              <CardContent className="p-8 relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-white mr-4">
                    <Send className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Send Me a Message</h3>
                    <p className="text-muted-foreground">I'll get back to you within 24 hours</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name *</label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address *</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What would you like to discuss?"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message *</label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, ideas, or just say hello..."
                      rows={6}
                      className="w-full resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button type="submit" className="btn-hero flex-1">
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className="flex-1"
                      onClick={() => window.location.href = 'mailto:kavyasreeperuboina@gmail.com'}
                    >
                      <Mail className="h-5 w-5 mr-2" />
                      Direct Email
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
