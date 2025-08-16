import { Crown, Rocket, Gift, Check } from "lucide-react";

export default function ServicesSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-brown-lighter to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-brown-primary mb-6" data-testid="text-services-title">
            Our Party Rental Services
          </h2>
          <div className="w-24 h-1 bg-orange-accent mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-services-subtitle">
            From princess castles to action-packed adventures, we have the perfect bounce house for every celebration.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 border-t-4 border-brown-primary" data-testid="card-service-princess">
            <div className="text-center mb-6">
              <div className="bg-brown-primary text-white rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Crown className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-brown-primary">Princess Bounce Houses</h3>
            </div>
            <p className="text-gray-600 mb-6 text-center">
              Magical princess-themed bounce houses complete with slides and basketball hoops. Perfect for making birthday dreams come true!
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <Check className="h-4 w-4 text-teal-accent mr-2" />
                Built-in slide
              </li>
              <li className="flex items-center">
                <Check className="h-4 w-4 text-teal-accent mr-2" />
                Basketball hoop
              </li>
              <li className="flex items-center">
                <Check className="h-4 w-4 text-teal-accent mr-2" />
                Princess theme decorations
              </li>
            </ul>
          </div>
          
          {/* Service Card 2 */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 border-t-4 border-orange-accent" data-testid="card-service-themed">
            <div className="text-center mb-6">
              <div className="bg-orange-accent text-white rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Rocket className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-brown-primary">Themed Bounce Houses</h3>
            </div>
            <p className="text-gray-600 mb-6 text-center">
              Adventure-themed bounce houses featuring exciting designs that transport kids to different worlds of fun and imagination.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <Check className="h-4 w-4 text-teal-accent mr-2" />
                Multiple themes available
              </li>
              <li className="flex items-center">
                <Check className="h-4 w-4 text-teal-accent mr-2" />
                Interactive elements
              </li>
              <li className="flex items-center">
                <Check className="h-4 w-4 text-teal-accent mr-2" />
                Age-appropriate designs
              </li>
            </ul>
          </div>
          
          {/* Service Card 3 */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 border-t-4 border-teal-accent" data-testid="card-service-equipment">
            <div className="text-center mb-6">
              <div className="bg-teal-accent text-white rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Gift className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-brown-primary">Party Equipment</h3>
            </div>
            <p className="text-gray-600 mb-6 text-center">
              Complete party packages including tables, chairs, and decorations to make your celebration picture-perfect.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <Check className="h-4 w-4 text-teal-accent mr-2" />
                Tables and chairs
              </li>
              <li className="flex items-center">
                <Check className="h-4 w-4 text-teal-accent mr-2" />
                Decorative packages
              </li>
              <li className="flex items-center">
                <Check className="h-4 w-4 text-teal-accent mr-2" />
                Setup included
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button 
            onClick={scrollToContact}
            className="bg-brown-primary hover:bg-brown-secondary text-white px-8 py-4 rounded-xl font-semibold text-lg transition duration-300 shadow-lg"
            data-testid="button-get-quote"
          >
            Get Your Quote Today
          </button>
        </div>
      </div>
    </section>
  );
}
