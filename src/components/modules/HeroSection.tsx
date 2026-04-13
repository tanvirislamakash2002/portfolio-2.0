'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Download,
  Briefcase,
  Terminal,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

// Simple Typing Effect for roles
const TypingEffect = ({ texts = [], speed = 150, pauseTime = 2000 }: { 
  texts: string[]; 
  speed?: number; 
  pauseTime?: number;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (texts.length === 0) return;

    const text = texts[currentIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < text.length) {
          setCurrentText(text.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(text.slice(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timer);
  }, [currentText, currentIndex, isDeleting, texts, speed, pauseTime]);

  return (
    <span>
      {currentText}
      <span className="animate-pulse text-primary">|</span>
    </span>
  );
};

// Code Block Typing Effect
const CodeTypingEffect = ({ codeLines = [], speed = 60 }: { 
  codeLines: string[]; 
  speed?: number;
}) => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (codeLines.length === 0) return;

    const currentLine = codeLines[currentLineIndex];

    if (currentCharIndex < currentLine.length) {
      const timer = setTimeout(() => {
        setDisplayedLines(prev => {
          const newLines = [...prev];
          if (!newLines[currentLineIndex]) {
            newLines[currentLineIndex] = '';
          }
          newLines[currentLineIndex] = currentLine.slice(0, currentCharIndex + 1);
          return newLines;
        });
        setCurrentCharIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timer);
    } else if (currentLineIndex < codeLines.length - 1) {
      const timer = setTimeout(() => {
        setCurrentLineIndex(prev => prev + 1);
        setCurrentCharIndex(0);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      // Restart animation
      const timer = setTimeout(() => {
        setDisplayedLines([]);
        setCurrentLineIndex(0);
        setCurrentCharIndex(0);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentCharIndex, currentLineIndex, codeLines, speed]);

  return (
    <div className="font-mono text-sm text-primary h-[250px] md:h-[185px] lg:h-[160px]">
      {displayedLines.map((line, index) => (
        <div key={index} className="flex items-center">
          <span className="text-muted-foreground mr-3 w-6 text-right text-xs">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span>{line}</span>
          {index === displayedLines.length - 1 && (
            <span className="animate-pulse ml-1 text-primary">|</span>
          )}
        </div>
      ))}
    </div>
  );
};

// Background Code Animation Component
const BackgroundCodeAnimation = ({ lines, className, speed = 100 }: { 
  lines: string[]; 
  className?: string;
  speed?: number;
}) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (lines.length === 0) return;

    const currentLine = lines[currentLineIndex];

    if (currentText.length < currentLine.length) {
      const timer = setTimeout(() => {
        setCurrentText(currentLine.slice(0, currentText.length + 1));
      }, speed);
      return () => clearTimeout(timer);
    } else {
      // Line completed, pause then move to next
      const timer = setTimeout(() => {
        setCurrentLineIndex((prev) => (prev + 1) % lines.length);
        setCurrentText('');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [currentText, currentLineIndex, lines, speed]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <div className={`font-mono text-xs ${className}`}>
      <div className="space-y-1">
        {lines[currentLineIndex] && (
          <div>
            {currentText}
            {showCursor && <span className="text-primary/50">|</span>}
          </div>
        )}
      </div>
    </div>
  );
};

// Fixed Floating Code Snippets - No random values during SSR
const FloatingCodeSnippets = () => {
  const [mounted, setMounted] = useState(false);
  
  const codeSnippets = [
    "React.createElement()",
    "useState()",
    "useEffect()",
    "async/await",
    "API.fetch()",
    "MongoDB.connect()",
    "Express.js",
    "Node.js"
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  // Generate consistent positions only on client
  if (!mounted) {
    return <div className="absolute inset-0 overflow-hidden pointer-events-none" />;
  }

  // Generate random values after mount (client-side only)
  const snippetsWithStyles = codeSnippets.map((snippet, index) => ({
    snippet,
    top: `${Math.random() * 80 + 10}%`,
    left: `${Math.random() * 80 + 10}%`,
    animationDelay: `${index * 0.5}s`,
    animationDuration: `${15 + Math.random() * 10}s`,
    animationClass: `animate-float-${index % 4}`
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {snippetsWithStyles.map((item, index) => (
        <div
          key={index}
          className={`absolute font-mono text-xs text-primary/20 ${item.animationClass}`}
          style={{
            top: item.top,
            left: item.left,
            animationDelay: item.animationDelay,
            animationDuration: item.animationDuration
          }}
        >
          {item.snippet}
        </div>
      ))}
    </div>
  );
};

// Background Particles (enhanced)
const BackgroundParticles = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="absolute inset-0 overflow-hidden" />;
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated particles */}
      <div className="absolute w-2 h-2 bg-primary/20 rounded-full animate-bounce top-1/4 left-1/4" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
      <div className="absolute w-1 h-1 bg-green-400/30 rounded-full animate-bounce top-1/3 right-1/4" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
      <div className="absolute w-3 h-3 bg-purple-400/10 rounded-full animate-bounce bottom-1/4 left-1/3" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
      <div className="absolute w-1 h-1 bg-primary/40 rounded-full animate-bounce top-1/2 right-1/3" style={{ animationDelay: '3s', animationDuration: '3.5s' }}></div>
      <div className="absolute w-2 h-2 bg-green-400/20 rounded-full animate-bounce bottom-1/3 right-1/4" style={{ animationDelay: '4s', animationDuration: '4.5s' }}></div>

      {/* Moving lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-pulse"></div>
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-green-400/15 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

// Main Hero Section Component
const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  
  const roles = [
    "MERN Stack Developer",
    "React Specialist",
    "Node.js Expert",
    "Problem Solver",
    "Code Enthusiast"
  ];

  const codeLines = [
    "const developer = {",
    "  name: 'Tanvir Islam Akash',",
    "  role: 'MERN Stack Developer',",
    "  skills: ['React', 'Node.js', 'MongoDB'],",
    "  passion: 'Building amazing apps',",
    "  status: 'Available for hire ✨'",
    "};"
  ];

  const backgroundCodeLeft = [
    "// Welcome to my portfolio",
    "import Developer from './tanvir';",
    "const portfolio = new Portfolio();",
    "portfolio.init();"
  ];

  const backgroundCodeRight = [
    "export default AmazingDeveloper;",
    "// Let's build something great!",
    "console.log('Ready to code!');",
    "developer.startCoding();"
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleResumeDownload = () => {
    const resumeUrl = "https://drive.google.com/uc?export=download&id=1i0hk2fPbNXqUWa4OIqFMCymd1ZP94Lhv";
    window.open(resumeUrl, '_blank');
  };

  return (
    <section id='home' className="relative bg-gradient-to-br from-background via-background/95 to-background/90 min-h-screen flex items-center justify-center overflow-hidden py-16 md:py-22">
      {/* Background Elements - Only render after mount */}
      {mounted && (
        <>
          <BackgroundParticles />
          <FloatingCodeSnippets />

          {/* Animated Background Code */}
          <div className="absolute top-10 left-10 opacity-10 hidden lg:block">
            <BackgroundCodeAnimation
              lines={backgroundCodeLeft}
              className="text-foreground"
              speed={80}
            />
          </div>

          <div className="absolute bottom-10 right-10 opacity-10 hidden lg:block">
            <BackgroundCodeAnimation
              lines={backgroundCodeRight}
              className="text-primary/50"
              speed={120}
            />
          </div>

          {/* Additional animated elements */}
          <div className="absolute top-1/2 left-5 opacity-5 hidden xl:block">
            <BackgroundCodeAnimation
              lines={[
                "function createAwesome() {",
                "  return passion + skills;",
                "}"
              ]}
              className="text-primary/30"
              speed={90}
            />
          </div>
        </>
      )}

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12">
          {/* Content on the left */}
          <div className="flex-1 text-center md:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-mono mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Available for work</span>
            </div>

            {/* Name and Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I&apos;m <span className="text-primary">Tanvir Islam Akash</span>
            </h1>

            {/* Typing Effect for Roles */}
            <div className="text-xl md:text-2xl lg:text-3xl mb-6 h-12 flex items-center justify-center md:justify-start">
              <TypingEffect
                texts={roles}
                speed={150}
                pauseTime={2000}
              />
            </div>

            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto md:mx-0">
              I have 1 year experience in web development. I have created more than 12 websites.
            </p>

            {/* Code Block */}
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border mb-8 max-w-lg mx-auto md:mx-0">
              {/* Terminal Header */}
              <div className="flex items-center mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground ml-4 text-sm">
                  <Terminal className="w-3 h-3" />
                  <span>portfolio.js</span>
                </div>
              </div>

              {/* Typing Code */}
              <CodeTypingEffect codeLines={codeLines} speed={60} />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button 
                onClick={handleResumeDownload}
                size="lg"
                className="font-semibold"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              <Link href="/projects">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="font-semibold"
                >
                  <Briefcase className="mr-2 h-4 w-4" />
                  View Projects
                </Button>
              </Link>
            </div>
          </div>

          {/* Profile Image on the right */}
          <div className="flex-1 flex flex-col items-center justify-center">
            <motion.div
              className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full border-4 border-primary bg-muted overflow-hidden"
              animate={{
                boxShadow: [
                  "0 0 10px rgba(96,165,250,0.7)",
                  "0 0 25px rgba(96,165,250,1)",
                  "0 0 10px rgba(96,165,250,0.7)"
                ]
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut"
              }}
            >
              <Image
                src="https://i.ibb.co.com/LzgnS5FT/profile.png"
                alt="Tanvir Islam Akash"
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            {/* Social links */}
            <div className="flex justify-center mt-8 gap-6">
              <a
                href="https://www.linkedin.com/in/tanvir-islam-akash2002"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={28} />
              </a>

              <a
                href="https://github.com/tanvirislamakash2002"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all transform hover:scale-110"
                aria-label="GitHub"
              >
                <FaGithub size={28} />
              </a>

              <a
                href="https://www.facebook.com/tanvirislamakash2002"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all transform hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebook size={28} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom CSS for floating animations */}
      <style jsx global>{`
        @keyframes float-0 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.2; }
          25% { transform: translateY(-20px) translateX(10px) rotate(90deg); opacity: 0.4; }
          50% { transform: translateY(-40px) translateX(-10px) rotate(180deg); opacity: 0.2; }
          75% { transform: translateY(-20px) translateX(15px) rotate(270deg); opacity: 0.3; }
        }
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.1; }
          33% { transform: translateY(-30px) translateX(-15px) rotate(120deg); opacity: 0.3; }
          66% { transform: translateY(-10px) translateX(20px) rotate(240deg); opacity: 0.2; }
        }
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.3; }
          50% { transform: translateY(-50px) translateX(5px) rotate(180deg); opacity: 0.1; }
        }
        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.2; }
          25% { transform: translateY(-15px) translateX(-20px) rotate(-90deg); opacity: 0.4; }
          75% { transform: translateY(-35px) translateX(10px) rotate(90deg); opacity: 0.1; }
        }
        .animate-float-0 { animation: float-0 15s ease-in-out infinite; }
        .animate-float-1 { animation: float-1 18s ease-in-out infinite; }
        .animate-float-2 { animation: float-2 12s ease-in-out infinite; }
        .animate-float-3 { animation: float-3 20s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default HeroSection;