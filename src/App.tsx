import { Routes, Route } from "react-router-dom";
import { Footer } from "./components/layout/footer";
import { Header } from "./components/layout/header";
import { AboutPage } from "./components/pages/about-page";
import { ContactPage } from "./components/pages/contact-page";
import { Homepage } from "./components/pages/homepage";
import { PricingPage } from "./components/pages/pricing-page";

function App() {
  return (
    <>
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
