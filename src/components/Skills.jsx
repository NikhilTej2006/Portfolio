import { motion } from 'framer-motion';

const skillsData = [
  {
    category: 'Programming Languages',
    skills: ['Python', 'Java', 'C++', 'JavaScript', 'SQL'],
  },
  {
    category: 'Frameworks & Libraries',
    skills: ['TensorFlow', 'Keras', 'Scikit-learn', 'Flask', 'DJango', 'React.js'],
  },
  {
    category: 'Databases',
    skills: ['MongoDB', 'MySQL', 'Firebase', 'SQLAlchemy'],
  },
  {
    category: 'AI / ML Expertise',
    skills: ['ML Model Development', 'Deep Learning Systems', 'Computer Vision Pipelines', 'NLP', 'Explainable AI (Grad-CAM)', 'Time-Series Forecasting', 'Predictive Modeling', 'AI API Deployment', 'Model Optimization'],
  },
  {
    category: 'Computer Vision Tools',
    skills: ['OpenCV', 'YOLOv5', 'Image Processing Pipelines', 'Real-time Camera Inference'],
  },
  {
    category: 'Data Science & Analytics',
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
  },
  {
    category: 'AI System Engineering',
    skills: ['ML Pipelines', 'Model Serving APIs', 'REST API Development', 'Backend Integration', 'Experimentation Pipelines'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative z-10 bg-navy-light/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Technical Arsenal</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl border border-white/10 hover:border-secondary/50 transition-colors"
            >
              <h3 className="text-2xl font-semibold mb-6 text-white tracking-wide border-b border-white/10 pb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                    className="px-4 py-2 bg-white/5 rounded-full text-sm font-medium text-gray-300 hover:bg-secondary hover:text-navy transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
