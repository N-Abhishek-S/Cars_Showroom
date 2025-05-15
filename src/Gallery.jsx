import React, { useState } from 'react';
import { FaCar, FaBars, FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Gallery = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  const galleryItems = [
    {
      id: 1,
      category: 'luxury',
      image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      title: 'Mercedes-Benz S-Class',
      description: 'The pinnacle of automotive luxury and technology'
    },
    {
      id: 2,
      category: 'sports',
      image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      title: 'Porsche 911 Turbo',
      description: 'Legendary performance with everyday usability'
    },
    {
      id: 3,
      category: 'super',
      image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      title: 'Lamborghini Aventador',
      description: 'Exhilarating performance and head-turning design'
    },
    {
      id: 4,
      category: 'classic',
      image: 'https://images.unsplash.com/photo-1550353127-b0da3aeaa0ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      title: '1969 Ford Mustang',
      description: 'American muscle at its finest'
    },
    {
      id: 5,
      category: 'luxury',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      title: 'Range Rover Autobiography',
      description: 'Ultimate luxury in any terrain'
    },
    {
      id: 6,
      category: 'sports',
      image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      title: 'Audi R8',
      description: 'Supercar performance with everyday practicality'
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans">

      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 relative inline-block pb-4">
              Automotive Gallery
              <span className="absolute bottom-0 left-1/4 w-1/2 h-1 bg-red-500"></span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
              Explore our stunning collection of luxury and performance vehicles through these breathtaking images
            </p>
          </div>
          
          {/* Filter Controls */}
          <div className="flex justify-center flex-wrap gap-4 mb-12">
            {['all', 'luxury', 'sports', 'classic', 'super'].map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full border-2 border-red-500 font-semibold transition
                  ${activeFilter === filter 
                    ? 'bg-red-500 text-white' 
                    : 'bg-transparent text-red-500 hover:bg-red-500 hover:text-white'}`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {filteredItems.map(item => (
              <div 
                key={item.id}
                className="relative overflow-hidden rounded-xl shadow-lg group transition-transform duration-400 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-10 group-hover:translate-y-0 transition-transform duration-300 z-10">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-200">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2025 Marsidi Car Show. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-red-500 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-red-500 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-red-500 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-red-500 transition"><FaYoutube /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Gallery;