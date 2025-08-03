// ✅ Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white pt-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-green-600">
        
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">EcoShop</h3>
          <p className="text-sm">
            Your one-stop eco-friendly shopping solution. Sustainable, affordable, and reliable.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/shop" className="hover:underline">Shop</Link></li>
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
            <li><Link to="/returns" className="hover:underline">Returns</Link></li>
            <li><Link to="/shipping" className="hover:underline">Shipping Info</Link></li>
            <li><Link to="/terms" className="hover:underline">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-semibold mb-4">Subscribe</h4>
          <p className="text-sm mb-2">Get latest updates & offers.</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-2 py-1 rounded-l bg-white text-black text-sm"
            />
            <button type="submit" className="bg-yellow-400 text-black px-3 rounded-r text-sm font-semibold">
              Go
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300 py-4 px-4 max-w-7xl mx-auto">
        <p>&copy; {new Date().getFullYear()} EcoShop. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-white"><FaFacebookF /></a>
          <a href="#" className="hover:text-white"><FaTwitter /></a>
          <a href="#" className="hover:text-white"><FaInstagram /></a>
          <a href="#" className="hover:text-white"><FaLinkedinIn /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
