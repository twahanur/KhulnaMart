import React from 'react'

const TopCategory = ({data}) => {
    const {loadingCategory}
  return (
    <div><h1 className="text-3xl font-bold text-slate-800 text-center mb-8">
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
        </div></div>
  )
}

export default TopCategory