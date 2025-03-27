import { Routes, Route } from 'react-router-dom';
import './LandingPage.css';
import Arrivals from '../components/Arrivals';
import Categories from '../components/Categories';
import About from '../components/About';
import Contact from '../components/Contact';

function LandingPage() {
  return (
    <div>
      <div className='container'></div>

      <Routes>
        <Route path="/recent" element={<Arrivals />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default LandingPage;
