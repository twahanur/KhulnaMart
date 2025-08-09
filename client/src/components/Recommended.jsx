import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import AxiosToastError from "../utils/AxiosToastError";
import Axios from "../utils/Axios";
import SummaryApi from "../common/SummaryApi";
import CardLoading from "./CardLoading";
import CardProduct from "./CardProduct";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { valideURLConvert } from "../utils/valideURLConvert";

const Recommended = ({ id, name }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef();
  const subCategoryData = useSelector((state) => state.product.allSubCategory);
  const loadingCardNumber = new Array(6).fill(null);

  const fetchCategoryWiseProduct = async () => {
    try {
      setLoading(true);
      const response = await Axios({
        ...SummaryApi.getProductByCategory,
        data: { id },
      });
      const { data: responseData } = response;

      if (responseData.success) {
        setData(responseData.data);
      }
    } catch (error) {
      AxiosToastError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategoryWiseProduct();
  }, []);

  const handleScrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 200;
    }
  };

  const handleScrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 200;
    }
  };

  const handleRedirectProductListpage = () => {
    const subcategory = subCategoryData.find((sub) => {
      const filterData = sub.category.some((c) => c._id === id);
      return filterData ? true : null;
    });
    const url = `/${valideURLConvert(name)}-${id}/${valideURLConvert(
      subcategory?.name
    )}-${subcategory?._id}`;

    return url;
  };

  const redirectURL = handleRedirectProductListpage();

  return (
    <div className="border-t-2 border-dashed">
      <div className="container mx-auto p-4 flex items-center justify-between gap-4">
        <h3 className="font-semibold text-lg md:text-xl">{name}</h3>
        <Link to={redirectURL} className="text-green-600 hover:text-green-400">
          See All
        </Link>
      </div>

      <div className="relative group">
        <div
          className="flex gap-4 md:gap-6 lg:gap-8 overflow-x-scroll scrollbar-none scroll-smooth px-4"
          ref={containerRef}
        >
          {loading
            ? loadingCardNumber.map((_, index) => (
                <div
                  key={`loading-${index}`}
                  className="min-w-[50%] sm:min-w-[50%] md:min-w-[240px] lg:min-w-[240px]"
                >
                  <CardLoading />
                </div>
              ))
            : data.length > 0
            ? data.map((product) => (
                <div
                  key={product._id}
                  className="min-w-[50%] sm:min-w-[50%] md:min-w-[240px] lg:min-w-[240px] transition-transform transform hover:scale-[1.03]"
                >
                  <CardProduct data={product} />
                </div>
              ))
            : (
              <div className="text-center text-gray-500 py-6 w-full">
                No products available.
              </div>
            )}
        </div>

        {/* Scroll buttons – show only on lg and above */}
        <div className="w-full absolute top-0 bottom-0 left-0 right-0 items-center justify-between hidden lg:flex opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <button
            onClick={handleScrollLeft}
            className="z-10 bg-white/80 backdrop-blur-sm hover:bg-white text-slate-800 shadow-xl text-2xl p-3 rounded-full pointer-events-auto"
          >
            <FaAngleLeft />
          </button>
          <button
            onClick={handleScrollRight}
            className="z-10 bg-white/80 backdrop-blur-sm hover:bg-white text-slate-800 shadow-xl text-2xl p-3 rounded-full pointer-events-auto"
          >
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recommended;
