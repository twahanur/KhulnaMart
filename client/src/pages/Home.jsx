// src/pages/Home.jsx
import React from "react";
import banner from "../assets/banner.jpg";
import bannerMobile from "../assets/banner-mobile.jpg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; // Use useNavigate for the onClick handler
import { valideURLConvert } from "../utils/valideURLConvert";
import CategoryWiseProductDisplay from "../components/CategoryWiseProductDisplay";
import Banner from "../components/Banner";

const Home = () => {
  const loadingCategory = useSelector((state) => state.product.loadingCategory);
  const categoryData = useSelector((state) => state.product.allCategory);
  console.log(categoryData)
  const subCategoryData = useSelector((state) => state.product.allSubCategory);
  console.log(subCategoryData)
  const navigate = useNavigate();

  // RESTORED: Your original navigation logic is back
  const handleRedirectProductListpage = (id, cat) => {
    const subcategory = subCategoryData.find((sub) => {
      return sub.category.some((c) => c._id === id);
    });

    // Added a check to prevent crashing if no subcategory is found
    if (subcategory) {
      const url = `/${valideURLConvert(cat)}-${id}/${valideURLConvert(
        subcategory.name
      )}-${subcategory._id}`;
      navigate(url);
    } else {
      console.error("No subcategory found for this category id:", id);
      // Optional: navigate to a generic category page as a fallback
      // navigate(`/category/${valideURLConvert(cat)}-${id}`);
    }
  };

  const CategorySkeleton = () => (
    <div className="flex flex-col items-center gap-2 animate-pulse">
      <div className="w-24 h-24 rounded-full bg-slate-200"></div>
      <div className="h-4 w-16 bg-slate-200 rounded-md"></div>
    </div>
  );

  return (
    <section className="bg-slate-50 min-h-screen">
      <Banner />
      <div className="container mx-auto p-4">
        <div className="w-full shadow-lg rounded-xl overflow-hidden mb-12">
          <img
            src={banner}
            className="w-full h-full hidden lg:block"
            alt="banner"
          />
          <img
            src={bannerMobile}
            className="w-full h-full lg:hidden"
            alt="banner"
          />
        </div>

        <h1 className="text-3xl font-bold text-slate-800 text-center mb-8">
          Visit Our Top Categories
        </h1>

        {/* Using your onClick logic with the new design */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-x-4 gap-y-8 justify-items-center animate-fade-in-down">
          {loadingCategory
            ? new Array(10)
                .fill(null)
                .map((_, index) => <CategorySkeleton key={index} />)
            : categoryData.map((cat) => (
                <div
                  key={cat._id}
                  className="flex flex-col items-center group text-center cursor-pointer"
                  onClick={() =>
                    handleRedirectProductListpage(cat._id, cat.name)
                  }
                >
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center p-3 shadow-lg transition-all duration-300 ease-in-out group-hover:shadow-2xl group-hover:scale-110 group-hover:-translate-y-2">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-slate-700 capitalize transition-colors duration-300 group-hover:text-red-500">
                    {cat.name}
                  </p>
                </div>
              ))}
        </div>
      </div>

      <div className="mt-12">
        {categoryData?.map((c) =>
          c.name &&
          c._id &&
          c.image &&
          c.name.length > 0 &&
          c.image.length > 0 ? (
            <CategoryWiseProductDisplay
              key={c._id + "CategorywiseProduct"}
              id={c._id}
              name={c.name}
            />
          ) : null
        )}
      </div>
    </section>
  );
};

export default Home;
