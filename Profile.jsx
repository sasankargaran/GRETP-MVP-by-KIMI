import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Heart, 
  Eye,
  Star,
  Settings,
  Edit3,
  Save,
  X,
  Bell,
  Shield,
  CreditCard,
  LogOut,
  ChevronRight,
  Activity,
  TrendingUp,
  Home,
  DollarSign,
  Clock
} from 'lucide-react'
import { useApp } from '../context/AppContext'

const Profile = () => {
  const { user, favorites, properties } = useApp()
  const [activeTab, setActiveTab] = useState('overview')
  const [isEditing, setIsEditing] = useState(false)
  const [editedUser, setEditedUser] = useState(user)

  const tabs = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'properties', label: 'My Properties', icon: Home },
    { id: 'favorites', label: 'Favorites', icon: Heart },
    { id: 'activity', label: 'Activity', icon: Activity },
    { id: 'settings', label: 'Settings', icon: Settings }
  ]

  const recentActivity = [
    { id: 1, type: 'view', property: 'Luxury Downtown Apartment', time: '2 hours ago', icon: Eye },
    { id: 2, type: 'favorite', property: 'Modern Villa with Garden', time: '5 hours ago', icon: Heart },
    { id: 3, type: 'visit', property: 'Beachfront Penthouse', time: '1 day ago', icon: Calendar },
    { id: 4, type: 'review', property: 'Executive Office Space', time: '2 days ago', icon: Star }
  ]

  const userStats = [
    { label: 'Properties Viewed', value: '24', icon: Eye, color: 'text-blue-400' },
    { label: 'Favorites', value: favorites.length.toString(), icon: Heart, color: 'text-red-400' },
    { label: 'Scheduled Visits', value: '5', icon: Calendar, color: 'text-green-400' },
    { label: 'Reviews Written', value: '3', icon: Star, color: 'text-yellow-400' }
  ]

  const handleSaveChanges = () => {
    // Here you would typically save the changes to your backend
    console.log('Saving changes:', editedUser)
    setIsEditing(false)
  }

  const handleCancelEdit = () => {
    setEditedUser(user)
    setIsEditing(false)
  }

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Personal Information */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-slate-800/50 backdrop-blur-md rounded-xl p-6 border border-white/10"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">Personal Information</h2>
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
            >
              <Edit3 className="w-4 h-4" />
              <span>Edit</span>
            </button>
          ) : (
            <div className="flex items-center space-x-2">
              <button
                onClick={handleSaveChanges}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2"
              >
                <Save className="w-4 h-4" />
                <span>Save</span>
              </button>
              <button
                onClick={handleCancelEdit}
                className="bg-slate-600 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
            {isEditing ? (
              <input
                type="text"
                value={editedUser.name}
                onChange={(e) => setEditedUser({...editedUser, name: e.target.value})}
                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
              />
            ) : (
              <p className="text-white">{user.name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
            {isEditing ? (
              <input
                type="email"
                value={editedUser.email}
                onChange={(e) => setEditedUser({...editedUser, email: e.target.value})}
                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
              />
            ) : (
              <p className="text-white">{user.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Phone</label>
            {isEditing ? (
              <input
                type="tel"
                value={editedUser.phone}
                onChange={(e) => setEditedUser({...editedUser, phone: e.target.value})}
                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
              />
            ) : (
              <p className="text-white">{user.phone}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Member Since</label>
            <p className="text-white">{user.memberSince || 'January 2024'}</p>
          </div>
        </div>
      </motion.div>

      {/* User Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {userStats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div key={index} className="bg-slate-800/50 backdrop-blur-md rounded-xl p-4 border border-white/10 text-center">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-slate-700/50 mb-3 ${stat.color}`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          )
        })}
      </motion.div>
    </div>
  )

  const renderProperties = () => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="bg-slate-800/50 backdrop-blur-md rounded-xl p-6 border border-white/10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">My Properties</h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Add New Property
          </button>
        </div>

        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-700/50 rounded-full mb-4">
            <Home className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">No Properties Listed</h3>
          <p className="text-gray-400 mb-6">Start listing your properties to reach potential buyers</p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            List Your First Property
          </button>
        </div>
      </div>
    </motion.div>
  )

  const renderFavorites = () => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="bg-slate-800/50 backdrop-blur-md rounded-xl p-6 border border-white/10">
        <h2 className="text-xl font-semibold text-white mb-6">Favorite Properties</h2>
        
        {favorites.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {favorites.map((propertyId) => (
              <div key={propertyId} className="bg-slate-700/50 rounded-lg p-4">
                <div className="flex items-center space-x-4">
                  <img
                    src={`https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=100`}
                    alt="Property"
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-white font-semibold mb-1">Property {propertyId}</h3>
                    <p className="text-gray-400 text-sm mb-2">Downtown Dubai</p>
                    <p className="text-blue-400 font-semibold">$850,000</p>
                  </div>
                  <button className="text-red-400 hover:text-red-300 transition-colors">
                    <Heart className="w-5 h-5 fill-current" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-700/50 rounded-full mb-4">
              <Heart className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No Favorites Yet</h3>
            <p className="text-gray-400 mb-6">Start exploring properties and save your favorites</p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Browse Properties
            </button>
          </div>
        )}
      </div>
    </motion.div>
  )

  const renderActivity = () => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="bg-slate-800/50 backdrop-blur-md rounded-xl p-6 border border-white/10">
        <h2 className="text-xl font-semibold text-white mb-6">Recent Activity</h2>
        
        <div className="space-y-4">
          {recentActivity.map((activity) => {
            const Icon = activity.icon
            return (
              <div key={activity.id} className="flex items-center space-x-4 p-4 bg-slate-700/30 rounded-lg">
                <div className="p-2 bg-blue-600/20 rounded-lg">
                  <Icon className="w-5 h-5 text-blue-400" />
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium">{activity.property}</p>
                  <p className="text-gray-400 text-sm">{activity.time}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            )
          })}
        </div>
      </div>
    </motion.div>
  )

  const renderSettings = () => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Account Settings */}
      <div className="bg-slate-800/50 backdrop-blur-md rounded-xl p-6 border border-white/10">
        <h2 className="text-xl font-semibold text-white mb-6">Account Settings</h2>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b border-slate-700">
            <div className="flex items-center space-x-3">
              <Bell className="w-5 h-5 text-blue-400" />
              <div>
                <p className="text-white font-medium">Notifications</p>
                <p className="text-gray-400 text-sm">Manage your notification preferences</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
          
          <div className="flex items-center justify-between py-3 border-b border-slate-700">
            <div className="flex items-center space-x-3">
              <Shield className="w-5 h-5 text-green-400" />
              <div>
                <p className="text-white font-medium">Privacy & Security</p>
                <p className="text-gray-400 text-sm">Update your security settings</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
          
          <div className="flex items-center justify-between py-3 border-b border-slate-700">
            <div className="flex items-center space-x-3">
              <CreditCard className="w-5 h-5 text-purple-400" />
              <div>
                <p className="text-white font-medium">Payment Methods</p>
                <p className="text-gray-400 text-sm">Manage your payment options</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-slate-800/50 backdrop-blur-md rounded-xl p-6 border border-red-500/20">
        <h2 className="text-xl font-semibold text-red-400 mb-6">Danger Zone</h2>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between py-3">
            <div>
              <p className="text-white font-medium">Deactivate Account</p>
              <p className="text-gray-400 text-sm">Temporarily disable your account</p>
            </div>
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
              Deactivate
            </button>
          </div>
          
          <div className="flex items-center justify-between py-3">
            <div>
              <p className="text-white font-medium">Delete Account</p>
              <p className="text-gray-400 text-sm">Permanently delete your account and data</p>
            </div>
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
              Delete
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center space-x-4 mb-6">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-20 h-20 rounded-full object-cover border-2 border-blue-500"
            />
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">{user.name}</h1>
              <p className="text-gray-400">{user.role} • Member since {user.memberSince || 'January 2024'}</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex items-center space-x-1 bg-slate-800/50 backdrop-blur-md rounded-lg p-1 border border-white/10">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </div>
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'overview' && renderOverview()}
            {activeTab === 'properties' && renderProperties()}
            {activeTab === 'favorites' && renderFavorites()}
            {activeTab === 'activity' && renderActivity()}
            {activeTab === 'settings' && renderSettings()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Profile