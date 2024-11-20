'use client';

import { motion } from 'framer-motion';
import { Camera, Sun, Palette, Play, Clock, Hexagon } from 'lucide-react';

const services = [
  {
    icon: <Hexagon className="w-8 h-8" />,
    title: 'Photorealistic Rendering',
    description:
      'Transform your 3D models into stunning photorealistic images that capture every detail.',
  },
  {
    icon: <Camera className="w-8 h-8" />,
    title: 'Multiple Camera Angles',
    description:
      'Get your project visualized from various perspectives to showcase every angle.',
  },
  {
    icon: <Sun className="w-8 h-8" />,
    title: 'Light Setup',
    description:
      'Professional lighting setups that bring your 3D environments to life.',
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'Material Application',
    description:
      'Expert material and texture application for realistic surface appearances.',
  },
  {
    icon: <Play className="w-8 h-8" />,
    title: 'Animation Rendering',
    description:
      'Fluid and dynamic animation rendering to bring your projects into motion.',
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: 'Quick Turnaround',
    description: 'Fast and efficient delivery without compromising on quality.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          My Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-primary mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
