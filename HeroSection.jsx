import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Building2, 
  Zap, 
  Search, 
  TrendingUp, 
  ArrowRight, 
  Play,
  Star,
  MapPin,
  DollarSign,
  Home,
  Users
} from 'lucide-react'

const HeroSection = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const rotatingWords = ['Smart', 'Sustainable', 'AI-Powered', 'Global', 'Secure']
  
  const heroProperties = [
    {
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400',
      price: '$850K',
      location: 'Dubai Marina',
      rating: 4.8
    },
    {
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400',
      price: '$2.5M',
      location: 'Palm Jumeirah',
      rating: 4.9
    },
    {
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400',
      price: '$4.2M',
      location: 'JBR',
      rating: 5.0
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div 
            className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
            style={{
              left: `${mousePosition.x * 0.05}px`,
              top: `${mousePosition.y * 0.05}px`,
              transform: 'translate(-50%, -50%)'
            }}
          />
          <div 
            className="absolute w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
            style={{
              right: `${mousePosition.x * 0.03}px`,
              bottom: `${mousePosition.y * 0.03}px`,
              transform: 'translate(50%, 50%)'
            }}
          />
        </div>
      </div>

      {/* Floating Property Cards */}
      <div className="absolute inset-0 pointer-events-none">
        {heroProperties.map((property, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.3, 0.6, 0.3], 
              scale: [0.8, 1, 0.8],
              x: [0, 20, 0],
              y: [0, -20, 0]
            }}
            transition={{
              duration: 4,
              delay: index * 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className={`absolute w-32 h-40 rounded-xl overflow-hidden shadow-2xl ${
              index === 0 ? 'top-20 left-10' :
              index === 1 ? 'top-40 right-20' :
              'bottom-40 left-20'
            }`}
          >
            <img
              src={property.image}
              alt={property.location}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-2 left-2 right-2 text-white">
              <div className="text-xs font-bold">{property.price}</div>
              <div className="text-xs opacity-80">{property.location}</div>
              <div className="flex items-center mt-1">
                <Star className="w-3 h-3 text-yellow-400 fill-current" />
                <span className="text-xs ml-1">{property.rating}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-4">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span className="text-sm font-medium text-white">AI-Powered Real Estate Revolution</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Find Your Perfect
              <span className="block text-gradient">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWordIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block"
                  >
                    {rotatingWords[currentWordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
              Property
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl"
            >
              GRETP combines advanced AI technology with expert human guidance to revolutionize 
              real estate transactions globally. Discover sustainable, smart properties tailored to your needs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-8"
            >
              <Link
                to="/properties"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-glow inline-flex items-center space-x-2"
              >
                <Search className="w-5 h-5" />
                <span>Start Your Search</span>
              </Link>
              
              <button className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105 inline-flex items-center space-x-2 border border-white/20">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center justify-center lg:justify-start space-x-8 text-gray-400"
            >
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-sm">4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-blue-400" />
                <span className="text-sm">50K+ Users</span>
              </div>
              <div className="flex items-center space-x-2">
                <Home className="w-5 h-5 text-green-400" />
                <span className="text-sm">10K+ Properties</span>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Interactive Elements */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              {/* Main Property Showcase */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800"
                  alt="Luxury Property"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Property Info Overlay */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold">$850,000</span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="text-sm">4.8</span>
                    </div>
                  </div>
                  <p className="text-lg mb-2">Luxury Downtown Apartment</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-300">
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>Dubai Marina</span>
                    </span>
                    <span>3 bed • 2 bath • 2,100 sqft</span>
                  </div>
                </div>

                {/* Sustainability Badge */}
                <div className="absolute top-6 right-6">
                  <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                    <Leaf className="w-3 h-3" />
                    <span>Green Certified</span>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg"
              >
                <Zap className="w-6 h-6" />
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, delay: 1, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 bg-purple-600 text-white p-3 rounded-full shadow-lg"
              >
                <TrendingUp className="w-6 h-6" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-white/60"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection