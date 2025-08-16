import { Star, Phone, MapPin, Clock, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brown-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div data-testid="footer-business-info">
            <h3 className="text-2xl font-bold mb-4">Modern Brown Bouncies</h3>
            <p className="text-brown-lighter mb-4">
              Making every celebration extraordinary with premium bounce house rentals in Sun City Center, FL.
            </p>
            <div className="flex text-yellow-500" data-testid="footer-rating">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
              <span className="text-white ml-2">5.0 (11 reviews)</span>
            </div>
          </div>
          
          <div data-testid="footer-services">
            <h4 className="text-xl font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-brown-lighter">
              <li>Princess Bounce Houses</li>
              <li>Themed Bounce Houses</li>
              <li>Party Equipment</li>
              <li>Event Setup</li>
            </ul>
          </div>
          
          <div data-testid="footer-contact">
            <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-brown-lighter">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <a href="tel:+19545591002" className="hover:text-white transition duration-300">
                  (954) 559-1002
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                Sun City Center, FL
              </li>
              <li className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                Open 24 Hours
              </li>
            </ul>
          </div>
          
          <div data-testid="footer-social">
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/modernbrownbouncies" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-brown-secondary p-3 rounded-full hover:bg-brown-lighter transition duration-300"
                data-testid="link-instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-4 bg-orange-accent p-3 rounded-lg" data-testid="footer-offer">
              <div className="text-sm font-semibold">Special Offer</div>
              <div className="text-xs">10% off first rental!</div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-brown-secondary mt-8 pt-8 text-center text-brown-lighter" data-testid="footer-copyright">
          <p>&copy; 2024 Modern Brown Bouncies. All rights reserved. | Serving Sun City Center, FL and surrounding areas</p>
        </div>
      </div>
    </footer>
  );
}
