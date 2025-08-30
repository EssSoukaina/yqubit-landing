import { ExternalLink } from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
  const quickLinks = [
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Tagline */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center space-x-2 mb-4">
                <img
                  src={logo}
                  alt="Y-Qubit Logo"
                  className="h-10 w-10 object-contain"
                />
                <span className="text-2xl font-bold text-white">Y-Qubit</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Advanced Cybersecurity and AI Solutions
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className="md:col-span-1">
            <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="mailto:yqubitmorocco@gmail.com"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-200 group"
              >
                <span className="text-white text-sm font-bold group-hover:scale-110 transition-transform duration-200">
                  @
                </span>
              </a>
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-200 group">
                <span className="text-white text-sm font-bold group-hover:scale-110 transition-transform duration-200">
                  #
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Y-Qubit. All rights reserved. Built with passion in Morocco.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
