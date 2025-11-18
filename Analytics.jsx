import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  MapPin, 
  Home, 
  Users, 
  Activity,
  Calendar,
  Eye,
  Star,
  Filter,
  Download,
  Share
} from 'lucide-react'
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts'

const Analytics = () => {
  const [timeRange, setTimeRange] = useState('6M')
  const [activeMetric, setActiveMetric] = useState('price')

  // Sample data
  const priceTrends = [
    { month: 'Jan', price: 1100000, volume: 120 },
    { month: 'Feb', price: 1150000, volume: 135 },
    { month: 'Mar', price: 1180000, volume: 142 },
    { month: 'Apr', price: 1220000, volume: 158 },
    { month: 'May', price: 1250000, volume: 167 },
    { month: 'Jun', price: 1280000, volume: 175 }
  ]

  const locationData = [
    { location: 'Dubai Marina', properties: 45, avgPrice: 2100000, growth: 15.2 },
    { location: 'Downtown Dubai', properties: 38, avgPrice: 1850000, growth: 12.8 },
    { location: 'Palm Jumeirah', properties: 25, avgPrice: 4200000, growth: 18.5 },
    { location: 'Business Bay', properties: 32, avgPrice: 1200000, growth: 10.3 },
    { location: 'JBR', properties: 28, avgPrice: 2800000, growth: 16.7 }
  ]

  const propertyTypes = [
    { name: 'Apartments', value: 45, avgPrice: 1200000, color: '#3b82f6' },
    { name: 'Villas', value: 30, avgPrice: 3500000, color: '#8b5cf6' },
    { name: 'Commercial', value: 15, avgPrice: 2200000, color: '#06b6d4' },
    { name: 'Townhouses', value: 10, avgPrice: 1800000, color: '#10b981' }
  ]

  const investmentMetrics = [
    { metric: 'ROI', current: 8.5, target: 10.0 },
    { metric: 'Occupancy', current: 92, target: 95 },
    { metric: 'Appreciation', current: 12.5, target: 15.0 },
    { metric: 'Cash Flow', current: 85, target: 90 },
    { metric: 'Diversification', current: 78, target: 85 }
  ]

  const marketInsights = [
    {
      title: 'Price Appreciation',
      value: '+12.5%',
      trend: 'up',
      description: 'Average property prices increased by 12.5% this year',
      icon: TrendingUp,
      color: 'text-green-400'
    },
    {
      title: 'Market Volume',
      value: '1,234',
      trend: 'up',
      description: 'Properties sold this quarter',
      icon: Home,
      color: 'text-blue-400'
    },
    {
      title: 'Average Days on Market',
      value: '18',
      trend: 'down',
      description: 'Properties selling faster than last year',
      icon: Calendar,
      color: 'text-purple-400'
    },
    {
      title: 'Investment Potential',
      value: 'High',
      trend: 'up',
      description: 'Market conditions favor buyers',
      icon: Star,
      color: 'text-yellow-400'
    }
  ]

  const timeRanges = ['1M', '3M', '6M', '1Y', '2Y']

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Market Analytics</h1>
              <p className="text-gray-400">Comprehensive insights into the real estate market</p>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Time Range Selector */}
              <div className="flex items-center bg-slate-800 rounded-lg p-1">
                {timeRanges.map((range) => (
                  <button
                    key={range}
                    onClick={() => setTimeRange(range)}
                    className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                      timeRange === range
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
              
              {/* Action Buttons */}
              <button className="bg-slate-700 text-white px-4 py-2 rounded-lg hover:bg-slate-600 transition-colors flex items-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Export</span>
              </button>
              <button className="bg-slate-700 text-white px-4 py-2 rounded-lg hover:bg-slate-600 transition-colors flex items-center space-x-2">
                <Share className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Market Insights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {marketInsights.map((insight, index) => {
            const Icon = insight.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-white/20 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-slate-700/50 ${insight.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  {insight.trend === 'up' ? (
                    <TrendingUp className="w-5 h-5 text-green-400" />
                  ) : (
                    <TrendingDown className="w-5 h-5 text-red-400" />
                  )}
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{insight.value}</h3>
                <p className="text-gray-400 text-sm mb-2">{insight.title}</p>
                <p className="text-gray-500 text-xs">{insight.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Price Trends */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-slate-800/50 backdrop-blur-md rounded-xl p-6 border border-white/10"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">Price Trends</h2>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setActiveMetric('price')}
                  className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                    activeMetric === 'price'
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-700 text-gray-400 hover:text-white'
                  }`}
                >
                  Price
                </button>
                <button
                  onClick={() => setActiveMetric('volume')}
                  className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                    activeMetric === 'volume'
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-700 text-gray-400 hover:text-white'
                  }`}
                >
                  Volume
                </button>
              </div>
            </div>
            
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={priceTrends}>
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
                  <Area 
                    type="monotone" 
                    dataKey={activeMetric} 
                    stroke={activeMetric === 'price' ? '#3b82f6' : '#8b5cf6'} 
                    fill={activeMetric === 'price' ? '#3b82f6' : '#8b5cf6'}
                    fillOpacity={0.3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Property Types */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-slate-800/50 backdrop-blur-md rounded-xl p-6 border border-white/10"
          >
            <h2 className="text-xl font-semibold text-white mb-6">Property Types Distribution</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={propertyTypes}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
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
        </div>

        {/* Location Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-slate-800/50 backdrop-blur-md rounded-xl p-6 border border-white/10 mb-8"
        >
          <h2 className="text-xl font-semibold text-white mb-6">Location Analysis</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Location</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Properties</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Avg. Price</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Growth</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {locationData.map((location, index) => (
                  <tr key={index} className="border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors">
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-blue-400" />
                        <span className="text-white font-medium">{location.location}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-gray-300">{location.properties}</td>
                    <td className="py-4 px-4 text-white font-medium">
                      ${(location.avgPrice / 1000000).toFixed(1)}M
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-1">
                        <TrendingUp className="w-4 h-4 text-green-400" />
                        <span className="text-green-400 font-medium">{location.growth}%</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                        View Properties
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Investment Performance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-slate-800/50 backdrop-blur-md rounded-xl p-6 border border-white/10"
        >
          <h2 className="text-xl font-semibold text-white mb-6">Investment Performance Metrics</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={investmentMetrics}>
                <PolarGrid stroke="#374151" />
                <PolarAngleAxis dataKey="metric" stroke="#9ca3af" />
                <PolarRadiusAxis stroke="#374151" />
                <Radar
                  name="Current"
                  dataKey="current"
                  stroke="#3b82f6"
                  fill="#3b82f6"
                  fillOpacity={0.3}
                />
                <Radar
                  name="Target"
                  dataKey="target"
                  stroke="#8b5cf6"
                  fill="#8b5cf6"
                  fillOpacity={0.3}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1f2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px'
                  }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 flex items-center justify-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full" />
              <span className="text-gray-400 text-sm">Current Performance</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full" />
              <span className="text-gray-400 text-sm">Target Performance</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Analytics