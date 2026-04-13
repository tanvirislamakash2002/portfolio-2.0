'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
    User,
    Code2,
    Lightbulb,
} from 'lucide-react';
import {
    SiMongodb,
    SiExpress,
    SiTailwindcss,
    SiTypescript
} from 'react-icons/si';
import { FaReact, FaNodeJs, FaDatabase, FaGithub, FaJs } from 'react-icons/fa';

const AboutMeSection = () => {
    useEffect(() => {
        // Simple AOS initialization like in your React project
        AOS.init({ duration: 800 });

        // Cleanup
        return () => {
            AOS.refresh();
        };
    }, []);

    const skills = [
        { name: 'React.js', icon: <FaReact className="mr-2 text-blue-500" /> },
        { name: 'Node.js', icon: <FaNodeJs className="mr-2 text-green-600" /> },
        { name: 'MongoDB', icon: <FaDatabase className="mr-2 text-green-500" /> },
        { name: 'Express', icon: <SiExpress className="mr-2 text-gray-200" /> },
        { name: 'JavaScript', icon: <FaJs className="mr-2 text-yellow-300" /> },
        { name: 'TypeScript', icon: <SiTypescript className="mr-2 text-blue-400" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="mr-2 text-blue-400" /> },
        { name: 'GitHub', icon: <FaGithub className="mr-2 text-gray-200" /> },
    ];

    const stats = [
        {
            icon: <User className="w-8 h-8" />,
            title: "Experience",
            value: "1+ Years",
            color: "text-blue-500"
        },
        {
            icon: <Code2 className="w-8 h-8" />,
            title: "Projects",
            value: "13+ Completed",
            color: "text-purple-500"
        },
        {
            icon: <Lightbulb className="w-8 h-8" />,
            title: "Specialization",
            value: "MERN Stack",
            color: "text-green-500"
        },
    ];

    const techIcons = [
        { icon: <FaReact className="text-2xl text-blue-500" />, delay: 0 },
        { icon: <SiMongodb className="text-2xl text-green-500" />, delay: 0.3 },
        { icon: <FaNodeJs className="text-2xl text-green-600" />, delay: 0.6 },
        { icon: <SiExpress className="text-2xl text-gray-300" />, delay: 0.9 },
    ];

    return (
        <section id='about' className="py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-20" data-aos="fade-up">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                        Professional Profile
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Get to know more about my skills, experience, and what I bring to your project
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto mt-6 rounded-full" />
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Image Section */}
                    <div data-aos="fade-right" className="lg:w-5/12 flex justify-center relative group">
                        <div className="relative h-96 w-full max-w-md">
                            <motion.div
                                className="absolute -inset-4 bg-gradient-to-br from-primary to-primary/60 rounded-xl opacity-20 group-hover:opacity-30 -z-10"
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            />

                            <motion.div
                                className="absolute -inset-2 border-2 border-primary rounded-xl opacity-30 group-hover:opacity-50 -z-5"
                                animate={{ rotate: [0, 2, -2, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            />

                            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl transform group-hover:scale-[1.01] transition-transform duration-500">
                                <Image
                                    src="https://i.ibb.co.com/PZnSvYsS/about-image.jpg"
                                    alt="Tanvir Islam Akash"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>

                            <div className="absolute -bottom-6 -right-6 bg-card p-4 rounded-xl shadow-lg border">
                                <div className="flex items-center space-x-2">
                                    {techIcons.map((item, i) => (
                                        <motion.div
                                            key={i}
                                            animate={{ scale: [1, 1.3, 1] }}
                                            transition={{
                                                duration: 2.8,
                                                repeat: Infinity,
                                                delay: item.delay,
                                                ease: "easeInOut"
                                            }}
                                        >
                                            {item.icon}
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="lg:w-7/12" data-aos="fade-left">
                        <h3 className="text-3xl font-bold mb-6 text-foreground">
                            Passionate MERN Stack Developer Building Scalable Web Apps
                        </h3>

                        <div className="space-y-6 mb-8">
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                With <span className="font-semibold text-primary">1+ years</span> of professional experience, I've developed a strong expertise in building responsive, performant web applications using modern technologies. My approach combines technical excellence with user-centered design principles.
                            </p>

                            <p className="text-lg text-muted-foreground leading-relaxed">
                                I specialize in the <span className="font-semibold text-primary">MERN stack</span> (MongoDB, Express, React, Node.js) and have successfully delivered <span className="font-semibold text-primary">13+ projects</span> ranging from small business websites to complex web applications.
                            </p>
                        </div>

                        {/* Skills & Technologies */}
                        <div className="mb-10">
                            <h4 className="text-xl font-semibold mb-4 text-foreground">Technical Skills</h4>
                            <div className="flex flex-wrap gap-3">
                                {skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 text-foreground bg-muted rounded-full text-sm font-medium shadow-sm border flex items-center"
                                    >
                                        {skill.icon}
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Stats Cards - Modified */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {stats.map((item, index) => (
                                <div
                                    key={index}
                                    className="stat-card bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className={`${item.color} mb-3`}>{item.icon}</div>
                                    <h4 className="font-bold text-lg text-foreground mb-1">{item.title}</h4>
                                    <p className="text-muted-foreground">{item.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMeSection;