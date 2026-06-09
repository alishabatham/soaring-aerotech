import { Link } from "wouter";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, ShieldCheck, GraduationCap, Wrench, Lightbulb, Factory } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* 1. Hero */}
      <section className="relative h-screen min-h-[640px] flex items-center pt-24 overflow-hidden bg-[#0D1B2A]">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-bg.png" 
            alt="Soaring Aerotech drone operations" 
            className="w-full h-full object-cover object-center opacity-30 mix-blend-overlay"
          />
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-[#F5F4F0] z-10" style={{clipPath: 'polygon(0 100%, 100% 100%, 100% 0)'}} />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-sm mb-6 uppercase"
            >
              CENTRAL INDIA'S DRONE INNOVATION ECOSYSTEM
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight"
            >
              We Don't Just Train <br className="hidden md:block"/>
              <span className="text-primary">Pilots. We Build the</span><br className="hidden md:block"/>
              Drone Industry.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl font-light leading-relaxed"
            >
              DGCA Certified Training <span className="text-primary mx-2">•</span> Industrial Drone Services <span className="text-primary mx-2">•</span> R&D & Innovation <span className="text-primary mx-2">•</span> UAV Manufacturing
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/training">
                <Button size="lg" className="w-full sm:w-auto text-base h-14 px-8 rounded-full transition-all group" data-testid="btn-hero-training">
                  Explore Programs
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-base h-14 px-8 rounded-full border-white/20 text-white hover:bg-white/10 transition-all" data-testid="btn-hero-consult">
                  Partner With Us
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <section className="py-12 bg-white border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-label justify-center">REGISTERED & RECOGNIZED</div>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {[
              { icon: <ShieldCheck className="w-4 h-4" />, label: "DGCA Approved RPTO" },
              { icon: null, label: "🚀 Startup India" },
              { icon: null, label: "🏭 MSME Registered" },
              { icon: null, label: "🎓 AIC Prestige Incubated" },
              { icon: null, label: "🛡️ Defence Grade R&D" },
              { icon: null, label: "50,000 sq ft Manufacturing" },
            ].map((item, i) => (
              <div key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm font-medium text-foreground/80">
                {item.icon} {item.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The Positioning Statement */}
      <section className="py-24 bg-[#F5F4F0]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="section-label justify-center">WHO WE ARE</div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
              Central India's Only Complete<br/><span className="text-primary">Drone Innovation & Manufacturing Ecosystem</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Soaring Aerotech combines <strong>DGCA-certified skill development</strong>, <strong>industrial drone services</strong>, <strong>cutting-edge R&D</strong>, and <strong>indigenous UAV manufacturing</strong> under one roof — building the future of India's drone sector from the ground up.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Four Pillars */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16">
            <div className="section-label">OUR 4 PILLARS</div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">What We Do</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                num: "01",
                tag: "TRAIN",
                color: "bg-blue-500/10 text-blue-700",
                title: "Skill Development",
                icon: <GraduationCap className="w-8 h-8" />,
                desc: "DGCA-certified RPTO offering RPC training, drone mapping, GIS & geospatial, thermal & multispectral analysis, AI/ML for drones, drone assembly, and entrepreneurship programs.",
                link: "/training",
                cta: "View Programs"
              },
              {
                num: "02",
                tag: "SOLVE",
                color: "bg-green-500/10 text-green-700",
                title: "Industrial Drone Services",
                icon: <Wrench className="w-8 h-8" />,
                desc: "B2B drone solutions for government, infrastructure, agriculture, and energy sectors — aerial land survey, 2D/3D mapping, solar inspection, AI surveillance, disaster assessment, and custom solutions.",
                link: "/services",
                cta: "View Services"
              },
              {
                num: "03",
                tag: "INNOVATE",
                color: "bg-purple-500/10 text-purple-700",
                title: "Research & Development",
                icon: <Lightbulb className="w-8 h-8" />,
                desc: "Active R&D in disaster management UAVs, tethered drones, agricultural UAVs, AI/ML operations, quantum computing for drones, and advanced payload development.",
                link: "/innovation-lab",
                cta: "Explore R&D"
              },
              {
                num: "04",
                tag: "BUILD",
                color: "bg-orange-500/10 text-orange-700",
                title: "UAV Manufacturing",
                icon: <Factory className="w-8 h-8" />,
                desc: "50,000 sq ft manufacturing facility producing logistics drones, defence drones, surveillance UAVs, and custom drone designs. National and international collaborations.",
                link: "/innovation-lab",
                cta: "Learn More"
              }
            ].map((pillar, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="left-accent-card bg-white p-8 shadow-sm hover:shadow-md transition-shadow relative border border-border"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold font-mono ${pillar.color}`}>
                    {pillar.tag}
                  </div>
                  <span className="text-5xl font-black text-border">{pillar.num}</span>
                </div>
                <div className="mb-4 text-foreground/70">{pillar.icon}</div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{pillar.title}</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">{pillar.desc}</p>
                <Link href={pillar.link} className="inline-flex items-center text-primary font-semibold transition-colors">
                  {pillar.cta} <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Numbers */}
      <section className="py-24 bg-[#F5F4F0] border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-label">BY THE NUMBERS</div>
          <div className="flex flex-wrap items-center justify-center divide-x divide-border">
            {[
              { num: "500+", label: "Pilots Trained" },
              { num: "100+", label: "Drone Missions" },
              { num: "50,000", label: "Sq Ft Manufacturing" },
              { num: "8+", label: "Training Programs" },
              { num: "20+", label: "Industry Partners" },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="px-8 md:px-10 text-center py-4"
              >
                <h3 className="text-4xl md:text-5xl font-black text-foreground font-mono">{stat.num}</h3>
                <p className="text-sm text-muted-foreground mt-2 uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Who We Work With */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="section-label justify-center">CLIENT ECOSYSTEM</div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Who We Work With</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Our four pillars serve a diverse ecosystem of clients — from students to government agencies, corporates to defence organizations.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Students & Career Seekers", "Government Departments", "Smart City Projects", "Defence & Police",
              "Solar Energy Companies", "Agriculture Firms", "Infrastructure & Builders", "Research Institutions"
            ].map((client, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-5 rounded-2xl bg-[#F5F4F0] border border-border text-center text-sm font-semibold text-foreground"
              >
                {client}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="py-24 bg-[#F5F4F0] border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-label">WHAT PEOPLE SAY</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { name: "Rahul Verma", role: "DGCA Certified Drone Pilot", text: "The DGCA curriculum — from NPNT to Digital Sky platform — was thoroughly covered. I cleared my RPC exam in the first attempt and now fly commercially." },
              { name: "Sneha Patil", role: "Agricultural Drone Operator", text: "Soaring Aerotech's agricultural drone and GIS mapping training connected my background with technology. The hands-on sessions were invaluable." },
              { name: "Amit Kumar", role: "Engineering Graduate", text: "The R&D lab gave me access to real defence and surveillance drone hardware. My project on indigenous UAV design wouldn't have been possible elsewhere." }
            ].map((test, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-border">
                <div className="text-8xl font-black text-primary leading-none h-16 opacity-50">"</div>
                <p className="text-lg text-foreground font-medium mb-8 leading-relaxed">{test.text}</p>
                <div className="w-12 h-px bg-border mb-6" />
                <div className="font-bold text-foreground">{test.name}</div>
                <div className="text-sm text-muted-foreground">{test.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA */}
      <section className="py-24 bg-white border-t-4 border-primary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 tracking-tight">
                Ready to Be Part of India's Drone Revolution?
              </h2>
              <p className="text-lg text-muted-foreground">Train. Deploy. Innovate. Build. — Soaring Aerotech is your full-cycle drone ecosystem partner.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <Link href="/training">
                <Button size="lg" className="w-full sm:w-auto h-14 px-8 rounded-full text-base font-semibold" data-testid="btn-cta-enroll">
                  Enroll Now
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 rounded-full text-base font-semibold border-border text-foreground hover:bg-muted" data-testid="btn-cta-talk">
                  Talk to an Expert
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
