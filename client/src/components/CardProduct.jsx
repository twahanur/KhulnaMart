import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { DisplayPrice } from '../utils/DisplayPrice'
import { valideURLConvert } from '../utils/valideURLConvert'
import { pricewithDiscount } from '../utils/PriceWithDiscount'
import AddToCartButton from './AddToCartButton'

const CardProduct = ({ data }) => {
  const url = `/product/${valideURLConvert(data.name)}-${data._id}`
  const [loading, setLoading] = useState(false)

  return (
    <Link
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      to={url}
      className="group relative flex flex-col gap-3 rounded-2xl border border-gray-100 bg-white/70 backdrop-blur-md p-4 shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Image */}
      <div className="relative w-full h-40 lg:h-52 overflow-hidden rounded-xl bg-gradient-to-tr from-gray-100 to-gray-200 shadow-inner">
        <img
          src={data.image[0]}
          alt={data.name}
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Badges */}
      <div className="flex items-center gap-2 text-xs font-medium px-1">
        <span className="rounded-full bg-green-100 text-green-700 px-2 py-[2px]">
          ⏱️ 10 min
        </span>
        {Boolean(data.discount) && (
          <span className="rounded-full bg-red-100 text-red-600 px-2 py-[2px]">
            🔥 {data.discount}% OFF
          </span>
        )}
      </div>

      {/* Product Name */}
      <h2 className="text-base font-semibold text-gray-800 line-clamp-1 px-1">
        {data.name}
      </h2>

      {/* Unit */}
      <p className="text-sm text-gray-500 px-1">{data.unit}</p>

      {/* Price and Cart */}
      <div className="flex items-center justify-between px-1">
        <div className="text-lg font-bold text-indigo-600">
          {DisplayPrice(pricewithDiscount(data.price, data.discount))}
        </div>
        <div>
          {data.stock === 0 ? (
            <span className="text-sm font-medium text-red-500">Out of stock</span>
          ) : (
            <AddToCartButton data={data} />
          )}
        </div>
      </div>
    </Link>
  )
}

export default CardProduct
