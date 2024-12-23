import React from 'react';
import { FaGuitar, FaTruck, FaLock } from 'react-icons/fa';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 py-28 px-10 md:px-24">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-90" 
          style={{ backgroundImage: 'url("/guitar_wallpaper.jpg")' }}>
        </div>

        {/* Content */}
        <div className="text-center text-white space-y-10 relative z-10">
          <h2 className="text-6xl md:text-7xl font-extrabold tracking-wider drop-shadow-2xl">
            Welcome to Musique
          </h2>
          <p className="text-2xl md:text-3xl font-light">
            Your One-Stop Shop for Musical Instruments & Gear
          </p>
          <div className="flex justify-center space-x-10">
            {/* Shop Now Button */}
            <div className="relative">
      <button
        className="
          relative 
          inline-block 
          px-12 
          py-5 
          text-lg 
          font-bold 
          tracking-wide 
          text-white 
          uppercase 
          rounded-full 
          transform 
          transition-transform 
          hover:scale-110 
          hover:-translate-y-1 
          active:scale-100 
          focus:outline-none 
          focus:ring-4 
          focus:ring-blue-300 
          overflow-hidden
        "
        style={{
          background: "linear-gradient(to right, #1E3A8A, #2563EB, #34D399)", // Dark blue to teal gradient
          backgroundSize: "200% 200%",
          animation: "gradientShift 6s infinite, shadowShift 6s infinite",
          boxShadow: "0 0 20px rgba(0, 123, 255, 0.8), 0 0 40px rgba(0, 123, 255, 0.6)", // Blue glow
        }}
      >
        Shop Now
      </button>
      <style>
        {`
          @keyframes gradientShift {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          @keyframes shadowShift {
            0% {
              box-shadow: 0 0 20px rgba(0, 123, 255, 0.8), 0 0 40px rgba(0, 123, 255, 0.6);
            }
            50% {
              box-shadow: 0 0 30px rgba(0, 123, 255, 1), 0 0 50px rgba(0, 123, 255, 0.8);
            }
            100% {
              box-shadow: 0 0 20px rgba(0, 123, 255, 0.8), 0 0 40px rgba(0, 123, 255, 0.6);
            }
          }
        `}
      </style>
    </div>

            {/* Learn More Button */}
            <button 
  className="relative inline-block px-12 py-5 text-2xl font-semibold text-gray-300 rounded-full transform transition-all duration-500 ease-in-out hover:scale-110 hover:rotate-2 hover:shadow-lg overflow-hidden"
  style={{
    backgroundColor: "grey-800",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.8)", // Initial shadow
  }}
>
  <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-400 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out"></span>
  <span className="relative z-10">Learn More</span>
</button>



          </div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60"></div>
      </div>

      {/* Announcement Bar with Marquee */}
      <div className="bg-blue-900 py-1 text-center text-white">
        <marquee behavior="scroll" direction="left" className="text-lg font-semibold">
          🚨 Limited Time Offer: 50% Off Sale on Selected Items! 🚨
        </marquee>
      </div>
      <section className="bg-gray-800 shadow-lg">
  <section className="max-w-7xl mx-auto px2 py-4">
    <section className="flex justify-between items-center">
      {/* Removed Logo Section */}

      {/* Nav Links */}
      {/* Nav Links */}
      <section className="flex space-x-10">
        <section className="relative group">
          <a
            href="#"
            className="text-white text-lg font-semibold hover:text-purple-600 transition duration-300"
          >
            Guitar
          </a>
          <section className="absolute left-0 right-0 bottom-0 bg-purple-600 h-1 scale-x-0 origin-bottom-left transition-all duration-300 group-hover:scale-x-100" />
        </section>

        <section className="relative group">
          <a
            href="#"
            className="text-white text-lg font-semibold hover:text-purple-600  transition duration-300"
          >
            Sale
          </a>
          <section className="absolute left-0 right-0 bottom-0 bg-purple-600 h-1 scale-x-0 origin-bottom-left transition-all duration-300 group-hover:scale-x-100" />
        </section>

        <section className="relative group">
          <a
            href="#"
            className="text-white text-lg font-semibold hover:text-purple-600  transition duration-300"
          >
            Accessories
          </a>
          <section className="absolute left-0 right-0 bottom-0 bg-purple-600 h-1 scale-x-0 origin-bottom-left transition-all duration-300 group-hover:scale-x-100" />
        </section>

        <section className="relative group">
          <a
            href="#"
            className="text-white text-lg font-semibold hover:text-purple-600  transition duration-300"
          >
            Electric
          </a>
          <section className="absolute left-0 right-0 bottom-0 bg-purple-600 h-1 scale-x-0 origin-bottom-left transition-all duration-300 group-hover:scale-x-100" />
        </section>

        <section className="relative group">
          <a
            href="#"
            className="text-white text-lg font-semibold hover:text-purple-600  transition duration-300"
          >
            Percussion
          </a>
          <section className="absolute left-0 right-0 bottom-0 bg-purple-600 h-1 scale-x-0 origin-bottom-left transition-all duration-300 group-hover:scale-x-100" />
        </section>

        <section className="relative group">
          <a
            href="#"
            className="text-white text-lg font-semibold hover:text-purple-600  transition duration-300"
          >
            New Arrivals
          </a>
          <section className="absolute left-0 right-0 bottom-0 bg-purple-600 h-1 scale-x-0 origin-bottom-left transition-all duration-300 group-hover:scale-x-100" />
        </section>

        <section className="relative group">
          <a
            href="#"
            className="text-white text-lg font-semibold hover:text-purple-600  transition duration-300"
          >
            Best Sellers
          </a>
          <section className="absolute left-0 right-0 bottom-0 bg-purple-600 h-1 scale-x-0 origin-bottom-left transition-all duration-300 group-hover:scale-x-100" />
        </section>

        <section className="relative group">
          <a
            href="#"
            className="text-white text-lg font-semibold hover:text-purple-600  transition duration-300"
          >
            Deals
          </a>
          <section className="absolute left-0 right-0 bottom-0 bg-purple-600 h-1 scale-x-0 origin-bottom-left transition-all duration-300 group-hover:scale-x-100" />
        </section>
      </section>

      {/* Cart Icon */}
      <section>
        <a href="#" className="text-white text-3xl">
          🛒
        </a>
      </section>
    </section>
  </section>
</section>
     

<section className="relative py-12 bg-gray-800 text-gray-200">
  {/* Decorative Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-gray-700 to-gray-900 opacity-90"></div>
  
  {/* Decorative Elements */}
  <div className="absolute top-10 left-10 w-32 h-32 bg-indigo-600 rounded-full blur-3xl opacity-40 animate-pulse"></div>
  <div className="absolute bottom-10 right-10 w-24 h-24 bg-purple-600 rounded-full blur-2xl opacity-40 animate-pulse"></div>
  
  {/* Section Content */}
  <div className="relative z-10 max-w-7xl mx-auto">
    {/* Section Header */}
    <h3 className="text-4xl font-extrabold text-center mb-8 text-white tracking-wide">
      Best Sellers
    </h3>

    {/* Product Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 md:px-12">
      {[
        { img: '/voi1.jpg', name: 'Violin', price: '₱15,000' },
        { img: '/elec1.jpg', name: 'Electric Guitar', price: '₱20,000' },
        { img: '/piano1.jpg', name: 'Piano', price: '₱30,000' },
        { img: '/voi1.jpg', name: 'Violin Deluxe', price: '₱18,000' },
        { img: '/elec1.jpg', name: 'Electric Bass', price: '₱22,000' },
        { img: '/piano1.jpg', name: 'Digital Piano', price: '₱35,000' },
      ].map((product, index) => (
        <div
          key={index}
          className="bg-gray-900 rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl"
        >
          {/* Product Image */}
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-56 object-cover"
          />
          <div className="p-6 text-center space-y-4">
            <h4 className="text-lg font-semibold truncate text-white">
              {product.name}
            </h4>
            <div className="text-2xl font-bold text-indigo-400">{product.price}</div>
            <div className="flex justify-center gap-4 mt-4">
              <button className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:scale-105 hover:shadow-md transition-transform duration-300">
                Buy Now
              </button>
              <button className="flex-1 bg-gray-700 text-gray-300 px-4 py-2 rounded-lg font-medium hover:scale-105 hover:shadow-md transition-transform duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Call-to-Action */}
    <div className="mt-12 text-center">
      <p className="text-lg md:text-xl text-gray-300">
        Want to explore more? Check out our full collection for the best deals!
      </p>
      <a
        href="#"
        className="inline-block mt-4 bg-gradient-to-r from-blue-500 to-indigo-600 px-8 py-4 text-lg font-semibold text-white rounded-full hover:scale-105 hover:shadow-lg transition-transform duration-300"
      >
        View All Products
      </a>
    </div>
  </div>
</section>

   


      <section className="bg-black py-10 px-8 sm:px-8 lg:px-12">
  <div className="max-w-screen-xl mx-auto text-center">
    <h3 className="text-5xl font-extrabold text-white mb-12 tracking-tight uppercase transform transition-all duration-500 hover:scale-110 hover:text-purple-400">
      Why Musique?
    </h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
      {/* Feature 1 */}
      <div className="bg-gray-800 bg-opacity-90 p-12 rounded-2xl shadow-lg border-4 border-gray-600 transform transition-all duration-400 hover:scale-105 hover:translate-y-4 hover:shadow-2xl hover:border-purple-500 hover:bg-gray-900">
        <FaGuitar className="text-6xl text-white mb-6 transition-transform duration-300 transform hover:rotate-6 hover:scale-125 hover:text-purple-500" />
        <h4 className="text-2xl font-extrabold text-white mb-4 tracking-wide transition-all duration-300 transform hover:text-purple-500">Premium Instruments</h4>
        <p className="text-gray-300 text-lg">Top-quality instruments that ensure perfect sound and long-lasting performance.</p>
      </div>
      {/* Feature 2 */}
      <div className="bg-gray-800 bg-opacity-90 p-12 rounded-2xl shadow-lg border-4 border-gray-600 transform transition-all duration-400 hover:scale-105 hover:translate-y-4 hover:shadow-2xl hover:border-purple-500 hover:bg-gray-900">
        <FaTruck className="text-6xl text-white mb-6 transition-transform duration-300 transform hover:rotate-6 hover:scale-125 hover:text-purple-500" />
        <h4 className="text-2xl font-extrabold text-white mb-4 tracking-wide transition-all duration-300 transform hover:text-purple-500">Fast Delivery</h4>
        <p className="text-gray-300 text-lg">Fast and reliable shipping to get your gear to you without delay.</p>
      </div>
      {/* Feature 3 */}
      <div className="bg-gray-800 bg-opacity-90 p-12 rounded-2xl shadow-lg border-4 border-gray-600 transform transition-all duration-400 hover:scale-105 hover:translate-y-4 hover:shadow-2xl hover:border-purple-500 hover:bg-gray-900">
        <FaLock className="text-6xl text-white mb-6 transition-transform duration-300 transform hover:rotate-6 hover:scale-125 hover:text-purple-500" />
        <h4 className="text-2xl font-extrabold text-white mb-4 tracking-wide transition-all duration-300 transform hover:text-purple-500">Secure Shopping</h4>
        <p className="text-gray-300 text-lg">Shop with confidence knowing your information is safe with our secure payment methods.</p>
      </div>
    </div>
  </div>
</section>





  {/* Features Section */}
  <div className=" bg-black p-6 shadow-xl">
    <h3 className="text-3xl font-bold text-white text-center">Products Features</h3>
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-transparent p-6 rounded-lg shadow-lg border-2 border-purple-500 text-white">
        <h4 className="text-xl font-semibold">Premium Sound Quality</h4>
        <p className="text-sm mt-2">Each guitar is crafted to deliver superior sound, perfect for live performances and recording sessions.</p>
      </div>
      <div className="bg-transparent p-6 rounded-lg shadow-lg border-2 border-purple-500 text-white">
        <h4 className="text-xl font-semibold">Durable Build</h4>
        <p className="text-sm mt-2">Made from top-quality materials, these guitars are designed to withstand the test of time and frequent use.</p>
      </div>
      <div className="bg-transparent p-6 rounded-lg shadow-lg border-2 border-purple-500 text-white">
        <h4 className="text-xl font-semibold">Versatile Design</h4>
        <p className="text-sm mt-2">Whether you're playing rock, blues, or jazz, these guitars deliver unmatched versatility for every genre.</p>
      </div>
    </div>
  </div>




<footer className="bg-gray-900 text-white py-8">
  <div className="max-w-7xl mx-auto text-center px-6">
    {/* Footer Header */}
    <h3 className="text-2xl font-extrabold uppercase tracking-tight">
      Stay Connected
    </h3>
    <p className="text-sm text-gray-500 max-w-md mx-auto mt-2">
      Sign up for updates and exclusive offers.
    </p>

    {/* Email Input */}
    <div className="flex justify-center space-x-4 mt-6">
      <input
        type="email"
        placeholder="Email"
        className="p-3 text-gray-900 bg-transparent border-2 border-gray-600 rounded-md w-64 focus:outline-none focus:ring-2 hover:text-blue-400 transition-all duration-200"
      />
      <button className="bg-gray-800 text-white px-6 py-3 rounded-md border-2 border-gray-600 hover:text-blue-400 transition-all duration-300">
        Subscribe
      </button>
    </div>

    {/* Footer Links Section */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
      <div>
        <h4 className="font-bold text-lg">Useful Links</h4>
        <ul className="text-sm text-gray-500">
          <li><a href="/about" className="hover:text-white">About Us</a></li>
          <li><a href="/services" className="hover:text-white">Our Services</a></li>
          <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
          <li><a href="/privacy-policy" className="hover:text-white">Privacy Policy</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-lg">Services</h4>
        <ul className="text-sm text-gray-500">
          <li><a href="/web-design" className="hover:text-white">Web Design</a></li>
          <li><a href="/seo" className="hover:text-white">SEO Optimization</a></li>
          <li><a href="/digital-marketing" className="hover:text-white">Digital Marketing</a></li>
          <li><a href="/consulting" className="hover:text-white">Consulting</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-lg">Quick Contact</h4>
        <ul className="text-sm text-gray-500">
          <li><a href="tel:+1234567890" className="hover:text-white">Call Us</a></li>
          <li><a href="mailto:support@domain.com" className="hover:text-white">Email Us</a></li>
          <li><a href="/locations" className="hover:text-white">Our Locations</a></li>
          <li><a href="/faq" className="hover:text-white">FAQ</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-lg">Follow Us</h4>
        <div className="flex space-x-4">
          <a href="https://facebook.com" className="text-2xl text-gray-500 hover:text-blue-600 transition-colors duration-300">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" className="text-2xl text-gray-500 hover:text-blue-400 transition-colors duration-300">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" className="text-2xl text-gray-500 hover:text-pink-600 transition-colors duration-300">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="text-xs text-gray-500 mt-8">
      <p>&copy; 2024 Musique. All Rights Reserved.</p>
    </div>
  </div>
</footer>


    </>
  );
};

export default Home;
