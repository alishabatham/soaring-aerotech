import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ChevronRight, ArrowRight, ShieldCheck, GraduationCap, Wrench, Lightbulb, Factory, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);
  return <div ref={ref}>{count}{suffix}</div>;
}

const pillars = [
  { num: "01", tag: "TRAIN", title: "Skill Development", icon: <GraduationCap className="w-8 h-8" />, points: ["DGCA Certified RPTO", "8 Specialized Programs", "RPC Certification"], link: "/training" },
  { num: "02", tag: "SOLVE", title: "Drone Services",    icon: <Wrench className="w-8 h-8" />,        points: ["Survey & Mapping", "AI Surveillance", "Solar Inspection"],      link: "/services" },
  { num: "03", tag: "INNOVATE", title: "R&D",            icon: <Lightbulb className="w-8 h-8" />,    points: ["Disaster UAVs", "AI/ML Systems", "Payload Engineering"],         link: "/innovation-lab" },
  { num: "04", tag: "BUILD", title: "Manufacturing",     icon: <Factory className="w-8 h-8" />,       points: ["50,000 sq ft Facility", "Defence Drones", "Logistics UAVs"],    link: "/innovation-lab" },
];

const stats = [
  { target: 500, suffix: "+", label: "Pilots Trained" },
  { target: 8,   suffix: "+", label: "Programs" },
  { target: 100, suffix: "+", label: "Missions" },
  { target: 50,  suffix: "K sqft", label: "Manufacturing" },
];

const flowSteps = [
  { label: "TRAIN",        sub: "DGCA Pilots" },
  { label: "CERTIFY",      sub: "RPC License" },
  { label: "SERVE",        sub: "B2B Projects" },
  { label: "MANUFACTURE",  sub: "Indigenous UAVs" },
  { label: "DEFEND",       sub: "Defence Grade" },
];

const clients = ["Government", "Defence & Police", "Smart Cities", "Solar Companies", "Agriculture", "Infrastructure", "Research Labs", "Startups"];

const testimonials = [
  { name: "Rahul Verma",   role: "DGCA Certified Pilot",        text: "Cleared RPC in first attempt. Now flying commercially full-time.", span: "md:col-span-2" },
  { name: "Sneha Patil",   role: "Agricultural Drone Operator", text: "Connected my farming background with drone technology.",           span: "" },
  { name: "Amit Kumar",    role: "Engineering Graduate",        text: "Real defence drone hardware access — nowhere else in MP.",         span: "" },
  { name: "Priya Desai",   role: "GIS Analyst",                 text: "The mapping & GIS course gave me a career shift I didn't expect.", span: "md:col-span-2" },
];

export default function Home() {
  return (
    <main className="min-h-screen">

      {/* ── Hero ─────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-[#0D1B2A]">
        <div className="absolute inset-0">
          <img src="/images/hero-bg.png" alt="" className="w-full h-full object-cover opacity-500 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A] via-[#0D1B2A]/80 to-transparent" />
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.4) 1px,transparent 20px),linear-gradient(90deg,rgba(255,255,255,.4) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#F5F4F0] z-10" style={{ clipPath: "polygon(0 100%,100% 100%,100% 0)" }} />

        <div className="container mx-auto px-4 md:px-6 relative z-10 py-20">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/15 border border-primary/25 text-primary font-mono text-xs mb-8 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> Central India · Drone Innovation Ecosystem
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-6xl md:text-8xl text-white leading-[0.92] mb-8">
              We Build<br /><span className="text-primary">the Drone</span><br />Industry.
            </motion.h1>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex flex-wrap gap-2 mb-10">
              {["DGCA Training", "Drone Services", "R&D", "UAV Manufacturing"].map((t, i) => (
                <span key={i} className="px-4 py-1.5 rounded-full border border-white/15 text-white/55 text-sm font-medium">{t}</span>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28 }} className="flex flex-wrap gap-4">
              <Link href="/training">
                <Button size="lg" className="h-14 px-8 rounded-full text-base font-bold group">
                  Explore Programs <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="h-14 px-8 rounded-full text-base font-semibold border-white/20 text-white hover:bg-white/10">
                  Partner With Us
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 text-white/25 flex flex-col items-center">
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </motion.div>
      </section>

      {/* ── Trust bar ────────────────────────────── */}
      <section className="py-8 bg-white border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { icon: <ShieldCheck className="w-3.5 h-3.5" />, label: "DGCA Approved RPTO" },
              { label: "🚀 Startup India" }, { label: "🏭 MSME Registered" },
              { label: "🎓 AIC Prestige" }, { label: "🏗️ 50,000 sq ft Manufacturing" },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border text-xs font-semibold text-foreground/50 tracking-wide">
                {item.icon}{item.label}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────── */}
      <section className="py-20 bg-[#F5F4F0]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
            {stats.map((s, i) => (
              <div key={i} className="bg-[#F5F4F0] text-center py-14 px-4">
                <div className="font-display text-5xl md:text-6xl text-foreground mb-2">
                  <Counter target={s.target} suffix={s.suffix} />
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4 Pillars — flip cards ───────────────── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12">
            <div className="section-label">4 PILLARS</div>
            <h2 className="font-display text-4xl md:text-5xl text-foreground">What We Do</h2>
            <p className="text-muted-foreground mt-2 text-sm">Hover each card to explore</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flip-card h-64 cursor-pointer">
                <div className="flip-card-inner rounded-2xl shadow-sm border border-border">
                  {/* Front */}
                  <div className="flip-card-front rounded-2xl bg-[#F5F4F0] flex flex-col justify-between p-7">
                    <div className="flex items-start justify-between">
                      <span className="text-foreground/10 font-display text-5xl leading-none">{p.num}</span>
                      <span className="text-xs font-bold font-mono text-primary bg-primary/8 border border-primary/20 px-2.5 py-1 rounded-full">{p.tag}</span>
                    </div>
                    <div>
                      <div className="text-foreground/30 mb-3">{p.icon}</div>
                      <h3 className="font-display text-xl text-foreground">{p.title}</h3>
                    </div>
                  </div>
                  {/* Back */}
                  <div className="flip-card-back rounded-2xl bg-[#0D1B2A] flex flex-col justify-between p-7">
                    <div>
                      <span className="text-xs font-bold font-mono text-primary/70 uppercase tracking-widest">{p.tag}</span>
                      <h3 className="font-display text-lg text-white mt-2 mb-5">{p.title}</h3>
                      <ul className="space-y-2">
                        {p.points.map((pt, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-white/65">
                            <span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />{pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link href={p.link} className="inline-flex items-center gap-1.5 text-primary text-sm font-bold">
                      Explore <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ecosystem Flowchart ───────────────────── */}
      <section className="py-24 bg-[#0D1B2A] overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12">
            <div className="section-label" style={{ color: "rgba(255,255,255,0.3)" }}>THE PIPELINE</div>
            <h2 className="font-display text-4xl md:text-5xl text-white">Full-Cycle Ecosystem</h2>
          </div>
          <div className="hidden md:flex items-stretch gap-1">
            {flowSteps.map((step, i) => (
              <div key={i} className="flex items-center flex-1 min-w-0">
                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className="flex-1 border border-white/10 rounded-2xl p-5 text-center hover:border-primary/40 hover:bg-white/5 transition-all">
                  <div className="font-display text-xs font-black uppercase tracking-widest text-white/50 mb-1">{step.label}</div>
                  <div className="text-white/30 text-xs">{step.sub}</div>
                </motion.div>
                {i < flowSteps.length - 1 && (
                  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.12 + 0.25 }} className="w-7 shrink-0 flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-white/15" />
                  </motion.div>
                )}
              </div>
            ))}
          </div>
          <div className="md:hidden space-y-2">
            {flowSteps.map((step, i) => (
              <div key={i}>
                <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="border border-white/10 rounded-xl p-4 flex items-center justify-between">
                  <span className="font-display text-sm text-white/60 uppercase tracking-widest">{step.label}</span>
                  <span className="text-white/30 text-xs">{step.sub}</span>
                </motion.div>
                {i < flowSteps.length - 1 && <div className="flex justify-center py-1"><ArrowDown className="w-4 h-4 text-white/15" /></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who we serve ─────────────────────────── */}
      <section className="py-20 bg-[#F5F4F0] border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-label mb-8">WHO WE SERVE</div>
          <div className="flex flex-wrap gap-3">
            {clients.map((c, i) => (
              <motion.span key={i} initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="px-5 py-2.5 rounded-full bg-white border border-border text-sm font-semibold text-foreground hover:border-foreground/30 transition-colors cursor-default">
                {c}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-label mb-12">WHAT PEOPLE SAY</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`${t.span} bg-[#F5F4F0] rounded-2xl p-8 border border-border relative overflow-hidden group hover:border-foreground/20 transition-colors`}>
                <div className="absolute top-4 right-6 font-display text-7xl text-foreground/5 leading-none select-none">"</div>
                <p className="text-foreground font-medium mb-6 leading-relaxed relative z-10">{t.text}</p>
                <div className="font-bold text-sm text-foreground">{t.name}</div>
                <div className="text-xs text-muted-foreground mt-1">{t.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <section className="py-20 bg-[#0D1B2A]">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 2px 2px,rgba(255,255,255,1) 1px,transparent 0)", backgroundSize: "28px 28px" }} />
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <h2 className="font-display text-4xl md:text-5xl text-white">Ready to Join<br /><span className="text-primary">India's Drone</span><br />Revolution?</h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/training"><Button size="lg" className="h-14 px-8 rounded-full text-base font-bold">Enroll Now</Button></Link>
              <Link href="/contact"><Button size="lg" variant="outline" className="h-14 px-8 rounded-full text-base font-semibold border-white/20 text-white hover:bg-white/10">Talk to Expert</Button></Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
