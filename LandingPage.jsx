import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Building2, 
  Zap, 
  Search, 
  TrendingUp, 
  Shield, 
  Leaf, 
  Users, 
  DollarSign,
  Star,
  ArrowRight,
  Play,
  MapPin,
  Heart,
  Clock,
  Award,
  Globe,
  MessageSquare,
  Phone
} from 'lucide-react'
import { useApp } from '../context/AppContext'
import HeroSection from '../components/HeroSection'
import PropertyCard from '../components/PropertyCard'
import ChatWidget from '../components/ChatWidget'

const LandingPage = () => {
  const [currentPropertyIndex, setCurrentPropertyIndex] = useState(0)
  const [chatOpen, setChatOpen] = useState(false)
  const { properties, favorites, dispatch } = useApp()

  const featuredProperties = [
    {
      id: 1,
      title: 'Luxury Downtown Apartment',
      price: 850000,
      location: 'Dubai Marina',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
      bedrooms: 3,
      bathrooms: 2,
      size: 2100,
      sustainable: true,
      optimized: true,
      rating: 4.8,
      energyRating: 'A+',
      features: ['Pool', 'Gym', 'Parking', 'Smart Home']
    },
    {
      id: 2,
      title: 'Modern Villa with Garden',
      price: 2500000,
      location: 'Palm Jumeirah',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800',
      bedrooms: 5,
      bathrooms: 4,
      size: 4500,
      sustainable: true,
      optimized: false,
      rating: 4.9,
      energyRating: 'A',
      features: ['Garden', 'Private Pool', 'Beach Access', 'Smart Home']
    },
    {
      id: 3,
      title: 'Beachfront Penthouse',
      price: 4200000,
      location: 'Jumeirah Beach Residence',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
      bedrooms: 4,
      bathrooms: 5,
      size: 5600,
      sustainable: true,
      optimized: true,
      rating: 5.0,
      energyRating: 'A++',
      features: ['Ocean View', 'Private Pool', 'Terrace', 'Concierge']
    }
  ]

  const stats = [
    { icon: Building2, value: '10,234', label: 'Properties Listed', color: 'text-blue-400' },
    { icon: Users, value: '50K+', label: 'Active Users', color: 'text-green-400' },
    { icon: DollarSign, value: '$2.5B+', label: 'Transactions', color: 'text-yellow-400' },
    { icon: TrendingUp, value: '98%', label: 'Satisfaction Rate', color: 'text-purple-400' }
  ]

  const features = [
    {
      icon: Zap,
      title: 'AI-Powered Matching',
      description: 'Advanced algorithms match properties to your preferences and behavior patterns.',
      color: 'bg-blue-600/20 text-blue-400'
    },
    {
      icon: Shield,
      title: 'Secure Transactions',
      description: 'Bank-level security and blockchain verification for all property transactions.',
      color: 'bg-green-600/20 text-green-400'
    },
    {
      icon: Leaf,
      title: 'Sustainable Focus',
      description: 'Promoting eco-friendly properties and sustainable real estate practices.',
      color: 'bg-emerald-600/20 text-emerald-400'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Access properties worldwide with localized market insights and expertise.',
      color: 'bg-purple-600/20 text-purple-400'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Property Investor',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
      content: 'GRETP\'s AI matching system found me the perfect investment property in Dubai. The process was seamless and the insights were invaluable.',
      rating: 5
    },
    {
      name: 'Ahmed Al-Rashid',
      role: 'Real Estate Developer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
      content: 'The platform\'s sustainability focus and market analytics have transformed how we approach property development.',
      rating: 5
    },
    {
      name: 'Emma Chen',
      role: 'First-time Buyer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
      content: 'As a first-time buyer, GRETP guided me through every step. The AI recommendations were spot-on!',
      rating: 5
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPropertyIndex((prev) => (prev + 1) % featuredProperties.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const handleAddToFavorites = (propertyId) => {
    dispatch({ type: 'ADD_FAVORITE', payload: propertyId })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-slate-800 mb-4 ${stat.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.2, type: 'spring' }}
                    className="text-3xl font-bold text-white mb-2"
                  >
                    {stat.value}
                  </motion.div>
                  <p className="text-gray-400">{stat.label}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-gradient mb-4"
            >
              Featured Properties
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-400 max-w-3xl mx-auto"
            >
              Discover exceptional properties curated by our AI, featuring sustainable design and premium locations.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProperties.map((property, index) => (
              <PropertyCard
                key={property.id}
                property={property}
                isFavorite={favorites.includes(property.id)}
                onToggleFavorite={handleAddToFavorites}
                index={index}
              />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/properties"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>View All Properties</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-gradient mb-4"
            >
              Why Choose GRETP?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-400 max-w-3xl mx-auto"
            >
              Experience the future of real estate with our innovative platform 
              that combines cutting-edge technology with human expertise.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="card-glass text-center group"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-gradient mb-4"
            >
              What Our Users Say
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-400 max-w-3xl mx-auto"
            >
              Join thousands of satisfied customers who have found their perfect properties through GRETP.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card-glass"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 leading-relaxed">{testimonial.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white mb-6"
          >
            Ready to Find Your Dream Property?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
          >
            Join thousands of users who have found their perfect properties through our AI-powered platform.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Link
              to="/properties"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center space-x-2"
            >
              <Search className="w-5 h-5" />
              <span>Start Searching</span>
            </Link>
            
            <button
              onClick={() => setChatOpen(true)}
              className="bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 inline-flex items-center space-x-2"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Chat with AI Assistant</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Chat Widget */}
      <ChatWidget 
        isOpen={chatOpen} 
        onClose={() => setChatOpen(false)} 
      />
    </div>
  )
}

export default LandingPage