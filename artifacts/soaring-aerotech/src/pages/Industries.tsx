import { motion } from "framer-motion";
import { Link } from "wouter";
import { Tractor, Pickaxe, Building2, HardHat, Sun, Building, Train, GraduationCap, Shield } from "lucide-react";

export default function Industries() {
  const industries = [
    { name: "Agriculture", icon: <Tractor className="w-12 h-12" />, desc: "Crop health monitoring, yield estimation, and precision spraying to optimize agricultural outputs." },
    { name: "Mining", icon: <Pickaxe className="w-12 h-12" />, desc: "Volumetric analysis of stockpiles, highwall inspection, and safe blast monitoring." },
    { name: "Infrastructure", icon: <Building2 className="w-12 h-12" />, desc: "Detailed inspection of bridges, highways, and railways without disrupting daily operations." },
    { name: "Construction", icon: <HardHat className="w-12 h-12" />, desc: "Site mapping, progress tracking, and BIM integration for large-scale developments." },
    { name: "Solar Energy", icon: <Sun className="w-12 h-12" />, desc: "Automated thermal inspections to identify defective panels across vast solar farms rapidly." },
    { name: "Government", icon: <Building className="w-12 h-12" />, desc: "Land record mapping, disaster assessment, and compliance monitoring for municipal authorities." },
    { name: "Smart Cities", icon: <Train className="w-12 h-12" />, desc: "Urban planning data collection, traffic flow analysis, and structural audits." },
    { name: "Education", icon: <GraduationCap className="w-12 h-12" />, desc: "Academic partnerships providing institutions with cutting-edge drone labs and curricula." },
    { name: "Defense", icon: <Shield className="w-12 h-12" />, desc: "Surveillance, reconnaissance, and specialized training programs for security personnel." },
  ];

  return (
    <main className="min-h-screen pt-20">
      <section className="py-20 md:py-32 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white mb-6"
          >
            Industries We <span className="text-primary text-glow">Serve</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Drone technology is sector-agnostic. We provide specialized data collection and analysis tailored to the unique demands of every major industry in India.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-8 rounded-3xl bg-card border border-white/5 hover:border-primary/50 transition-colors group cursor-pointer"
              >
                <div className="text-primary mb-6 group-hover:scale-110 transition-transform group-hover:text-white">
                  {ind.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{ind.name}</h3>
                <p className="text-muted-foreground">{ind.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
