import { useState } from 'react';
import { FaCar, FaBars, FaTachometerAlt, FaCogs, FaGasPump, FaBolt, FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const MarsidiInventory = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  const cars = [
    {
      id: 1,
      name: "Mercedes-Benz S-Class",
      category: "luxury",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      badge: "New Arrival",
      specs: [
        { icon: <FaTachometerAlt />, text: "3.9s 0-60" },
        { icon: <FaCogs />, text: "Automatic" },
        { icon: <FaGasPump />, text: "Hybrid" }
      ],
      price: "$115,900",
      tax: "+tax"
    },
    {
      id: 2,
      name: "Porsche 911 Turbo S",
      category: "sports",
      image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      badge: "Limited",
      specs: [
        { icon: <FaTachometerAlt />, text: "2.6s 0-60" },
        { icon: <FaCogs />, text: "PDK" },
        { icon: <FaGasPump />, text: "20 MPG" }
      ],
      price: "$203,500",
      tax: "+tax"
    },
    {
      id: 3,
      name: "Tesla Model S Plaid",
      category: "electric",
      image: "https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      badge: "Just In",
      specs: [
        { icon: <FaTachometerAlt />, text: "1.99s 0-60" },
        { icon: <FaCogs />, text: "Automatic" },
        { icon: <FaBolt />, text: "396 mi" }
      ],
      price: "$129,990",
      tax: "+tax"
    },
    {
      id: 4,
      name: "Lamborghini Aventador",
      category: "super",
      image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      specs: [
        { icon: <FaTachometerAlt />, text: "2.9s 0-60" },
        { icon: <FaCogs />, text: "ISR" },
        { icon: <FaGasPump />, text: "11 MPG" }
      ],
      price: "$417,826",
      tax: "+tax"
    },
    {
      id: 5,
      name: "Rolls-Royce Phantom",
      category: "luxury",
      image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      badge: "Exclusive",
      specs: [
        { icon: <FaTachometerAlt />, text: "5.3s 0-60" },
        { icon: <FaCogs />, text: "Automatic" },
        { icon: <FaGasPump />, text: "18 MPG" }
      ],
      price: "$455,000",
      tax: "+tax"
    },
    {
      id: 6,
      name: "Audi R8 V10 Plus",
      category: "sports",
      image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      specs: [
        { icon: <FaTachometerAlt />, text: "3.2s 0-60" },
        { icon: <FaCogs />, text: "DCT" },
        { icon: <FaGasPump />, text: "17 MPG" }
      ],
      price: "$169,900",
      tax: "+tax"
    }
  ];

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const filterCars = (category) => {
    setActiveFilter(category);
  };

  const filteredCars = activeFilter === 'all' 
    ? cars 
    : cars.filter(car => car.category === activeFilter);

  return (
    <div className="font-sans text-gray-900 bg-gray-100">

      <section className="inventory-section py-24 md:py-40 bg-gradient-to-br from-gray-100 to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-header text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 relative inline-block pb-6 tracking-wider">
              Premium Inventory
              <span className="absolute bottom-0 left-1/4 w-1/2 h-1 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full"></span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-6 leading-relaxed">
              Discover our exclusive collection of the world's finest automobiles, each meticulously selected for performance, luxury, and prestige.
            </p>
          </div>
          
          {/* Filter Controls */}
          <div className="filter-controls flex justify-center flex-wrap gap-4 mb-12">
            <button 
              className={`filter-btn px-6 py-2 rounded-full font-semibold uppercase text-sm tracking-wider border-2 ${activeFilter === 'all' ? 'bg-yellow-500 border-yellow-500 text-gray-900 shadow-lg shadow-yellow-500/30' : 'border-yellow-500 text-gray-900 hover:bg-yellow-500 hover:shadow-lg hover:shadow-yellow-500/30'} transition-all duration-300`}
              onClick={() => filterCars('all')}
            >
              All Vehicles
            </button>
            <button 
              className={`filter-btn px-6 py-2 rounded-full font-semibold uppercase text-sm tracking-wider border-2 ${activeFilter === 'luxury' ? 'bg-yellow-500 border-yellow-500 text-gray-900 shadow-lg shadow-yellow-500/30' : 'border-yellow-500 text-gray-900 hover:bg-yellow-500 hover:shadow-lg hover:shadow-yellow-500/30'} transition-all duration-300`}
              onClick={() => filterCars('luxury')}
            >
              Luxury
            </button>
            <button 
              className={`filter-btn px-6 py-2 rounded-full font-semibold uppercase text-sm tracking-wider border-2 ${activeFilter === 'sports' ? 'bg-yellow-500 border-yellow-500 text-gray-900 shadow-lg shadow-yellow-500/30' : 'border-yellow-500 text-gray-900 hover:bg-yellow-500 hover:shadow-lg hover:shadow-yellow-500/30'} transition-all duration-300`}
              onClick={() => filterCars('sports')}
            >
              Sports
            </button>
            <button 
              className={`filter-btn px-6 py-2 rounded-full font-semibold uppercase text-sm tracking-wider border-2 ${activeFilter === 'super' ? 'bg-yellow-500 border-yellow-500 text-gray-900 shadow-lg shadow-yellow-500/30' : 'border-yellow-500 text-gray-900 hover:bg-yellow-500 hover:shadow-lg hover:shadow-yellow-500/30'} transition-all duration-300`}
              onClick={() => filterCars('super')}
            >
              Supercars
            </button>
            <button 
              className={`filter-btn px-6 py-2 rounded-full font-semibold uppercase text-sm tracking-wider border-2 ${activeFilter === 'electric' ? 'bg-yellow-500 border-yellow-500 text-gray-900 shadow-lg shadow-yellow-500/30' : 'border-yellow-500 text-gray-900 hover:bg-yellow-500 hover:shadow-lg hover:shadow-yellow-500/30'} transition-all duration-300`}
              onClick={() => filterCars('electric')}
            >
              Electric
            </button>
          </div>
          
          {/* Cars Grid */}
          <div className="cars-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {filteredCars.map(car => (
              <div 
                key={car.id} 
                className="car-card bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-400 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="car-image h-56 overflow-hidden relative">
                  <img 
                    src={car.image} 
                    alt={car.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  {car.badge && (
                    <span className="car-badge absolute top-4 right-4 bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                      {car.badge}
                    </span>
                  )}
                </div>
                <div className="car-details p-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">{car.name}</h3>
                  <div className="car-specs flex justify-between my-6 pb-6 border-b border-gray-200">
                    {car.specs.map((spec, index) => (
                      <div key={index} className="spec-item text-center">
                        <div className="text-yellow-500 text-lg mb-2">{spec.icon}</div>
                        <p className="text-sm text-gray-600">{spec.text}</p>
                      </div>
                    ))}
                  </div>
                  <div className="car-price flex justify-between items-center">
                    <div className="price-tag text-xl font-bold text-blue-900">
                      {car.price} <span className="text-sm font-normal text-gray-500">{car.tax}</span>
                    </div>
                    <a 
                      href="#" 
                      className="view-btn bg-blue-900 text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wider hover:bg-red-500 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-100 py-12 mt-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="footer-content flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <div className="footer-logo text-2xl font-bold mb-2">
                Marsidi<span className="text-yellow-500">Cars</span>
              </div>
              <p className="text-gray-400">Premium automotive experiences since 2010</p>
            </div>
            <div className="social-links flex space-x-6">
              <a href="#" className="text-gray-100 hover:text-yellow-500 text-xl transition-colors duration-300">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-100 hover:text-yellow-500 text-xl transition-colors duration-300">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-100 hover:text-yellow-500 text-xl transition-colors duration-300">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-100 hover:text-yellow-500 text-xl transition-colors duration-300">
                <FaYoutube />
              </a>
            </div>
          </div>
          <div className="copyright text-center mt-12 pt-6 border-t border-gray-800 text-gray-500 text-sm">
            <p>&copy; 2025 Marsidi Car Show. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MarsidiInventory;