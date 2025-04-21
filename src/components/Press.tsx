import React from "react";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Press = () => {
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
          <h1 className="text-xl font-bold">Press</h1>
        </div>
      </header>

      <main className="container py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Press & Media</h1>

          <p className="text-muted-foreground mb-8">
            Find the latest news, press releases, media resources, and contact
            information for SecondHand Marketplace.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Recent Press Releases</h2>

          <div className="space-y-6">
            <div className="border rounded-lg p-6 bg-card">
              <p className="text-sm text-muted-foreground mb-2">
                June 15, 2023
              </p>
              <h3 className="text-xl font-medium mb-2">
                SecondHand Marketplace Expands to 10 New Cities
              </h3>
              <p className="mb-4">
                SecondHand Marketplace announces expansion to 10 new
                metropolitan areas, bringing its sustainable commerce platform
                to over 50 million additional potential users.
              </p>
              <Button variant="outline">Read Full Release</Button>
            </div>

            <div className="border rounded-lg p-6 bg-card">
              <p className="text-sm text-muted-foreground mb-2">
                April 22, 2023
              </p>
              <h3 className="text-xl font-medium mb-2">
                Earth Day: SecondHand Marketplace Celebrates 1 Million Items
                Reused
              </h3>
              <p className="mb-4">
                On Earth Day, SecondHand Marketplace celebrates a major
                milestone: facilitating the reuse of over 1 million items,
                preventing them from entering landfills.
              </p>
              <Button variant="outline">Read Full Release</Button>
            </div>

            <div className="border rounded-lg p-6 bg-card">
              <p className="text-sm text-muted-foreground mb-2">
                January 10, 2023
              </p>
              <h3 className="text-xl font-medium mb-2">
                SecondHand Marketplace Secures $30M in Series B Funding
              </h3>
              <p className="mb-4">
                SecondHand Marketplace announces completion of a $30 million
                Series B funding round led by Green Ventures, with participation
                from existing investors.
              </p>
              <Button variant="outline">Read Full Release</Button>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-4">Media Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-6 bg-card">
                <h3 className="text-xl font-medium mb-2">Brand Assets</h3>
                <p className="mb-4">
                  Download our logo, brand guidelines, and other visual assets
                  for media use.
                </p>
                <Button variant="outline">Download Kit</Button>
              </div>
              <div className="border rounded-lg p-6 bg-card">
                <h3 className="text-xl font-medium mb-2">Company Facts</h3>
                <p className="mb-4">
                  Access key statistics, founding story, and mission statement
                  for SecondHand Marketplace.
                </p>
                <Button variant="outline">View Facts</Button>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-4">Media Contact</h2>
            <div className="border rounded-lg p-6 bg-card">
              <p className="mb-2">
                <strong>For press inquiries:</strong>
              </p>
              <p className="mb-1">press@secondhand.example.com</p>
              <p className="mb-4">+1 (555) 123-4567</p>
              <Button>Contact Press Team</Button>
            </div>
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

export default Press;
