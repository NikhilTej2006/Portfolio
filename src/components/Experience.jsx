import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: "Student's Mentor",
    company: 'Smart Interview',
    date: '2026',
    description: 'Guiding students in data structures, algorithms, and problem-solving while helping them prepare for technical interviews through structured practice, concept explanations, and coding discussions.',
    tech: ['DSA', 'Python', 'Java', 'Problem Solving', 'Technical Mentoring','Code Review'],
  },
  {
    role: 'Software Developer Intern',
    company: 'Tars Networks',
    date: '2025',
    description: 'Built an AI-powered chatbot for CLAT aspirants using Flask and NLP pipelines. Automated MCQ generation using T5 and TextBlob. Built analytics dashboards tracking user interactions.',
    tech: ['Flask', 'NLP', 'T5', 'TextBlob', 'Python'],
  },
  {
    role: 'AI/ML Intern',
    company: 'Elevate Labs',
    date: '2025',
    description: 'Developed ML pipelines and deployed scalable REST APIs serving 1000+ model queries per day.',
    tech: ['ML Pipelines', 'REST APIs', 'Python', 'Deployment'],
  },
  {
    role: 'Machine Learning Intern',
    company: 'Future Interns',
    date: '2025',
    description: 'Built forecasting and churn prediction systems using ARIMA, Prophet, Random Forest, and XGBoost.',
    tech: ['ARIMA', 'Prophet', 'Random Forest', 'XGBoost'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative z-10 bg-navy-light/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Experience</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-8"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-secondary/50 via-accent/50 to-transparent -translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row items-center justify-between mb-16 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 w-12 h-12 rounded-full bg-navy border-4 border-secondary flex items-center justify-center -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(212,175,55,0.5)]">
                <Briefcase size={20} className="text-secondary" />
              </div>

              {/* Content Card */}
              <div className={`w-full md:w-5/12 pl-24 md:pl-0 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                <div className="glass-card p-8 group hover:-translate-y-1 transition-transform duration-300">
                  <span className="text-sm font-bold text-accent uppercase tracking-wider mb-2 block">
                    {exp.date}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-secondary transition-colors">
                    {exp.role}
                  </h3>
                  <h4 className="text-lg text-gray-400 font-medium mb-4">
                    {exp.company}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {exp.description}
                  </p>
                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'justify-start' : 'md:justify-end'}`}>
                    {exp.tech.map((t) => (
                      <span key={t} className="text-xs font-medium text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
