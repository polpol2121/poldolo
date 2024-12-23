import { Outlet, Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";  // Add search icon

function Layout() {
  const handleSearch = () => {
    // Handle search logic here
    console.log('Search clicked!');
  };

  return (
    <>
      <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-md">
  <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
    <h1 className="text-3xl font-bold tracking-tight uppercase">Musique</h1>
    <ul className="flex space-x-6 text-lg">
      <li>
        <Link to="/" className="text-gray-300 hover:text-white transition duration-300">Home</Link>
      </li>
      <li>
        <Link to="/pages/Products.jsx" className="text-gray-300 hover:text-white transition duration-300">Products</Link>
      </li>
      <li>
        <Link to="/pages/Contact.jsx" className="text-gray-300 hover:text-white transition duration-300">Contact</Link>
      </li>
    </ul>
    <div className="flex items-center space-x-2">
      <div className="relative">
        <input 
          type="text" 
          placeholder="Search"
          className="px-4 py-2 pl-10 w-40 rounded-full bg-gray-800 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 transition duration-300"
        />
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>
      <button
        onClick={handleSearch} 
        className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-full shadow-md transition duration-300 transform hover:scale-105"
      >
        Search
      </button>
    </div>
  </nav>
</header>


      
      {/* Main Content (Outlet will render child components here) */}
      <Outlet />
    </>
  );
}

export default Layout;
