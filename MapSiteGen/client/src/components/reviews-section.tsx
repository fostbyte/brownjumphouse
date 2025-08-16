import { Star, ExternalLink } from "lucide-react";

export default function ReviewsSection() {
  const reviews = [
    {
      id: 1,
      rating: 5,
      text: "The owners are so kind and made my nieces birthday party the best party ever!! The princess bounce house was so clean and the kids loved the slide and the basketball hoop inside.",
      author: "Kalika Shelar",
      timeAgo: "A year ago",
      initial: "K"
    },
    {
      id: 2,
      rating: 5,
      text: "We couldn't be happier with our experience with Modern Brown Bouncies! We got a bouncy house for our NYE celebration and it was the best decision we made.",
      author: "Melody Vassania", 
      timeAgo: "A year ago",
      initial: "M"
    },
    {
      id: 3,
      rating: 5,
      text: "I recently rented a bounce house from Modern Brown Bouncies for my child's birthday party, and it was a fantastic experience! The bounce house was clean, safe, and the kids had a blast.",
      author: "Fitzroy Dunkley",
      timeAgo: "A year ago", 
      initial: "F"
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-brown-primary mb-6" data-testid="text-reviews-title">
            What Our Customers Say
          </h2>
          <div className="w-24 h-1 bg-orange-accent mx-auto mb-8"></div>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="flex text-yellow-500 text-3xl" data-testid="stars-rating">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 fill-current" />
              ))}
            </div>
            <span className="text-3xl font-bold text-brown-primary" data-testid="text-rating-number">5.0</span>
            <span className="text-xl text-gray-600" data-testid="text-review-summary">(11 reviews on Google)</span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300" data-testid={`card-review-${review.id}`}>
              <div className="flex text-yellow-500 mb-4" data-testid={`stars-review-${review.id}`}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic" data-testid={`text-review-${review.id}`}>
                "{review.text}"
              </p>
              <div className="flex items-center">
                <div className="bg-brown-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                  {review.initial}
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-brown-primary" data-testid={`text-reviewer-${review.id}`}>
                    {review.author}
                  </div>
                  <div className="text-gray-500 text-sm" data-testid={`text-time-${review.id}`}>
                    {review.timeAgo}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://www.google.com/maps/place/Modern+Brown+Bouncies/@27.7444687,-82.3753926,16.24z/data=!4m6!3m5!1s0x218a8f9c32bacd6b:0x6a44d3fa58a9d609!8m2!3d27.7429758!4d-82.3759525!16s%2Fg%2F11y2m26c9r" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-brown-primary hover:text-brown-secondary font-semibold text-lg transition duration-300"
            data-testid="link-google-reviews"
          >
            Read All Reviews on Google <ExternalLink className="inline ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
