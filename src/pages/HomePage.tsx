import Breadcrumb from "../components/top/Breadcrumb";
import ContactCTA from "../components/top/ContactCTA";
import GridShowcaseSection from "../components/top/GridShowcaseSection";
import HeroSection from "../components/top/HeroSection";
import LeadSection from "../components/top/LeadSection";
import PointsSection from "../components/top/PointsSection";
import PricingSection from "../components/top/PricingSection";
import ShowcaseBanner from "../components/top/ShowcaseBanner";
import StrengthsSection from "../components/top/StrengthsSection";

const HomePage = () => {
    return (
        <>
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
        </>
    );
};

export default HomePage;
