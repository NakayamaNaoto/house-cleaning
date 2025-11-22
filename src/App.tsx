import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import LeadSection from "./components/sections/LeadSection";
import StrengthsSection from "./components/sections/StrengthsSection";
import PointsSection from "./components/sections/PointsSection";
import ContactCTA from "./components/sections/ContactCTA";
import PricingSection from "./components/sections/PricingSection";
import GridShowcaseSection from "./components/sections/GridShowcaseSection";
import Breadcrumb from "./components/sections/Breadcrumb";
import ShowcaseBanner from "./components/sections/ShowcaseBanner";

function App() {
    return (
        <>
            <Header />
            <ShowcaseBanner />
            <main>
                <Breadcrumb />
                <HeroSection />
                <LeadSection />
                <StrengthsSection />
                <PointsSection />
                <ContactCTA />
                <PricingSection />
                <GridShowcaseSection />
            </main>
            <Footer />
        </>
    );
}

export default App;
