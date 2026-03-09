"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const projects = [
  {
    title: "Podcasts",
    description: "Visually engaging podcast edits with precise pacing, multi-camera switching, and dynamic captions.",
    link: "https://drive.google.com/drive/u/3/folders/1vTNpSHrFXMlzWU2KfiqNrQsBHDPW8Ekq",
    image: "/podcasts.png"
  },
  {
    title: "Reels",
    description: "High-retention short-form video content designed for viral growth, featuring snappy cuts and modern typography.",
    link: "https://drive.google.com/drive/u/3/folders/15Lmf58kfYzC45NziXS7bjoDOw7pQKulH",
    image: "/reels.png"
  },
  {
    title: "Creative Graphics",
    description: "Striking promotional designs, complex typography, and digital art created to capture immediate attention.",
    link: "https://drive.google.com/drive/u/3/folders/11VrW1HKiYUxq6A9LU35NHuKYqEtQw14U",
    image: "/creative-graphics.png"
  },
  {
    title: "Brand Collabs",
    description: "Premium social media creatives and promotional campaigns engineered to elevate brand identity.",
    link: "https://drive.google.com/drive/u/3/folders/1ZlSSp-ZFUUbfIILyTNAJZZHHyHba0_uC",
    image: "/brand-collabs.png"
  },
  {
    title: "Motion Graphics",
    description: "Fluid, audio-reactive 2D and 3D animations that bring static assets to life.",
    link: "https://drive.google.com/drive/u/3/folders/1y2QoyDm7oTJpVTwvWYYuEHCgry8BT8-1",
    image: "/motion-graphics.png"
  },
  {
    title: "Websites",
    description: "Sleek, high-performance portfolios and marketing pages built with modern web technologies.",
    link: "https://drive.google.com/drive/u/3/folders/11kAud1Z3g4FCCiiAPzYoRmDjjgbeayy_",
    image: "/websites.png"
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="relative w-full bg-[#121212] py-32 px-4 md:px-12 text-white">
      <div className="max-w-[100rem] w-full mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Work
          </h2>
          <div className="h-px w-full bg-neutral-800" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, idx) => {
            const CardWrapper = project.link ? "a" : "div";
            
            return (
              <CardWrapper
                href={project.link}
                target={project.link ? "_blank" : undefined}
                rel={project.link ? "noopener noreferrer" : undefined}
                key={idx}
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.8, delay: idx * 0.15, ease: "easeOut" }}
                  className={cn(
                    "group relative overflow-hidden rounded-3xl",
                    "bg-neutral-900 border border-white/10",
                    "transition-all duration-500 hover:border-white/30 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]",
                    "min-h-[300px] flex flex-col justify-start p-8 block w-full h-full text-left"
                  )}
                >
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-transparent opacity-90 z-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-3xl font-bold mb-4 drop-shadow-xl">{project.title}</h3>
                    <p className="text-neutral-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 drop-shadow-md font-medium">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
