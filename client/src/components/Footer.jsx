import React from 'react';
import { Mail, Facebook, Twitter, Instagram, Lock, Headphones, RefreshCw, Truck, DollarSign, ChevronUp } from 'lucide-react';

// The main footer component
const App = () => {
  // Data for the service features section.
  const services = [
    {
      icon: Lock,
      title: '100% Secure Payments',
      description: 'All major credit & debit cards accepted',
    },
    {
      icon: Headphones,
      title: 'Help Center',
      description: 'Got a question? Look no further. Browse our FAQs or submit your here.',
    },
    {
      icon: RefreshCw,
      title: 'TrustPay',
      description: '100% Payment Protection. Easy Return Policy',
    },
    {
      icon: Truck,
      title: 'Worldwide Delivery',
      description: 'With sites in 5 languages, we ship to over 200 countries & regions.',
    },
    {
      icon: DollarSign,
      title: 'Great Value',
      description: 'We offer competitive prices on our 100 million plus product range.',
    },
  ];

  // Data for the navigation links in each column.
  const navigationLinks = [
    {
      title: 'Trade Services',
      links: [
        'Trade Assurance',
        'Business Identity',
        'Logistics Service',
        'Secure Payment',
        'Inspection Services',
        'Request For Quotation',
      ],
    },
    {
      title: 'Policy Info',
      links: [
        'Privacy Policy',
        'Terms Of Sale',
        'Terms Of Use',
        'Report Abuse',
        'Policy',
        'CSR Policy',
      ],
    },
    {
      title: 'Our Business',
      links: [
        'Advertise On TopDeals',
        'Media Enquiries',
        'Be An Affiliate',
        'Deal Of The Day',
        'Diwali Offers',
        'Snapdeal Gold',
      ],
    },
    {
      title: 'Our Company',
      links: [
        'Contact Us',
        'About Us',
        'Blog',
        'Careers',
        'Core Values',
        'Sitemap',
      ],
    },
    {
      title: 'My Account',
      links: [
        'Contact Us',
        'About Us',
        'Shopping Cart',
        'Checkout',
        'Wishlist',
        'F.A.Q',
      ],
    },
  ];
  
  // Placeholder images for the payment icons.
  const paymentIcons = [
    'https://placehold.co/50x30/FFFFFF/000?text=PayPal',
    'https://placehold.co/50x30/FFFFFF/000?text=MasterCard',
    'https://placehold.co/50x30/FFFFFF/000?text=Visa',
    'https://placehold.co/50x30/FFFFFF/000?text=Maestro',
    'https://placehold.co/50x30/FFFFFF/000?text=Discover',
  ];

  return (
    <footer className="bg-white text-gray-700">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-10">
        {/* Newsletter Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between pb-8 border-b border-gray-200 mb-8 space-y-4 lg:space-y-0">
          <div className="flex items-center space-x-4">
            <Mail className="w-6 h-6 text-blue-600" />
            <div className="flex flex-col text-center lg:text-left">
              <h3 className="font-semibold text-lg">SIGN UP TO NEWSLETTER</h3>
              <p className="text-sm">AND RECEIVE <span className="font-bold text-blue-600">$29</span> COUPON FOR FIRST SHOPPING</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full lg:w-auto">
            <input
              type="email"
              placeholder="Email Address here"
              className="w-full sm:w-64 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition-colors duration-200">
              Subscribe
            </button>
          </div>
          <div className="flex space-x-4 mt-4 lg:mt-0">
            <Facebook className="w-6 h-6 text-gray-500 hover:text-blue-600 cursor-pointer transition-colors" />
            <Twitter className="w-6 h-6 text-gray-500 hover:text-blue-400 cursor-pointer transition-colors" />
            <Instagram className="w-6 h-6 text-gray-500 hover:text-pink-500 cursor-pointer transition-colors" />
          </div>
        </div>

        {/* Service Icons Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 py-8 mb-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4">
              <service.icon className="w-12 h-12 text-blue-600 mb-3" />
              <h4 className="font-semibold text-lg mb-1">{service.title}</h4>
              <p className="text-sm text-gray-500">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Navigation Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-8 lg:gap-x-8 pb-8 border-b border-gray-200 mb-8">
          {navigationLinks.map((column, index) => (
            <div key={index} className="flex flex-col">
              <h4 className="font-bold text-gray-800 mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-sm text-gray-500 hover:text-blue-600 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright and Payment Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
          <p className="text-sm text-gray-500 text-center lg:text-left">
            © 2020 <a className='text-orange-600 underline' href="https://twahanur.vercel.app" target='blank'>Md Twahanur rahman</a> . All Rights Reserved.
          </p>
          <div className="flex items-center space-x-2">
            {paymentIcons.map((src, index) => (
              <img
                key={index}
                src={src}
                alt="Payment Method"
                className="h-6 object-contain"
              />
            ))}
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 transition-colors duration-200"
            aria-label="Scroll to top"
          >
            <span className="hidden lg:inline">Go to top</span>
            <ChevronUp className="w-5 h-5 bg-gray-200 p-1 rounded-full" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default App;
