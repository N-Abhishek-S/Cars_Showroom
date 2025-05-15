import { FaTrophy, FaUserTie, FaShieldAlt } from "react-icons/fa";

const Home = () => {
  return (
    <div className="font-sans text-gray-900 bg-gray-100">
      <section
        className="hero bg-gradient-to-b from-black/70 to-black/70 bg-center bg-cover h-screen flex flex-col justify-center items-center text-center px-8 mt-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-wider mb-4 text-white animate-fadeInDown">
          Premium Automotive Excellence
        </h1>
        <p className="text-xl md:text-2xl max-w-4xl mb-8 text-white animate-fadeInUp">
          Experience the pinnacle of luxury and performance at Marsidi Car Show
        </p>
        <a
          href="cars.html"
          className="btn bg-red-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg shadow-red-500/40 hover:bg-red-600 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-500/50 transition-all duration-300 animate-fadeIn"
        >
          Explore Collection
        </a>
      </section>

      {/* Main Content */}
      <main className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-title text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 relative inline-block pb-4">
              Why Choose Marsidi
              <span className="absolute bottom-0 left-1/4 w-1/2 h-1 bg-red-500"></span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
              We offer an unparalleled selection of the world's finest
              automobiles with exceptional service and expertise.
            </p>
          </div>

          <div className="features grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="feature-card bg-white p-8 rounded-xl shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-300 text-center">
              <div className="feature-icon text-red-500 text-5xl mb-6">
                <FaTrophy />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Premium Selection
              </h3>
              <p className="text-gray-600">
                Curated collection of the world's most exclusive and
                high-performance vehicles.
              </p>
            </div>

            <div className="feature-card bg-white p-8 rounded-xl shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-300 text-center">
              <div className="feature-icon text-red-500 text-5xl mb-6">
                <FaUserTie />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Expert Advisors
              </h3>
              <p className="text-gray-600">
                Our knowledgeable team provides personalized guidance to find
                your perfect vehicle.
              </p>
            </div>

            <div className="feature-card bg-white p-8 rounded-xl shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-300 text-center">
              <div className="feature-icon text-red-500 text-5xl mb-6">
                <FaShieldAlt />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Certified Quality
              </h3>
              <p className="text-gray-600">
                Every vehicle undergoes rigorous inspection to ensure top
                condition and reliability.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
