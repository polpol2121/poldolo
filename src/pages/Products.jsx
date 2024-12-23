import { useEffect, useState } from 'react';

function Products() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  // State for advertisement carousel
  const [currentAdIndex, setCurrentAdIndex] = useState(0);
  const ads = [
    '/store1.jpg', // Advertisement 1
    '/store2.jpg', // Advertisement 2
    '/store3.jpg', // Advertisement 3
  ];

  // Functions to handle advertisement carousel navigation
  const prevAd = () => {
    setCurrentAdIndex((prevIndex) => (prevIndex === 0 ? ads.length - 1 : prevIndex - 1));
  };

  const nextAd = () => {
    setCurrentAdIndex((prevIndex) => (prevIndex === ads.length - 1 ? 0 : prevIndex + 1));
  };

  // Fetch products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://api.escuelajs.co/api/v1/products');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
        setError(error.message);
      }
    };

    fetchProducts();
  }, []);

  // Error handling
  if (error) {
    return <div className="text-center text-red-500 text-lg mt-4">Error: {error}</div>;
  }

  // Loading state
  if (products.length === 0) {
    return <div className="text-center text-gray-500 text-lg mt-4">Loading...</div>;
  }

  // Custom images connected to products
  const customImages = [
    '/elec1.jpg', // Electric Guitar
    '/acoustic1.jpg', // Acoustic Guitar
    '/piano1.jpg', // Piano
    '/drum1.webp', // Drum Set
    '/voi1.jpg', // Violin
    '/saxo1.webp', // Saxophone
    '/flute1.jpg', // Flute
  ];

  const sampleNames = [
    'Electric Guitar', 'Acoustic Guitar', 'Piano', 'Drum Set', 'Violin', 'Saxophone', 'Flute',
  ];

  const samplePrices = [
    15000, 20000, 30000, 25000, 18000, 12000, 8000,
  ];

  return (
    <>
     <section className="bg-gradient-to-r from-gray-800 to-gray-900">
  <div className="relative max-w-full mx-auto rounded-lg overflow-hidden shadow-xl">
    <img
      src={ads[currentAdIndex]}
      alt="Advertisement"
      className="w-full h-[250px] object-cover transition-transform duration-1000 ease-in-out transform hover:scale-105"
    />
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="absolute top-1/2 left-0 transform -translate-y-1/2 px-6 py-2">
      <button
        onClick={prevAd}
        className="bg-indigo-700 text-white p-3 rounded-full shadow-lg hover:bg-indigo-800 transition-all duration-300 focus:outline-none"
      >
        &#10094;
      </button>
    </div>
    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 px-6 py-2">
      <button
        onClick={nextAd}
        className="bg-indigo-700 text-white p-3 rounded-full shadow-lg hover:bg-indigo-800 transition-all duration-300 focus:outline-none"
      >
        &#10095;
      </button>
    </div>
    <div className="absolute bottom-6 left-6 text-white font-semibold text-xl sm:text-2xl md:text-3xl max-w-xl z-10">
      <h3>Special Offers Just for You!</h3>
      <p className="text-sm mt-2">Explore amazing deals with unbeatable prices!</p>
    </div>
  </div>
</section>

{/* Limited Time Offer */}
<section>
  <div className="bg-gray-800 text-center py-3 shadow-lg">
    <div className="text-xl font-bold text-white font-sans">
      🚨 Limited Time Offer: <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600">50% Off Sale</span> on Selected Items! 🚨
    </div>
  </div>
</section>

<section className="bg-gradient-to-r from-blue-900 to-teal-950 shadow-lg">
  <section className="max-w-7xl mx-auto px-6 py-4">
    <section className="flex justify-between items-center">

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

      {/* Products List */}
      <div className="bg-gray-800 min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-center text-white mb-8">Featured Products</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="bg-transparent rounded-xl shadow-lg overflow-hidden border border-gray-700"
              >
                <img
                  src={customImages[index % customImages.length]}
                  alt={sampleNames[index % sampleNames.length]}
                  className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-105"
                />
                <div className="p-4 space-y-2 bg-transparent">
                  <h4 className="text-lg font-bold text-white truncate">{sampleNames[index % sampleNames.length]}</h4>
                  <div className="text-lg font-semibold text-white">₱{samplePrices[index % samplePrices.length]}</div>
                  <div className="mt-4 flex gap-2">
                    <button className="bg-transparent border border-purple-500 text-purple-500 px-3 py-1.5 rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-200 transform hover:scale-105 text-sm">
                      Add to Cart
                    </button>
                    <button className="relative bg-gradient-to-r from-purple-600 to-purple-800 text-white px-4 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 text-sm">
                      <span className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-600 opacity-30 rounded-full blur-md"></span>
                      <span className="relative z-10">Buy Now</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
