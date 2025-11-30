import Breadcrumb from "./Breadcrumb";
import ContactCTA from "./ContactCTA";
import GridShowcaseSection from "./GridShowcaseSection";
import HeroSection from "./HeroSection";
import LeadSection from "./LeadSection";
import PointsSection from "./PointsSection";
import PricingSection from "./PricingSection";
import ShowcaseBanner from "./ShowcaseBanner";
import StrengthsSection from "./StrengthsSection";

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
