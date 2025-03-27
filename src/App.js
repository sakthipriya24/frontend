import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import LandingPage from './pages/LandingPage';
import Arrivals from './components/Arrivals';
import Categories from './components/Categories';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      {/* Global Navbar (Appears on All Pages) */}
      <Navbar />

      <Routes>
        <Route path="/*" element={<LandingPage />} />
        <Route path="/recent" element={<Arrivals />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
