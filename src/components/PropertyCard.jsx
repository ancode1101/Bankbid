const PropertyCard = ({ property }) => (
  <div className="w-full rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700 overflow-hidden bg-white dark:bg-slate-800">
    <div className="p-4 sm:p-6">
      
      {/* Property Type and Status */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0 mb-4 sm:mb-5">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white truncate">{property.propertyType}</h2>
        <span className="px-3 py-1 bg-gradient-to-r from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 text-green-700 dark:text-green-300 rounded-full text-sm font-semibold shadow-sm w-fit">
          Active
        </span>
      </div>

      {/* Location */}
      <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
        <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-500 dark:text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span className="font-medium text-sm sm:text-base truncate">{property.location}</span>
      </div>

      {/* Prices */}
      <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4 mb-4">
        <div className="bg-blue-50 dark:bg-blue-900/30 p-3 sm:p-4 rounded-xl text-center shadow-sm">
          <p className="text-xs text-blue-500 dark:text-blue-400 font-medium uppercase tracking-wide">Reserve Price</p>
          <p className="text-base sm:text-lg font-bold text-blue-900 dark:text-blue-200 truncate">{property.reservePrice}</p>
        </div>
        <div className="bg-red-50 dark:bg-red-900/30 p-3 sm:p-4 rounded-xl text-center shadow-sm">
          <p className="text-xs text-red-500 dark:text-red-400 font-medium uppercase tracking-wide">Market Price</p>
          <p className="text-base sm:text-lg font-bold text-yellow-900 dark:text-yellow-200 truncate">{property.marketPrice}</p>
        </div>
      </div>

      {/* Auction Date */}
      <div className="flex items-center text-gray-700 dark:text-gray-300 mb-4">
        <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-purple-500 dark:text-purple-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="text-xs sm:text-sm font-medium">Auction Date: <span className="text-gray-800 dark:text-gray-200">{property.auctionDate}</span></span>
      </div>

      {/* Footer Row */}
      <div className="mt-4 sm:mt-6 flex flex-col xs:flex-row justify-between items-start xs:items-center gap-3 xs:gap-0">
        <div className="text-sm sm:text-md text-gray-700 dark:text-gray-300">
          <span className="font-medium text-gray-800 dark:text-gray-200">EMD:</span> {property.emdAmount}
        </div>
        <button className="w-full xs:w-auto px-4 sm:px-5 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-700 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 dark:hover:from-blue-700 dark:hover:to-indigo-800 transition duration-300 shadow-md text-sm sm:text-base">
          Know More
        </button>
      </div>

    </div>
  </div>
);

export default PropertyCard;
