import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Get In Touch</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/3 flex flex-col gap-6"
          >
            <a
              href="mailto:p.nikhiltej@gmail.com"
              className="glass-card p-6 flex items-center gap-4 group hover:-translate-y-1 transition-transform"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                <Mail size={24} className="text-secondary" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Email</h4>
                <p className="text-white font-medium">p.nikhiltej@gmail.com</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/nikhiltej-pathakota-808760293/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 flex items-center gap-4 group hover:-translate-y-1 transition-transform"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                <Linkedin size={24} className="text-secondary" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">LinkedIn</h4>
                <p className="text-white font-medium">NikhilTej Pathakota</p>
              </div>
            </a>

            <a
              href="https://github.com/NikhilTej2006"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 flex items-center gap-4 group hover:-translate-y-1 transition-transform"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                <Github size={24} className="text-secondary" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">GitHub</h4>
                <p className="text-white font-medium">NikhilTej2006</p>
              </div>
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-2/3 glass-card p-8"
          >
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-secondary transition-colors"
                    placeholder="your name"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-secondary transition-colors"
                    placeholder="name@gmail.com"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-secondary transition-colors resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="group relative px-8 py-4 bg-white text-navy font-semibold rounded-lg overflow-hidden transition-all hover:scale-[1.02] flex items-center justify-center gap-2 mt-2"
              >
                <span className="relative z-10">Send Message</span>
                <Send size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left z-0"></div>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
