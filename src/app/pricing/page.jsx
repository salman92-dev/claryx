import HeroSection from "./HeroSection";
import LogosMarquee from "../components/Trusted-Companies";
import PricingPlan from "./Pricing-Plan";
import Limit from "./Companies-limit";
import Essentials from "./Essentials";
import PaidPlanIncludes from "./PaidPlanIncludes";
import WhyUse from "./Why-use";
import PartnerProgramme from "./Partner-Programme";
import FAQSection from "./FAQ";
import WhatIsMissing from "./WhtsIsMissing";
import Footer from "../components/layout/Footer";
import ComparePlans from "./Compare-plans";
const Pricing = () => {
    return (
        <div className="2xl:container mx-auto px-4 md:px-8">
            <HeroSection />
            <LogosMarquee />
            <PricingPlan />
            <Limit />
            <Essentials />
            <PaidPlanIncludes />
            <ComparePlans />
            <WhyUse />
            <PartnerProgramme />
            <FAQSection />
            <WhatIsMissing />
            <Footer />
        </div>
    )
} 

export default Pricing;