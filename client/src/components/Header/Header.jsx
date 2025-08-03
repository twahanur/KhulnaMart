// ✅ Merged Header + MegaMenu for eCommerce (Optimized with SEO, Animation, Branding)
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiChevronDown, FiList, FiMenu, FiX } from "react-icons/fi";
import logo from "../../assets/logo.png";
import { useSelector } from "react-redux";
import Search from "../Search";
import { DisplayPrice } from "../../utils/DisplayPrice";
import { useGlobalContext } from "../../provider/GlobalProvider";
import { FaRegUserCircle } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import DisplayCartItem from "../DisplayCartItem";

const valideURLConvert = (name) =>
  name
    ?.toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const cartItem = useSelector((state) => state.cartItem.cart);
  const categoryData = useSelector((state) => state.product.allCategory);
  const subCategoryData = useSelector((state) => state.product.allSubCategory);
  const { totalPrice, totalQty } = useGlobalContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [hoveredCategoryId, setHoveredCategoryId] = useState(null);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [openCartSection, setOpenCartSection] = useState(false);

  const handleRedirectProductListpage = (id, name, sub) => {
    const url = `/${valideURLConvert(name)}-${id}/${valideURLConvert(
      sub.name
    )}-${sub._id}`;
    navigate(url);
  };

  return (
    <header className="sticky top-0 z-50 bg-green-700 text-white font-sans">
      <div className="md:hidden block w-full">
        <Search />
      </div>
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/">
          <img
            src={logo}
            alt="Khulna-Mart Logo"
            className="w-32 lg:w-44"
            loading="lazy"
          />
        </Link>

        <div className="hidden lg:block w-1/2">
          <Search />
        </div>

        <div className="flex items-center gap-4">
          {user?._id ? (
            <Link to="/user" className="hover:underline">
              <FaRegUserCircle size={20} />
            </Link>
          ) : (
            <Link to="/login" className="hover:underline">
              Login
            </Link>
          )}
          <button
            onClick={() => setOpenCartSection(true)}
            className="flex items-center gap-2 bg-green-800 hover:bg-green-700 px-3 py-2 rounded text-white"
          >
            {/**add to card icons */}
            <div className="animate-bounce">
              <BsCart4 size={26} />
            </div>
            <div className="font-semibold text-sm">
              {cartItem[0] ? (
                <div>
                  <p>{totalQty} Items</p>
                  <p>{DisplayPrice(totalPrice)}</p>
                </div>
              ) : (
                <p>My Cart</p>
              )}
            </div>
          </button>

          <button
            onClick={() => navigate("/cart")}
            className="relative hidden bg-green-800 hover:bg-green-900 px-3 py-2 rounded transition-all duration-300"
          >
            <span className="text-white text-sm">
              {cartItem?.length > 0
                ? `${totalQty} items | ${DisplayPrice(totalPrice)}`
                : "Cart"}
            </span>
          </button>

          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* ✅ Mobile Mega Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white text-black px-4 py-2 animate-slide-down">
          {categoryData.map((cat) => (
            <details key={cat._id} className="mb-2">
              <summary className="cursor-pointer flex justify-between items-center py-2 px-2 bg-gray-100 rounded">
                {cat.name} <FiChevronDown />
              </summary>
              <ul className="pl-4 py-2">
                {subCategoryData
                  .filter((sub) => sub.category.some((c) => c._id === cat._id))
                  .map((sub) => (
                    <li
                      key={sub._id}
                      onClick={() =>
                        handleRedirectProductListpage(cat._id, cat.name, sub)
                      }
                      className="py-1 text-sm hover:text-green-600 cursor-pointer"
                    >
                      {sub.name}
                    </li>
                  ))}
              </ul>
            </details>
          ))}
        </div>
      )}

      {/* ✅ Desktop Mega Menu */}
      <nav className="hidden lg:flex bg-green-800 text-white px-4">
        <div
          className="relative px-4 py-3 cursor-pointer flex items-center gap-1 hover:bg-green-700"
          onMouseEnter={() => setIsMegaMenuOpen(true)}
          onMouseLeave={() => setIsMegaMenuOpen(false)}
        >
          <FiList /> <span className="font-semibold">ALL CATEGORIES</span>{" "}
          <FiChevronDown />
          {isMegaMenuOpen && (
            <div
              className="absolute top-full left-0 bg-white text-black flex shadow-lg z-50 animate-fade-in"
              onMouseEnter={() => setIsMegaMenuOpen(true)}
              onMouseLeave={() => setIsMegaMenuOpen(false)}
            >
              <div className="w-48 border-r bg-gray-50">
                {categoryData.map((cat) => (
                  <div
                    key={cat._id}
                    onMouseEnter={() => setHoveredCategoryId(cat._id)}
                    className="p-3 hover:bg-green-100 text-sm cursor-pointer"
                  >
                    {cat.name}
                  </div>
                ))}
              </div>
              <div className="min-w-[300px] p-4">
                <h3 className="font-bold text-gray-800 mb-2">Subcategories</h3>
                <ul className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                  {subCategoryData
                    .filter((sub) =>
                      sub.category.some((c) => c._id === hoveredCategoryId)
                    )
                    .map((sub) => (
                      <li
                        key={sub._id}
                        onClick={() =>
                          handleRedirectProductListpage(
                            hoveredCategoryId,
                            categoryData.find(
                              (c) => c._id === hoveredCategoryId
                            )?.name,
                            sub
                          )
                        }
                        className="hover:text-green-600 cursor-pointer"
                      >
                        {sub.name}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {categoryData.map((cat) => (
          <div
            key={cat._id}
            className="relative px-4 py-3 cursor-pointer hover:bg-green-700"
            onMouseEnter={() => setActiveCategory(cat._id)}
            onMouseLeave={() => setActiveCategory(null)}
          >
            <span className="font-medium">{cat.name}</span>
            {activeCategory === cat._id && (
              <div
                className="absolute top-full left-0 bg-white text-black p-4 w-[500px] shadow-lg z-50 animate-fade-in"
                onMouseEnter={() => setActiveCategory(cat._id)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                <h3 className="text-lg font-semibold mb-2 text-green-800">
                  {cat.name}
                </h3>
                <ul className="grid grid-cols-2 gap-2 text-sm">
                  {subCategoryData
                    .filter((sub) =>
                      sub.category.some((c) => c._id === cat._id)
                    )
                    .map((sub) => (
                      <li
                        key={sub._id}
                        onClick={() =>
                          handleRedirectProductListpage(cat._id, cat.name, sub)
                        }
                        className="hover:text-green-600 cursor-pointer"
                      >
                        {sub.name}
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </nav>
      {openCartSection && (
        <DisplayCartItem close={() => setOpenCartSection(false)} />
      )}
    </header>
  );
};

export default Header;
