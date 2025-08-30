import HeroSection from "./Hero-section";
import LogosMarquee from "../components/Trusted-Companies";
import FinancialAnalysis from "./Financial-Analysis";
import Steps from "./Steps";
import Usecase from "./Use-Case";
import Difference from "./Difference";
import Capabilities from "./Capabilities";
import RealExample from "./Real-Examples";
import Forecasting from "./Forecasting";
import StartUsing from "./Start-Using";
import FAQSection from "./Faq";
import FreeTrial from "./FreeTrial";
import Footer from "../components/layout/Footer";
const Feature_page = () => {
    return (
        <div className="2xl:container mx-auto px-4 md:px-8">
            <HeroSection />
            <LogosMarquee />
            <FinancialAnalysis />
            <Steps />
            <Usecase />
            <Difference />
            <Capabilities />
            <RealExample />
            <Forecasting />
            <StartUsing />
            <FAQSection />
            <FreeTrial />
            <Footer />
        </div>
    )
}
export default Feature_page;