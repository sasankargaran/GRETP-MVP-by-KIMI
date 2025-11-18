import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Home, 
  TrendingUp, 
  TrendingDown, 
  Users, 
  DollarSign, 
  Eye,
  Calendar,
  MessageSquare,
  Bell,
  MapPin,
  Star,
  Clock,
  Activity
} from 'lucide-react'
import { useApp } from '../context/AppContext'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

const Dashboard = () => {
  const { user, properties, favorites, notifications } = useApp()
  const [activeTab, setActiveTab] = useState('overview')

  // Sample data for charts
  const priceTrends = [
    { month: 'Jan', price: 1100000 },
    { month: 'Feb', price: 1150000 },
    { month: 'Mar', price: 1180000 },
    { month: 'Apr', price: 1220000 },
    { month: 'May', price: 1250000 },
    { month: 'Jun', price: 1280000 }
  ]

  const propertyTypes = [
    { name: 'Apartments', value: 45, color: '#3b82f6' },
    { name: 'Villas', value: 30, color: '#8b5cf6' },
    { name: 'Commercial', value: 15, color: '#06b6d4' },
    { name: 'Townhouses', value: 10, color: '#10b981' }
  ]

  const recentActivity = [
    { id: 1, type: 'view', property: 'Luxury Downtown Apartment', time: '2 hours ago', icon: Eye },
    { id: 2, type: 'message', property: 'Modern Villa with Garden', time: '5 hours ago', icon: MessageSquare },
    { id: 3, type: 'favorite', property: 'Beachfront Penthouse', time: '1 day ago', icon: Star },
    { id: 4, type: 'visit', property: 'Executive Office Space', time: '2 days ago', icon: Calendar }
  ]

  const stats = [
    { 
      title: 'Properties Viewed', 
      value: '24', 
      change: '+12%', 
      icon: Eye, 
      color: 'text-blue-400',
      bgColor: 'bg-blue-600/20'
    },
    { 
      title: 'Favorites', 
      value: favorites.length.toString(), 
      change: '+3', 
      icon: Star, 
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-600/20'
    },
    { 
      title: 'Scheduled Visits', 
      value: '5', 
      change: '+2', 
      icon: Calendar, 
      color: 'text-green-400',
      bgColor: 'bg-green-600/20'
    },
    { 
      title: 'Messages', 
      value: '8', 
      change: '+5', 
      icon: MessageSquare, 
      color: 'text-purple-400',
      bgColor: 'bg-purple-600/20'
    }
  ]

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-white mb-2">Welcome back, {user.name.split(' ')[0]}!</h1>
          <p className="text-gray-400">Here's what's happening with your property search today.</p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-white/20 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${stat.bgColor} ${stat.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-green-400 text-sm font-medium">{stat.change}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
                <p className="text-gray-400 text-sm">{stat.title}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Charts and Activity */}
          <div className="lg:col-span-2 space-y-8">
            {/* Price Trends Chart */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-slate-800/50 backdrop-blur-md rounded-xl p-6 border border-white/10"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-white">Price Trends</h2>
                <div className="flex items-center space-x-2 text-green-400">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm">+12.5%</span>
                </div>
              </div>
              
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={priceTrends}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="month" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1f2937', 
                        border: '1px solid #374151',
                        borderRadius: '8px'
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="price" 
                      stroke="#3b82f6" 
                      strokeWidth={3}
                      dot={{ fill: '#3b82f6', r: 6 }}
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-slate-800/50 backdrop-blur-md rounded-xl p-6 border border-white/10"
            >
              <h2 className="text-xl font-semibold text-white mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivity.map((activity) => {
                  const Icon = activity.icon
                  return (
                    <div key={activity.id} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-slate-700/50 transition-colors">
                      <div className="p-2 bg-blue-600/20 rounded-lg">
                        <Icon className="w-5 h-5 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <p className="text-white text-sm">{activity.property}</p>
                        <p className="text-gray-400 text-xs">{activity.time}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Profile and Recommendations */}
          <div className="space-y-8">
            {/* User Profile */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-slate-800/50 backdrop-blur-md rounded-xl p-6 border border-white/10"
            >
              <div className="text-center mb-6">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-2 border-blue-500"
                />
                <h3 className="text-xl font-semibold text-white">{user.name}</h3>
                <p className="text-gray-400">{user.role}</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Member Since</span>
                  <span className="text-white text-sm">Jan 2024</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Properties Viewed</span>
                  <span className="text-white text-sm">24</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Favorites</span>
                  <span className="text-white text-sm">{favorites.length}</span>
                </div>
              </div>
            </motion.div>

            {/* Property Types Distribution */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-slate-800/50 backdrop-blur-md rounded-xl p-6 border border-white/10"
            >
              <h2 className="text-xl font-semibold text-white mb-6">Market Overview</h2>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={propertyTypes}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={70}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {propertyTypes.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 space-y-2">
                {propertyTypes.map((type) => (
                  <div key={type.name} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: type.color }}
                      />
                      <span className="text-gray-400 text-sm">{type.name}</span>
                    </div>
                    <span className="text-white text-sm">{type.value}%</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-slate-800/50 backdrop-blur-md rounded-xl p-6 border border-white/10"
            >
              <h2 className="text-xl font-semibold text-white mb-6">Quick Actions</h2>
              <div className="space-y-3">
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Continue Search
                </button>
                <button className="w-full bg-slate-700 text-white py-3 rounded-lg hover:bg-slate-600 transition-colors">
                  Schedule Viewing
                </button>
                <button className="w-full bg-slate-700 text-white py-3 rounded-lg hover:bg-slate-600 transition-colors">
                  View Favorites
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard