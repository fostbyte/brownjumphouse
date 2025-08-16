import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import BounceHouseCarousel from "@/components/bounce-house-carousel";
import ServicesSection from "@/components/services-section";
import ReviewsSection from "@/components/reviews-section";
import LocationSection from "@/components/location-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="font-inter bg-gray-50 text-gray-800">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <BounceHouseCarousel />
      <ServicesSection />
      <ReviewsSection />
      <LocationSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
