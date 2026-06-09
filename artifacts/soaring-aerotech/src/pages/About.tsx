import { motion } from "framer-motion";
import { Link } from "wouter";
import { Award, ShieldCheck, Target, Rocket, Globe, GraduationCap, Wrench, Lightbulb, Factory } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-28 bg-[#0D1B2A] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white mb-6"
          >
            Who We Are
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/70 max-w-3xl mx-auto"
          >
            Central India's Drone Innovation & Manufacturing Ecosystem — covering Research, Manufacturing, Industrial Solutions, and Skill Development under one roof.
          </motion.p>
        </div>
      </section>

      {/* The Positioning */}
      <section className="py-24 bg-[#F5F4F0]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-mono text-sm font-bold mb-6">OUR STORY</div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Not a Training Institute. An Ecosystem.</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Soaring Aerotech was founded with a vision that went far beyond classroom training. From the beginning, the goal was to build a complete drone ecosystem for Central India — one that creates skilled professionals, delivers industrial solutions, drives research & innovation, and manufactures indigenous UAVs.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                As a DGCA-approved RPTO, we run 8+ specialized training programs. As a drone services company, we work with government departments, solar firms, agriculture companies, and infrastructure players. In our R&D division, we're working on disaster management UAVs, tethered drones, and AI/ML drone systems. And through our <strong>50,000 sq ft manufacturing facility</strong>, we are building logistics, defence, and surveillance drones for national and international markets.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                This is not a drone training company. This is Central India's drone innovation engine.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden"
            >
              <img src="/images/hero-bg.png" alt="Soaring Aerotech facility" className="w-full h-full object-cover grayscale opacity-80" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-24 bg-white border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="section-label justify-center">OUR FOUR PILLARS</div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">What Soaring Aerotech Actually Does</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Four distinct business verticals. One unified drone ecosystem. Multiple revenue streams serving students, industries, government, and defence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                tag: "PILLAR 1 — TRAIN",
                icon: <GraduationCap className="w-8 h-8 text-primary" />,
                title: "Skill Development",
                items: ["DGCA Certified RPTO", "Drone Flying Training (RPC)", "Drone Mapping & Surveying", "GIS & Geospatial", "Thermal & Multispectral Analysis", "AI/ML for Drones", "Drone Assembly & Maintenance", "Drone Entrepreneurship"]
              },
              {
                tag: "PILLAR 2 — SOLVE",
                icon: <Wrench className="w-8 h-8 text-primary" />,
                title: "Industrial Drone Services",
                items: ["Aerial Land Survey & 2D/3D Mapping", "Solar Plant Inspection", "Power Substation Inspection", "Precision Agriculture", "AI Surveillance", "Disaster Assessment", "Infrastructure Inspection", "Custom Drone Solutions"]
              },
              {
                tag: "PILLAR 3 — INNOVATE",
                icon: <Lightbulb className="w-8 h-8 text-primary" />,
                title: "Research & Development",
                items: ["Disaster Management UAV", "Tethered Drone Systems", "Agricultural UAV", "AI/ML UAV Operations", "Quantum Computing Applications", "Payload Development", "High-Altitude Testing", "Autonomous Flight Systems"]
              },
              {
                tag: "PILLAR 4 — BUILD",
                icon: <Factory className="w-8 h-8 text-primary" />,
                title: "UAV Manufacturing",
                items: ["50,000 sq ft Manufacturing Facility", "Logistics Drones", "Defence Drones", "Surveillance Drones", "Custom UAV Design", "Prototype Development", "National Collaborations", "International Partnerships"]
              },
            ].map((pillar, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="left-accent-card bg-white p-8 shadow-sm border border-border">
                <div className="inline-block px-3 py-1 rounded-full bg-primary/5 text-primary font-mono text-xs font-bold mb-4">{pillar.tag}</div>
                <div className="flex items-center gap-3 mb-6">
                  {pillar.icon}
                  <h3 className="text-2xl font-bold text-foreground">{pillar.title}</h3>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {pillar.items.map((item, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-foreground/80 py-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Directors */}
      <section className="py-24 bg-[#F5F4F0]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="section-label justify-center">LEADERSHIP</div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Our Directors</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Himanshu Jain",
                role: "DIRECTOR",
                img: "/images/team-founder.png",
                quote: "Soaring Aerotech is building a complete drone ecosystem covering Research, Manufacturing, Industrial Solutions and Skill Development. We are not just participating in India's drone revolution — we are leading it from Central India."
              },
              {
                name: "Manojkumar Deshpande",
                role: "DIRECTOR",
                img: "/images/team-1.png",
                quote: "Our 50,000 sq ft manufacturing facility and active R&D in defence, agricultural, and disaster management UAVs positions Soaring Aerotech as a complete drone technology company, not just a training institute."
              },
            ].map((director, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border"
              >
                <div className="flex flex-col">
                  <div className="h-64 relative">
                    <img src={director.img} alt={director.name} className="w-full h-full object-cover grayscale" />
                  </div>
                  <div className="p-8">
                    <Award className="w-8 h-8 text-primary mb-4" />
                    <blockquote className="text-foreground/80 italic mb-6 leading-relaxed">"{director.quote}"</blockquote>
                    <div>
                      <h4 className="text-lg font-bold text-foreground">{director.name}</h4>
                      <p className="text-primary font-mono text-sm">{director.role}, SOARING AEROTECH</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-24 bg-white border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="section-label justify-center">CREDENTIALS</div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Registered & Recognized</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: <ShieldCheck className="w-8 h-8 text-primary" />, title: "DGCA Approved RPTO", desc: "Authorized Remote Pilot Training Organisation under India's drone regulations." },
              { icon: <Globe className="w-8 h-8 text-primary" />, title: "Startup India", desc: "Recognized under the Government of India's Startup India initiative." },
              { icon: <Award className="w-8 h-8 text-primary" />, title: "MSME Registered", desc: "Registered under the Ministry of Micro, Small & Medium Enterprises." },
              { icon: <Rocket className="w-8 h-8 text-primary" />, title: "AIC Prestige Incubated", desc: "Incubated at Atal Incubation Centre, supporting R&D and manufacturing scale-up." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-2xl bg-[#F5F4F0] border border-border text-center">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
