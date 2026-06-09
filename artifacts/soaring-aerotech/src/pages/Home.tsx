import { Link } from "wouter";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, ShieldCheck, GraduationCap, Wrench, Lightbulb, Factory, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const pillars = [
  {
    tag: "TRAIN",
    color: "bg-blue-50 border-blue-200 text-blue-700",
    dot: "bg-blue-500",
    title: "Skill Development",
    icon: <GraduationCap className="w-7 h-7" />,
    points: ["DGCA Certified RPTO", "8 Specialized Programs", "RPC Certification"],
    link: "/training"
  },
  {
    tag: "SOLVE",
    color: "bg-green-50 border-green-200 text-green-700",
    dot: "bg-green-500",
    title: "Drone Services",
    icon: <Wrench className="w-7 h-7" />,
    points: ["Survey & Mapping", "AI Surveillance", "Solar Inspection"],
    link: "/services"
  },
  {
    tag: "INNOVATE",
    color: "bg-purple-50 border-purple-200 text-purple-700",
    dot: "bg-purple-500",
    title: "R&D",
    icon: <Lightbulb className="w-7 h-7" />,
    points: ["Disaster UAVs", "AI/ML Systems", "Payload Engineering"],
    link: "/innovation-lab"
  },
  {
    tag: "BUILD",
    color: "bg-orange-50 border-orange-200 text-orange-700",
    dot: "bg-orange-500",
    title: "Manufacturing",
    icon: <Factory className="w-7 h-7" />,
    points: ["50,000 sq ft Facility", "Defence Drones", "Logistics UAVs"],
    link: "/innovation-lab"
  },
];

const stats = [
  { num: "500+", label: "Pilots Trained" },
  { num: "8+", label: "Programs" },
  { num: "100+", label: "Missions" },
  { num: "50K", label: "Sq Ft Facility" },
];

const clients = [
  "Government", "Defence & Police", "Smart Cities",
  "Solar Companies", "Agriculture", "Infrastructure",
  "Research Labs", "Startups",
];

const testimonials = [
  { name: "Rahul Verma", role: "DGCA Certified Pilot", text: "Cleared RPC in first attempt. Now flying commercially." },
  { name: "Sneha Patil", role: "Agricultural Drone Operator", text: "Connected my farming background with drone technology perfectly." },
  { name: "Amit Kumar", role: "Engineering Graduate", text: "Real defence drone hardware access. Nowhere else in MP." },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-[#0D1B2A]">
        <div className="absolute inset-0 z-0">
          <img src="/images/hero-bg.png" alt="" className="w-full h-full object-cover opacity-25 mix-blend-overlay" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-[#F5F4F0] z-10" style={{clipPath:'polygon(0 100%,100% 100%,100% 0)'}} />

        <div className="container mx-auto px-4 md:px-6 relative z-10 py-20">
          <div className="max-w-3xl">
            <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-xs mb-6 uppercase tracking-widest">
              Central India · Drone Innovation Ecosystem
            </motion.div>
            <motion.h1 initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:0.1}} className="text-5xl md:text-7xl font-black text-white leading-[1.05] mb-6 tracking-tight">
              We Build the<br/><span className="text-primary">Drone Industry.</span>
            </motion.h1>
            <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:0.2}} className="flex flex-wrap gap-3 mb-10">
              {["DGCA Training","Drone Services","R&D","UAV Manufacturing"].map((t,i)=>(
                <span key={i} className="px-4 py-1.5 rounded-full border border-white/20 text-white/70 text-sm font-medium">{t}</span>
              ))}
            </motion.div>
            <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:0.3}} className="flex gap-4">
              <Link href="/training">
                <Button size="lg" className="h-13 px-8 rounded-full text-base group">
                  Explore Programs <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="h-13 px-8 rounded-full text-base border-white/20 text-white hover:bg-white/10">
                  Partner With Us
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="py-10 bg-white border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              {icon:<ShieldCheck className="w-4 h-4"/>, label:"DGCA Approved RPTO"},
              {icon:null, label:"🚀 Startup India"},
              {icon:null, label:"🏭 MSME Registered"},
              {icon:null, label:"🎓 AIC Prestige"},
              {icon:null, label:"🏗️ 50,000 sq ft Manufacturing"},
            ].map((item,i)=>(
              <div key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm font-medium text-foreground/70">
                {item.icon}{item.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-[#F5F4F0]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-border">
            {stats.map((s,i)=>(
              <motion.div key={i} initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.08}} className="text-center py-6 px-4">
                <div className="text-4xl md:text-5xl font-black text-foreground font-mono">{s.num}</div>
                <div className="text-xs text-muted-foreground mt-2 uppercase tracking-widest">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Pillars */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12">
            <div className="section-label">4 PILLARS</div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">What We Do</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((p,i)=>(
              <motion.div key={i} initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.08}} className="group border border-border rounded-2xl p-7 bg-white hover:shadow-md transition-all flex flex-col">
                <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold font-mono border mb-5 w-fit ${p.color}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${p.dot}`} />{p.tag}
                </div>
                <div className="text-foreground/60 mb-3">{p.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-4">{p.title}</h3>
                <ul className="space-y-2 flex-1 mb-6">
                  {p.points.map((pt,j)=>(
                    <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${p.dot}`} />{pt}
                    </li>
                  ))}
                </ul>
                <Link href={p.link} className="inline-flex items-center text-sm text-primary font-semibold mt-auto group-hover:gap-2 gap-1 transition-all">
                  Explore <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-20 bg-[#F5F4F0] border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-label mb-8">WHO WE SERVE</div>
          <div className="flex flex-wrap gap-3">
            {clients.map((c,i)=>(
              <motion.span key={i} initial={{opacity:0,scale:0.95}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{delay:i*0.05}} className="px-5 py-2.5 rounded-full bg-white border border-border text-sm font-semibold text-foreground">
                {c}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-label mb-12">WHAT PEOPLE SAY</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t,i)=>(
              <motion.div key={i} initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1}} className="bg-[#F5F4F0] rounded-2xl p-7 border border-border">
                <div className="text-5xl font-black text-primary/30 leading-none mb-4">"</div>
                <p className="text-foreground font-medium mb-6 leading-relaxed">{t.text}</p>
                <div className="font-bold text-sm text-foreground">{t.name}</div>
                <div className="text-xs text-muted-foreground mt-1">{t.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0D1B2A]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <h2 className="text-3xl md:text-4xl font-black text-white leading-tight max-w-lg">
              Ready to Join India's<br/><span className="text-primary">Drone Revolution?</span>
            </h2>
            <div className="flex gap-4">
              <Link href="/training">
                <Button size="lg" className="h-13 px-8 rounded-full text-base font-semibold">Enroll Now</Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="h-13 px-8 rounded-full text-base font-semibold border-white/20 text-white hover:bg-white/10">Talk to Expert</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
