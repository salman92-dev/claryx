import HeroSection from "./Hero-section";
import LogosMarquee from "../components/Trusted-Companies";
import FinancialAnalysis from "./Financial-Analysis";
import Steps from "./Steps";
import Usecase from "./Use-Case";
import Difference from "./Difference";
const Feature_page = () => {
    return (
        <div className="2xl:container mx-auto px-4 md:px-8">
            <HeroSection />
            <LogosMarquee />
            <FinancialAnalysis />
            <Steps />
            <Usecase />
            <Difference />
        </div>
    )
}
export default Feature_page;