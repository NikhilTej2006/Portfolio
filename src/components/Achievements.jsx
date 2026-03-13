import { motion } from 'framer-motion';
import { Trophy, Star, Presentation } from 'lucide-react';

const achievements = [
  {
    title: '500+ LeetCode problems solved',
    icon: Star,
    desc: 'Consistent problem solver with strong algorithmic foundation.',
  },
  {
    title: '3rd Prize – AI & Robotics Competition',
    icon: Trophy,
    desc: 'Awarded for innovative AI solutions in robotics.',
  },
  {
    title: 'Presented projects at Scientific Forestep 2025',
    icon: Presentation,
    desc: 'Showcased cutting-edge AI research and development.',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative z-10 bg-navy-light/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Achievements</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden"
            >
              {/* Animated Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors relative z-10">
                <achievement.icon size={28} className="text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-secondary transition-colors relative z-10">
                {achievement.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed relative z-10">
                {achievement.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
