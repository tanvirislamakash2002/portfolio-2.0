'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { 
  ExternalLink, 
  ArrowLeft, 
  Code, 
  Home,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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
  features: string[];
  challenges?: string[];
  gallery?: string[];
}

const ProjectDetails = () => {
  const params = useParams();
  const id = params?.id as string;
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
console.log(id);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (id) {
      fetch('/projectsData.json')
        .then(res => res.json())
        .then(data => {
          const found = data.find((p: Project) => p.detailsLink === id || p.id.toString() === id);
          setProject(found || null);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error loading project:', error);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading project details...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-2">Project Not Found</h2>
          <p className="text-muted-foreground mb-6">The project you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 bg-background min-h-screen">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
        {/* Back Buttons */}
        <div className="flex justify-between items-center mb-8">
          <Button asChild variant="secondary">
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Return Home
            </Link>
          </Button>
        </div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row gap-10 mb-12"
        >
          <div className="lg:w-1/2">
            <div className="relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {project.title}
            </h1>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies?.map((tech, i) => (
                <Badge key={i} variant="secondary" className="text-sm">
                  {tech}
                </Badge>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="default">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="mr-2 h-4 w-4" />
                  Code
                </a>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
            <ChevronRight className="mr-2 h-5 w-5 text-primary" />
            Key Features
          </h2>
          <Card>
            <CardContent className="p-6">
              <ul className="space-y-3">
                {project.features?.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Code size={16} className="text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Challenges Section */}
        {project.challenges && project.challenges.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
              <ChevronRight className="mr-2 h-5 w-5 text-primary" />
              Challenges Faced
            </h2>
            <Card>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {project.challenges.map((challenge, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-muted-foreground">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Gallery / Extra Images */}
        {project.gallery && project.gallery.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
              <ChevronRight className="mr-2 h-5 w-5 text-primary" />
              Project Screenshots
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.gallery.map((img, idx) => (
                <div
                  key={idx}
                  className="relative h-48 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <Image
                    src={img}
                    alt={`Screenshot ${idx + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectDetails;