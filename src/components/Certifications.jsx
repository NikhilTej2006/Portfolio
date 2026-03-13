import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';

const certifications = [
  'AWS Cloud Foundations',
  'Machine Learning in CORE – BITS Pilani',
  'Hyperledger Developer',
  'Responsible AI – Google Cloud',
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Certifications</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                <Award size={32} className="text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-white group-hover:text-secondary transition-colors">
                {cert}
              </h3>
              <div className="mt-4 flex items-center gap-2 text-sm text-gray-400">
                <CheckCircle size={16} className="text-green-400" /> Verified
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
