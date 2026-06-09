import { Link } from "wouter";
import { Rocket, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, LinkedinIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6 group" data-testid="link-footer-logo">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <span className="font-sans font-bold text-xl tracking-tight text-white">
                SOARING <span className="text-primary">AEROTECH</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              India's premier drone technology ecosystem company. We build, innovate, and train the future of aerospace.
            </p>
            <div className="flex flex-col gap-2 text-xs font-mono text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" /> DGCA Approved
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" /> Startup India Recognized
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" /> MSME Registered
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 font-sans tracking-wide">QUICK LINKS</h4>
            <ul className="flex flex-col gap-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "Drone Training", href: "/training" },
                { name: "Drone Services", href: "/services" },
                { name: "Innovation Lab", href: "/innovation-lab" },
                { name: "Case Projects", href: "/projects" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm" data-testid={`link-footer-${link.name.toLowerCase().replace(" ", "-")}`}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold mb-6 font-sans tracking-wide">RESOURCES</h4>
            <ul className="flex flex-col gap-3">
              {[
                { name: "Industries", href: "/industries" },
                { name: "Media & PR", href: "/media" },
                { name: "Blog", href: "/blog" },
                { name: "Contact Us", href: "/contact" },
                { name: "Privacy Policy", href: "#" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm" data-testid={`link-footer-resource-${link.name.toLowerCase().replace(" ", "-")}`}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 font-sans tracking-wide">CONTACT</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  Tech Park, Block B<br />
                  Indore, Madhya Pradesh<br />
                  India 452001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-muted-foreground text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-muted-foreground text-sm">hello@soaringaerotech.com</span>
              </li>
            </ul>

            <div className="flex items-center gap-4 mt-8">
              <a href="#" className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all">
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Soaring Aerotech. All rights reserved.
          </p>
          <div className="text-muted-foreground text-sm font-mono flex items-center gap-2">
            <span className="text-primary">///</span> INITIATING TAKEOFF
          </div>
        </div>
      </div>
    </footer>
  );
}
