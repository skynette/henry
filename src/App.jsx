import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";

function App() {
    return (
        <div>
            <Router>
                <div>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<HeroSection />} />
                    </Routes>
                    <Footer />
                </div>
            </Router>
        </div>
    );
}
export default App;