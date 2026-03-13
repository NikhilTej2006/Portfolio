import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="text-secondary font-medium tracking-[0.2em] uppercase text-sm md:text-base">
            AI/ML Engineer | Backend Developer
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tighter"
        >
          <span className="text-gradient">NikhilTej</span>
          <br />
          <span className="text-white">Pathakota</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed"
        >
          AI/ML Engineer building intelligent systems, computer vision platforms, and scalable AI-powered applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-white text-navy font-semibold rounded-full overflow-hidden transition-all hover:scale-105 flex items-center gap-2"
          >
            <span className="relative z-10">View Projects</span>
            <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left z-0"></div>
          </a>

          <a
            href="https://drive.google.com/file/d/1jSpR2WL2y9Jqmm9tTmp7RGVyEja0wI2g/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 glass-card text-white font-semibold rounded-full hover:bg-white/10 transition-all flex items-center gap-2"
          >
            <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
            <span>Download Resume</span>
          </a>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
    </section>
  );
}
