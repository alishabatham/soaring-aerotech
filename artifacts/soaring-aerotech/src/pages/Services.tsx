import { motion } from "framer-motion";
import { Map, Tractor, Eye, Factory, Sun, Zap, Settings, AlertTriangle, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const services = [
  {
    icon: <Map className="w-7 h-7" />,
    color: "bg-blue-50 text-blue-600",
    title: "Aerial Survey & 2D/3D Mapping",
    bullets: ["Centimetre-accurate topographic data", "Orthomosaics & 3D models", "GIS-ready outputs"],
    clients: ["Government","Infrastructure","Builders"],
    id: "survey"
  },
  {
    icon: <Sun className="w-7 h-7" />,
    color: "bg-yellow-50 text-yellow-600",
    title: "Solar Plant Inspection",
    bullets: ["Thermal hotspot detection", "GPS-tagged fault reports", "MW-scale coverage in hours"],
    clients: ["Solar Companies","EPC Contractors","Government"],
    id: "solar"
  },
  {
    icon: <Zap className="w-7 h-7" />,
    color: "bg-orange-50 text-orange-600",
    title: "Power Substation Inspection",
    bullets: ["Zero shutdown required", "Thermal anomaly detection", "Safe remote inspection"],
    clients: ["Power Boards","Industrial Plants"],
    id: "substation"
  },
  {
    icon: <Tractor className="w-7 h-7" />,
    color: "bg-green-50 text-green-600",
    title: "Precision Agriculture",
    bullets: ["NDVI crop health maps", "Targeted precision spraying", "Scalable to 10,000+ acres"],
    clients: ["Agriculture Firms","Cooperatives","State Depts"],
    id: "agriculture"
  },
  {
    icon: <Eye className="w-7 h-7" />,
    color: "bg-purple-50 text-purple-600",
    title: "AI Surveillance & Security",
    bullets: ["24/7 autonomous patrol", "Thermal night detection", "Live command centre feed"],
    clients: ["Industrial Facilities","Smart Cities","Events"],
    id: "surveillance"
  },
  {
    icon: <AlertTriangle className="w-7 h-7" />,
    color: "bg-red-50 text-red-600",
    title: "Disaster Assessment",
    bullets: ["Rapid aerial recon", "Thermal survivor detection", "GPS damage mapping"],
    clients: ["NDRF","State Disaster Mgmt","NGOs"],
    id: "disaster"
  },
  {
    icon: <Factory className="w-7 h-7" />,
    color: "bg-gray-100 text-gray-600",
    title: "Infrastructure Inspection",
    bullets: ["Bridges, towers, chimneys", "No scaffolding needed", "Micro-crack detection"],
    clients: ["Smart Cities","Construction","Telecom"],
    id: "infrastructure"
  },
  {
    icon: <Settings className="w-7 h-7" />,
    color: "bg-indigo-50 text-indigo-600",
    title: "Custom Drone Solutions",
    bullets: ["Purpose-built hardware", "Custom payload engineering", "Concept to deployment"],
    clients: ["Defence","Research Institutions","Corporates"],
    id: "custom"
  },
];

export default function Services() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-24 bg-[#0D1B2A] relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.h1 initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} className="text-4xl md:text-6xl font-black text-white mb-4">
            Industrial Drone Services<br/><span className="text-primary">8 Specialized Solutions</span>
          </motion.h1>
          <motion.p initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:0.1}} className="text-white/60 max-w-xl mx-auto">
            B2B drone solutions for government, infrastructure, energy, agriculture, and defence.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-[#F5F4F0]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s,i)=>(
              <motion.div key={i} initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.06}} className="bg-white rounded-2xl border border-border p-6 shadow-sm hover:shadow-md transition-all flex flex-col group">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${s.color}`}>
                  {s.icon}
                </div>
                <h3 className="text-base font-bold text-foreground mb-4 leading-snug">{s.title}</h3>
                <ul className="space-y-2 flex-1 mb-5">
                  {s.bullets.map((b,j)=>(
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <ChevronRight className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5"/>{b}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-border">
                  <div className="flex flex-wrap gap-1 mb-4">
                    {s.clients.map((c,j)=>(
                      <span key={j} className="px-2 py-0.5 rounded-md bg-[#F5F4F0] text-xs text-muted-foreground border border-border">{c}</span>
                    ))}
                  </div>
                  <Link href={`/contact?service=${s.id}`}>
                    <Button variant="outline" size="sm" className="w-full text-xs rounded-xl">Get Quote</Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white border-t border-border text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">Need a Custom Solution?</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">Our manufacturing capability means we can build whatever you need. Let's scope your project.</p>
          <Link href="/contact">
            <Button size="lg" className="rounded-full h-13 px-8 text-base font-semibold">Consult Our Team</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
