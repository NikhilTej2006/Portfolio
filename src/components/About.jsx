import { motion } from 'framer-motion';
import { Brain, Code, Database, Eye, MessageSquare, Layers } from 'lucide-react';

const focusAreas = [
  { icon: Brain, title: 'Artificial Intelligence', desc: 'Building intelligent agents and predictive models.' },
  { icon: Layers, title: 'Machine Learning', desc: 'Designing end-to-end ML pipelines and algorithms.' },
  { icon: Eye, title: 'Computer Vision', desc: 'Developing image processing and object detection systems.' },
  { icon: MessageSquare, title: 'Natural Language Processing', desc: 'Creating systems that understand and generate human language.' },
  { icon: Database, title: 'Backend Engineering', desc: 'Architecting scalable APIs and microservices.' },
  { icon: Code, title: 'System Design', desc: 'Building robust, data-driven applications.' },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">About Me</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
            I am deeply passionate about building intelligent systems that combine Artificial Intelligence, Machine Learning, Computer Vision, and Natural Language Processing. With a strong foundation in Backend Engineering and System Design, I focus on creating data-driven applications that solve complex problems. My goal is to bridge the gap between research-driven systems and real-world AI products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                <area.icon size={28} className="text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{area.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{area.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
