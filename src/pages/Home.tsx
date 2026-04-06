import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ExternalLink, Mail, Phone, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { PROJECTS, SKILLS, SERVICES, TESTIMONIALS } from '../data';

const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary -z-10 rounded-l-[100px] hidden lg:block" />
    <motion.div 
      animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"
    />
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-primary font-medium tracking-widest uppercase mb-4">Senior Graphic Designer</h2>
        <h1 className="text-6xl md:text-8xl font-bold text-dark mb-6 leading-tight">
          malaniya <br />
          <span className="text-primary">kishan</span>
        </h1>
        <p className="text-xl text-dark/60 mb-8 max-w-lg">
          Every pixel deserves my attention, and every design deserves my dedication. DigiArtz is where passion meets precision.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link to="/portfolio" className="px-8 py-4 bg-primary text-white rounded-full font-bold hover:shadow-lg hover:shadow-primary/30 transition-all flex items-center gap-2 group">
            View My Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a href="#contact" className="px-8 py-4 border-2 border-primary text-primary rounded-full font-bold hover:bg-primary hover:text-white transition-all">
            Hire Me
          </a>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
          <img src="https://ibb.co/mrWxrjPr" alt="malaniya kishan" className="w-full h-auto object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary rounded-full -z-10 opacity-20" />
      </motion.div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-24 bg-secondary">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <img src="https://picsum.photos/seed/about/600/800" alt="Profile" className="rounded-3xl shadow-xl w-full" referrerPolicy="no-referrer" />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
          <h2 className="text-primary font-medium tracking-widest uppercase mb-4">About Me</h2>
          <h3 className="text-4xl font-bold text-dark mb-6">Creative Philosophy</h3>
          <p className="text-lg text-dark/70 mb-8 leading-relaxed">
            I believe that great design is not just about aesthetics; it's about solving problems and creating meaningful connections.
          </p>
          <blockquote className="border-l-4 border-primary pl-6 italic text-2xl font-serif text-dark mb-8">
            "Every pixel deserves my attention and every design deserves my dedication."
          </blockquote>
        </motion.div>
      </div>
    </div>
  </section>
);

const Skills = () => (
  <section id="skills" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h2 className="text-primary font-medium tracking-widest uppercase mb-4">Expertise</h2>
      <h3 className="text-4xl font-bold text-dark mb-16">My Creative Arsenal</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {SKILLS.map((skill, i) => (
          <motion.div key={skill.name} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-8 bg-secondary rounded-2xl flex flex-col items-center gap-4 hover:bg-primary hover:text-white group transition-all">
            <div className="p-4 bg-white rounded-xl text-primary group-hover:bg-white/20 group-hover:text-white transition-colors">{skill.icon}</div>
            <p className="font-bold">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ProjectsPreview = () => (
  <section id="projects" className="py-24 bg-secondary">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex justify-between items-end mb-16">
        <div>
          <h2 className="text-primary font-medium tracking-widest uppercase mb-4">Portfolio</h2>
          <h3 className="text-4xl font-bold text-dark">Featured Projects</h3>
        </div>
        <Link to="/portfolio" className="px-8 py-3 bg-white text-dark rounded-full font-bold hover:bg-primary hover:text-white transition-all shadow-sm">
          View All Works
        </Link>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {PROJECTS.slice(0, 3).map((project, i) => (
          <motion.div key={project.id} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group relative overflow-hidden rounded-3xl bg-white shadow-lg">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform group-hover:scale-110" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8 text-white">
              <p className="text-sm font-medium uppercase tracking-widest mb-2">{project.category}</p>
              <h4 className="text-2xl font-bold mb-4">{project.title}</h4>
              <button className="flex items-center gap-2 font-bold hover:underline">View Details <ExternalLink className="w-4 h-4" /></button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Services = () => (
  <section id="services" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-primary font-medium tracking-widest uppercase mb-4">Services</h2>
        <h3 className="text-4xl font-bold text-dark">What I Can Do For You</h3>
      </div>
      <div className="grid md:grid-cols-4 gap-8">
        {SERVICES.map((service, i) => (
          <motion.div key={service.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-10 rounded-3xl bg-secondary hover:bg-white hover:shadow-2xl transition-all group">
            <div className="text-primary mb-6 group-hover:scale-110 transition-transform">{service.icon}</div>
            <h4 className="text-xl font-bold text-dark mb-4">{service.title}</h4>
            <p className="text-dark/60 leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const next = () => setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="py-24 bg-primary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-white/60 font-medium tracking-widest uppercase mb-4">Testimonials</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8">What My Clients Say</h3>
            <div className="flex gap-4">
              <button onClick={prev} className="p-4 rounded-full border border-white/20 hover:bg-white hover:text-primary transition-all"><ChevronLeft /></button>
              <button onClick={next} className="p-4 rounded-full border border-white/20 hover:bg-white hover:text-primary transition-all"><ChevronRight /></button>
            </div>
          </div>
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div key={activeIndex} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} className="bg-white/10 backdrop-blur-lg p-12 rounded-3xl border border-white/10">
                <p className="text-2xl font-serif italic mb-8">"{TESTIMONIALS[activeIndex].quote}"</p>
                <div className="flex items-center gap-4">
                  <img src={TESTIMONIALS[activeIndex].image} alt={TESTIMONIALS[activeIndex].name} className="w-16 h-16 rounded-full border-2 border-white/20" referrerPolicy="no-referrer" />
                  <div>
                    <h4 className="font-bold text-xl">{TESTIMONIALS[activeIndex].name}</h4>
                    <p className="text-white/60">{TESTIMONIALS[activeIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-primary font-medium tracking-widest uppercase mb-4">Contact</h2>
          <h3 className="text-4xl font-bold text-dark mb-8">Let's Work Together</h3>
          <div className="space-y-6">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center text-primary"><Mail /></div>
              <div><p className="text-sm text-dark/60">Email Me</p><p className="text-xl font-bold">hello@digiartz.com</p></div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center text-primary"><Phone /></div>
              <div><p className="text-sm text-dark/60">Call Me</p><p className="text-xl font-bold">+1 (234) 567-890</p></div>
            </div>
          </div>
        </div>
        <div className="bg-secondary p-10 rounded-3xl">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" className="w-full px-6 py-4 rounded-xl bg-white outline-none" placeholder="Name" />
              <input type="email" className="w-full px-6 py-4 rounded-xl bg-white outline-none" placeholder="Email" />
            </div>
            <textarea rows={5} className="w-full px-6 py-4 rounded-xl bg-white outline-none resize-none" placeholder="Message"></textarea>
            <button className="w-full py-4 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-2">Send Message <ArrowRight className="w-5 h-5" /></button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <ProjectsPreview />
      <Services />
      <Testimonials />
      <Contact />
    </>
  );
};
