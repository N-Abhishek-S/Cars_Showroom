import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-black text-gray-100 font-sans">

      <section 
        className="min-h-screen pt-40 px-5% pb-20 relative bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative max-w-7xl mx-auto">
          <h2 className="font-orbitron text-4xl md:text-5xl mb-8 text-red-500 uppercase tracking-wider">
            About Marsidi Car Show
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
            Marsidi Car Show is the premier destination for car lovers. We showcase the latest, most luxurious, and iconic automobiles from around the world. Our annual event brings together collectors, enthusiasts, and manufacturers to celebrate automotive excellence.
          </p>
          <p className="text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
            Founded in 2010, Marsidi has grown from a local gathering to an internationally recognized showcase of automotive innovation and design. Each year, we feature rare classics, cutting-edge supercars, and visionary concept vehicles that define the future of transportation.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 py-8 text-center">
        <p className="text-sm">
          &copy; 2025 Marsidi Car Show. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default About;