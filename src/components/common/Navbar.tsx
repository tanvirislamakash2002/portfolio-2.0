'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Download } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '../ui/ThemeToggle';

interface NavLink {
  name: string;
  section: string;
}

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const links: NavLink[] = [
    { name: 'Home', section: 'home' },
    { name: 'About', section: 'about' },
    { name: 'Skills', section: 'skills' },
    { name: 'Projects', section: 'projects' },
    { name: 'Contact', section: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      // Get all sections and their positions
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 150; // Adding offset

      let current = 'home';

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          const sectionBottom = offsetTop + offsetHeight;

          // Check if scroll position is within this section
          if (scrollPosition >= offsetTop && scrollPosition < sectionBottom) {
            current = section;
          }
        }
      });

      setActiveSection(current);
    };

    // Run once on mount to set initial active section
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const handleResumeDownload = () => {
    const resumeUrl = "https://drive.google.com/uc?export=download&id=1i0hk2fPbNXqUWa4OIqFMCymd1ZP94Lhv";
    window.open(resumeUrl, '_blank');
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center group focus:outline-none"
              aria-label="Go to home"
            >
              <div className="font-mono text-primary group-hover:text-primary/80 transition-colors">
                <span className="text-muted-foreground">{"<"}</span>
                <span className="mx-1 font-semibold">TanvirAkash</span>
                <span className="text-muted-foreground">{"/>"}</span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 bg-muted/50 rounded-lg px-2 py-1 border">
            {links.map((link) => (
              <Button
                key={link.section}
                onClick={() => scrollToSection(link.section)}
                variant="ghost"
                size="sm"
                className={cn(
                  "font-mono transition-all duration-200",
                  activeSection === link.section
                    ? "bg-muted text-primary shadow-inner"
                    : "text-muted-foreground hover:text-primary hover:bg-muted/50"
                )}
              >
                {link.name}
              </Button>
            ))}
          </nav>
          {/* Theme Toggle */}
          <ThemeToggle />
          {/* Contact Button - Desktop */}
          <div className="hidden md:block">
            <Button
              onClick={handleResumeDownload}
              variant="default"
              size="sm"
              className="font-mono"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              variant="outline"
              size="sm"
              className="font-mono"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      </div>


      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden transition-all duration-300 ease-in-out overflow-hidden",
          mobileMenuOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <div className="px-4 pt-2 pb-4 space-y-2 bg-background/95 backdrop-blur-md border-t">
          {links.map((link) => (
            <Button
              key={link.section}
              onClick={() => scrollToSection(link.section)}
              variant="ghost"
              className={cn(
                "w-full justify-start font-mono",
                activeSection === link.section
                  ? "bg-muted text-primary"
                  : "text-muted-foreground hover:text-primary hover:bg-muted/50"
              )}
            >
              {link.name}
            </Button>
          ))}
          <Button
            onClick={handleResumeDownload}
            variant="default"
            className="w-full font-mono"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;