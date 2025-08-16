import { Shield, Clock, Heart } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-brown-primary mb-6" data-testid="text-about-title">
            About Modern Brown Bouncies
          </h2>
          <div className="w-24 h-1 bg-orange-accent mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-about-subtitle">
            Your premier party rental company in Sun City Center, delivering unforgettable experiences through our themed bounce houses and quality party equipment.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-brown-primary">Why Choose Us?</h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4" data-testid="feature-clean-safe">
                <div className="bg-teal-accent text-white rounded-full p-3 flex-shrink-0">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-brown-primary">Clean & Safe Equipment</h4>
                  <p className="text-gray-600">All our bounce houses are thoroughly cleaned and sanitized after each use, ensuring a safe environment for your children.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4" data-testid="feature-24-7">
                <div className="bg-orange-accent text-white rounded-full p-3 flex-shrink-0">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-brown-primary">24/7 Availability</h4>
                  <p className="text-gray-600">We're available around the clock to accommodate your party scheduling needs and last-minute bookings.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4" data-testid="feature-service">
                <div className="bg-brown-primary text-white rounded-full p-3 flex-shrink-0">
                  <Heart className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-brown-primary">Exceptional Service</h4>
                  <p className="text-gray-600">Our kind and professional team goes above and beyond to make every celebration special and memorable.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://pixabay.com/get/gb75a1f58d7174f3017f59f4a6d15ce065ca321b776940d1940c4528fd3f667bd02faed642ef2c876f14ad7e08b9e75dbcdd1f99e949efb50cd0f3338b6a8d319_1280.jpg" 
              alt="Princess themed bounce house for birthday parties" 
              className="rounded-xl shadow-lg"
              data-testid="img-princess-bounce-house"
            />
            <img 
              src="https://pixabay.com/get/ga88b1c68939415d8c00c41662af7ac74508d74edd304d21b46b3ab71f3fd7ca136bc76cad1d52f4520701a98a0bf0d59b676369f4ac6e849bede2185ad27d5b2_1280.jpg" 
              alt="Children sliding down bounce house slide with excitement" 
              className="rounded-xl shadow-lg mt-8"
              data-testid="img-slide-bounce-house"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
