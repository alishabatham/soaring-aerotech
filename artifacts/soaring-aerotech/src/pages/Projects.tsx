import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, BarChart3, Clock, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const projects = [
    {
      title: "NH-47 Highway Expansion Survey",
      category: "Road Survey",
      img: "/images/project-road.png",
      challenge: "A 50km stretch required accurate topographic data for road widening, but heavy traffic made traditional surveying hazardous and slow.",
      solution: "Deployed fixed-wing VTOL drones equipped with PPK GNSS modules to capture high-resolution imagery without disrupting traffic.",
      results: [
        { label: "Time Saved", value: "65%", icon: <Clock className="w-5 h-5 text-secondary" /> },
        { label: "Cost Reduced", value: "40%", icon: <IndianRupee className="w-5 h-5 text-green-500" /> },
        { label: "Accuracy", value: "±2cm", icon: <BarChart3 className="w-5 h-5 text-primary" /> }
      ]
    },
    {
      title: "Vidarbha Precision Agriculture Initiative",
      category: "Agriculture Mapping",
      img: "/images/project-agri.png",
      challenge: "A 1000-acre cotton farm faced unexplained yield drops. Manual soil and crop inspection was physically impossible at scale.",
      solution: "Conducted weekly multispectral drone flights to generate NDVI maps, identifying exact zones of water stress and pest infestation.",
      results: [
        { label: "Yield Increase", value: "18%", icon: <BarChart3 className="w-5 h-5 text-primary" /> },
        { label: "Chemicals Saved", value: "30%", icon: <IndianRupee className="w-5 h-5 text-green-500" /> },
        { label: "Scan Time", value: "4 Hrs", icon: <Clock className="w-5 h-5 text-secondary" /> }
      ]
    },
    {
      title: "Bhadla Solar Park Thermal Audit",
      category: "Solar Inspection",
      img: "/images/project-solar.png",
      challenge: "Manual inspection of a 200MW solar section was taking months, allowing faulty panels to cause significant energy loss.",
      solution: "Automated thermal drone mapping identified defective cells, string failures, and soiling issues with precise GPS coordinates.",
      results: [
        { label: "Faults Found", value: "450+", icon: <BarChart3 className="w-5 h-5 text-primary" /> },
        { label: "Inspection Time", value: "-80%", icon: <Clock className="w-5 h-5 text-secondary" /> },
        { label: "ROI", value: "3 Months", icon: <IndianRupee className="w-5 h-5 text-green-500" /> }
      ]
    },
    {
      title: "Metro Rail Pillar Inspection",
      category: "Construction Monitoring",
      img: "/images/project-construction.png",
      challenge: "Inspecting high concrete pillars over active urban areas required expensive scaffolding and traffic diversions.",
      solution: "High-resolution drone photography captured millimeter-level detail of concrete integrity without ground disruption.",
      results: [
        { label: "Risk Reduction", value: "99%", icon: <BarChart3 className="w-5 h-5 text-primary" /> },
        { label: "Cost Saved", value: "Rs 5L+", icon: <IndianRupee className="w-5 h-5 text-green-500" /> },
        { label: "Uptime", value: "100%", icon: <Clock className="w-5 h-5 text-secondary" /> }
      ]
    },
    {
      title: "High-Voltage Powerline Audit",
      category: "Powerline Inspection",
      img: "/images/project-powerline.png",
      challenge: "Routine inspection of 132kV transmission lines in mountainous terrain was dangerous for climbing crews.",
      solution: "Drones with high-zoom payloads flew parallel to the lines, detecting insulator damage and vegetation encroachment safely.",
      results: [
        { label: "Speed", value: "5x Faster", icon: <Clock className="w-5 h-5 text-secondary" /> },
        { label: "Safety Incidents", value: "Zero", icon: <BarChart3 className="w-5 h-5 text-primary" /> },
        { label: "Data Points", value: "10k+", icon: <BarChart3 className="w-5 h-5 text-primary" /> }
      ]
    }
  ];

  return (
    <main className="min-h-screen pt-20">
      <section className="py-20 md:py-32 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white mb-6"
          >
            Mission <span className="text-primary text-glow">Archives</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Real-world challenges. Cutting-edge UAV solutions. Measurable industrial impact. Explore our case studies.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-24">
            {projects.map((project, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-card rounded-3xl overflow-hidden border border-white/5"
              >
                <div className={`h-full min-h-[400px] relative ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <img src={project.img} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 inline-flex px-4 py-1.5 rounded-full bg-black/50 backdrop-blur-md text-white font-mono text-sm font-bold border border-white/10">
                    {project.category.toUpperCase()}
                  </div>
                </div>
                
                <div className="p-8 md:p-12">
                  <h2 className="text-3xl font-bold text-white mb-8">{project.title}</h2>
                  
                  <div className="space-y-6 mb-10">
                    <div>
                      <h4 className="text-sm font-mono text-muted-foreground mb-2">THE CHALLENGE</h4>
                      <p className="text-gray-300 text-lg">{project.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-mono text-primary mb-2">OUR SOLUTION</h4>
                      <p className="text-gray-300 text-lg">{project.solution}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 border-t border-border pt-8">
                    {project.results.map((res, j) => (
                      <div key={j} className="text-center">
                        <div className="flex justify-center mb-2">{res.icon}</div>
                        <div className="text-2xl font-black text-white font-mono">{res.value}</div>
                        <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{res.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-card border-t border-border text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Have a Complex Project?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Contact our project engineering team to discuss how drones can solve your specific industrial challenges.
          </p>
          <Link href="/contact">
            <Button size="lg" className="rounded-full h-14 px-8 text-base font-semibold shadow-[0_0_20px_rgba(0,102,255,0.4)]">
              Start a Conversation
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
