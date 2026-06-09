import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, ShieldCheck, Clock, Map, Cpu, Brain, Wrench, Tractor, TrendingUp, Target, MapPin, Phone, FileText, User, Calendar, IndianRupee, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const programs = [
  { tag: "SKILL COURSE",     title: "Mapping & Surveying",     icon: <Map className="w-7 h-7" />,         duration: "3–5 Days", topics: ["Aerial Land Survey", "2D/3D Mapping", "RTK/PPK GNSS", "Pix4D / DroneDeploy", "Client Deliverables", "GIS Outputs"] },
  { tag: "SKILL COURSE",     title: "GIS & Geospatial",        icon: <Target className="w-7 h-7" />,      duration: "3–5 Days", topics: ["GIS Fundamentals", "Land Record Mapping", "Urban Planning", "ArcGIS / QGIS", "Spatial Analysis", "Gov Applications"] },
  { tag: "SKILL COURSE",     title: "Thermal & Multispectral", icon: <Cpu className="w-7 h-7" />,         duration: "3–4 Days", topics: ["Thermal Camera Ops", "NDVI / NDWI", "Solar Inspection", "Power Line Audit", "Crop Imaging", "Report Generation"] },
  { tag: "ADVANCED",         title: "AI/ML for Drones",        icon: <Brain className="w-7 h-7" />,       duration: "5–7 Days", topics: ["Computer Vision", "Object Detection", "Autonomous Flight", "Edge Computing", "Mission AI", "Surveillance AI"] },
  { tag: "SKILL COURSE",     title: "Precision Agriculture",   icon: <Tractor className="w-7 h-7" />,    duration: "3–4 Days", topics: ["Crop Health Mapping", "Precision Spraying", "Irrigation Analysis", "Yield Estimation", "NDVI Reports", "Farm Ops"] },
  { tag: "SKILL COURSE",     title: "Assembly & Maintenance",  icon: <Wrench className="w-7 h-7" />,      duration: "3–5 Days", topics: ["Frame Assembly", "Flight Controller", "ESC Calibration", "Battery Management", "Pre-flight Checks", "Field Repair"] },
  { tag: "ENTREPRENEURSHIP", title: "Drone Entrepreneurship",  icon: <TrendingUp className="w-7 h-7" />, duration: "2–3 Days", topics: ["DGCA Compliance", "Business Models", "Client Acquisition", "Pricing", "Government Tenders", "Scaling"] },
];

const steps = [
  { n: "01", title: "Registration",    desc: "Submit documents & pay fees via online banking / RTGS" },
  { n: "02", title: "Theory Classes",  desc: "2 days — online or offline, UAS training summary provided" },
  { n: "03", title: "Theory Test",     desc: "Conducted after ground school session" },
  { n: "04", title: "Simulator & Assembly", desc: "3 days at flying site — Indore City SAPL" },
  { n: "05", title: "RPC Issued",      desc: "10-year certificate issued by Soaring Aerotech" },
];

const docs = [
  { icon: <FileText className="w-4 h-4" />, label: "Aadhar / Voter Card / Driving Licence / Passport (Original)" },
  { icon: <FileText className="w-4 h-4" />, label: "10th Certificate or Marksheet (Copy)" },
  { icon: <FileText className="w-4 h-4" />, label: "Medical Certificate of Fitness — from certified MBBS Doctor" },
  { icon: <User className="w-4 h-4" />,     label: "4 Passport-sized photos (white background)" },
];

export default function Training() {
  return (
    <main className="min-h-screen pt-20">

      {/* ── Hero ─────────────────────────────────── */}
      <section className="py-24 bg-[#0D1B2A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.4) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.4) 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-xs mb-5 uppercase tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5" /> DGCA Approved RPTO · Indore, MP
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-5xl md:text-7xl text-white mb-4">
            DGCA Drone Training<br /><span className="text-primary">Get Certified.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }} className="text-white/45 max-w-md mx-auto mb-8">
            Small Category · Rotorcraft · VLOS — 5-day program, RPC valid for 10 years.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.26 }} className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" className="rounded-full h-13 px-8 text-base font-bold" onClick={() => document.getElementById("enroll")?.scrollIntoView({ behavior: "smooth" })}>
              Apply Now <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
            <a href="tel:+917869918736">
              <Button size="lg" variant="outline" className="rounded-full h-13 px-8 text-base font-semibold border-white/20 text-white hover:bg-white/10">
                <Phone className="w-4 h-4 mr-2" /> +91 78699 18736
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Pricing cards ────────────────────────── */}
      <section className="py-20 bg-white border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-label">DGCA CERTIFIED PROGRAM</div>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-8">Remote Pilot Certificate (RPC)</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mb-10">
            {/* Small Class */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border-2 border-primary overflow-hidden shadow-sm">
              <div className="bg-[#0D1B2A] px-6 py-5 border-b-2 border-primary">
                <span className="text-xs font-bold font-mono text-primary uppercase tracking-widest">Small Category</span>
                <h3 className="font-display text-2xl text-white mt-1">Small Class — Rotorcraft</h3>
                <p className="text-white/40 text-xs mt-1">VLOS · Class: Small · Category: Rotorcraft</p>
              </div>
              <div className="p-6 bg-[#F5F4F0]">
                <div className="flex items-end gap-1 mb-1">
                  <span className="font-display text-4xl text-foreground">₹25,000</span>
                  <span className="text-sm text-muted-foreground mb-1">+ GST / candidate</span>
                </div>
                <p className="text-xs text-muted-foreground mb-5">Fooding & accommodation extra</p>
                <Button className="w-full rounded-xl h-11 font-bold" onClick={() => document.getElementById("enroll")?.scrollIntoView({ behavior: "smooth" })}>
                  Enquire — Small Class
                </Button>
              </div>
            </motion.div>

            {/* Multirotor */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="rounded-2xl border border-border overflow-hidden shadow-sm">
              <div className="bg-[#0D1B2A] px-6 py-5 border-b border-border">
                <span className="text-xs font-bold font-mono text-white/40 uppercase tracking-widest">Advanced</span>
                <h3 className="font-display text-2xl text-white mt-1">Multirotor — DGCA</h3>
                <p className="text-white/40 text-xs mt-1">DGCA-Certified Multirotor Training</p>
              </div>
              <div className="p-6 bg-[#F5F4F0]">
                <div className="flex items-end gap-1 mb-1">
                  <span className="font-display text-4xl text-foreground">₹35,000</span>
                  <span className="text-sm text-muted-foreground mb-1">+ GST / candidate</span>
                </div>
                <p className="text-xs text-muted-foreground mb-5">Fooding & accommodation extra</p>
                <Button variant="outline" className="w-full rounded-xl h-11 font-bold" onClick={() => document.getElementById("enroll")?.scrollIntoView({ behavior: "smooth" })}>
                  Enquire — Multirotor
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Quick facts */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl">
            {[
              { icon: <Clock className="w-4 h-4 text-primary" />,       label: "Duration",    value: "5 Days Total" },
              { icon: <MapPin className="w-4 h-4 text-primary" />,      label: "Location",    value: "Indore City, SAPL" },
              { icon: <BadgeCheck className="w-4 h-4 text-primary" />,  label: "RPC Validity", value: "10 Years" },
              { icon: <Calendar className="w-4 h-4 text-primary" />,    label: "Eligibility", value: "18–65 yrs, 10th Pass" },
            ].map((f, i) => (
              <div key={i} className="bg-[#F5F4F0] border border-border rounded-xl p-4 flex gap-3 items-start">
                <div className="mt-0.5 shrink-0">{f.icon}</div>
                <div>
                  <div className="text-xs text-muted-foreground">{f.label}</div>
                  <div className="font-bold text-sm text-foreground mt-0.5">{f.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Course structure ─────────────────────── */}
      <section className="py-20 bg-[#F5F4F0] border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-label mb-8">COURSE STRUCTURE</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white border border-border rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-display font-bold text-primary">1</div>
                <div>
                  <div className="font-bold text-foreground">Theory Classes</div>
                  <div className="text-xs text-muted-foreground font-mono">02 DAYS</div>
                </div>
              </div>
              <ul className="space-y-2">
                {["Online or Offline mode available", "Aviation regulations & NPNT", "Meteorology & airspace rules", "UAS Training Summary provided", "Theory test conducted after session"].map((t, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground/70">
                    <span className="w-1 h-1 rounded-full bg-primary shrink-0" />{t}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white border border-border rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-display font-bold text-primary">2</div>
                <div>
                  <div className="font-bold text-foreground">Simulator, Assembly & Practical</div>
                  <div className="text-xs text-muted-foreground font-mono">03 DAYS · AT FLYING SITE</div>
                </div>
              </div>
              <ul className="space-y-2">
                {["Simulator training & drills", "Drone assembly & components", "Practical flying — VLOS", "Dual-control with instructors", "Final evaluation by DGCA norms"].map((t, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground/70">
                    <span className="w-1 h-1 rounded-full bg-primary shrink-0" />{t}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Process timeline ─────────────────────── */}
      <section className="py-20 bg-white border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-label mb-10">HOW IT WORKS</div>
          <div className="relative">
            <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-px bg-border z-0" />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
              {steps.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-[#F5F4F0] border-2 border-border flex items-center justify-center font-display text-sm text-foreground mb-4 hover:border-primary hover:text-primary transition-colors">{s.n}</div>
                  <div className="font-bold text-sm text-foreground mb-1">{s.title}</div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Eligibility & Docs ───────────────────── */}
      <section className="py-20 bg-[#F5F4F0] border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-4xl">

            {/* Eligibility */}
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl border border-border p-7">
              <div className="section-label mb-5">ELIGIBILITY</div>
              <div className="space-y-4">
                {[
                  { icon: <User className="w-4 h-4 text-primary" />,         label: "Age",         value: "18 to 65 years" },
                  { icon: <FileText className="w-4 h-4 text-primary" />,      label: "Education",   value: "10th Pass (minimum)" },
                  { icon: <BadgeCheck className="w-4 h-4 text-primary" />,    label: "Medical",     value: "Fitness certificate from MBBS Doctor" },
                  { icon: <IndianRupee className="w-4 h-4 text-primary" />,   label: "Payment",     value: "Full fees before registration date" },
                ].map((e, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="w-8 h-8 rounded-lg bg-primary/8 border border-primary/15 flex items-center justify-center shrink-0">{e.icon}</div>
                    <div>
                      <div className="text-xs text-muted-foreground">{e.label}</div>
                      <div className="font-semibold text-sm text-foreground mt-0.5">{e.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Documents */}
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white rounded-2xl border border-border p-7">
              <div className="section-label mb-5">DOCUMENTS REQUIRED</div>
              <ul className="space-y-3">
                {docs.map((d, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-[#F5F4F0] border border-border flex items-center justify-center shrink-0 text-foreground/40 mt-0.5">{d.icon}</div>
                    <span className="text-sm text-foreground/75 leading-snug">{d.label}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 pt-5 border-t border-border">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">Payment Mode:</span> Online Banking or RTGS. Training certificate issued only after receipt of payment.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Other programs ────────────────────────── */}
      <section className="py-20 bg-white border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-10">
            <div className="section-label">MORE PROGRAMS</div>
            <h2 className="font-display text-3xl md:text-4xl text-foreground">Skill Development Courses</h2>
            <p className="text-muted-foreground mt-2 text-sm">Hover a card to see the curriculum</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {programs.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} className="reveal-card relative h-60 rounded-2xl overflow-hidden cursor-pointer border border-border shadow-sm">
                <div className="absolute inset-0 bg-[#F5F4F0] flex flex-col justify-between p-6">
                  <div className="flex items-start justify-between">
                    <div className="text-foreground/35">{p.icon}</div>
                    <span className="text-xs font-bold font-mono text-muted-foreground uppercase tracking-wider">{p.tag}</span>
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-foreground leading-tight">{p.title}</h3>
                    <div className="flex items-center gap-1.5 mt-2 text-muted-foreground text-xs"><Clock className="w-3 h-3" />{p.duration}</div>
                  </div>
                </div>
                <div className="reveal-overlay absolute inset-0 bg-[#0D1B2A] flex flex-col justify-between p-6">
                  <div>
                    <h3 className="font-display text-base text-white mb-4">{p.title}</h3>
                    <ul className="space-y-1.5">
                      {p.topics.map((t, j) => (
                        <li key={j} className="flex items-center gap-2 text-xs text-white/60">
                          <span className="w-1 h-1 rounded-full bg-primary shrink-0" />{t}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="text-primary text-xs font-bold font-mono flex items-center gap-1" onClick={() => document.getElementById("enroll")?.scrollIntoView({ behavior: "smooth" })}>
                    ENQUIRE <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Corporate ────────────────────────────── */}
      <section className="py-20 bg-[#F5F4F0] border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-label">CORPORATE & INSTITUTIONAL</div>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">Training for Organizations</h2>
              <p className="text-muted-foreground mb-6 text-sm">Custom DGCA-aligned batch programs for government bodies, defence, police, and institutions — on-site or at our Indore facility.</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {["Government","Army & Defence","Police Forces","Universities","Smart Cities","Corporates"].map((o, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-full bg-white border border-border text-sm font-medium">{o}</span>
                ))}
              </div>
              <Link href="/contact"><Button className="rounded-full px-8 h-12 font-bold">Request Corporate Proposal</Button></Link>
            </div>
            <div className="space-y-3">
              {[
                { n: "01", title: "Custom Batch Size",       desc: "5 to 100+ participants per batch" },
                { n: "02", title: "On-Site or Our Facility", desc: "We come to you, or train at Indore City SAPL" },
                { n: "03", title: "DGCA Compliant",          desc: "All programs meet government certification standards" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-5 bg-white rounded-xl border border-border items-start">
                  <span className="font-display text-2xl text-border leading-none mt-0.5">{item.n}</span>
                  <div><div className="font-bold text-sm text-foreground mb-0.5">{item.title}</div><div className="text-xs text-muted-foreground">{item.desc}</div></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Enroll form ──────────────────────────── */}
      <section id="enroll" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-primary border border-border">
              <h2 className="font-display text-2xl text-foreground mb-1 text-center">Enrollment Enquiry</h2>
              <p className="text-xs text-muted-foreground text-center mb-7">Our training coordinator will contact you within 24 hours.</p>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div><label className="text-xs font-semibold text-foreground block mb-1.5">Full Name</label><input type="text" className="w-full bg-[#F5F4F0] border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary" placeholder="Your name" /></div>
                  <div><label className="text-xs font-semibold text-foreground block mb-1.5">Phone</label><input type="tel" className="w-full bg-[#F5F4F0] border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary" placeholder="+91 78699 18736" /></div>
                </div>
                <div><label className="text-xs font-semibold text-foreground block mb-1.5">Email</label><input type="email" className="w-full bg-[#F5F4F0] border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary" placeholder="you@example.com" /></div>
                <div><label className="text-xs font-semibold text-foreground block mb-1.5">Program</label>
                  <select className="w-full bg-[#F5F4F0] border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary appearance-none">
                    <option value="">Select a program...</option>
                    <option>RPC — Small Class Rotorcraft (₹25,000 + GST)</option>
                    <option>RPC — Multirotor DGCA Certified (₹35,000 + GST)</option>
                    <option>Mapping & Surveying</option>
                    <option>GIS & Geospatial</option>
                    <option>Thermal & Multispectral</option>
                    <option>AI/ML for Drones</option>
                    <option>Precision Agriculture</option>
                    <option>Assembly & Maintenance</option>
                    <option>Drone Entrepreneurship</option>
                    <option>Corporate / Institutional Batch</option>
                  </select>
                </div>
                <div><label className="text-xs font-semibold text-foreground block mb-1.5">City / Location</label><input type="text" className="w-full bg-[#F5F4F0] border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary" placeholder="Your city" /></div>
                <Button type="submit" className="w-full h-12 rounded-xl text-base font-bold">Submit Enquiry</Button>
              </form>
              <div className="mt-6 pt-5 border-t border-border flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span>Or call us directly: <a href="tel:+917869918736" className="font-bold text-foreground hover:text-primary transition-colors">+91 78699 18736</a></span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
