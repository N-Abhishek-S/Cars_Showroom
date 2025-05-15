import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 pt-16 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="footer-content grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="footer-column">
              <h3 className="text-2xl font-bold text-red-500 mb-6">Marsidi Cars</h3>
              <p className="text-gray-400 mb-4">
                Premium automotive experiences since 2010. We bring the world's finest cars to discerning collectors.
              </p>
              <div className="social-links flex gap-4">
                <a href="#" className="text-white bg-white/10 w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-500 hover:-translate-y-1 transition-all duration-300">
                  <FaFacebookF />
                </a>
                <a href="#" className="text-white bg-white/10 w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-500 hover:-translate-y-1 transition-all duration-300">
                  <FaTwitter />
                </a>
                <a href="#" className="text-white bg-white/10 w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-500 hover:-translate-y-1 transition-all duration-300">
                  <FaInstagram />
                </a>
                <a href="#" className="text-white bg-white/10 w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-500 hover:-translate-y-1 transition-all duration-300">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
            
            <div className="footer-column">
              <h3 className="text-2xl font-bold text-red-500 mb-6">Quick Links</h3>
              <a href="index.html" className="text-gray-400 hover:text-red-500 mb-3 block transition-colors duration-300">Home</a>
              <a href="about.html" className="text-gray-400 hover:text-red-500 mb-3 block transition-colors duration-300">About Us</a>
              <a href="cars.html" className="text-gray-400 hover:text-red-500 mb-3 block transition-colors duration-300">Our Collection</a>
              <a href="gallery.html" className="text-gray-400 hover:text-red-500 mb-3 block transition-colors duration-300">Gallery</a>
              <a href="contact.html" className="text-gray-400 hover:text-red-500 mb-3 block transition-colors duration-300">Contact</a>
            </div>
            
            <div className="footer-column">
              <h3 className="text-2xl font-bold text-red-500 mb-6">Contact Info</h3>
              <p className="text-gray-400 mb-3 flex items-center">
                <FaMapMarkerAlt className="mr-2" /> 123 Automotive Ave, Motor City
              </p>
              <p className="text-gray-400 mb-3 flex items-center">
                <FaPhone className="mr-2" /> 9420619032
              </p>
              <p className="text-gray-400 mb-3 flex items-center">
                <FaEnvelope className="mr-2" /> nagargojeabhishek96@gmail.com
              </p>
              <p className="text-gray-400 mb-3 flex items-center">
                <FaClock className="mr-2" /> Mon-Sat: 9AM - 7PM
              </p>
            </div>
          </div>
          
          <div className="footer-bottom pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">
              &copy; 2025 Nagargoje Car Show. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>

  )
}

export default Footer
