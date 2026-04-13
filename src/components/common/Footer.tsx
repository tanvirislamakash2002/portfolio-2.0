'use client';

import React, { JSX } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

interface SocialLink {
  icon: JSX.Element;
  url: string;
  color: string;
  tooltip: string;
}

const Footer = () => {
  const socialLinks: SocialLink[] = [
    { 
      icon: <FaTwitter className="text-lg" />, 
      url: 'https://twitter.com/', 
      color: 'hover:bg-blue-400',
      tooltip: 'Twitter'
    },
    { 
      icon: <FaYoutube className="text-lg" />, 
      url: 'https://youtube.com/', 
      color: 'hover:bg-red-600',
      tooltip: 'YouTube'
    },
    { 
      icon: <FaFacebook className="text-lg" />, 
      url: 'https://facebook.com/', 
      color: 'hover:bg-blue-600',
      tooltip: 'Facebook'
    },
    { 
      icon: <FaLinkedin className="text-lg" />, 
      url: 'https://linkedin.com/', 
      color: 'hover:bg-blue-700',
      tooltip: 'LinkedIn'
    },
    { 
      icon: <FaGithub className="text-lg" />, 
      url: 'https://github.com/', 
      color: 'hover:bg-foreground',
      tooltip: 'GitHub'
    }
  ];

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-card text-muted-foreground py-12 px-4 border-t">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <div className="relative w-32 h-auto mb-4">
              <Image 
                src="https://i.ibb.co.com/twYfrrgR/logo.png" 
                alt="Tanvir Islam Akash" 
                width={128}
                height={128}
                className="w-full h-auto"
              />
            </div>
            <p className="text-sm text-muted-foreground mb-4 text-center md:text-left">
              MERN Stack Developer specializing in modern web technologies and innovative solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className={`
                    w-10 h-10 rounded-full bg-muted flex items-center justify-center 
                    text-foreground transition-all duration-300 ${link.color} 
                    group relative hover:text-white
                  `}
                  aria-label={link.tooltip}
                >
                  {link.icon}
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-popover text-popover-foreground text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                    {link.tooltip}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-center md:text-left">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-lg font-semibold text-foreground mb-4">Contact Info</h3>
            <ul className="space-y-3 text-center md:text-left">
              <li className="flex items-center justify-center md:justify-start gap-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a 
                  href="mailto:tanvirislamakash2002@gmail.com" 
                  className="hover:text-primary transition-colors duration-200 text-sm"
                >
                  tanvirislamakash2002@gmail.com
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a 
                  href="tel:+8801328302600" 
                  className="hover:text-primary transition-colors duration-200 text-sm"
                >
                  +880 132 830 2600
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm">Sagarpara, Rajshahi, Bangladesh</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-8 border-t text-center"
        >
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Tanvir Islam Akash. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/70 mt-2">
            Designed and built with Next.js, Tailwind CSS, and shadcn/ui
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;