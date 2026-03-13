import { motion } from 'framer-motion';
import { Github, ExternalLink, Activity } from 'lucide-react';

const projects = [
  {
    title: 'AI Crop Health Monitoring System',
    description: 'Plant disease classification using TensorFlow trained on PlantVillage dataset with 94% accuracy and real-time webcam inference using OpenCV and Grad-CAM explainability.',
    tech: ['TensorFlow', 'OpenCV', 'Python', 'Grad-CAM'],
    metrics: '84% Accuracy | Real-time Inference',
    github: 'https://github.com/NikhilTej2006/crop-health',
  },
  {
    title: 'Helios Med — Multimodal Patient Intelligence Platform',
    description: 'AI clinical decision-support system combining imaging data, vitals, lab reports, and clinical notes using multimodal machine learning pipelines.',
    tech: ['Python', 'PyTorch', 'NLP', 'Computer Vision'],
    metrics: 'Multimodal AI | Clinical Decision Support',
    github: 'https://github.com/NikhilTej2006',
  },
  {
    title: 'Startup Idea Validator — AI Market Feasibility Engine',
    description: 'LLM-powered platform that analyzes startup ideas for feasibility, market demand, and competition using automated scoring pipelines.',
    tech: ['LLMs', 'Python', 'React', 'Node.js'],
    metrics: 'Market Analysis | Scoring Pipelines',
    github: 'https://github.com/NikhilTej2006/startup',
  },
  {
    title: 'IntraSpace — AI Interior Design Assistant',
    description: 'Generative AI platform recommending interior layouts using diffusion models and computer vision pipelines.',
    tech: ['Diffusion Models', 'Computer Vision', 'React'],
    metrics: 'Generative AI | Layout Recommendation',
    github: 'https://github.com/NikhilTej2006/intraspace-AI-interior-design',
  },
  {
    title: 'XSpend — Intelligent Expense Analytics Platform',
    description: 'NLP-based machine learning system classifying financial transactions into 20+ categories.',
    tech: ['NLP', 'Python', 'Scikit-learn', 'Flask'],
    metrics: '20+ Categories | Transaction Classification',
    github: 'https://github.com/NikhilTej2006/Expense-Tracker',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Featured Projects</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 group relative overflow-hidden flex flex-col h-full"
            >
              {/* Animated Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                  <Activity size={24} />
                </div>
                <div className="flex gap-3">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <Github size={20} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-secondary transition-colors relative z-10">
                {project.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow relative z-10">
                {project.description}
              </p>

              <div className="mt-auto relative z-10">
                <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                  {project.metrics}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-medium text-gray-300 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
