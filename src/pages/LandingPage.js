// import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './LandingPage.css';
import Arrivals from '../components/Arrivals';
import Categories from '../components/Categories';
import About from '../components/About';
import Contact from '../components/Contact';

const products = [
  { id: 1, title: "Product 1", image: "https://via.placeholder.com/150", reviews: 120, rating: 4.5 },
  { id: 2, title: "Product 2", image: "https://via.placeholder.com/150", reviews: 95, rating: 4.2 },
  { id: 3, title: "Product 3", image: "https://via.placeholder.com/150", reviews: 230, rating: 4.8 }
];

const LandingPage = () => {
  return (
    <div>
      <div className='container'>
        {["Mostly viewed", "Mostly watched", "Mostly sold", "Best Reviews", "What's New"].map((title, index) => (
          <div key={index}>
            <h2 className="section-title">
              <span>{title}</span>
            </h2>
            {/* Product Cards Section */}
            <div className="product-cards">
              {products.map((product) => (
                <div key={product.id} className="card">
                  <img src={product.image} alt={product.title} />
                  <h3>{product.title}</h3>
                  <p>{product.reviews} Reviews</p>
                  <p>⭐ {product.rating}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Routes>
        <Route path="/recent" element={<Arrivals />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default LandingPage;

// import { Routes, Route } from 'react-router-dom';
// import './LandingPage.css';
// import Arrivals from '../components/Arrivals';
// import Categories from '../components/Categories';
// import About from '../components/About';
// import Contact from '../components/Contact';

// function LandingPage() {
//   return (
//     <div>
//       <div className='container'>
//         <h2 className="section-title">
//           <span>Mostly viewed</span>
//         </h2>
//         <h2 className="section-title">
//           <span>Mostly watched</span>
//         </h2>
//         <h2 className="section-title">
//           <span>Mostly sold</span>
//         </h2>
//         <h2 className="section-title">
//           <span>Best Reviews</span>
//         </h2>
//         <h2 className="section-title">
//           <span>What's New</span>
//         </h2>
//       </div>

//       <Routes>
//         <Route path="/recent" element={<Arrivals />} />
//         <Route path="/categories" element={<Categories />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </div>
//   );
// }

// export default LandingPage;
