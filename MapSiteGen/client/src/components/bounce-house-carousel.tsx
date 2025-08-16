import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface BounceHouse {
  id: number;
  name: string;
  image: string;
  description: string;
  features: string[];
  category: string;
}

export default function BounceHouseCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const bounceHouses: BounceHouse[] = [
    {
      id: 1,
      name: "Princess Castle",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      description: "A magical princess-themed bounce house perfect for birthday parties",
      features: ["Built-in slide", "Basketball hoop", "Princess decorations"],
      category: "Princess"
    },
    {
      id: 2,
      name: "Adventure Playground",
      image: "https://images.unsplash.com/photo-1527603815363-e79385e0747e?w=400&h=300&fit=crop",
      description: "Multi-level bounce house with exciting obstacles and challenges",
      features: ["Multiple slides", "Climbing wall", "Obstacle course"],
      category: "Adventure"
    },
    {
      id: 3,
      name: "Tropical Paradise",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
      description: "Colorful tropical-themed bounce house with palm tree designs",
      features: ["Water slide option", "Tropical theme", "Large bouncing area"],
      category: "Tropical"
    },
    {
      id: 4,
      name: "Superhero Central",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      description: "Action-packed superhero themed bounce house for little heroes",
      features: ["Superhero graphics", "Dual slides", "Interactive elements"],
      category: "Superhero"
    },
    {
      id: 5,
      name: "Rainbow Fun House",
      image: "https://images.unsplash.com/photo-1527603815363-e79385e0747e?w=400&h=300&fit=crop",
      description: "Bright and colorful rainbow-themed bounce house",
      features: ["Rainbow colors", "Multiple entrances", "Safe netting"],
      category: "Rainbow"
    },
    {
      id: 6,
      name: "Medieval Knight",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
      description: "Castle-themed bounce house for medieval adventures",
      features: ["Castle turrets", "Knight theme", "Drawbridge entrance"],
      category: "Medieval"
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const targetScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleBookNow = (bounceHouseName: string) => {
    // TODO: Replace with your actual Google Forms link
    // For now, this will open a generic booking form
    // You can also pre-fill the bounce house selection by adding the entry parameter
    const googleFormUrl = "https://docs.google.com/forms/d/e/YOUR_GOOGLE_FORM_ID/viewform?usp=pp_url&entry.FIELD_ID=" + encodeURIComponent(bounceHouseName);
    
    // Temporary fallback - remove this once you provide the actual Google Forms link
    alert(`Booking request for: ${bounceHouseName}\n\nPlease provide your Google Forms link to enable direct booking.`);
    
    // Uncomment this line once you have the real Google Forms URL:
    // window.open(googleFormUrl, '_blank');
  };

  return (
    <section id="bounce-houses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-brown-primary mb-6" data-testid="text-carousel-title">
            Our Amazing Bounce Houses
          </h2>
          <div className="w-24 h-1 bg-orange-accent mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-carousel-subtitle">
            Discover our collection of premium bounce houses, each designed to create magical memories for your special celebration.
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 border-2 border-brown-primary text-brown-primary rounded-full p-3 shadow-lg transition duration-300"
            data-testid="button-carousel-left"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 border-2 border-brown-primary text-brown-primary rounded-full p-3 shadow-lg transition duration-300"
            data-testid="button-carousel-right"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Carousel Container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide gap-6 pb-4 scroll-smooth"
            data-testid="carousel-container"
          >
            {bounceHouses.map((bounceHouse) => (
              <div
                key={bounceHouse.id}
                className="flex-none w-80 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 border border-gray-100"
                data-testid={`card-bounce-house-${bounceHouse.id}`}
              >
                <div className="relative overflow-hidden rounded-t-2xl">
                  <img
                    src={bounceHouse.image}
                    alt={bounceHouse.name}
                    className="w-full h-48 object-cover"
                    data-testid={`img-bounce-house-${bounceHouse.id}`}
                  />
                  <div className="absolute top-4 right-4 bg-brown-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {bounceHouse.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brown-primary mb-3" data-testid={`text-bounce-house-name-${bounceHouse.id}`}>
                    {bounceHouse.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-4" data-testid={`text-bounce-house-description-${bounceHouse.id}`}>
                    {bounceHouse.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {bounceHouse.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <Star className="h-4 w-4 text-yellow-500 mr-2 fill-current" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => handleBookNow(bounceHouse.name)}
                    className="w-full bg-brown-primary hover:bg-brown-secondary text-white px-6 py-3 rounded-xl font-semibold transition duration-300"
                    data-testid={`button-book-${bounceHouse.id}`}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Don't see what you're looking for? We have more options available!
          </p>
          <button
            onClick={scrollToContact}
            className="bg-orange-accent hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition duration-300 shadow-lg"
            data-testid="button-custom-request"
          >
            Request Custom Options
          </button>
        </div>
      </div>
    </section>
  );
}