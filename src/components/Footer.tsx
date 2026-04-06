import { Twitter, Linkedin, Instagram, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="py-12 bg-dark text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <Link to="/" className="text-3xl font-bold text-white flex items-center gap-2">
            <span className="font-serif italic text-primary">Digi</span>Artz
          </Link>
          <div className="flex gap-8 flex-wrap justify-center">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <Link to="/#about" className="hover:text-primary transition-colors">About</Link>
            <Link to="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link>
            <Link to="/#services" className="hover:text-primary transition-colors">Services</Link>
            <Link to="/#contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-all"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-all"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-all"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-all"><Github className="w-5 h-5" /></a>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 text-center text-white/40 text-sm">
          <p>© 2025 DigiArtz Studio. All Rights Reserved. Designed by malaniya kishan.</p>
        </div>
      </div>
    </footer>
  );
};
