import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-brown-primary">Modern Brown Bouncies</h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-gray-700 hover:text-brown-primary transition duration-300"
                data-testid="nav-home"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-gray-700 hover:text-brown-primary transition duration-300"
                data-testid="nav-about"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('bounce-houses')} 
                className="text-gray-700 hover:text-brown-primary transition duration-300"
                data-testid="nav-bounce-houses"
              >
                Bounce Houses
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-gray-700 hover:text-brown-primary transition duration-300"
                data-testid="nav-services"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('reviews')} 
                className="text-gray-700 hover:text-brown-primary transition duration-300"
                data-testid="nav-reviews"
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-gray-700 hover:text-brown-primary transition duration-300"
                data-testid="nav-contact"
              >
                Contact
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button 
              className="text-gray-700" 
              onClick={toggleMobileMenu}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button 
              onClick={() => scrollToSection('home')} 
              className="block px-3 py-2 text-gray-700 hover:text-brown-primary w-full text-left"
              data-testid="nav-mobile-home"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="block px-3 py-2 text-gray-700 hover:text-brown-primary w-full text-left"
              data-testid="nav-mobile-about"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('bounce-houses')} 
              className="block px-3 py-2 text-gray-700 hover:text-brown-primary w-full text-left"
              data-testid="nav-mobile-bounce-houses"
            >
              Bounce Houses
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="block px-3 py-2 text-gray-700 hover:text-brown-primary w-full text-left"
              data-testid="nav-mobile-services"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('reviews')} 
              className="block px-3 py-2 text-gray-700 hover:text-brown-primary w-full text-left"
              data-testid="nav-mobile-reviews"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="block px-3 py-2 text-gray-700 hover:text-brown-primary w-full text-left"
              data-testid="nav-mobile-contact"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
