import { motion } from "framer-motion";
import { Link } from "wouter";
import { Lightbulb, Cpu, Brain, Zap, Anchor, Shield, Crosshair, Truck, Factory } from "lucide-react";
import { Button } from "@/components/ui/button";

const rdProjects = [
  { icon:<Zap className="w-6 h-6"/>, title:"Disaster Management UAV", status:"ACTIVE R&D", color:"bg-red-50 text-red-600", desc:"Rapid flood/fire zone assessment, search & rescue coordination." },
  { icon:<Anchor className="w-6 h-6"/>, title:"Tethered Drone Systems", status:"ACTIVE R&D", color:"bg-blue-50 text-blue-600", desc:"Continuous-power UAVs for persistent surveillance and comms relay." },
  { icon:<Lightbulb className="w-6 h-6"/>, title:"Agricultural UAV", status:"PROTOTYPING", color:"bg-green-50 text-green-600", desc:"Purpose-built drones for Indian farming — spraying & multispectral." },
  { icon:<Brain className="w-6 h-6"/>, title:"AI/ML UAV Operations", status:"ACTIVE R&D", color:"bg-purple-50 text-purple-600", desc:"Computer vision, auto-defect detection, autonomous missions." },
  { icon:<Cpu className="w-6 h-6"/>, title:"Quantum Computing Applications", status:"RESEARCH", color:"bg-indigo-50 text-indigo-600", desc:"Swarm coordination, encrypted comms, multi-drone optimization." },
  { icon:<Zap className="w-6 h-6"/>, title:"Advanced Payload Development", status:"ACTIVE R&D", color:"bg-orange-50 text-orange-600", desc:"Hyperspectral, gas detection, LiDAR, and custom sensor systems." },
];

const manufacturing = [
  { icon:<Shield className="w-7 h-7 text-primary"/>, title:"Defence Drones", desc:"Surveillance & reconnaissance UAVs for military and security forces." },
  { icon:<Crosshair className="w-7 h-7 text-primary"/>, title:"Surveillance Drones", desc:"Long-endurance UAVs with advanced imaging for perimeter & border monitoring." },
  { icon:<Truck className="w-7 h-7 text-primary"/>, title:"Logistics Drones", desc:"Last-mile delivery and cargo UAVs for urban and remote areas." },
  { icon:<Factory className="w-7 h-7 text-primary"/>, title:"Custom UAV Design", desc:"End-to-end custom drone development — concept to production." },
];

export default function InnovationLab() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-24 bg-[#0D1B2A] relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-xs mb-5 uppercase tracking-widest">
            <Lightbulb className="w-3.5 h-3.5"/> R&D · UAV MANUFACTURING · MADE IN INDIA
          </motion.div>
          <motion.h1 initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:0.1}} className="text-4xl md:text-6xl font-black text-white mb-4">
            Innovation Lab &<br/><span className="text-primary">UAV Manufacturing</span>
          </motion.h1>
          <motion.p initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:0.2}} className="text-white/60 max-w-xl mx-auto">
            Active R&D across 6 project streams. 50,000 sq ft manufacturing. Defence, logistics, and surveillance drones — Made in India.
          </motion.p>
        </div>
      </section>

      {/* R&D */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12">
            <div className="section-label">ACTIVE R&D</div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">6 Research Projects</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rdProjects.map((p,i)=>(
              <motion.div key={i} initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.07}} className="border border-border rounded-2xl p-6 bg-white hover:shadow-md transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${p.color}`}>{p.icon}</div>
                  <span className="text-xs font-bold font-mono text-primary/60 bg-primary/5 border border-primary/10 px-2 py-1 rounded-full">{p.status}</span>
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing */}
      <section className="py-24 bg-[#F5F4F0] border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="section-label">UAV MANUFACTURING</div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">50,000 Sq Ft.<br/><span className="text-primary">Made in India.</span></h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                One of Central India's largest drone manufacturing setups — producing indigenous UAVs for commercial, government, and defence markets. National & international collaborations.
              </p>
              <div className="flex flex-wrap gap-2">
                {["50,000 sq ft Facility","National Collaborations","International Partnerships","Made in India","PLI Aligned"].map((b,i)=>(
                  <span key={i} className="px-4 py-1.5 rounded-full bg-white border border-border text-sm font-medium text-foreground">{b}</span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {manufacturing.map((m,i)=>(
                <motion.div key={i} initial={{opacity:0,x:16}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:i*0.08}} className="flex gap-5 p-5 bg-white rounded-2xl border border-border shadow-sm">
                  <div className="shrink-0 mt-0.5">{m.icon}</div>
                  <div><div className="font-bold text-foreground mb-1">{m.title}</div><div className="text-sm text-muted-foreground">{m.desc}</div></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white border-t border-border text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">Collaborate With Us</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">College, research institution, or defence agency? Let's build together.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact"><Button size="lg" className="rounded-full h-13 px-8 text-base font-semibold">Discuss Collaboration</Button></Link>
            <Link href="/training"><Button size="lg" variant="outline" className="rounded-full h-13 px-8 text-base font-semibold">View Training</Button></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
