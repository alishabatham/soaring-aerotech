import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, ShieldCheck, Clock, Map, Cpu, Brain, Wrench, Tractor, TrendingUp, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const programs = [
  {
    tag: "DGCA CERTIFIED",
    tagColor: "bg-primary/10 text-primary border-primary/20",
    title: "Drone Flying — RPC",
    icon: <ShieldCheck className="w-6 h-6 text-primary" />,
    duration: "5 Days / Extended",
    topics: ["Aviation Regulations", "NPNT & Digital Sky", "Meteorology", "Simulator Training", "Practical Flight", "RPC Certification"],
    featured: true,
  },
  {
    tag: "SKILL COURSE",
    tagColor: "bg-blue-50 text-blue-700 border-blue-200",
    title: "Mapping & Surveying",
    icon: <Map className="w-6 h-6 text-blue-600" />,
    duration: "3–5 Days",
    topics: ["Aerial Land Survey", "2D/3D Mapping", "RTK/PPK GNSS", "Pix4D & DroneDeploy"],
  },
  {
    tag: "SKILL COURSE",
    tagColor: "bg-blue-50 text-blue-700 border-blue-200",
    title: "GIS & Geospatial",
    icon: <Target className="w-6 h-6 text-blue-600" />,
    duration: "3–5 Days",
    topics: ["GIS Fundamentals", "Land Record Mapping", "Urban Planning Data", "ArcGIS / QGIS"],
  },
  {
    tag: "SKILL COURSE",
    tagColor: "bg-purple-50 text-purple-700 border-purple-200",
    title: "Thermal & Multispectral",
    icon: <Cpu className="w-6 h-6 text-purple-600" />,
    duration: "3–4 Days",
    topics: ["Thermal Camera Ops", "NDVI / NDWI Analysis", "Solar Inspection", "Power Line Audit"],
  },
  {
    tag: "ADVANCED",
    tagColor: "bg-orange-50 text-orange-700 border-orange-200",
    title: "AI/ML for Drones",
    icon: <Brain className="w-6 h-6 text-orange-600" />,
    duration: "5–7 Days",
    topics: ["Computer Vision", "Object Detection", "Autonomous Flight", "Edge Computing"],
  },
  {
    tag: "SKILL COURSE",
    tagColor: "bg-green-50 text-green-700 border-green-200",
    title: "Precision Agriculture",
    icon: <Tractor className="w-6 h-6 text-green-600" />,
    duration: "3–4 Days",
    topics: ["Crop Health Mapping", "Precision Spraying", "Irrigation Analysis", "Yield Estimation"],
  },
  {
    tag: "SKILL COURSE",
    tagColor: "bg-gray-100 text-gray-700 border-gray-200",
    title: "Assembly & Maintenance",
    icon: <Wrench className="w-6 h-6 text-gray-600" />,
    duration: "3–5 Days",
    topics: ["Frame Assembly", "Flight Controller Setup", "ESC Calibration", "Field Troubleshooting"],
  },
  {
    tag: "ENTREPRENEURSHIP",
    tagColor: "bg-yellow-50 text-yellow-700 border-yellow-200",
    title: "Drone Entrepreneurship",
    icon: <TrendingUp className="w-6 h-6 text-yellow-600" />,
    duration: "2–3 Days",
    topics: ["DGCA Compliance", "Business Models", "Client Acquisition", "Government Tenders"],
  },
];

export default function Training() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-24 bg-[#0D1B2A] relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-xs mb-5 uppercase tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5" /> DGCA APPROVED RPTO — 8 PROGRAMS
          </motion.div>
          <motion.h1 initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:0.1}} className="text-4xl md:text-6xl font-black text-white mb-4">
            Drone Training<br/><span className="text-primary">8 Specialized Programs</span>
          </motion.h1>
          <motion.p initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:0.2}} className="text-white/60 max-w-xl mx-auto mb-8">
            DGCA certification to AI/ML — every skill the drone industry needs.
          </motion.p>
          <Button size="lg" className="rounded-full h-13 px-8 text-base" onClick={()=>document.getElementById('enroll')?.scrollIntoView({behavior:'smooth'})}>
            Apply Now <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </section>

      {/* Programs */}
      <section className="py-24 bg-[#F5F4F0]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12">
            <div className="section-label">ALL PROGRAMS</div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">8 Training Programs</h2>
          </div>

          {/* Featured */}
          {programs.filter(p=>p.featured).map((p,i)=>(
            <div key={i} className="mb-6 p-8 rounded-2xl bg-white border-l-4 border-primary shadow-sm">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/3">
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold font-mono border mb-4 ${p.tagColor}`}>{p.tag}</div>
                  <div className="flex items-center gap-3 mb-3">{p.icon}<h3 className="text-2xl font-bold text-foreground">{p.title}</h3></div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6"><Clock className="w-4 h-4"/>{p.duration}</div>
                  <Button className="rounded-xl h-11 w-full md:w-auto" onClick={()=>document.getElementById('enroll')?.scrollIntoView({behavior:'smooth'})}>Apply Now</Button>
                </div>
                <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-3">
                  {p.topics.map((t,j)=>(
                    <div key={j} className="flex items-center gap-2 p-3 rounded-xl bg-[#F5F4F0] border border-border text-sm font-medium text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />{t}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Other programs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {programs.filter(p=>!p.featured).map((p,i)=>(
              <motion.div key={i} initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.07}} className="p-6 rounded-2xl bg-white border border-border shadow-sm hover:shadow-md transition-all flex flex-col group">
                <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold font-mono border mb-4 w-fit ${p.tagColor}`}>{p.tag}</div>
                <div className="flex items-center gap-2.5 mb-4">{p.icon}<h3 className="text-base font-bold text-foreground">{p.title}</h3></div>
                <ul className="space-y-2 flex-1 mb-5">
                  {p.topics.map((t,j)=>(
                    <li key={j} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="w-1 h-1 rounded-full bg-border shrink-0"/>{t}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="w-3 h-3"/>{p.duration}</span>
                  <button className="text-primary text-xs font-bold" onClick={()=>document.getElementById('enroll')?.scrollIntoView({behavior:'smooth'})}>Enquire →</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate */}
      <section className="py-20 bg-white border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-label">CORPORATE & INSTITUTIONAL</div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Training for Organizations</h2>
              <p className="text-muted-foreground mb-6">Custom DGCA-aligned programs for government agencies, defence, police, and institutions.</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {["Government","Army & Defence","Police Forces","Universities","Smart City Projects","Corporate Teams"].map((o,i)=>(
                  <span key={i} className="px-3 py-1.5 rounded-full bg-[#F5F4F0] border border-border text-sm font-medium text-foreground">{o}</span>
                ))}
              </div>
              <Link href="/contact">
                <Button className="rounded-full h-12 px-8">Request Corporate Proposal</Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                {title:"Custom Batch Size", desc:"5 to 100+ participants per program"},
                {title:"On-Site or Our Facility", desc:"We come to you, or train at our MP facility"},
                {title:"DGCA Compliant", desc:"All programs meet government certification standards"},
              ].map((item,i)=>(
                <div key={i} className="flex gap-4 p-5 rounded-xl bg-[#F5F4F0] border border-border">
                  <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2"/>
                  <div><div className="font-bold text-sm text-foreground mb-1">{item.title}</div><div className="text-sm text-muted-foreground">{item.desc}</div></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enroll */}
      <section id="enroll" className="py-24 bg-[#F5F4F0]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-xl mx-auto bg-white rounded-2xl p-8 shadow-sm border-t-4 border-primary border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-1 text-center">Enrollment Enquiry</h2>
            <p className="text-sm text-muted-foreground text-center mb-7">Our coordinator will contact you within 24 hours.</p>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div><label className="text-xs font-medium text-foreground block mb-1.5">Full Name</label><input type="text" className="w-full bg-[#F5F4F0] border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary" placeholder="Your name"/></div>
                <div><label className="text-xs font-medium text-foreground block mb-1.5">Phone</label><input type="tel" className="w-full bg-[#F5F4F0] border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary" placeholder="+91 98765 43210"/></div>
              </div>
              <div><label className="text-xs font-medium text-foreground block mb-1.5">Email</label><input type="email" className="w-full bg-[#F5F4F0] border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary" placeholder="you@example.com"/></div>
              <div><label className="text-xs font-medium text-foreground block mb-1.5">Program</label>
                <select className="w-full bg-[#F5F4F0] border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary appearance-none">
                  <option value="">Select a program...</option>
                  {["Drone Flying — RPC (Basic)","Drone Flying — RPC (Advanced)","Mapping & Surveying","GIS & Geospatial","Thermal & Multispectral","AI/ML for Drones","Assembly & Maintenance","Precision Agriculture","Drone Entrepreneurship","Corporate / Institutional"].map((o,i)=><option key={i}>{o}</option>)}
                </select>
              </div>
              <Button type="submit" className="w-full h-12 rounded-xl text-base font-bold">Submit Enquiry</Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
