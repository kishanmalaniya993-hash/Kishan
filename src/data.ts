import { 
  Palette, Layout, PenTool, Share2, Video, Smartphone
} from 'lucide-react';
import React from 'react';

export const PROJECTS = [
  {
    id: 1,
    title: "Brand Identity - EcoLife",
    category: "Branding",
    image: "https://picsum.photos/seed/brand1/800/600",
    description: "A complete visual identity for a sustainable lifestyle brand."
  },
  {
    id: 2,
    title: "Mobile App UI - FitTrack",
    category: "UI/UX Design",
    image: "https://picsum.photos/seed/ui1/800/600",
    description: "Modern and intuitive interface for a fitness tracking application."
  },
  {
    id: 3,
    title: "Logo Design - TechNova",
    category: "Logo Design",
    image: "https://picsum.photos/seed/logo1/800/600",
    description: "Minimalist logo design for a cutting-edge technology startup."
  },
  {
    id: 4,
    title: "Social Media Campaign",
    category: "Social Media",
    image: "https://picsum.photos/seed/social1/800/600",
    description: "Engaging visual content for a global marketing campaign."
  },
  {
    id: 5,
    title: "Motion Graphics Intro",
    category: "Motion Graphics",
    image: "https://picsum.photos/seed/motion1/800/600",
    description: "Dynamic video introduction for a creative agency."
  },
  {
    id: 6,
    title: "Website Redesign - ArtHub",
    category: "Web Design",
    image: "https://picsum.photos/seed/web1/800/600",
    description: "A clean and artistic redesign for an online gallery."
  },
  {
    id: 7,
    title: "Packaging Design - Pure",
    category: "Branding",
    image: "https://picsum.photos/seed/pack1/800/600",
    description: "Minimalist packaging for organic skincare products."
  },
  {
    id: 8,
    title: "E-commerce App",
    category: "UI/UX Design",
    image: "https://picsum.photos/seed/app2/800/600",
    description: "Seamless shopping experience for a fashion retailer."
  }
];

export const SKILLS = [
  { name: "Branding", icon: React.createElement(Palette, { className: "w-6 h-6" }) },
  { name: "UI/UX Design", icon: React.createElement(Layout, { className: "w-6 h-6" }) },
  { name: "Logo Design", icon: React.createElement(PenTool, { className: "w-6 h-6" }) },
  { name: "Social Media", icon: React.createElement(Share2, { className: "w-6 h-6" }) },
  { name: "Motion Graphics", icon: React.createElement(Video, { className: "w-6 h-6" }) },
  { name: "Adobe Suite", icon: React.createElement(Smartphone, { className: "w-6 h-6" }) },
];

export const SERVICES = [
  {
    title: "Logo Design",
    description: "Crafting unique and memorable logos that define your brand's essence.",
    icon: React.createElement(PenTool, { className: "w-10 h-10" })
  },
  {
    title: "Brand Identity",
    description: "Building cohesive visual systems that resonate with your audience.",
    icon: React.createElement(Palette, { className: "w-10 h-10" })
  },
  {
    title: "Social Media Design",
    description: "Creating eye-catching graphics that boost your online presence.",
    icon: React.createElement(Share2, { className: "w-10 h-10" })
  },
  {
    title: "Website UI Design",
    description: "Designing beautiful and functional interfaces for modern web experiences.",
    icon: React.createElement(Layout, { className: "w-10 h-10" })
  }
];

export const TESTIMONIALS = [
  {
    name: "Alex Johnson",
    role: "CEO, TechNova",
    quote: "Kishan's attention to detail is unparalleled. He transformed our brand identity into something truly special.",
    image: "https://i.pravatar.cc/150?u=alex"
  },
  {
    name: "Sarah Williams",
    role: "Marketing Director, EcoLife",
    quote: "Working with DigiArtz was a breeze. The social media graphics they designed significantly increased our engagement.",
    image: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "Michael Chen",
    role: "Founder, ArtHub",
    quote: "The website redesign exceeded our expectations. Clean, modern, and perfectly aligned with our vision.",
    image: "https://i.pravatar.cc/150?u=michael"
  }
];
