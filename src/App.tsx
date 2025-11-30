import "./App.scss";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/top/HeroSection";
import LeadSection from "./components/top/LeadSection";
import StrengthsSection from "./components/top/StrengthsSection";
import PointsSection from "./components/top/PointsSection";
import ContactCTA from "./components/top/ContactCTA";
import PricingSection from "./components/top/PricingSection";
import GridShowcaseSection from "./components/top/GridShowcaseSection";
import Breadcrumb from "./components/top/Breadcrumb";
import ShowcaseBanner from "./components/top/ShowcaseBanner";

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
