'use client';

import { motion } from 'framer-motion';
import { JSX } from 'react';
import { 
  FaReact, 
  FaNodeJs, 
  FaFigma, 
  FaGitAlt, 
  FaHtml5, 
  FaCss3Alt 
} from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiFirebase, 
  SiMongodb, 
  SiExpress, 
  SiJavascript, 
  SiPhp, 
  SiGithub, 
  SiDaisyui, 
  SiNextdotjs, 
  SiGraphql, 
  SiDocker, 
  SiMysql 
} from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';

interface Skill {
  icon: JSX.Element;
  color: string;
}

const SkillsSection = () => {
  const skillsRow1: Skill[] = [
    { icon: <FaHtml5 size={56} />, color: 'text-orange-500' },
    { icon: <FaCss3Alt size={56} />, color: 'text-blue-500' },
    { icon: <SiJavascript size={68} />, color: 'text-yellow-400' },
    { icon: <FaReact size={68} />, color: 'text-blue-500' },
    { icon: <SiNextdotjs size={68} />, color: 'text-foreground' },
    { icon: <SiTailwindcss size={68} />, color: 'text-cyan-400' },
    { icon: <SiMongodb size={68} />, color: 'text-green-600' },
    { icon: <FaNodeJs size={68} />, color: 'text-green-500' },
  ];

  const skillsRow2: Skill[] = [
    { icon: <SiExpress size={56} />, color: 'text-muted-foreground' },
    { icon: <SiFirebase size={56} />, color: 'text-yellow-500' },
    { icon: <FaFigma size={56} />, color: 'text-pink-500' },
    { icon: <SiGithub size={56} />, color: 'text-foreground' },
    { icon: <SiDaisyui size={56} />, color: 'text-purple-500' },
    { icon: <SiPhp size={56} />, color: 'text-purple-700' },
    { icon: <SiMysql size={56} />, color: 'text-blue-600' },
    { icon: <FaGitAlt size={56} />, color: 'text-orange-600' },
  ];

  // Duplicate skills for seamless looping
  const duplicatedRow1 = [...skillsRow1, ...skillsRow1];
  const duplicatedRow2 = [...skillsRow2, ...skillsRow2];

  return (
    <section id='skills' className="py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Technical Stack
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies powering my development workflow
          </p>
        </div>

        {/* Dual-Direction Scrolling Skills */}
        <div className="space-y-8">
          {/* Top Row - Left to Right */}
          <div className="relative overflow-hidden py-4">
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
            
            <motion.div
              className="flex gap-8 md:gap-10 items-center"
              animate={{
                x: ['0%', '-100%'],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                }
              }}
            >
              {duplicatedRow1.map((skill, index) => (
                <div key={`left-right-${index}`} className="flex-shrink-0">
                  <div className={`
                    w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36
                    ${skill.color}
                    flex items-center justify-center rounded-xl
                    bg-card shadow-md hover:shadow-lg
                    transition-all duration-300 hover:-translate-y-2
                    border
                  `}>
                    {skill.icon}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Bottom Row - Right to Left */}
          <div className="relative overflow-hidden py-4">
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
            
            <motion.div
              className="flex gap-8 md:gap-10 items-center"
              animate={{
                x: ['-100%', '0%'],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                }
              }}
            >
              {duplicatedRow2.map((skill, index) => (
                <div key={`right-left-${index}`} className="flex-shrink-0">
                  <div className={`
                    w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36
                    ${skill.color}
                    flex items-center justify-center rounded-xl
                    bg-card shadow-md hover:shadow-lg
                    transition-all duration-300 hover:-translate-y-2
                    border
                  `}>
                    {skill.icon}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;