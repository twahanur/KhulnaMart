// src/pages/Home.jsx
import banner from "../assets/banner.jpg";
import bannerMobile from "../assets/banner-mobile.jpg";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom"; // Use useNavigate for the onClick handler
import { valideURLConvert } from "../utils/valideURLConvert";
import CategoryWiseProductDisplay from "../components/CategoryWiseProductDisplay";
import Herosection from "../components/Herosection/Herosection";
import Features from "../components/Features";
import Recommended from "../components/Recommended";
const Home = () => {
  const loadingCategory = useSelector((state) => state.product.loadingCategory);
  const categoryData = useSelector((state) => state.product.allCategory);
  const subCategoryData = useSelector((state) => state.product.allSubCategory);
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
      <Herosection />
      <div className="container mx-auto">
        <div className="w-full rounded-xl overflow-hidden">
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
        <Features />

        <div className="bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <h1 className="text-3xl font-bold text-slate-800 text-center mb-8">
            Visit Our Top Categories
          </h1>

          {/* Categories Grid with Responsive Layout */}
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-7 gap-y-8 justify-items-center">
            {loadingCategory
              ? new Array(6)
                  .fill(null)
                  .map((_, index) => <CategorySkeleton key={index} />)
              : categoryData.map((cat) =>
                  cat.name !== "Recommended" ? (
                    <div
                      key={cat._id}
                      className="flex flex-col items-center group text-center cursor-pointer"
                      onClick={() =>
                        handleRedirectProductListpage(cat._id, cat.name)
                      }
                    >
                      {/* Image container with hover effects */}
                      <div className="relative w-40 h-40 bg-white rounded-full p-1 border-4 border-white transition-all duration-300 ease-in-out group-hover:border-orange-400 overflow-hidden">
                        <div className="w-full h-full rounded-full overflow-hidden">
                          <img
                            src={cat.image}
                            alt={cat.name}
                            className="w-full h-full object-cover transition-all duration-300 ease-in-out group-hover:scale-110"
                          />
                        </div>
                        {/* Yellow border for the hover effect, positioned at the bottom */}
                        <div className="absolute inset-x-0 bottom-0 h-8 bg-[#FF7312] flex items-center justify-center">
                          <p className="text-xs font-semibold text-gray-800 capitalize">
                            {cat.name}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : null
                )}
          </div>
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 mb-20">
        {/* Left Sidebar */}
        <aside className="lg:col-span-3 w-full space-y-6">
          {/* Special Items */}
          <section className="bg-white rounded-lg shadow p-4">
            <h2 className="text-xl font-semibold mb-4">Special Items</h2>
            {/* Map your special items here */}
            <div className="space-y-3">
              {/* Example */}
              <div className="flex items-center gap-3">
                <img
                  src="https://img.freepik.com/premium-psd/special-promo-t-shirt-media-social-story-post-template_361928-1224.jpg"
                  alt=""
                  className="w-full h-82 object-cover rounded"
                />
              </div>
            </div>
          </section>

          {/* Promotional Banner */}
          <section>
            <img
              src="https://i.pinimg.com/736x/e7/ed/fd/e7edfddb4beeaf8f49ef42033ff6b844.jpg"
              alt="Promotion"
              className="rounded-lg shadow"
            />
          </section>

          {/* Recommended Items */}

          <section className="bg-white rounded-lg shadow p-4">
            <h2 className="text-xl font-semibold mb-4">Recommended Items</h2>
            {/* Map recommended items here */}
            {loadingCategory
              ? new Array(6)
                  .fill(null)
                  .map((_, index) => <CategorySkeleton key={index} />)
              : categoryData.map((cat, index) =>
                  cat.name === "Recommended" ? (
                    <div key={index} className="space-y-3">
                      {/* Example */}
                      <Recommended id={cat._id} name={cat.name} />
                    </div>
                  ) : null
                )}
          </section>
        </aside>

        {/* Right Content */}
        <main className="lg:col-span-9 w-full space-y-10">
          {categoryData?.map((c) =>
            c.name &&
            c.name !== "Recommended" &&
            c._id &&
            c.image &&
            c.name.length > 0 &&
            c.image.length > 0 ? (
              <div
                className="overflow-x-auto"
                key={c._id + "CategorywiseProduct"}
              >
                <CategoryWiseProductDisplay id={c._id} name={c.name} />
              </div>
            ) : null
          )}
        </main>
      </div>
    </section>
  );
};

export default Home;
