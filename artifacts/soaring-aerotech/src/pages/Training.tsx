import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, CheckCircle2, ShieldCheck, Clock, BookOpen, Users, Building2, Cpu, Map, Tractor, Brain, Wrench, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Training() {
  const programs = [
    {
      tag: "DGCA CERTIFIED",
      title: "Drone Flying Training — Remote Pilot Certificate (RPC)",
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      duration: "5 Days (Basic) / Extended (Advanced)",
      level: "Foundation",
      desc: "The official DGCA certification required to commercially fly drones in India. Covers aviation regulations, meteorology, NPNT, Digital Sky platform, simulator training, and hands-on practical flight operations.",
      topics: ["Aviation Regulations & Airspace", "Meteorology & Flight Principles", "NPNT & Digital Sky Platform", "Drone Maintenance & Safety", "Simulator Training", "Practical Flight (Dual Control)"],
      featured: true
    },
    {
      tag: "SKILL COURSE",
      title: "Drone Mapping & Surveying",
      icon: <Map className="w-6 h-6 text-primary" />,
      duration: "3–5 Days",
      level: "Intermediate",
      desc: "Master aerial land survey, 2D/3D mapping, and topographic data collection using industry-standard tools like Pix4D and DroneDeploy with RTK/PPK precision.",
      topics: ["Aerial Land Survey", "2D Orthomosaic Mapping", "3D Model Generation", "RTK/PPK GNSS Workflows", "Pix4D & DroneDeploy", "Client Deliverables"],
      featured: false
    },
    {
      tag: "SKILL COURSE",
      title: "GIS & Geospatial Analysis",
      icon: <CheckCircle2 className="w-6 h-6 text-primary" />,
      duration: "3–5 Days",
      level: "Intermediate",
      desc: "Drone-based geospatial data collection and analysis for land records, urban planning, infrastructure, and smart city applications using GIS platforms.",
      topics: ["GIS Fundamentals", "Geospatial Data Collection", "Land Record Mapping", "Urban Planning Datasets", "ArcGIS / QGIS Workflows", "Government Applications"],
      featured: false
    },
    {
      tag: "SKILL COURSE",
      title: "Thermal & Multispectral Analysis",
      icon: <Cpu className="w-6 h-6 text-primary" />,
      duration: "3–4 Days",
      level: "Intermediate",
      desc: "Operate thermal and multispectral sensors for solar inspection, crop health monitoring, power substation audits, and industrial thermal analysis.",
      topics: ["Thermal Camera Operation", "Multispectral Imaging", "NDVI / NDWI Analysis", "Solar Panel Hotspot Detection", "Power Substation Inspection", "Precision Agriculture"],
      featured: false
    },
    {
      tag: "ADVANCED",
      title: "AI/ML for Drones",
      icon: <Brain className="w-6 h-6 text-primary" />,
      duration: "5–7 Days",
      level: "Advanced",
      desc: "Apply artificial intelligence and machine learning to UAV operations — computer vision, automated defect detection, object tracking, and intelligent mission planning.",
      topics: ["Computer Vision for UAVs", "Object Detection Models", "Automated Inspection AI", "Autonomous Mission Planning", "Edge Computing on Drones", "AI Surveillance Applications"],
      featured: false
    },
    {
      tag: "SKILL COURSE",
      title: "Drone Assembly & Maintenance",
      icon: <Wrench className="w-6 h-6 text-primary" />,
      duration: "3–5 Days",
      level: "Beginner–Intermediate",
      desc: "Hands-on training in drone frame assembly, flight controller configuration, ESC calibration, battery management, and field maintenance protocols.",
      topics: ["Frame Design & Assembly", "Flight Controller Setup", "ESC & Motor Calibration", "Battery Management", "Pre-flight Checks", "Field Troubleshooting"],
      featured: false
    },
    {
      tag: "SKILL COURSE",
      title: "Precision Agriculture",
      icon: <Tractor className="w-6 h-6 text-primary" />,
      duration: "3–4 Days",
      level: "Intermediate",
      desc: "Drone-based precision farming — crop health assessment, variable rate spraying, irrigation mapping, and yield estimation for modern agriculture operations.",
      topics: ["Multispectral Crop Scanning", "NDVI-Based Health Mapping", "Drone Spraying Operations", "Irrigation Analysis", "Yield Estimation", "Farm Report Generation"],
      featured: false
    },
    {
      tag: "ENTREPRENEURSHIP",
      title: "Drone Entrepreneurship",
      icon: <TrendingUp className="w-6 h-6 text-primary" />,
      duration: "2–3 Days",
      level: "All Levels",
      desc: "Build a drone business from scratch — DGCA compliance, business models, client acquisition, pricing drone services, and building a sustainable UAV enterprise in India.",
      topics: ["DGCA Business Compliance", "Drone Service Business Models", "Client Acquisition Strategy", "Pricing & Proposals", "Government Tenders", "Scaling Your Drone Business"],
      featured: false
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-28 bg-[#0D1B2A] relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-sm mb-6 uppercase"
          >
            <ShieldCheck className="w-4 h-4" /> DGCA APPROVED RPTO — 8+ PROGRAMS
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white mb-6"
          >
            India's Most Comprehensive<br className="hidden md:block"/>
            <span className="text-primary">Drone Training Ecosystem</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/70 max-w-3xl mx-auto mb-10"
          >
            From DGCA certification to AI/ML for drones — Soaring Aerotech offers 8 specialized programs covering every aspect of the modern drone economy.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Button size="lg" className="rounded-full h-14 px-8 text-base font-semibold" onClick={() => document.getElementById('enroll')?.scrollIntoView({ behavior: 'smooth' })}>
              Apply for Next Batch <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-24 bg-[#F5F4F0]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16">
            <div className="section-label">ALL PROGRAMS</div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">8 Training Programs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">Each program is designed to create industry-ready professionals — not just certified pilots, but skilled drone entrepreneurs and technical specialists.</p>
          </div>

          {/* Featured DGCA Course */}
          {programs.filter(p => p.featured).map((program, i) => (
            <div key={i} className="mb-8 p-8 md:p-12 rounded-3xl bg-white border-l-4 border-primary shadow-sm relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="lg:col-span-1">
                  <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-mono text-sm font-bold mb-4">{program.tag}</div>
                  <div className="flex items-center gap-3 mb-3">
                    {program.icon}
                    <h3 className="text-2xl font-bold text-foreground">{program.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">{program.desc}</p>
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" /> {program.duration}
                    </div>
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-bold">{program.level}</div>
                  </div>
                  <Button className="w-full h-12 rounded-xl text-base" onClick={() => document.getElementById('enroll')?.scrollIntoView({ behavior: 'smooth' })}>
                    Apply Now
                  </Button>
                </div>
                <div className="lg:col-span-2">
                  <div className="text-sm font-mono text-primary mb-4 uppercase font-bold">Curriculum Covers</div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {program.topics.map((topic, j) => (
                      <div key={j} className="flex items-start gap-3 p-4 rounded-xl bg-[#F5F4F0] border border-border">
                        <BookOpen className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground/80 font-medium">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Other Programs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.filter(p => !p.featured).map((program, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="p-8 rounded-3xl bg-white border border-border shadow-sm flex flex-col group hover:border-primary/30 transition-colors"
              >
                <div className="inline-block px-3 py-1 rounded-full bg-primary/5 text-primary font-mono text-xs font-bold mb-4">{program.tag}</div>
                <div className="flex items-center gap-3 mb-3">
                  {program.icon}
                  <h3 className="text-lg font-bold text-foreground">{program.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-1">{program.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {program.topics.slice(0, 3).map((topic, j) => (
                    <span key={j} className="px-2 py-1 rounded-lg bg-[#F5F4F0] text-xs text-foreground/70 border border-border">{topic}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                  <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="w-3 h-3" /> {program.duration}</span>
                  <button className="inline-flex items-center text-primary font-semibold text-sm" onClick={() => document.getElementById('enroll')?.scrollIntoView({ behavior: 'smooth' })}>
                    Enquire <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Training */}
      <section className="py-24 bg-white border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label">INSTITUTIONAL & CORPORATE</div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Training for Organizations</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Soaring Aerotech designs and delivers customized drone training programs for government agencies, defence organizations, police forces, and corporate institutions — fully DGCA-aligned for operational deployment.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {["Government Departments", "Army & Defence", "Police Forces", "Colleges & Universities", "Corporate Teams", "Smart City Projects"].map((org, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <ChevronRight className="w-4 h-4 text-primary shrink-0" /> {org}
                  </div>
                ))}
              </div>
              <Link href="/contact">
                <Button size="lg" className="rounded-full h-14 px-8 text-base font-semibold">
                  Request Corporate Proposal
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                { icon: <Users className="w-5 h-5 text-primary" />, title: "Custom Batch Size", desc: "From 5-person specialized squads to 100+ participant government programs." },
                { icon: <Building2 className="w-5 h-5 text-primary" />, title: "On-Site or At Our Facility", desc: "We come to your campus, or you train at our Madhya Pradesh facility." },
                { icon: <ShieldCheck className="w-5 h-5 text-primary" />, title: "DGCA-Compliant Certification", desc: "All programs designed to meet government certification requirements." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-6 rounded-2xl bg-[#F5F4F0] border border-border">
                  <div className="shrink-0 mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-[#F5F4F0]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="section-label justify-center">HOW IT WORKS</div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Training Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: "01", title: "Registration", desc: "Documentation, medical clearance & DGCA portal enrollment" },
              { step: "02", title: "Ground School", desc: "Theory — regulations, NPNT, Digital Sky, meteorology" },
              { step: "03", title: "Simulator", desc: "Virtual flight mechanics & emergency procedures" },
              { step: "04", title: "Practical Flight", desc: "Hands-on dual-control flying with expert instructors" },
              { step: "05", title: "Certification", desc: "DGCA evaluation & Remote Pilot Certificate (RPC)" },
            ].map((step, i) => (
              <div key={i} className="relative p-6 rounded-2xl bg-white shadow-sm border border-border text-center">
                <div className="text-5xl font-black text-foreground/10 mb-4 font-mono">{step.step}</div>
                <h4 className="text-lg font-bold text-foreground mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
                {i < 4 && <ChevronRight className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-primary z-10" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="enroll" className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-2xl mx-auto bg-white shadow-md rounded-2xl p-8 md:p-12 border-t-4 border-primary border border-border">
            <h2 className="text-3xl font-bold text-foreground mb-2 text-center">Enrollment Enquiry</h2>
            <p className="text-muted-foreground text-center mb-8">Leave your details — our training coordinator will contact you within 24 hours.</p>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Full Name</label>
                  <input type="text" className="w-full bg-[#F5F4F0] border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="Your full name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Phone Number</label>
                  <input type="tel" className="w-full bg-[#F5F4F0] border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="+91 98765 43210" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email Address</label>
                <input type="email" className="w-full bg-[#F5F4F0] border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="you@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Interested Program</label>
                <select className="w-full bg-[#F5F4F0] border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors appearance-none">
                  <option value="">Select a program...</option>
                  <option>Drone Flying Training — RPC (Basic)</option>
                  <option>Drone Flying Training — RPC (Advanced)</option>
                  <option>Drone Mapping & Surveying</option>
                  <option>GIS & Geospatial Analysis</option>
                  <option>Thermal & Multispectral Analysis</option>
                  <option>AI/ML for Drones</option>
                  <option>Drone Assembly & Maintenance</option>
                  <option>Precision Agriculture</option>
                  <option>Drone Entrepreneurship</option>
                  <option>Corporate / Institutional Training</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Organization / Background (Optional)</label>
                <textarea rows={4} className="w-full bg-[#F5F4F0] border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Tell us about your background or your organization's requirements..."></textarea>
              </div>
              <Button type="submit" className="w-full h-14 rounded-xl text-lg font-bold">
                Submit Enquiry
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
