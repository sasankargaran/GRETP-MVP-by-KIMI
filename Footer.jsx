import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Building2, 
  Zap, 
  Leaf, 
  Shield, 
  Globe, 
  Mail, 
  Phone, 
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Platform',
      links: [
        { label: 'Properties', href: '/properties' },
        { label: 'Analytics', href: '/analytics' },
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Mobile App', href: '#' }
      ]
    },
    {
      title: 'Services',
      links: [
        { label: 'Property Search', href: '/properties' },
        { label: 'Market Analysis', href: '/analytics' },
        { label: 'Investment Advisory', href: '#' },
        { label: 'Property Management', href: '#' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Press', href: '#' },
        { label: 'Contact', href: '#' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '#' },
        { label: 'Guides', href: '#' },
        { label: 'API Documentation', href: '#' },
        { label: 'Support', href: '#' }
      ]
    }
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ]

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <Building2 className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold text-white">GRETP</span>
              <Zap className="w-4 h-4 text-yellow-400" />
            </Link>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Revolutionizing global real estate through AI-powered technology, 
              sustainability, and expert human guidance. Connecting buyers, sellers, 
              and agents in a seamless digital ecosystem.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>Dubai, UAE</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-4 h-4" />
                <span>+971 4 123 4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>info@gretp.ae</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 bg-slate-800 rounded-lg text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 block py-1"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 py-8 border-y border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-blue-600/20 rounded-lg">
              <Zap className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h4 className="text-white font-semibold">AI-Powered</h4>
              <p className="text-gray-400 text-sm">Advanced machine learning algorithms</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="p-3 bg-green-600/20 rounded-lg">
              <Leaf className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <h4 className="text-white font-semibold">Sustainable</h4>
              <p className="text-gray-400 text-sm">Eco-friendly property solutions</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="p-3 bg-purple-600/20 rounded-lg">
              <Shield className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h4 className="text-white font-semibold">Secure</h4>
              <p className="text-gray-400 text-sm">Bank-level security & encryption</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-800">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} GRETP. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <Globe className="w-4 h-4" />
              <span className="text-sm">Global Platform</span>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 pt-8 border-t border-slate-800">
          <div className="flex flex-wrap items-center justify-center space-x-8 text-gray-500 text-sm">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4" />
              <span>SSL Secured</span>
            </div>
            <div className="flex items-center space-x-2">
              <Leaf className="w-4 h-4" />
              <span>Carbon Neutral</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4" />
              <span>AI Enhanced</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4" />
              <span>Global Coverage</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer