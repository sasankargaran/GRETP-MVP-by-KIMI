import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  MapPin, 
  Heart, 
  Star, 
  Bed, 
  Bath, 
  Square, 
  Leaf, 
  Zap,
  Eye,
  Calendar,
  DollarSign
} from 'lucide-react'

const PropertyCard = ({ property, isFavorite, onToggleFavorite, index = 0 }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price)
  }

  const handleFavoriteClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    onToggleFavorite(property.id)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative bg-slate-800/50 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/10"
    >
      {/* Property Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {property.sustainable && (
            <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
              <Leaf className="w-3 h-3" />
              <span>Green</span>
            </div>
          )}
          {property.optimized && (
            <div className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
              <Zap className="w-3 h-3" />
              <span>AI Optimized</span>
            </div>
          )}
        </div>

        {/* Favorite Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleFavoriteClick}
          className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors"
        >
          <Heart
            className={`w-5 h-5 transition-colors ${
              isFavorite ? 'text-red-500 fill-current' : 'text-white'
            }`}
          />
        </motion.button>

        {/* View Count */}
        <div className="absolute bottom-4 left-4 flex items-center space-x-2 text-white">
          <Eye className="w-4 h-4" />
          <span className="text-sm">{property.visitors || 0} views</span>
        </div>

        {/* Energy Rating */}
        {property.energyRating && (
          <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold text-slate-800">
            Energy {property.energyRating}
          </div>
        )}
      </div>

      {/* Property Details */}
      <div className="p-6">
        {/* Price */}
        <div className="flex items-center justify-between mb-3">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-2xl font-bold text-white"
          >
            {formatPrice(property.price)}
          </motion.div>
          
          {/* Rating */}
          {property.rating && (
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm text-gray-300">{property.rating}</span>
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
          {property.title}
        </h3>

        {/* Location */}
        <div className="flex items-center space-x-2 text-gray-400 mb-4">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{property.location}</span>
        </div>

        {/* Property Stats */}
        <div className="grid grid-cols-3 gap-4 mb-4 text-center">
          <div className="flex flex-col items-center">
            <Bed className="w-5 h-5 text-blue-400 mb-1" />
            <span className="text-sm text-gray-300">{property.bedrooms} Beds</span>
          </div>
          <div className="flex flex-col items-center">
            <Bath className="w-5 h-5 text-blue-400 mb-1" />
            <span className="text-sm text-gray-300">{property.bathrooms} Baths</span>
          </div>
          <div className="flex flex-col items-center">
            <Square className="w-5 h-5 text-blue-400 mb-1" />
            <span className="text-sm text-gray-300">{property.size} sqft</span>
          </div>
        </div>

        {/* Features */}
        {property.features && property.features.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {property.features.slice(0, 4).map((feature, index) => (
                <span
                  key={index}
                  className="bg-slate-700/50 text-gray-300 px-2 py-1 rounded text-xs"
                >
                  {feature}
                </span>
              ))}
              {property.features.length > 4 && (
                <span className="bg-slate-700/50 text-gray-300 px-2 py-1 rounded text-xs">
                  +{property.features.length - 4} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Days on Market & Viewing Requests */}
        <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
          {property.daysOnMarket && (
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{property.daysOnMarket} days on market</span>
            </div>
          )}
          {property.viewingRequests && (
            <div className="flex items-center space-x-1">
              <Eye className="w-4 h-4" />
              <span>{property.viewingRequests} viewing requests</span>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <Link
            to={`/properties/${property.id}`}
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-center font-medium hover:bg-blue-700 transition-colors"
          >
            View Details
          </Link>
          <button className="bg-slate-700 text-white py-2 px-4 rounded-lg hover:bg-slate-600 transition-colors">
            Schedule Visit
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default PropertyCard