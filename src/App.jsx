import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Products from "./components/Products";
import Register from "./components/Register";
import Login from "./components/Login";
import ServiceDetail from "./components/ServiceDetail";

// eslint-disable-next-line react/prop-types
function MainLayout({ children }) {
	return (
		<div>
			<Navbar />
			{children}
			<Footer />
		</div>
	);
}

function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route path="/services" element={<MainLayout><Services /></MainLayout>} />
					<Route path="/products" element={<MainLayout><Products /></MainLayout>} />
					<Route path="/services/:service" element={<MainLayout><ServiceDetail /></MainLayout>} />
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} />
					<Route path="/" element={<MainLayout><Services /></MainLayout>} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;