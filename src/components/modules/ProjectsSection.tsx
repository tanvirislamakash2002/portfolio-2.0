'use client';

import { useEffect, useState } from 'react';
import { 
  ExternalLink, 
  Info, 
  ArrowRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  liveLink: string;
  githubLink: string;
  detailsLink: string;
  technologies: string[];
}

const ProjectsSection = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch('/projectsData.json')
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
          >
            Featured Projects
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full mb-6"
          />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Showcasing my technical expertise through carefully crafted projects that solve real-world problems
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-20">
          {projects.slice(0, 3).map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-12 lg:gap-16`}
            >
              {/* Project Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                  <div className="relative h-80 w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Quick Action Buttons on Image */}
                  <div className="absolute bottom-6 left-6 right-6 flex gap-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md text-white rounded-lg hover:bg-white/30 transition-colors text-sm font-medium"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md text-white rounded-lg hover:bg-white/30 transition-colors text-sm font-medium"
                    >
                      <FaGithub size={14} /> GitHub
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {project.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technology Stack */}
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies?.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button asChild variant="default" className="group">
                    <Link href={`/project-details/${project.detailsLink}`} target="_blank">
                      <Info className="mr-2 h-4 w-4" />
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>

                  <Button asChild variant="default">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>

                  <Button asChild variant="outline">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <FaGithub className="mr-2 h-4 w-4" />
                      Source Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-20">
          <Button asChild size="lg" className="group">
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;