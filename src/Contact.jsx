import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-gray-100 font-sans">
      {/* Main Content */}
      <section 
        className="min-h-screen pt-20 px-5% pb-20 relative bg-cover bg-center flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2083&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
        
        <h2 className="font-orbitron text-4xl md:text-5xl mb-12 text-red-500 uppercase tracking-wider relative z-10">
          Contact Us
        </h2>
        
        <form className="w-full max-w-2xl bg-blue-900/80 p-8 md:p-12 rounded-xl shadow-2xl relative z-10 backdrop-blur-sm border border-blue-700">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 mb-6 border-none bg-gray-100/10 text-white rounded-md focus:outline-none focus:bg-gray-100/20 focus:border-l-4 focus:border-l-red-500 transition-all duration-300 placeholder-gray-300"
          />
          
          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 mb-6 border-none bg-gray-100/10 text-white rounded-md focus:outline-none focus:bg-gray-100/20 focus:border-l-4 focus:border-l-red-500 transition-all duration-300 placeholder-gray-300"
          />
          
          <textarea
            placeholder="Your Message"
            required
            className="w-full px-4 py-3 mb-6 border-none bg-gray-100/10 text-white rounded-md focus:outline-none focus:bg-gray-100/20 focus:border-l-4 focus:border-l-red-500 transition-all duration-300 placeholder-gray-300 min-h-[150px] resize-y"
          ></textarea>
          
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-3 px-8 rounded-md font-semibold uppercase tracking-wider hover:bg-red-600 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 shadow-md"
          >
            Send Message
          </button>
        </form>
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

export default Contact;