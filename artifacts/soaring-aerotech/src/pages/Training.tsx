import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, CheckCircle2, ShieldCheck, Clock, MapPin, Award, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Training() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-secondary/10 via-transparent to-transparent" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white mb-6"
          >
            Become a Certified <br className="hidden md:block"/>
            <span className="text-primary text-glow">Drone Pilot</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10"
          >
            DGCA-approved training programs designed to build high-income careers in India's fastest-growing technology sector.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Button size="lg" className="rounded-full h-14 px-8 text-base font-semibold shadow-[0_0_20px_rgba(0,102,255,0.4)]" onClick={() => document.getElementById('enroll')?.scrollIntoView({ behavior: 'smooth' })}>
              Start Your Career <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Programs</h2>
            <div className="w-20 h-1 bg-primary rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Main Course */}
            <div className="p-8 md:p-12 rounded-3xl bg-card border border-primary/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <ShieldCheck className="w-32 h-32 text-primary" />
              </div>
              <div className="relative z-10">
                <div className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary font-mono text-sm font-bold mb-6">
                  DGCA CERTIFIED
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Small Category Drone Pilot</h3>
                <p className="text-lg text-muted-foreground mb-8">
                  The foundational certification required to commercially pilot drones in India. Comprehensive ground school and extensive flight training.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-secondary" />
                    <div>
                      <div className="text-sm text-muted-foreground font-mono">DURATION</div>
                      <div className="font-bold text-white">5 Days</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                    <div>
                      <div className="text-sm text-muted-foreground font-mono">ELIGIBILITY</div>
                      <div className="font-bold text-white">18+ Years, 10th Pass</div>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 mb-10">
                  <li className="flex items-start gap-3"><BookOpen className="w-5 h-5 text-primary shrink-0" /><span className="text-gray-300">Regulations & Airspace</span></li>
                  <li className="flex items-start gap-3"><BookOpen className="w-5 h-5 text-primary shrink-0" /><span className="text-gray-300">Aerodynamics & Weather</span></li>
                  <li className="flex items-start gap-3"><BookOpen className="w-5 h-5 text-primary shrink-0" /><span className="text-gray-300">Simulator Training</span></li>
                  <li className="flex items-start gap-3"><BookOpen className="w-5 h-5 text-primary shrink-0" /><span className="text-gray-300">Practical Flight Operations</span></li>
                </ul>

                <Button className="w-full h-12 rounded-xl text-base" onClick={() => document.getElementById('enroll')?.scrollIntoView({ behavior: 'smooth' })}>
                  Apply Now
                </Button>
              </div>
            </div>

            {/* Advanced Courses */}
            <div className="flex flex-col gap-6">
              {[
                { title: "Advanced Aerial Survey & Mapping", desc: "Master Pix4D, DroneDeploy, and precise RTK/PPK data collection methodologies." },
                { title: "Industrial Inspection Pro", desc: "Thermal imaging, confined space navigation, and automated defect detection workflows." },
                { title: "Precision Agriculture Mapping", desc: "Multispectral imaging analysis, crop health indices, and variable rate application mapping." },
              ].map((course, i) => (
                <div key={i} className="p-8 rounded-3xl bg-card border border-white/5 flex-1 flex flex-col justify-center group hover:border-primary/30 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-3">{course.title}</h3>
                  <p className="text-muted-foreground mb-4">{course.desc}</p>
                  <Link href="#enroll" className="inline-flex items-center text-primary font-semibold hover:text-white transition-colors mt-auto w-fit" onClick={(e) => { e.preventDefault(); document.getElementById('enroll')?.scrollIntoView({ behavior: 'smooth' }); }}>
                    Request Details <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Training Process</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: "01", title: "Registration", desc: "Documentation & medical clearance" },
              { step: "02", title: "Ground School", desc: "Aviation theory & regulations" },
              { step: "03", title: "Simulator", desc: "Virtual flight mechanics" },
              { step: "04", title: "Practical Flight", desc: "Hands-on dual-control flying" },
              { step: "05", title: "Certification", desc: "DGCA evaluation & remote pilot certificate" },
            ].map((step, i) => (
              <div key={i} className="relative p-6 rounded-2xl bg-background border border-white/5 text-center group hover:border-primary/50 transition-all">
                <div className="text-5xl font-black text-primary/20 mb-4 font-mono">{step.step}</div>
                <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
                {i < 4 && <ChevronRight className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-primary z-10" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="enroll" className="py-32 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-2xl mx-auto bg-card p-8 md:p-12 rounded-3xl border border-primary/20 shadow-[0_0_50px_rgba(0,102,255,0.1)]">
            <h2 className="text-3xl font-bold text-white mb-2 text-center">Enrollment Enquiry</h2>
            <p className="text-muted-foreground text-center mb-8">Leave your details and our training coordinator will contact you shortly.</p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Full Name</label>
                  <input type="text" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Phone Number</label>
                  <input type="tel" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="+91 98765 43210" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Email Address</label>
                <input type="email" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Interested Course</label>
                <select className="w-full bg-background border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none">
                  <option value="">Select a course...</option>
                  <option value="dgca">DGCA Small Category Pilot</option>
                  <option value="survey">Advanced Aerial Survey</option>
                  <option value="inspection">Industrial Inspection</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Message (Optional)</label>
                <textarea rows={4} className="w-full bg-background border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Any specific requirements..."></textarea>
              </div>
              <Button type="submit" className="w-full h-14 rounded-xl text-lg font-bold shadow-[0_0_20px_rgba(0,102,255,0.3)]">
                Submit Enquiry
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
