import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './scrollToTop';
import Home from './pages/Home/home';
import About from './pages/About/about';
import Portfolio from './pages/Portfolio/portfolio';
import Contact from './pages/Contact/contact';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';

function App() {
	return (
		<div className="App">
			<Router>
				<ScrollToTop />
				<Header />
				<Routes>
					<Route path="" element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="portfolio" element={<Portfolio />} />
					<Route path="contact" element={<Contact />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
