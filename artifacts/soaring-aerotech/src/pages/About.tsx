import { motion } from "framer-motion";
import { Link } from "wouter";
import { Award, ShieldCheck, Globe, Rocket, GraduationCap, Wrench, Lightbulb, Factory } from "lucide-react";
import { Button } from "@/components/ui/button";

const pillars = [
  { tag:"01 TRAIN", icon:<GraduationCap className="w-6 h-6 text-primary"/>, title:"Skill Development", items:["DGCA Certified RPTO","8+ Training Programs","RPC Certification","Drone Entrepreneurship"] },
  { tag:"02 SOLVE", icon:<Wrench className="w-6 h-6 text-primary"/>, title:"Drone Services", items:["Aerial Survey & Mapping","Solar Inspection","AI Surveillance","Custom Solutions"] },
  { tag:"03 INNOVATE", icon:<Lightbulb className="w-6 h-6 text-primary"/>, title:"R&D", items:["Disaster UAVs","Tethered Drones","AI/ML Systems","Payload Engineering"] },
  { tag:"04 BUILD", icon:<Factory className="w-6 h-6 text-primary"/>, title:"Manufacturing", items:["50,000 sq ft Facility","Defence Drones","Logistics UAVs","National & International Collabs"] },
];

const creds = [
  { icon:<ShieldCheck className="w-7 h-7 text-primary"/>, title:"DGCA Approved RPTO", desc:"Authorized Remote Pilot Training Organisation" },
  { icon:<Globe className="w-7 h-7 text-primary"/>, title:"Startup India", desc:"Government of India recognized startup" },
  { icon:<Award className="w-7 h-7 text-primary"/>, title:"MSME Registered", desc:"Ministry of MSME registered entity" },
  { icon:<Rocket className="w-7 h-7 text-primary"/>, title:"AIC Prestige", desc:"Atal Incubation Centre incubated" },
];

const directors = [
  { name:"Himanshu Jain", role:"Director", img:"/images/team-founder.png", quote:"We are building a complete drone ecosystem — Research, Manufacturing, Industrial Solutions, and Skill Development. Not just a training institute." },
  { name:"Manojkumar Deshpande", role:"Director", img:"/images/team-1.png", quote:"Our 50,000 sq ft manufacturing facility and active defence UAV R&D positions Soaring Aerotech as a full-cycle drone technology company." },
];

export default function About() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-24 bg-[#0D1B2A] relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.h1 initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} className="text-4xl md:text-6xl font-black text-white mb-4">
            Who We Are
          </motion.h1>
          <motion.p initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:0.1}} className="text-white/60 max-w-2xl mx-auto text-lg">
            Central India's Drone Innovation & Manufacturing Ecosystem — Training, Services, R&D, and UAV Manufacturing under one roof.
          </motion.p>
        </div>
      </section>

      {/* Statement */}
      <section className="py-20 bg-[#F5F4F0]">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
          <div className="section-label justify-center mb-6">OUR POSITIONING</div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6">
            Not a Training Institute.<br/><span className="text-primary">An Ecosystem.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Soaring Aerotech combines DGCA-certified training, B2B industrial services, next-generation R&D, and a 50,000 sq ft manufacturing facility — creating the complete drone value chain in Central India.
          </p>
        </div>
      </section>

      {/* 4 Pillars */}
      <section className="py-20 bg-white border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-label mb-8">FOUR PILLARS</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((p,i)=>(
              <motion.div key={i} initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.08}} className="border border-border rounded-2xl p-6 bg-white hover:shadow-md transition-all">
                <div className="text-xs font-bold font-mono text-primary/60 mb-4 tracking-widest">{p.tag}</div>
                <div className="flex items-center gap-2.5 mb-5">{p.icon}<h3 className="text-lg font-bold text-foreground">{p.title}</h3></div>
                <ul className="space-y-2">
                  {p.items.map((item,j)=>(
                    <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"/>{item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Directors */}
      <section className="py-20 bg-[#F5F4F0]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-label mb-8">LEADERSHIP</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {directors.map((d,i)=>(
              <motion.div key={i} initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1}} className="bg-white rounded-2xl overflow-hidden border border-border shadow-sm flex flex-col sm:flex-row">
                <div className="w-full sm:w-36 h-48 sm:h-auto relative shrink-0">
                  <img src={d.img} alt={d.name} className="absolute inset-0 w-full h-full object-cover grayscale"/>
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <Award className="w-6 h-6 text-primary mb-3"/>
                  <blockquote className="text-sm text-foreground/80 italic mb-4 leading-relaxed">"{d.quote}"</blockquote>
                  <div className="font-bold text-sm text-foreground">{d.name}</div>
                  <div className="text-xs text-primary font-mono">{d.role}, SOARING AEROTECH</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 bg-white border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-label mb-8">CREDENTIALS</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
            {creds.map((c,i)=>(
              <motion.div key={i} initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.08}} className="p-5 rounded-2xl bg-[#F5F4F0] border border-border text-center">
                <div className="flex justify-center mb-3">{c.icon}</div>
                <div className="text-sm font-bold text-foreground mb-1">{c.title}</div>
                <div className="text-xs text-muted-foreground">{c.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
