import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AutoScroll from "./components/AutoScroll";
import FeaturesSection from "./components/FeaturesSection";
import CallToActionSection from "./components/CallToActionSection";
import DynamicResourceManagementSection from "./components/DynamicResourceManagementSection";
import BookDemoBanner from "./components/BookDemoBanner";
import FAQs from "./components/FAQ";
import Footer from "./components/Footer";

function MainContent() {
    return (
        <>
            <Hero />
            <AutoScroll />
            <FeaturesSection />
            <CallToActionSection />
            <DynamicResourceManagementSection />
            <BookDemoBanner />
            <FAQs />
        </>
    );
}

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<MainContent />} />
                {/* Add more routes here as needed */}
            </Routes>
            <Footer />
        </>
    );
}

export default App;
