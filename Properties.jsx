import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Search, 
  Filter, 
  MapPin, 
  Home, 
  Building, 
  DollarSign, 
  Bed, 
  Bath, 
  Square,
  SlidersHorizontal,
  X,
  Grid,
  List,
  Heart,
  Eye,
  Star,
  Leaf,
  Zap
} from 'lucide-react'
import { useApp } from '../context/AppContext'
import PropertyCard from '../components/PropertyCard'

const Properties = () => {
  const { properties, favorites, searchFilters, dispatch } = useApp()
  const [filteredProperties, setFilteredProperties] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [viewMode, setViewMode] = useState('grid')
  const [sortBy, setSortBy] = useState('price')
  const [showMap, setShowMap] = useState(false)

  // Sample properties data
  const sampleProperties = [
    {
      id: 1,
      title: 'Luxury Downtown Apartment',
      price: 850000,
      location: 'Dubai Marina',
      size: 2100,
      bedrooms: 3,
      bathrooms: 2,
      type: 'Apartment',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
      sustainable: true,
      optimized: true,
      rating: 4.8,
      energyRating: 'A+',
      visitors: 24,
      daysOnMarket: 12,
      viewingRequests: 8,
      features: ['Pool', 'Gym', 'Parking', '24/7 Security', 'Smart Home', 'Central AC', 'Balcony'],
      description: 'Stunning luxury apartment with panoramic marina views. Features high-end finishes, smart home technology, and eco-friendly design.',
      yearBuilt: 2022,
      parking: 2,
      commuteCost: 'Low - Near Metro',
      energySavings: '30% below average'
    },
    {
      id: 2,
      title: 'Modern Villa with Garden',
      price: 2500000,
      location: 'Palm Jumeirah',
      size: 4500,
      bedrooms: 5,
      bathrooms: 4,
      type: 'Villa',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800',
      sustainable: true,
      optimized: false,
      rating: 4.9,
      energyRating: 'A',
      visitors: 18,
      daysOnMarket: 8,
      viewingRequests: 12,
      features: ['Garden', 'Private Pool', 'Smart Home', 'Beach Access', 'Maid Room', 'BBQ Area'],
      description: 'Exclusive Palm Jumeirah villa with private beach access. Sustainable design with solar panels and energy-efficient systems.',
      yearBuilt: 2023,
      parking: 4,
      commuteCost: 'Medium',
      energySavings: '25% below average'
    },
    {
      id: 3,
      title: 'Executive Office Space',
      price: 1200000,
      location: 'Business Bay',
      size: 3200,
      bedrooms: 0,
      bathrooms: 3,
      type: 'Commercial',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
      sustainable: false,
      optimized: true,
      rating: 4.7,
      energyRating: 'B+',
      visitors: 31,
      daysOnMarket: 20,
      viewingRequests: 15,
      features: ['Parking', 'Conference Room', 'Reception', 'Metro Access', 'Pantry', 'Server Room'],
      description: 'Prime office space in the heart of Business Bay. Perfect for tech startups and corporate offices.',
      yearBuilt: 2020,
      parking: 10,
      commuteCost: 'Very Low - Metro Connected',
      energySavings: '15% below average'
    },
    {
      id: 4,
      title: 'Beachfront Penthouse',
      price: 4200000,
      location: 'Jumeirah Beach Residence',
      size: 5600,
      bedrooms: 4,
      bathrooms: 5,
      type: 'Penthouse',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
      sustainable: true,
      optimized: true,
      rating: 5.0,
      energyRating: 'A++',
      visitors: 42,
      daysOnMarket: 5,
      viewingRequests: 20,
      features: ['Ocean View', 'Private Pool', 'Terrace', 'Concierge', 'Wine Cellar', 'Home Theater'],
      description: 'Ultra-luxury penthouse with breathtaking ocean views. The epitome of sustainable luxury living.',
      yearBuilt: 2024,
      parking: 3,
      commuteCost: 'Low - Near Tram',
      energySavings: '40% below average'
    },
    {
      id: 5,
      title: 'Contemporary Studio',
      price: 450000,
      location: 'Downtown Dubai',
      size: 650,
      bedrooms: 1,
      bathrooms: 1,
      type: 'Studio',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
      sustainable: true,
      optimized: true,
      rating: 4.6,
      energyRating: 'A',
      visitors: 35,
      daysOnMarket: 15,
      viewingRequests: 18,
      features: ['City View', 'Gym', 'Pool', 'Metro Access', 'Smart Home', 'Balcony'],
      description: 'Perfect starter home in the heart of Downtown. Energy-efficient and close to all amenities.',
      yearBuilt: 2021,
      parking: 1,
      commuteCost: 'Very Low - Metro Adjacent',
      energySavings: '28% below average'
    },
    {
      id: 6,
      title: 'Family Townhouse',
      price: 1800000,
      location: 'Arabian Ranches',
      size: 3800,
      bedrooms: 4,
      bathrooms: 3,
      type: 'Townhouse',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
      sustainable: true,
      optimized: false,
      rating: 4.7,
      energyRating: 'B+',
      visitors: 22,
      daysOnMarket: 18,
      viewingRequests: 9,
      features: ['Garden', 'Community Pool', 'Playground', 'Parking', 'Maid Room', 'Study Room'],
      description: 'Spacious family home in a gated community. Perfect for families with children.',
      yearBuilt: 2019,
      parking: 2,
      commuteCost: 'Medium - 20min to city',
      energySavings: '18% below average'
    }
  ]

  useEffect(() => {
    setFilteredProperties(sampleProperties)
  }, [])

  useEffect(() => {
    let filtered = sampleProperties

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(property => 
        property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Apply other filters
    if (searchFilters.priceMin) {
      filtered = filtered.filter(property => property.price >= parseInt(searchFilters.priceMin))
    }
    if (searchFilters.priceMax) {
      filtered = filtered.filter(property => property.price <= parseInt(searchFilters.priceMax))
    }
    if (searchFilters.bedrooms) {
      filtered = filtered.filter(property => property.bedrooms >= parseInt(searchFilters.bedrooms))
    }
    if (searchFilters.propertyType) {
      filtered = filtered.filter(property => property.type === searchFilters.propertyType)
    }
    if (searchFilters.location) {
      filtered = filtered.filter(property => 
        property.location.toLowerCase().includes(searchFilters.location.toLowerCase())
      )
    }
    if (searchFilters.sustainability) {
      filtered = filtered.filter(property => property.sustainable)
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'rating':
          return b.rating - a.rating
        case 'newest':
          return b.yearBuilt - a.yearBuilt
        default:
          return 0
      }
    })

    setFilteredProperties(filtered)
  }, [searchTerm, searchFilters, sortBy])

  const handleAddToFavorites = (propertyId) => {
    if (favorites.includes(propertyId)) {
      dispatch({ type: 'REMOVE_FAVORITE', payload: propertyId })
    } else {
      dispatch({ type: 'ADD_FAVORITE', payload: propertyId })
    }
  }

  const handleFilterChange = (key, value) => {
    dispatch({ type: 'SET_SEARCH_FILTERS', payload: { [key]: value } })
  }

  const clearFilters = () => {
    dispatch({ type: 'CLEAR_FILTERS' })
    setSearchTerm('')
  }

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-white mb-2">Find Your Perfect Property</h1>
          <p className="text-gray-400">
            Discover {filteredProperties.length} properties curated by our AI for you
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0 lg:space-x-4 mb-6">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by location, property name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-4">
              {/* View Mode */}
              <div className="flex items-center bg-slate-800 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>

              {/* Sort Dropdown */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
              >
                <option value="price-high">Price: High to Low</option>
                <option value="price-low">Price: Low to High</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest First</option>
              </select>

              {/* Filter Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
              >
                <Filter className="w-4 h-4" />
                <span>Filters</span>
              </button>

              {/* Map Toggle */}
              <button
                onClick={() => setShowMap(!showMap)}
                className="bg-slate-700 text-white px-4 py-2 rounded-lg hover:bg-slate-600 transition-colors flex items-center space-x-2"
              >
                <MapPin className="w-4 h-4" />
                <span>Map</span>
              </button>
            </div>
          </div>

          {/* Filter Panel */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-slate-800/50 backdrop-blur-md rounded-xl p-6 border border-white/10 mb-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Price Range */}
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Min Price</label>
                    <input
                      type="number"
                      placeholder="Min Price"
                      value={searchFilters.priceMin}
                      onChange={(e) => handleFilterChange('priceMin', e.target.value)}
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Max Price</label>
                    <input
                      type="number"
                      placeholder="Max Price"
                      value={searchFilters.priceMax}
                      onChange={(e) => handleFilterChange('priceMax', e.target.value)}
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  {/* Bedrooms */}
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Bedrooms</label>
                    <select
                      value={searchFilters.bedrooms}
                      onChange={(e) => handleFilterChange('bedrooms', e.target.value)}
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                    >
                      <option value="">Any</option>
                      <option value="1">1+</option>
                      <option value="2">2+</option>
                      <option value="3">3+</option>
                      <option value="4">4+</option>
                      <option value="5">5+</option>
                    </select>
                  </div>

                  {/* Property Type */}
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Property Type</label>
                    <select
                      value={searchFilters.propertyType}
                      onChange={(e) => handleFilterChange('propertyType', e.target.value)}
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                    >
                      <option value="">All Types</option>
                      <option value="Apartment">Apartment</option>
                      <option value="Villa">Villa</option>
                      <option value="Townhouse">Townhouse</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Penthouse">Penthouse</option>
                      <option value="Studio">Studio</option>
                    </select>
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Location</label>
                    <input
                      type="text"
                      placeholder="Enter location"
                      value={searchFilters.location}
                      onChange={(e) => handleFilterChange('location', e.target.value)}
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  {/* Sustainability */}
                  <div className="flex items-center">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={searchFilters.sustainability}
                        onChange={(e) => handleFilterChange('sustainability', e.target.checked)}
                        className="rounded border-slate-600 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-white">Green Certified</span>
                    </label>
                  </div>

                  {/* Clear Filters */}
                  <div className="flex items-end">
                    <button
                      onClick={clearFilters}
                      className="w-full bg-slate-700 text-white px-4 py-2 rounded-lg hover:bg-slate-600 transition-colors flex items-center justify-center space-x-2"
                    >
                      <X className="w-4 h-4" />
                      <span>Clear All</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Properties Grid/List */}
        <AnimatePresence mode="wait">
          {filteredProperties.length > 0 ? (
            <motion.div
              key={viewMode}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
            >
              {filteredProperties.map((property, index) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  isFavorite={favorites.includes(property.id)}
                  onToggleFavorite={handleAddToFavorites}
                  index={index}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-800 rounded-full mb-4">
                <Home className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">No properties found</h3>
              <p className="text-gray-400 mb-6">Try adjusting your search criteria or filters</p>
              <button
                onClick={clearFilters}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Properties