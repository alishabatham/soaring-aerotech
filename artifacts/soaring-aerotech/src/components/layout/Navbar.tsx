import { Link, useLocation } from "wouter";
import { Menu, X, Rocket, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Training", href: "/training" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Industries", href: "/industries" },
  { name: "Innovation Lab", href: "/innovation-lab" },
  { name: "Media", href: "/media" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-md border-b border-border/50 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group" data-testid="link-home-logo">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center group-hover:shadow-[0_0_15px_rgba(0,102,255,0.5)] transition-all">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <span className="font-sans font-bold text-xl tracking-tight text-white">
              SOARING <span className="text-primary">AEROTECH</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-6 bg-card/40 backdrop-blur-sm px-6 py-2.5 rounded-full border border-white/5">
              {links.slice(1, -1).map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location === link.href ? "text-primary text-glow" : "text-gray-300"
                  }`}
                  data-testid={`link-nav-${link.name.toLowerCase().replace(" ", "-")}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <Link href="/contact" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors" data-testid="link-nav-contact">
                Contact
              </Link>
              <Link href="/training">
                <Button className="rounded-full shadow-[0_0_15px_rgba(0,102,255,0.3)] hover:shadow-[0_0_20px_rgba(0,102,255,0.6)] transition-all group" data-testid="btn-nav-enroll">
                  Enroll Now
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="btn-mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-4 shadow-xl">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-base font-medium p-2 rounded-md ${
                  location === link.href ? "bg-primary/10 text-primary" : "text-gray-300 hover:bg-white/5"
                }`}
                data-testid={`link-mobile-nav-${link.name.toLowerCase().replace(" ", "-")}`}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/training" className="mt-2">
              <Button className="w-full rounded-md" data-testid="btn-mobile-enroll">
                Enroll Now
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
