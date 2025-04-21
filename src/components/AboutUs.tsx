import React from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="container py-8 max-w-4xl mx-auto">
      <Button variant="ghost" onClick={handleGoBack} className="mb-6">
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to home
      </Button>

      <div className="space-y-8">
        <section>
          <h1 className="text-4xl font-bold mb-6">About SecondHand</h1>
          <p className="text-lg text-muted-foreground mb-4">
            SecondHand is a community marketplace that connects buyers and
            sellers of pre-loved items. Our mission is to promote sustainability
            by extending the lifecycle of products and reducing waste.
          </p>
          <p className="text-lg text-muted-foreground">
            Founded in 2023, we've quickly grown to become a trusted platform
            for thousands of users looking to buy, sell, and discover unique
            items at great prices.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg text-muted-foreground">
            We believe in creating a more sustainable future by encouraging the
            reuse of quality items. By providing a safe and easy-to-use
            platform, we help reduce waste and give items a second life. Our
            goal is to make second-hand shopping the first choice for conscious
            consumers.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg">
              <div className="text-4xl font-bold text-primary mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">List Your Items</h3>
              <p className="text-muted-foreground">
                Take photos, write descriptions, and set your price. Listing is
                quick and free.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <div className="text-4xl font-bold text-primary mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">
                Connect with Buyers
              </h3>
              <p className="text-muted-foreground">
                Respond to inquiries and arrange meetups or shipping with
                interested buyers.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <div className="text-4xl font-bold text-primary mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Complete the Sale</h3>
              <p className="text-muted-foreground">
                Exchange the item and payment safely, then rate your experience.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
                alt="CEO"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Alex Johnson</h3>
              <p className="text-muted-foreground">CEO & Founder</p>
            </div>
            <div className="text-center">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sam"
                alt="CTO"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Sam Rodriguez</h3>
              <p className="text-muted-foreground">CTO</p>
            </div>
            <div className="text-center">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jamie"
                alt="COO"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Jamie Smith</h3>
              <p className="text-muted-foreground">COO</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg text-muted-foreground mb-4">
            Have questions or feedback? We'd love to hear from you!
          </p>
          <p className="text-muted-foreground">
            Email: support@secondhand.com
            <br />
            Phone: (555) 123-4567
            <br />
            Address: 123 Market Street, New York, NY 10001
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
