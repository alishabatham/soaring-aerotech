import { motion } from "framer-motion";
import { Link } from "wouter";
import { Lightbulb, Cpu, Code, Shield, Zap, Crosshair, Anchor, Brain, Factory, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function InnovationLab() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-28 bg-[#0D1B2A] relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-sm mb-6 uppercase"
          >
            <Lightbulb className="w-4 h-4" />
            <span>R&D · UAV MANUFACTURING · MADE IN INDIA</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white mb-6"
          >
            Innovation Lab &<br/><span className="text-primary">UAV Manufacturing</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/70 max-w-3xl mx-auto"
          >
            From cutting-edge R&D in disaster management drones and AI/ML systems, to a 50,000 sq ft manufacturing facility producing defence, logistics, and surveillance UAVs — this is where India's drone future is being built.
          </motion.p>
        </div>
      </section>

      {/* R&D Projects */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16">
            <div className="section-label">ACTIVE R&D</div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Research & Development Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">Our R&D division is working on next-generation drone systems that go far beyond commercial applications — pushing the boundaries of what UAVs can do.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              { 
                title: "Disaster Management UAV", 
                icon: <Zap className="w-6 h-6" />, 
                desc: "Specialized UAVs for rapid disaster zone assessment — flood mapping, fire monitoring, search & rescue coordination, and real-time situational awareness for relief agencies.",
                status: "ACTIVE R&D"
              },
              { 
                title: "Tethered Drone Systems", 
                icon: <Anchor className="w-6 h-6" />, 
                desc: "Continuous-power tethered UAVs for persistent surveillance, communications relay, and monitoring applications where unlimited flight time is critical.",
                status: "ACTIVE R&D"
              },
              { 
                title: "Agricultural UAV", 
                icon: <Lightbulb className="w-6 h-6" />, 
                desc: "Purpose-built agricultural drones optimized for Indian farming conditions — precision spraying, multispectral imaging, and autonomous farm operations.",
                status: "PROTOTYPING"
              },
              { 
                title: "AI/ML UAV Operations", 
                icon: <Brain className="w-6 h-6" />, 
                desc: "Integrating computer vision and machine learning into UAV systems for automated defect detection, object tracking, and fully autonomous mission execution.",
                status: "ACTIVE R&D"
              },
              { 
                title: "Quantum Computing Applications", 
                icon: <Cpu className="w-6 h-6" />, 
                desc: "Exploratory research into quantum computing applications for drone swarm coordination, encrypted communications, and optimization of complex multi-drone missions.",
                status: "RESEARCH"
              },
              { 
                title: "Advanced Payload Development", 
                icon: <Code className="w-6 h-6" />, 
                desc: "Custom sensor and payload engineering for specialized applications — hyperspectral imaging, gas detection, LiDAR integration, and mission-specific hardware systems.",
                status: "ACTIVE R&D"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="left-accent-card bg-white p-6 shadow-sm border border-border"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg w-fit text-primary">{item.icon}</div>
                  <span className="text-xs font-bold font-mono text-primary/70 bg-primary/5 px-2 py-1 rounded-full">{item.status}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Section */}
      <section className="py-24 bg-[#F5F4F0] border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="section-label">UAV MANUFACTURING</div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">50,000 Sq Ft. Made in India.</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Soaring Aerotech operates a <strong>50,000 square foot manufacturing facility</strong> — one of the largest drone manufacturing setups in Central India — producing indigenous UAVs for commercial, government, and defence markets.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                With national and international collaborations, our manufacturing division is positioned to scale into a major supplier of Made in India drones across multiple segments.
              </p>
              <div className="flex flex-wrap gap-3">
                {["50,000 sq ft Facility", "National Collaborations", "International Partnerships", "Made in India", "PLI Drone Scheme Aligned"].map((badge, i) => (
                  <span key={i} className="inline-block px-4 py-1.5 rounded-full bg-white border border-border text-sm font-semibold text-foreground">{badge}</span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {[
                { 
                  icon: <Truck className="w-8 h-8 text-primary" />, 
                  title: "Logistics Drones", 
                  desc: "Last-mile delivery and cargo transport UAVs designed for India's diverse terrain — urban delivery networks and remote area logistics." 
                },
                { 
                  icon: <Shield className="w-8 h-8 text-primary" />, 
                  title: "Defence Drones", 
                  desc: "Defence-grade UAVs for surveillance, reconnaissance, and specialized military applications — engineered for durability and operational reliability." 
                },
                { 
                  icon: <Crosshair className="w-8 h-8 text-primary" />, 
                  title: "Surveillance Drones", 
                  desc: "Long-endurance surveillance UAVs with advanced imaging payloads for perimeter security, border patrol, and critical infrastructure monitoring." 
                },
                { 
                  icon: <Factory className="w-8 h-8 text-primary" />, 
                  title: "Custom UAV Design & Prototyping", 
                  desc: "End-to-end custom drone development — from concept and engineering to prototype, testing, and production — for any application or industry." 
                },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-5 p-6 bg-white rounded-2xl border border-border shadow-sm"
                >
                  <div className="shrink-0 mt-1">{item.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white border-t border-border text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Collaborate With Our R&D & Manufacturing Team</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Whether you're a college looking to set up a drone Centre of Excellence, a defence agency needing custom UAVs, or a researcher looking to collaborate — we're ready to build together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="rounded-full h-14 px-8 text-base font-semibold">
                Discuss Collaboration
              </Button>
            </Link>
            <Link href="/training">
              <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-base font-semibold">
                View Training Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
