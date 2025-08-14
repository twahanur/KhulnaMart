"use client"

import { useState, useMemo, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FiChevronDown, FiList, FiMenu, FiX } from "react-icons/fi"
import { FaRegUserCircle } from "react-icons/fa"
import { BsCart4 } from "react-icons/bs"
import logo from "../../assets/logo.png"
import { useSelector } from "react-redux"
import Search from "../Search"
import DisplayCartItem from "../DisplayCartItem"
import { DisplayPrice } from "../../utils/DisplayPrice"
import { useGlobalContext } from "../../provider/GlobalProvider"

const NAV_LINKS = [
  { title: "All Products", link: "/search" },
  { title: "About Us", link: "/aboutus" },
  { title: "Blog", link: "/blog" },
  { title: "Affiliate Program", link: "/affiliate" },
  { title: "Size Guide", link: "/sizes" },
]

const validURL = (name) =>
  name
    ?.toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")

export default function Header() {
  const navigate = useNavigate()
  const { totalPrice, totalQty } = useGlobalContext()

  const user = useSelector((state) => state.user)
  const cartItem = useSelector((state) => state.cartItem.cart)
  const categoryData = useSelector((state) => state.product.allCategory)
  const subCategoryData = useSelector((state) => state.product.allSubCategory)

  const [mobileCatOpen, setMobileCatOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [hoverCat, setHoverCat] = useState(null)
  const [activeCat, setActiveCat] = useState(null)
  const [cartOpen, setCartOpen] = useState(false)
  const [navDrawerOpen, setNavDrawerOpen] = useState(false)

  // Precompute category → subcategory mapping
  const categoryMap = useMemo(() => {
    const map = {}
    subCategoryData.forEach((sub) => {
      sub.category.forEach((c) => {
        if (!map[c._id]) map[c._id] = []
        map[c._id].push(sub)
      })
    })
    return map
  }, [subCategoryData])

  useEffect(() => {
    if (navDrawerOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [navDrawerOpen])

  const goToProductList = (catId, catName, sub) => {
    navigate(`/${validURL(catName)}-${catId}/${validURL(sub.name)}-${sub._id}`)
    window.scrollTo({ top: 0, behavior: "smooth" })
    setMobileCatOpen(false)
  }

  const handleNavLinkClick = (link) => {
    navigate(link)
    setNavDrawerOpen(false)
    window.scrollTo(0, 0)
  }

  return (
    <header className="sticky top-0 z-50 bg-green-700 text-white">
      {/* Mobile Search Bar with Hamburger Menu */}
      <div className="md:hidden p-2 border-b border-gray-200 bg-white flex items-center gap-3">
        <button
          onClick={() => setNavDrawerOpen(true)}
          className="text-green-700 hover:text-green-800 transition-colors duration-200"
          aria-label="Open navigation menu"
        >
          <FiMenu size={24} />
        </button>
        <div className="flex-1">
          <Search />
        </div>
      </div>

      {/* Desktop Top Row */}
      <div className="hidden md:flex items-center justify-between p-4">
        {/* Logo */}
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          <img src={logo || "/placeholder.svg"} alt="Khulna-Mart Logo" className="w-32 lg:w-44" />
        </Link>

        {/* Desktop Search */}
        <div className="w-1/2">
          <Search />
        </div>

        {/* Navigation Links */}
        <nav className="flex gap-4">
          {NAV_LINKS.map((nav) => (
            <Link
              key={nav.link}
              to={nav.link}
              className="font-bold hover:border-b border-white whitespace-nowrap transition-all duration-200"
              onClick={() => window.scrollTo(0, 0)}
            >
              {nav.title}
            </Link>
          ))}
        </nav>

        {/* User & Cart */}
        <div className="flex items-center gap-4">
          {user?._id ? (
            <Link to="/user" className="transition-transform duration-200 hover:scale-110">
              <FaRegUserCircle size={20} />
            </Link>
          ) : (
            <Link to="/login" className="hover:underline transition-all duration-200">
              Login
            </Link>
          )}

          <button
            onClick={() => setCartOpen(true)}
            className="flex items-center gap-2 bg-green-800 hover:bg-green-700 px-3 py-2 rounded transition-all duration-200 hover:scale-105"
          >
            <BsCart4 size={26} className="animate-bounce" />
            <span className="text-sm font-semibold whitespace-nowrap">
              {cartItem.length ? `${totalQty} Items | ${DisplayPrice(totalPrice)}` : "My Cart"}
            </span>
          </button>
        </div>
      </div>

      {/* Desktop Mega Menu */}
      <nav className="hidden md:flex bg-green-700 px-4">
        {/* All Categories */}
        <div
          className="relative px-4 py-3 flex items-center gap-1 cursor-pointer transition-colors duration-200 hover:bg-green-600"
          onMouseEnter={() => setMegaOpen(true)}
          onMouseLeave={() => setMegaOpen(false)}
        >
          <FiList /> <span className="font-semibold">ALL CATEGORIES</span>{" "}
          <FiChevronDown className={`transition-transform duration-200 ${megaOpen ? "rotate-180" : ""}`} />
          {megaOpen && (
            <div className="absolute top-full left-0 flex bg-green-700 shadow-lg z-50 animate-in slide-in-from-top-2 duration-200">
              <div className="w-48 border-r">
                {categoryData.map(
                  (cat) =>
                    cat.name !== "Recommended" && (
                      <div
                        key={cat._id}
                        onMouseEnter={() => setHoverCat(cat._id)}
                        className="p-3 flex gap-2 items-center hover:bg-gray-100 cursor-pointer transition-colors duration-200"
                      >
                        <img src={cat.image || "/placeholder.svg"} alt={cat.name} className="h-5 w-5 rounded-full" />
                        {cat.name}
                      </div>
                    ),
                )}
              </div>
              <div className="min-w-[300px] p-4">
                <h3 className="font-bold text-white mb-2">Subcategories</h3>
                <ul className="grid grid-cols-2 gap-2 text-white text-sm">
                  {categoryMap[hoverCat]?.map((sub) => (
                    <li
                      key={sub._id}
                      onClick={() => goToProductList(hoverCat, categoryData.find((c) => c._id === hoverCat)?.name, sub)}
                      className="hover:text-black hover:bg-white px-2 py-1 rounded cursor-pointer transition-all duration-200"
                    >
                      {sub.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Individual Categories */}
        {categoryData.map(
          (cat) =>
            cat.name !== "Recommended" && (
              <div
                key={cat._id}
                className="relative px-4 py-3 hover:bg-green-600 cursor-pointer transition-colors duration-200"
                onMouseEnter={() => setActiveCat(cat._id)}
                onMouseLeave={() => setActiveCat(null)}
              >
                <span className="font-medium">{cat.name}</span>
                {activeCat === cat._id && (
                  <div className="absolute top-full left-0 bg-green-700 p-4 w-[500px] shadow-lg z-50 animate-in slide-in-from-top-2 duration-200">
                    <h3 className="text-lg font-semibold mb-2 text-white">{cat.name}</h3>
                    <ul className="grid grid-cols-2 gap-2 text-sm">
                      {categoryMap[cat._id]?.map((sub) => (
                        <li
                          key={sub._id}
                          onClick={() => goToProductList(cat._id, cat.name, sub)}
                          className="hover:text-black hover:bg-white px-2 py-1 rounded cursor-pointer transition-all duration-200"
                        >
                          {sub.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ),
        )}
      </nav>

      {navDrawerOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden animate-in fade-in duration-200"
            onClick={() => setNavDrawerOpen(false)}
          />

          {/* Drawer */}
          <div className="fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white z-50 shadow-xl md:hidden animate-in slide-in-from-left duration-300">
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-green-700 text-white">
              <h2 className="text-lg font-semibold">Navigation</h2>
              <button
                onClick={() => setNavDrawerOpen(false)}
                className="text-white hover:text-gray-200 transition-colors duration-200"
                aria-label="Close navigation menu"
              >
                <FiX size={24} />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="p-4">
              <ul className="space-y-2">
                {NAV_LINKS.map((nav) => (
                  <li key={nav.link}>
                    <button
                      onClick={() => handleNavLinkClick(nav.link)}
                      className="w-full text-left p-3 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition-all duration-200 font-medium"
                    >
                      {nav.title}
                    </button>
                  </li>
                ))}
              </ul>

              {/* User Section */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                {user?._id ? (
                  <button
                    onClick={() => handleNavLinkClick("/user")}
                    className="w-full flex items-center gap-3 p-3 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition-all duration-200"
                  >
                    <FaRegUserCircle size={20} />
                    <span className="font-medium">My Account</span>
                  </button>
                ) : (
                  <button
                    onClick={() => handleNavLinkClick("/login")}
                    className="w-full p-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors duration-200 font-medium"
                  >
                    Login
                  </button>
                )}
              </div>
            </nav>
          </div>
        </>
      )}

      {/* Mobile Categories Menu */}
      {mobileCatOpen && (
        <div className="md:hidden bg-white text-black p-4 border-t animate-in slide-in-from-top duration-200">
          {categoryData.map(
            (cat) =>
              cat.name !== "Recommended" && (
                <details key={cat._id} className="mb-2">
                  <summary className="flex justify-between items-center cursor-pointer bg-gray-100 p-2 rounded transition-colors duration-200 hover:bg-gray-200">
                    {cat.name} <FiChevronDown className="transition-transform duration-200" />
                  </summary>
                  <ul className="pl-4">
                    {categoryMap[cat._id]?.map((sub) => (
                      <li
                        key={sub._id}
                        onClick={() => goToProductList(cat._id, cat.name, sub)}
                        className="py-1 text-sm hover:text-green-600 cursor-pointer transition-colors duration-200"
                      >
                        {sub.name}
                      </li>
                    ))}
                  </ul>
                </details>
              ),
          )}
        </div>
      )}

      {/* Mobile Bottom Nav */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-md flex justify-around items-center py-2 text-xs z-50 md:hidden">
        <button
          onClick={() => navigate("/")}
          className="flex flex-col items-center whitespace-nowrap transition-transform duration-200 hover:scale-105"
        >
          <span className="text-lg">🏠</span>
          <span>Home</span>
        </button>

        <button
          onClick={() => setMobileCatOpen(!mobileCatOpen)}
          className="flex flex-col items-center whitespace-nowrap transition-transform duration-200 hover:scale-105"
        >
          <span className="text-lg">📂</span>
          <span>Categories</span>
        </button>

        <button
          onClick={() => setCartOpen(true)}
          className="flex flex-col items-center whitespace-nowrap transition-transform duration-200 hover:scale-105"
        >
          <span className="text-lg">🛒</span>
          <span>Cart</span>
        </button>

        <button
          onClick={() => navigate(user?._id ? "/user" : "/login")}
          className="flex flex-col items-center whitespace-nowrap transition-transform duration-200 hover:scale-105"
        >
          <span className="text-lg">👤</span>
          <span>Account</span>
        </button>
      </div>

      {cartOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 animate-in fade-in duration-200"
            onClick={() => setCartOpen(false)}
          />
          
          {/* Cart Component with enhanced positioning */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="animate-in zoom-in-95 duration-200" onClick={(e) => e.stopPropagation()}>
              <DisplayCartItem cartOpen={cartOpen} setCartOpen={setCartOpen} />
            </div>
          </div>
        </>
      )}
    </header>
  )
}
