import Header from "./components/Header";
import Hero from "./components/Hero";
import AutoScroll from "./components/AutoScroll";
import FeaturesSection from "./components/FeaturesSection";
import CallToActionSection from "./components/CallToActionSection";
import DynamicResourceManagementSection from "./components/DynamicResourceManagementSection";
import BookDemoBanner from "./components/BookDemoBanner";
import FAQs from "./components/FAQ";
import Footer from "./components/Footer";
function App(){
    return (
        <>
            <Header />
            <Hero />
            <AutoScroll />
            <FeaturesSection />
            <CallToActionSection />
            <DynamicResourceManagementSection />
            <BookDemoBanner />
            <FAQs />
            <Footer />
        </>
    );
}
export default App;