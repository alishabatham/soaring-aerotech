import { Link } from "wouter";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, ShieldCheck, CheckCircle2, Navigation, Target, Activity, Zap, ArrowUpRight, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* 1. Hero */}
      <section className="relative h-screen min-h-[600px] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-bg.png" 
            alt="Cinematic aerial drone shot over Indian landscape" 
            className="w-full h-full object-cover object-center opacity-60 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-sm mb-6"
            >
              <Activity className="w-4 h-4" />
              <span>INDIA'S PREMIER DRONE ECOSYSTEM</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight"
            >
              Building the Future of <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-glow">Drone Technology</span> in India
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl font-light leading-relaxed"
            >
              DGCA Certified Drone Training <span className="text-primary mx-2">|</span> Survey & Mapping <span className="text-primary mx-2">|</span> Industrial Inspection <span className="text-primary mx-2">|</span> Drone Innovation
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/training">
                <Button size="lg" className="w-full sm:w-auto text-base h-14 px-8 rounded-full shadow-[0_0_20px_rgba(0,102,255,0.4)] hover:shadow-[0_0_30px_rgba(0,102,255,0.6)] transition-all group" data-testid="btn-hero-training">
                  Explore Training Programs
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-base h-14 px-8 rounded-full border-white/20 hover:bg-white/5 hover:text-white transition-all" data-testid="btn-hero-consult">
                  Request Consultation
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <section className="py-12 border-b border-border bg-card/50">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-center text-sm font-mono text-muted-foreground mb-8">
            RECOGNIZED AND TRUSTED BY INDUSTRY, INSTITUTIONS, AND INNOVATION ECOSYSTEMS
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Simulated Logos - Text based for now, standard practice when real assets aren't provided */}
            <div className="flex items-center gap-2 font-bold text-xl"><ShieldCheck className="w-8 h-8"/> DGCA</div>
            <div className="flex items-center gap-2 font-bold text-xl text-orange-500">Startup India</div>
            <div className="flex items-center gap-2 font-bold text-xl">MSME</div>
            <div className="flex items-center gap-2 font-bold text-xl text-blue-400">AIC Prestige</div>
            <div className="flex items-center gap-2 font-bold text-xl">Academic Partners</div>
          </div>
        </div>
      </section>

      {/* 3. Numbers That Matter */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { num: "500+", label: "Students Trained" },
              { num: "100+", label: "Drone Missions" },
              { num: "20+", label: "Industry Collabs" },
              { num: "10+", label: "Colleges Partnered" },
              { num: "5+", label: "Drone Applications" },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-white/5 text-center relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-4xl md:text-5xl font-black text-white mb-2 font-mono">{stat.num}</h3>
                <p className="text-muted-foreground text-sm font-medium uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. What We Do */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Core Competencies</h2>
            <div className="w-20 h-1 bg-primary rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Drone Pilot Training",
                desc: "Become a DGCA Certified pilot with comprehensive theoretical knowledge and rigorous hands-on flying experience.",
                icon: <Navigation className="w-8 h-8 text-primary" />,
                link: "/training"
              },
              {
                title: "Survey & Mapping",
                desc: "Accurate aerial data collection, 3D modeling, and topographic mapping for infrastructure, mining, and agriculture.",
                icon: <Target className="w-8 h-8 text-secondary" />,
                link: "/services"
              },
              {
                title: "Industrial Inspection",
                desc: "High-resolution infrastructure and asset monitoring for powerlines, solar farms, bridges, and cellular towers.",
                icon: <Zap className="w-8 h-8 text-accent" />,
                link: "/services"
              },
              {
                title: "Drone Innovation Lab",
                desc: "Research, development & emerging applications exploring the frontiers of autonomous flight and AI integration.",
                icon: <Activity className="w-8 h-8 text-purple-400" />,
                link: "/innovation-lab"
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-background border border-border hover:border-primary/50 transition-colors group relative overflow-hidden"
              >
                <div className="mb-6 p-4 bg-card inline-block rounded-2xl group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-8 text-lg">{service.desc}</p>
                <Link href={service.link} className="inline-flex items-center text-primary font-semibold hover:text-white transition-colors" data-testid={`link-service-${i}`}>
                  Explore <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Choose Soaring Aerotech */}
      <section className="py-24 bg-background border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                Why India's Top Enterprises Choose Us
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We bridge the gap between theoretical knowledge and real-world application, delivering solutions and training that meet the highest industrial standards.
              </p>
              <ul className="space-y-6">
                {[
                  "DGCA-aligned rigorous training standards",
                  "Instructors are active industry experts",
                  "Extensive hands-on flying experience",
                  "Exposure to real-world industrial projects",
                  "Dedicated career-focused placement assistance"
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 bg-primary/20 p-1 rounded-full">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-lg text-gray-200">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-square rounded-full bg-card border border-white/5 flex items-center justify-center p-12">
               <div className="absolute inset-0 border border-primary/20 rounded-full animate-[spin_10s_linear_infinite]" />
               <div className="absolute inset-8 border border-secondary/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
               <img src="/images/hero-bg.png" className="w-full h-full object-cover rounded-full mix-blend-luminosity opacity-50" alt="" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Rocket className="w-16 h-16 text-primary mx-auto mb-4" />
                    <div className="text-2xl font-bold font-mono">SOARING</div>
                    <div className="text-primary font-mono tracking-[0.2em]">AEROTECH</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Featured Projects */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Mission Archives</h2>
              <div className="w-20 h-1 bg-primary rounded-full" />
            </div>
            <Link href="/projects">
              <Button variant="outline" className="rounded-full" data-testid="btn-all-projects">
                View All Projects <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Highway Survey & Mapping", img: "/images/project-road.png", desc: "Topographic survey for 50km highway corridor reducing time by 60%." },
              { title: "Precision Agriculture", img: "/images/project-agri.png", desc: "Multispectral crop health analysis for 500-acre commercial farm." },
              { title: "Solar Plant Inspection", img: "/images/project-solar.png", desc: "Thermal inspection detecting faulty cells across 100MW solar park." },
            ].map((project, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-3xl overflow-hidden bg-background border border-border hover:border-primary/50 transition-colors"
              >
                <div className="aspect-video overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-6 text-sm">{project.desc}</p>
                  <Button variant="link" className="p-0 h-auto text-primary hover:text-white" data-testid={`btn-case-study-${i}`}>
                    View Case Study <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CTA Section */}
      <section className="py-32 relative overflow-hidden bg-background border-t border-border">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Ready to Start Your <br/>
            <span className="text-primary text-glow">Drone Journey?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Whether you want to build a career in aerospace or need enterprise drone solutions, we have the expertise to elevate your goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/training">
              <Button size="lg" className="w-full sm:w-auto h-14 px-8 rounded-full text-base font-semibold shadow-[0_0_20px_rgba(0,102,255,0.4)]" data-testid="btn-cta-enroll">
                Enroll Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 rounded-full text-base font-semibold border-white/20 hover:bg-white/5" data-testid="btn-cta-talk">
                Talk to Expert
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
