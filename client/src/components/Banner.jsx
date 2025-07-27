import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// The static content for your promotional slides.
// We use 'categoryName' and 'subCategoryName' to find the correct data from Redux.
const promotionalContent = [
  {
    imageUrl: 'https://i.ibb.co/rRLNxGy9/image.png',
    title: 'Huge Savings on Apparel',
    subtitle: 'FLAT 50-70% OFF',
    categoryName: 'Apparel',
    subCategoryName: 'Topwear',
  },
  {
    imageUrl: 'https://i.ibb.co/FkD8PzQb/image.png',
    title: 'Footwear Frenzy',
    subtitle: 'STARTING AT $49',
    categoryName: 'Footwear',
    subCategoryName: 'Shoes',
  },
  {
    imageUrl: 'https://i.ibb.co/ymCmKycC/image.png',
    title: 'Accessorize Your Look',
    subtitle: 'NEW ARRIVALS',
    categoryName: 'Accessories',
    subCategoryName: 'Bags',
  },
  {
    imageUrl: 'https://i.ibb.co/LDy5XTYg/image.png',
    title: 'Beauty & Personal Care',
    subtitle: 'UP TO 40% OFF',
    categoryName: 'Personal Care',
    subCategoryName: 'Makeup',
  },
];

// Helper function to format the URL parts
const formatUrlPart = (name = '', id = '') => `${name.replace(/\s+/g, '-')}-${id}`;

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // 1. Get the dynamic data from the Redux store
  const categoryData = useSelector((state) => state.product.allCategory);
  const subCategoryData = useSelector((state) => state.product.allSubCategory);

  // 2. Process the data to create the final banner items with dynamic URLs
  const bannerItems = useMemo(() => {
    // Return an empty array if the required data isn't loaded yet
    if (!categoryData?.length || !subCategoryData?.length) {
      return [];
    }

    return promotionalContent.map(item => {
      const category = categoryData.find(c => c.name === item.categoryName);
      const subCategory = subCategoryData.find(sc => sc.name === item.subCategoryName);

      // Construct the dynamic URL
      const categoryUrlPart = formatUrlPart(category?.name, category?._id);
      const subCategoryUrlPart = formatUrlPart(subCategory?.name, subCategory?._id);
      
      return {
        ...item,
        url: `/${categoryUrlPart}/${subCategoryUrlPart}`,
      };
    });
  }, [categoryData, subCategoryData]); // This code runs only when the Redux data changes

  const nextSlide = useCallback(() => {
    if (bannerItems.length === 0) return;
    const isLastSlide = currentIndex === bannerItems.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, bannerItems.length]);
  
  const prevSlide = useCallback(() => {
    if (bannerItems.length === 0) return;
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? bannerItems.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, bannerItems.length]);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  
  useEffect(() => {
    if (bannerItems.length > 0) {
      const sliderInterval = setInterval(nextSlide, 4000);
      return () => clearInterval(sliderInterval);
    }
  }, [nextSlide, bannerItems.length]);

  // If data is not yet loaded, you can show a loading skeleton or nothing
  if (bannerItems.length === 0) {
    return (
      <section className="container mx-auto p-4 md:p-6 lg:p-8">
        <div className="relative h-80 md:h-96 w-full rounded-lg bg-gray-200 animate-pulse"></div>
      </section>
    );
  }

  return (
    <section className="container mx-auto p-4 md:p-6 lg:p-8">
      <div className="relative h-80 md:h-96 w-full rounded-lg overflow-hidden group">
        <div
          className="w-full h-full flex transition-transform ease-in-out duration-700"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {bannerItems.map((item) => (
            <Link key={item.title} to={item.url} className="relative min-w-full h-full">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${item.imageUrl})` }}
              ></div>
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 text-white">
                <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight">{item.title}</h3>
                <p className="text-md md:text-lg font-bold text-yellow-300 mt-2">{item.subtitle}</p>
                <span className="mt-4 inline-block bg-white text-gray-900 font-bold py-2 px-6 rounded-full text-sm transform transition-transform duration-300 hover:bg-yellow-400 hover:scale-105">Shop Now</span>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Navigation Controls */}
        <button onClick={prevSlide} className="absolute top-1/2 left-0 -translate-y-1/2 ml-3 p-2 bg-black/40 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/60 focus:outline-none"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg></button>
        <button onClick={nextSlide} className="absolute top-1/2 right-0 -translate-y-1/2 mr-3 p-2 bg-black/40 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/60 focus:outline-none"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></button>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {bannerItems.map((_, slideIndex) => (<button key={slideIndex} onClick={() => goToSlide(slideIndex)} className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === slideIndex ? 'bg-white scale-125' : 'bg-white/50'}`}></button>))}
        </div>
      </div>
    </section>
  );
};

export default Banner;