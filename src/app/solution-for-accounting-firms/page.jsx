import HeroSection from "./HeroSection";
import LogosMarquee from "../components/Trusted-Companies";
import AccountingPractice from "./Accounting-Practice";
import AccountingFirms from "./Accounting-firms";
import NumberMatters from "./NumberMatters";
import SuccessStories from "./SuccessStories";
import Implementation from "./Implementation";
import CommonFAQ from "./CommonFaq";
import Transform from "./Transform";
import Advisory from "./Advisory";
import Footer from "../components/layout/Footer";
const Accounting_firms = () => {
    return (
        <div className="2xl:container mx-auto px-4 md:px-8">
            <HeroSection />
            <LogosMarquee />
            <AccountingPractice />
            <AccountingFirms />
            <NumberMatters />
            <SuccessStories />
            <Implementation />
            <CommonFAQ />
            <Transform />
            <Advisory />
            <Footer />
        </div>
    )
}
export default Accounting_firms;