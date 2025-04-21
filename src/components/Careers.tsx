import React from "react";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Careers = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="mr-4"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-bold">Careers</h1>
        </div>
      </header>

      <main className="container py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Join Our Team</h1>

          <p className="text-muted-foreground mb-8">
            At SecondHand, we're building the future of sustainable commerce.
            Join our team of passionate individuals dedicated to creating a
            platform that gives items a second life and helps reduce waste.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Open Positions</h2>

          <div className="space-y-6">
            <div className="border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-medium mb-2">
                Senior Frontend Developer
              </h3>
              <p className="text-muted-foreground mb-4">Remote • Full-time</p>
              <p className="mb-4">
                We're looking for an experienced frontend developer to help
                build and improve our user interfaces. You'll work closely with
                our design and product teams to create intuitive and responsive
                experiences.
              </p>
              <Button>Apply Now</Button>
            </div>

            <div className="border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-medium mb-2">Mobile App Developer</h3>
              <p className="text-muted-foreground mb-4">
                New York, NY • Full-time
              </p>
              <p className="mb-4">
                Join our mobile team to develop and maintain our iOS and Android
                applications. You'll be responsible for implementing new
                features and ensuring a smooth user experience across all
                devices.
              </p>
              <Button>Apply Now</Button>
            </div>

            <div className="border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-medium mb-2">Product Manager</h3>
              <p className="text-muted-foreground mb-4">Remote • Full-time</p>
              <p className="mb-4">
                We're seeking a product manager to help define our product
                roadmap and work with our engineering and design teams to bring
                new features to life. You'll be responsible for gathering user
                feedback and translating it into actionable items.
              </p>
              <Button>Apply Now</Button>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="bg-primary/10 text-primary p-2 rounded-full h-10 w-10 flex items-center justify-center">
                  1
                </div>
                <div>
                  <h3 className="font-medium">Sustainability First</h3>
                  <p className="text-muted-foreground">
                    We believe in creating a more sustainable future by
                    extending the lifecycle of products.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-primary/10 text-primary p-2 rounded-full h-10 w-10 flex items-center justify-center">
                  2
                </div>
                <div>
                  <h3 className="font-medium">Community Focused</h3>
                  <p className="text-muted-foreground">
                    We build tools that help communities connect and share
                    resources more effectively.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-primary/10 text-primary p-2 rounded-full h-10 w-10 flex items-center justify-center">
                  3
                </div>
                <div>
                  <h3 className="font-medium">Innovation</h3>
                  <p className="text-muted-foreground">
                    We constantly seek new ways to improve our platform and
                    create better experiences.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <footer className="bg-muted py-6 border-t">
        <div className="container">
          <p className="text-center text-muted-foreground">
            &copy; {new Date().getFullYear()} SecondHand Marketplace. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Careers;
