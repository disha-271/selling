import React from "react";
import { Button } from "./ui/button";
import { ArrowLeft, Search, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Input } from "./ui/input";

const Help = () => {
  const navigate = useNavigate();

  // Common help categories
  const helpCategories = [
    { id: 1, title: "Account & Profile", icon: "👤", articles: 12 },
    { id: 2, title: "Buying Items", icon: "🛒", articles: 15 },
    { id: 3, title: "Selling Items", icon: "💰", articles: 18 },
    { id: 4, title: "Payments & Billing", icon: "💳", articles: 10 },
    { id: 5, title: "Shipping & Delivery", icon: "📦", articles: 8 },
    { id: 6, title: "Returns & Refunds", icon: "↩️", articles: 6 },
    { id: 7, title: "Safety & Security", icon: "🔒", articles: 9 },
    { id: 8, title: "Technical Issues", icon: "🔧", articles: 14 },
  ];

  // Frequently asked questions
  const faqs = [
    {
      question: "How do I create an account?",
      answer:
        "To create an account, click on the 'Sign Up' button in the top right corner of the homepage. You can sign up using your email address or connect with your Google or Facebook account.",
    },
    {
      question: "How do I post an item for sale?",
      answer:
        "After logging in, click on the 'Post Ad' button in the header or the '+' button in the mobile navigation. Fill out the item details, upload photos, set your price, and publish your listing.",
    },
    {
      question: "Is shipping available for items?",
      answer:
        "Yes, sellers can offer shipping for their items. When posting an item, sellers can specify shipping options and costs. As a buyer, you can filter listings to show only items that offer shipping.",
    },
    {
      question: "How do I contact a seller?",
      answer:
        "On an item's detail page, click the 'Contact Seller' button to send a message. You'll be able to communicate through our messaging system to ask questions or arrange a purchase.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "SecondHand Marketplace supports various payment methods including credit/debit cards, PayPal, and in-person cash payments for local pickups. The available payment options will be specified by the seller.",
    },
  ];

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
          <h1 className="text-xl font-bold">Help Center</h1>
        </div>
      </header>

      <main className="container py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center">
            How can we help you?
          </h1>

          {/* Search bar */}
          <div className="relative mb-12 max-w-2xl mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search for help articles..."
              className="pl-10 py-6 text-lg"
            />
          </div>

          {/* Help categories */}
          <h2 className="text-2xl font-semibold mb-6">Browse Help Topics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {helpCategories.map((category) => (
              <div
                key={category.id}
                className="border rounded-lg p-4 bg-card hover:border-primary cursor-pointer transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-3xl mb-2">{category.icon}</div>
                    <h3 className="font-medium">{category.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {category.articles} articles
                    </p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>
              </div>
            ))}
          </div>

          {/* FAQs */}
          <h2 className="text-2xl font-semibold mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 mb-12">
            {faqs.map((faq, index) => (
              <div key={index} className="border rounded-lg p-6 bg-card">
                <h3 className="text-lg font-medium mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>

          {/* Contact support */}
          <div className="bg-primary/10 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">Still need help?</h2>
            <p className="mb-6 max-w-md mx-auto">
              Our support team is available to assist you with any questions or
              issues you may have.
            </p>
            <Button>Contact Support</Button>
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

export default Help;
