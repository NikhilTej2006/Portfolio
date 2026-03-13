import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="py-8 relative z-10 border-t border-white/10 bg-navy">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-gray-400 text-sm"
        >
          &copy; {new Date().getFullYear()} NikhilTej Pathakota. All rights reserved.
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex gap-6 text-sm font-medium"
        >
          <a href="#about" className="text-gray-400 hover:text-secondary transition-colors">About</a>
          <a href="#projects" className="text-gray-400 hover:text-secondary transition-colors">Projects</a>
          <a href="#contact" className="text-gray-400 hover:text-secondary transition-colors">Contact</a>
        </motion.div>
      </div>
    </footer>
  );
}
