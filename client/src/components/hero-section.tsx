import { Gift, Star, Phone } from "lucide-react";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="pt-16 min-h-screen bg-gradient-to-br from-brown-lighter to-white flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-brown-primary leading-tight" data-testid="text-hero-title">
                Modern Brown Bouncies
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 font-medium" data-testid="text-hero-subtitle">
                Premier Party Rental Service in Sun City Center, FL
              </p>
            </div>
            
            <div className="bg-orange-accent text-white px-6 py-3 rounded-full inline-block font-semibold text-lg shadow-lg" data-testid="banner-special-offer">
              <Gift className="inline mr-2 h-5 w-5" />
              10% Discount for First Time Rentals!
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center text-yellow-500">
                <Star className="h-8 w-8 fill-current" />
                <span className="text-3xl font-bold text-brown-primary ml-2" data-testid="text-rating">5.0</span>
                <span className="text-gray-600 ml-2" data-testid="text-review-count">(11 reviews)</span>
              </div>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed" data-testid="text-hero-description">
              Delivering unforgettable experiences through our themed bounce houses and party equipment. 
              Clean, safe, and guaranteed to make your celebration extraordinary!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="bg-brown-primary hover:bg-brown-secondary text-white px-8 py-4 rounded-xl font-semibold text-lg transition duration-300 shadow-lg text-center"
                data-testid="button-book-party"
              >
                Book Your Party
              </button>
              <a 
                href="tel:+19545591002" 
                className="border-2 border-brown-primary text-brown-primary hover:bg-brown-primary hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition duration-300 text-center"
                data-testid="link-call-now"
              >
                <Phone className="inline mr-2 h-5 w-5" />
                Call Now
              </a>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1527603815363-e79385e0747e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Children playing on colorful bounce house at birthday party" 
              className="rounded-2xl shadow-2xl w-full h-auto"
              data-testid="img-hero-bounce-house"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl" data-testid="card-availability">
              <div className="text-center">
                <div className="text-3xl font-bold text-brown-primary">24/7</div>
                <div className="text-gray-600">Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
