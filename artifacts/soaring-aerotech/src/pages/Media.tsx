import { motion } from "framer-motion";
import { Link } from "wouter";
import { Newspaper, Trophy, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Media() {
  const mediaMentions = [
    { source: "Tech Crunch India", type: "Article", title: "Soaring Aerotech pioneers automated thermal inspections for solar parks.", date: "Nov 2024" },
    { source: "Aviation Week", type: "Interview", title: "Interview with CEO Rajeev Sharma on the future of DGCA certified training.", date: "Oct 2024" },
    { source: "Startup India", type: "Recognition", title: "Recognized as Top 50 Aerospace Startups to watch in 2024.", date: "Aug 2024" },
    { source: "The Economic Times", type: "Feature", title: "How drones are transforming Indian agriculture yields.", date: "Jul 2024" },
  ];

  return (
    <main className="min-h-screen pt-20">
      <section className="py-20 md:py-32 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white mb-6"
          >
            Media & <span className="text-primary text-glow">Recognition</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Our journey covered by leading publications, and the awards that validate our commitment to excellence.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Press Mentions */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Newspaper className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold text-white">Press Mentions</h2>
              </div>
              
              <div className="space-y-4">
                {mediaMentions.map((item, i) => (
                  <motion.a 
                    href="#"
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="block p-6 rounded-2xl bg-card border border-white/5 hover:border-primary/30 transition-all group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-primary font-bold font-mono text-sm">{item.source}</span>
                        <span className="w-1 h-1 rounded-full bg-border" />
                        <span className="text-muted-foreground text-sm">{item.type}</span>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-sm text-muted-foreground font-mono">{item.date}</p>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Awards */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Trophy className="w-8 h-8 text-accent" />
                <h2 className="text-3xl font-bold text-white">Awards & Recognition</h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Best Aerospace Startup 2023 - State Tech Awards",
                  "Excellence in Drone Education - AIC Prestige",
                  "Top Innovator: Agri-Tech Solutions",
                  "DGCA Certified Premium Training Partner"
                ].map((award, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 rounded-2xl bg-card border border-white/5 text-center flex flex-col items-center justify-center min-h-[160px]"
                  >
                    <Trophy className="w-8 h-8 text-accent/50 mb-4" />
                    <p className="text-white font-medium">{award}</p>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
