import { Suspense, lazy } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";

// Lazy load components for better performance
const CategoryListings = lazy(() => import("./components/CategoryListings"));
const ItemDetails = lazy(() => import("./components/ItemDetails"));
const AboutUs = lazy(() => import("./components/AboutUs"));
const Careers = lazy(() => import("./components/Careers"));
const Press = lazy(() => import("./components/Press"));
const Help = lazy(() => import("./components/Help"));

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/category/:categoryName"
            element={<CategoryListings />}
          />
          <Route path="/item/:itemId" element={<ItemDetails />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/press" element={<Press />} />
          <Route path="/help" element={<Help />} />
          {/* Add a catch-all route to handle 404s */}
          <Route path="*" element={<Home />} />
          {import.meta.env.VITE_TEMPO === "true" && (
            <Route path="/tempobook/*" />
          )}
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
