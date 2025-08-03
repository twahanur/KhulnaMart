import React from 'react';
import { Truck, Headphones, RefreshCw, CreditCard, Banknote } from 'lucide-react';

// This is the main component for the features section.
// It's designed to be responsive, adapting its layout for different screen sizes.
const Features = () => {
  // Define the data for each feature.
  // Each object contains the icon component, title, and description.
  const features = [
    {
      icon: Truck,
      title: 'Free Delivery',
      description: 'From $59.89',
    },
    {
      icon: Headphones,
      title: 'Support 24/7',
      description: 'Online 24 hours',
    },
    {
      icon: RefreshCw,
      title: 'Free Return',
      description: '365 a day',
    },
    {
      icon: CreditCard,
      title: 'Payment Method',
      description: 'Secure payment',
    },
    {
      icon: Banknote,
      title: 'Big Saving',
      description: 'Weekend Sales',
    },
  ];

  return (
    <div className="bg-gray-50 px-4 ">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-center">
          {features.map((feature, index) => (
            // A feature card component. It's a simple flex container
            // with an icon, title, and description.
            <div
              key={index}
              className="flex items-center space-x-4 p-4 md:p-6 bg-white rounded-xl border border-gray-200 shadow-sm"
            >
              {/* Feature Icon */}
              <div className="text-blue-600">
                <feature.icon className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              
              {/* Feature Text Content */}
              <div className="flex flex-col">
                <h3 className="font-semibold text-base md:text-lg text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-gray-500">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
