import { motion } from "framer-motion";
import { Link } from "wouter";
import { Lightbulb, Cpu, Code, Users2, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function InnovationLab() {
  return (
    <main className="min-h-screen pt-20">
      <section className="py-20 md:py-32 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 font-mono text-sm mb-6"
          >
            <Lightbulb className="w-4 h-4" />
            <span>RESEARCH & DEVELOPMENT</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white mb-6"
          >
            Drone <span className="text-purple-400 text-shadow-[0_0_20px_rgba(168,85,247,0.5)]">Innovation Lab</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Where theoretical concepts become flyable reality. Pushing the boundaries of autonomous flight, AI integration, and custom payload engineering.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {[
              { title: "Hardware Prototyping", icon: <Cpu className="w-8 h-8" />, desc: "Custom frame design, 3D printing, and flight controller integration." },
              { title: "Software & AI", icon: <Code className="w-8 h-8" />, desc: "Computer vision, edge computing, and autonomous mission planning algorithms." },
              { title: "Student Hackathons", icon: <Users2 className="w-8 h-8" />, desc: "24-hour intense problem-solving events for aspiring aerospace engineers." },
              { title: "Industry R&D", icon: <Trophy className="w-8 h-8" />, desc: "Collaborative research projects solving specific enterprise pain points." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-3xl bg-card border border-white/5"
              >
                <div className="text-purple-400 mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Inside the Lab</h2>
            <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: "/images/lab-1.png", title: "Prototyping Bay" },
              { img: "/images/lab-2.png", title: "National Hackathon 2024" },
              { img: "/images/lab-3.png", title: "Autonomous Indoor Testing" },
            ].map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-3xl overflow-hidden aspect-[4/3] relative group"
              >
                <img src={img.img} alt={img.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 text-xl font-bold text-white">{img.title}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-card border-t border-border text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Partner With Our Lab</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Are you a college looking to set up a Center of Excellence? Or an enterprise needing custom R&D?
          </p>
          <Link href="/contact">
            <Button size="lg" className="rounded-full h-14 px-8 text-base font-semibold bg-purple-600 hover:bg-purple-700 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]">
              Discuss Collaboration
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
