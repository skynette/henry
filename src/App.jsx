import { BrowserRouter as Router, Routes, Route, Navigate  } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Products from "./components/Products";

function App() {
    return (
        <div>
            <Router>
                <div>
                    <Navbar />
                    <Routes>
                        <Route path="/services" element={<Services />} />
                        <Route path="/products" element={<Products />} />
						<Route path="/" element={<Navigate to="/services" />} />
                    </Routes>
                    <Footer />
                </div>
            </Router>
        </div>
    );
}
export default App;