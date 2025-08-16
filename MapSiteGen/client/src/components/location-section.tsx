import { MapPin, Clock, Phone } from "lucide-react";

export default function LocationSection() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-brown-primary mb-6" data-testid="text-location-title">
            Visit Our Location
          </h2>
          <div className="w-24 h-1 bg-orange-accent mx-auto mb-8"></div>
          <p className="text-xl text-gray-600" data-testid="text-location-subtitle">
            Proudly serving Sun City Center, FL and surrounding areas
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg" data-testid="card-service-area">
              <h3 className="text-2xl font-bold text-brown-primary mb-4">Our Service Area</h3>
              <p className="text-gray-600 mb-4">
                We provide bounce house rentals and party equipment throughout Sun City Center and surrounding communities in Florida.
              </p>
              <div className="space-y-3">
                <div className="flex items-center" data-testid="info-address">
                  <MapPin className="h-5 w-5 text-brown-primary mr-3" />
                  <span className="font-semibold">7106 Amelia Cove Ct, Sun City Center, FL 33573</span>
                </div>
                <div className="flex items-center" data-testid="info-hours">
                  <Clock className="h-5 w-5 text-brown-primary mr-3" />
                  <span>Open 24 Hours Daily</span>
                </div>
                <div className="flex items-center" data-testid="info-phone">
                  <Phone className="h-5 w-5 text-brown-primary mr-3" />
                  <a href="tel:+19545591002" className="hover:text-brown-secondary transition duration-300">
                    (954) 559-1002
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-orange-accent text-white p-6 rounded-xl shadow-lg" data-testid="card-delivery">
              <h4 className="text-xl font-bold mb-2">Delivery Available</h4>
              <p>We deliver, set up, and pick up all equipment at your convenience. Contact us for delivery area details!</p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden" data-testid="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3528.7829897!2d-82.3759525!3d27.7429758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x218a8f9c32bacd6b%3A0x6a44d3fa58a9d609!2sModern%20Brown%20Bouncies!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
              width="100%" 
              height="400" 
              style={{border: 0}} 
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Modern Brown Bouncies Location Map"
              data-testid="iframe-google-maps"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
