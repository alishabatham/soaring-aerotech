import { motion } from "framer-motion";
import { Map, Tractor, Eye, Factory, Sun, Zap, ChevronRight, Radio, AlertTriangle, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Services() {
  const services = [
    {
      id: "survey",
      icon: <Map className="w-10 h-10 text-primary" />,
      title: "Aerial Land Survey & 2D/3D Mapping",
      problem: "Traditional land surveying is slow, hazardous in difficult terrain, and often inaccurate for large-area projects.",
      solution: "High-resolution drone imagery processed into centimeter-accurate 2D orthomosaics and 3D topographic models for land developers, NHAI, and government departments.",
      benefits: ["Up to 80% faster than traditional survey methods", "Millimeter accuracy with RTK/PPK GNSS modules", "GIS-ready outputs for urban planning and infrastructure"],
      tech: "RTK/PPK Drones, Pix4D, DroneDeploy, LiDAR",
      clients: ["Government Departments", "Smart City Projects", "Infrastructure Firms", "Builders & Developers"]
    },
    {
      id: "solar",
      icon: <Sun className="w-10 h-10 text-primary" />,
      title: "Solar Plant Inspection",
      problem: "Manual inspection of large solar farms is extremely slow and fails to detect subtle cell defects causing ongoing energy losses.",
      solution: "Automated thermal drone mapping identifies hotspots, diode failures, and soiling across MWs of solar panels in hours — with GPS-tagged repair coordinates.",
      benefits: ["Inspect large solar installations in a fraction of the time", "Precise GPS location of every faulty panel", "Prevent significant ongoing energy revenue losses"],
      tech: "Thermal Cameras, FLIR Analysis, GPS Tagging",
      clients: ["Solar Energy Companies", "EPC Contractors", "Government Solar Projects"]
    },
    {
      id: "substation",
      icon: <Zap className="w-10 h-10 text-primary" />,
      title: "Power Substation Inspection",
      problem: "Inspecting high-voltage substations and transmission lines puts crews at risk and disrupts power operations.",
      solution: "Drone-based visual and thermal inspection of substations, busbar systems, transformers, and transmission lines from safe distances — zero operational disruption.",
      benefits: ["Zero risk to inspection personnel", "Detect thermal anomalies before failures occur", "Inspect without shutting down power operations"],
      tech: "High-Zoom Payloads, Thermal Imaging, Automated Reporting",
      clients: ["Power Distribution Companies", "State Electricity Boards", "Industrial Plants"]
    },
    {
      id: "agriculture",
      icon: <Tractor className="w-10 h-10 text-primary" />,
      title: "Precision Agriculture",
      problem: "Inefficient resource distribution, late disease detection, and lack of field-level data significantly reduce agricultural productivity.",
      solution: "Multispectral drone flights generating NDVI and NDWI crop health maps — identifying water stress, disease, and pest zones for targeted intervention and precision spraying.",
      benefits: ["Identify plant stress before visible symptoms appear", "Optimize fertilizer, pesticide, and water usage", "Scale from small farms to 10,000+ acre operations"],
      tech: "Multispectral Sensors, NDVI/NDWI Analysis, DJI Agras",
      clients: ["Agriculture Companies", "Cooperatives", "State Agriculture Departments", "Agri-Tech Firms"]
    },
    {
      id: "surveillance",
      icon: <Eye className="w-10 h-10 text-primary" />,
      title: "AI Surveillance & Security Monitoring",
      problem: "Traditional CCTV and ground-based security have blind spots, high manpower costs, and slow response times for large facilities.",
      solution: "AI-powered drone surveillance with automated patrol routes, real-time thermal detection, and live feeds integrated with command centers.",
      benefits: ["24/7 perimeter coverage with minimal manpower", "Thermal detection for night and low-visibility operations", "Real-time alerts to command center systems"],
      tech: "AI Vision, Thermal Cameras, Live Transmission, Autonomous Patrol",
      clients: ["Industrial Facilities", "Government Infrastructure", "Event Management", "Smart City Projects"]
    },
    {
      id: "disaster",
      icon: <AlertTriangle className="w-10 h-10 text-primary" />,
      title: "Disaster Assessment",
      problem: "Ground teams cannot safely or quickly assess the scale of natural disasters — floods, fires, landslides — putting rescue coordination at risk.",
      solution: "Rapid aerial reconnaissance and thermal imaging to map disaster zones, identify survivors, assess damage, and coordinate rescue operations in real time.",
      benefits: ["Real-time aerial situational awareness", "Thermal survivor detection in low visibility", "GPS-accurate damage assessment maps for relief agencies"],
      tech: "Thermal Cameras, Live Feed, Rapid Deployment, GPS Mapping",
      clients: ["State Disaster Management", "NDRF", "Municipal Corporations", "NGOs"]
    },
    {
      id: "infrastructure",
      icon: <Factory className="w-10 h-10 text-primary" />,
      title: "Industrial & Infrastructure Inspection",
      problem: "Inspecting bridges, towers, chimneys, and construction sites requires scaffolding or rope access — slow, expensive, and dangerous.",
      solution: "High-resolution drone inspection of structural assets with thermal and zoom capabilities, capturing millimeter-level detail from safe distances.",
      benefits: ["Eliminate scaffolding costs entirely", "Zero operational downtime required", "Detect micro-cracks, corrosion, and structural defects"],
      tech: "High-Zoom & Thermal Payloads, Automated Reporting",
      clients: ["Infrastructure Firms", "Construction Companies", "Smart Cities", "Telecom Companies"]
    },
    {
      id: "custom",
      icon: <Settings className="w-10 h-10 text-primary" />,
      title: "Custom Drone Solutions",
      problem: "Many industries have unique operational requirements that off-the-shelf drone products and standard services cannot address.",
      solution: "Our engineering team designs, builds, and deploys fully custom UAV solutions — from payload development to autonomous mission software — tailored to your exact specifications.",
      benefits: ["Purpose-built hardware and software for your use case", "Full support from concept to deployment", "Backed by our in-house manufacturing capability"],
      tech: "Custom UAV Design, Payload Engineering, Software Development",
      clients: ["Defence Organizations", "Research Institutions", "Government Agencies", "Corporates"]
    },
  ];

  const clientSectors = [
    "Government Departments", "Smart City Projects", "Builders & Real Estate",
    "Solar Energy Companies", "Agriculture Firms", "Infrastructure Companies",
    "Defence & Police", "Disaster Management Agencies"
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-28 bg-[#0D1B2A] relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white mb-6"
          >
            Industrial Drone Services<br className="hidden md:block"/>
            <span className="text-primary">for Every Sector</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/70 max-w-3xl mx-auto mb-8"
          >
            8 specialized B2B drone services for government, infrastructure, agriculture, energy, and defence — delivering measurable results that traditional methods cannot match.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {clientSectors.map((sector, i) => (
              <span key={i} className="inline-block px-3 py-1.5 rounded-full bg-white/10 text-white/70 text-sm font-medium border border-white/10">{sector}</span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-[#F5F4F0]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-12">
            {services.map((service, i) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="left-accent-card bg-white p-8 md:p-10 shadow-sm"
              >
                <div className="flex flex-col lg:flex-row gap-10">
                  <div className="lg:w-1/3">
                    <div className="mb-4 inline-block">{service.icon}</div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">{service.title}</h2>
                    <div className="mt-6">
                      <div className="text-sm font-mono text-primary mb-2 uppercase font-bold">Technology</div>
                      <div className="text-foreground/80 font-medium text-sm mb-6">{service.tech}</div>
                      <div className="text-sm font-mono text-muted-foreground mb-2 uppercase font-bold">Typical Clients</div>
                      <div className="flex flex-wrap gap-2">
                        {service.clients.map((c, j) => (
                          <span key={j} className="px-2 py-1 rounded-lg bg-[#F5F4F0] text-xs text-foreground/70 border border-border">{c}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <div className="section-label mb-2">THE PROBLEM</div>
                        <p className="text-muted-foreground">{service.problem}</p>
                      </div>
                      <div>
                        <div className="section-label mb-2 mt-6 text-primary">OUR SOLUTION</div>
                        <p className="text-muted-foreground">{service.solution}</p>
                      </div>
                    </div>
                    
                    <div className="bg-[#F5F4F0] rounded-2xl p-6 border border-border">
                      <h4 className="text-lg font-bold text-foreground mb-4">Key Benefits</h4>
                      <ul className="space-y-4">
                        {service.benefits.map((benefit, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <ChevronRight className="w-5 h-5 text-primary shrink-0" />
                            <span className="text-foreground/80 text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8 pt-6 border-t border-border">
                        <Link href={`/contact?service=${service.id}`}>
                          <Button variant="outline" className="w-full">Request Quote</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white border-t border-border text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Need a Custom Drone Solution?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Our manufacturing and engineering capability means we can build whatever you need. Contact us to scope your project.
          </p>
          <Link href="/contact">
            <Button size="lg" className="rounded-full h-14 px-8 text-base font-semibold">
              Consult Our Engineering Team
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
