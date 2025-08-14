import React from 'react';
import { Mail, Facebook, Twitter, Instagram, Lock, Headphones, RefreshCw, Truck, DollarSign, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const AppFooter = () => {
  const services = [
    { icon: Lock, title: '100% Secure Payments', description: 'All major credit & debit cards accepted' },
    { icon: Headphones, title: 'Help Center', description: 'Got a question? Look no further. Browse our FAQs or submit your here.' },
    { icon: RefreshCw, title: 'TrustPay', description: '100% Payment Protection. Easy Return Policy' },
    { icon: Truck, title: 'Worldwide Delivery', description: 'With sites in 5 languages, we ship to over 200 countries & regions.' },
    { icon: DollarSign, title: 'Great Value', description: 'We offer competitive prices on our 100 million plus product range.' },
  ];

  const navigationLinks = [
    {
      title: 'Trade Services',
      links: [
        { label: 'Trade Assurance', path: '/csr-policy' },
        { label: 'Business Identity', path: '/aboutus' },
        { label: 'Logistics Service', path: '/contactus' },
        { label: 'Secure Payment', path: '/privacy-policy' },
        { label: 'Inspection Services', path: '/terms-of-sale' },
        { label: 'Request For Quotation', path: '/contactus' },
      ],
    },
    {
      title: 'Policy Info',
      links: [
        { label: 'Privacy Policy', path: '/privacy-policy' },
        { label: 'Terms Of Sale', path: '/terms-of-sale' },
        { label: 'Terms Of Use', path: '/terms-of-use' },
        { label: 'Report Abuse', path: '/contactus' },
        { label: 'Policy', path: '/csr-policy' },
        { label: 'CSR Policy', path: '/csr-policy' },
      ],
    },
    {
      title: 'Our Business',
      links: [
        { label: 'Advertise On TopDeals', path: '/affiliate' },
        { label: 'Media Enquiries', path: '/contactus' },
        { label: 'Be An Affiliate', path: '/affiliate' },
        { label: 'Deal Of The Day', path: '/blog' },
        { label: 'Diwali Offers', path: '/blog' },
        { label: 'Snapdeal Gold', path: '/aboutus' },
      ],
    },
    {
      title: 'Our Company',
      links: [
        { label: 'Contact Us', path: '/contactus' },
        { label: 'About Us', path: '/aboutus' },
        { label: 'Blog', path: '/blog' },
        { label: 'Careers', path: '/aboutus' },
        { label: 'Core Values', path: '/aboutus' },
        { label: 'Sitemap', path: '/' },
      ],
    },
    {
      title: 'My Account',
      links: [
        { label: 'Login', path: '/login' },
        { label: 'Register', path: '/register' },
        { label: 'Shopping Cart', path: '/cart' },
        { label: 'Checkout', path: '/checkout' },
        { label: 'Wishlist', path: '/user' },
        { label: 'F.A.Q', path: '/contactus' },
      ],
    },
  ];

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
        {/* Newsletter */}
        <div className="flex flex-col lg:flex-row items-center justify-between pb-8 border-b border-gray-200 mb-8 space-y-4 lg:space-y-0">
          <div className="flex items-center space-x-4">
            <Mail className="w-6 h-6 text-blue-600" />
            <div className="flex flex-col text-center lg:text-left">
              <h3 className="font-semibold text-lg">SIGN UP TO NEWSLETTER</h3>
              <p className="text-sm">AND RECEIVE <span className="font-bold text-blue-600">$29</span> COUPON FOR FIRST SHOPPING</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full lg:w-auto">
            <input type="email" placeholder="Email Address here" className="w-full sm:w-64 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
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

        {/* Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 py-8 mb-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4">
              <service.icon className="w-12 h-12 text-blue-600 mb-3" />
              <h4 className="font-semibold text-lg mb-1">{service.title}</h4>
              <p className="text-sm text-gray-500">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-8 lg:gap-x-8 pb-8 border-b border-gray-200 mb-8">
          {navigationLinks.map((column, index) => (
            <div key={index} className="flex flex-col">
              <h4 className="font-bold text-gray-800 mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <Link to={link.path} className="text-sm text-gray-500 hover:text-blue-600 transition-colors duration-200">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
          <p className="text-sm text-gray-500 text-center lg:text-left">
            © 2020 <a className='text-orange-600 underline' href="https://twahanur.vercel.app" target="_blank" rel="noopener noreferrer">Md Twahanur Rahman</a> . All Rights Reserved.
          </p>
          <div className="flex items-center space-x-2">
            {paymentIcons.map((src, index) => (
              <img key={index} src={src} alt="Payment Method" className="h-6 object-contain" />
            ))}
          </div>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 transition-colors duration-200" aria-label="Scroll to top">
            <span className="hidden lg:inline">Go to top</span>
            <ChevronUp className="w-5 h-5 bg-gray-200 p-1 rounded-full" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
