import { useState } from "react";
import { Phone, MapPin, Clock, Instagram, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  eventDate: string;
  eventType: string;
  message: string;
  isFirstTime: string;
}

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    eventDate: "",
    eventType: "",
    message: "",
    isFirstTime: "false"
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Success!",
        description: data.message,
      });
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        eventDate: "",
        eventType: "",
        message: "",
        isFirstTime: "false"
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-brown-lighter to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-brown-primary mb-6" data-testid="text-contact-title">
            Book Your Party Today
          </h2>
          <div className="w-24 h-1 bg-orange-accent mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-contact-subtitle">
            Ready to make your celebration unforgettable? Contact us for availability and pricing. Remember, first-time rentals get 10% off!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-brown-primary mb-6">Get In Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center" data-testid="contact-phone">
                    <div className="bg-brown-primary text-white rounded-full p-3 flex-shrink-0">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <div className="font-semibold text-brown-primary">Phone</div>
                      <a href="tel:+19545591002" className="text-gray-600 hover:text-brown-secondary transition duration-300">
                        (954) 559-1002
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center" data-testid="contact-address">
                    <div className="bg-orange-accent text-white rounded-full p-3 flex-shrink-0">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <div className="font-semibold text-brown-primary">Address</div>
                      <div className="text-gray-600">
                        7106 Amelia Cove Ct<br />
                        Sun City Center, FL 33573
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center" data-testid="contact-hours">
                    <div className="bg-teal-accent text-white rounded-full p-3 flex-shrink-0">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <div className="font-semibold text-brown-primary">Hours</div>
                      <div className="text-gray-600">Open 24 Hours Daily</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center" data-testid="contact-instagram">
                    <div className="bg-pink-500 text-white rounded-full p-3 flex-shrink-0">
                      <Instagram className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <div className="font-semibold text-brown-primary">Follow Us</div>
                      <a 
                        href="https://www.instagram.com/modernbrownbouncies" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-brown-secondary transition duration-300"
                      >
                        @modernbrownbouncies
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="bg-orange-accent text-white p-6 rounded-xl text-center" data-testid="special-offer-card">
              <h4 className="text-2xl font-bold mb-2">Special Offer!</h4>
              <p className="text-xl">10% Off Your First Rental</p>
              <p className="text-sm mt-2 opacity-90">Mention this offer when booking</p>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-brown-primary mb-6">Request a Quote</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      placeholder="Your first name"
                      data-testid="input-first-name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      placeholder="Your last name"
                      data-testid="input-last-name"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your@email.com"
                      data-testid="input-email"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-2">
                      Phone *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="(555) 123-4567"
                      data-testid="input-phone"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="eventDate" className="text-sm font-medium text-gray-700 mb-2">
                      Event Date
                    </Label>
                    <Input
                      id="eventDate"
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => handleInputChange('eventDate', e.target.value)}
                      data-testid="input-event-date"
                    />
                  </div>
                  <div>
                    <Label htmlFor="eventType" className="text-sm font-medium text-gray-700 mb-2">
                      Event Type
                    </Label>
                    <Select value={formData.eventType} onValueChange={(value) => handleInputChange('eventType', value)}>
                      <SelectTrigger data-testid="select-event-type">
                        <SelectValue placeholder="Select event type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="birthday">Birthday Party</SelectItem>
                        <SelectItem value="school">School Event</SelectItem>
                        <SelectItem value="corporate">Corporate Event</SelectItem>
                        <SelectItem value="wedding">Wedding</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-gray-700 mb-2">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell us about your event, preferred bounce house themes, and any special requests..."
                    data-testid="textarea-message"
                  />
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="firstTime"
                    checked={formData.isFirstTime === "true"}
                    onCheckedChange={(checked) => handleInputChange('isFirstTime', checked ? "true" : "false")}
                    data-testid="checkbox-first-time"
                  />
                  <Label htmlFor="firstTime" className="text-sm text-gray-700">
                    This is my first time renting from Modern Brown Bouncies (10% discount applies!)
                  </Label>
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-brown-primary hover:bg-brown-secondary text-white px-8 py-4 rounded-xl font-semibold text-lg transition duration-300 shadow-lg"
                  disabled={contactMutation.isPending}
                  data-testid="button-submit-quote"
                >
                  <Send className="mr-2 h-5 w-5" />
                  {contactMutation.isPending ? "Sending..." : "Send Quote Request"}
                </Button>
                
                <p className="text-sm text-gray-600 text-center">
                  We'll respond to your quote request within 24 hours!
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
