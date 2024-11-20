"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";

const projects = [
  {
    title: "Modern Interior Visualization",
    category: "Interior",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
  },
  {
    title: "Architectural Exterior",
    category: "Exterior",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Product Visualization",
    category: "Product",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Character Animation",
    category: "Animation",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Concept Art Visualization",
    category: "Concept",
    image: "https://images.unsplash.com/photo-1636955840493-e7b857d02992?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Environmental Design",
    category: "Environment",
    image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=2074&auto=format&fit=crop"
  }
];

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Portfolio
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group cursor-pointer"
                >
                  <div className="relative h-64 overflow-hidden rounded-lg">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="text-center">
                        <h3 className="text-white text-xl font-semibold">{project.title}</h3>
                        <p className="text-white/80">{project.category}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <div className="relative h-[60vh]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.category}</p>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}