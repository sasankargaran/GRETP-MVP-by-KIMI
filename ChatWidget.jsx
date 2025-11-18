import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  X, 
  MessageSquare, 
  Send, 
  Bot, 
  User, 
  Zap,
  Heart,
  Star
} from 'lucide-react'
import { useApp } from '../context/AppContext'

const ChatWidget = ({ isOpen, onClose }) => {
  const [message, setMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)
  const { chatMessages, dispatch } = useApp()

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [chatMessages])

  const handleSendMessage = async (e) => {
    e.preventDefault()
    if (!message.trim()) return

    const userMessage = {
      id: Date.now(),
      type: 'user',
      text: message,
      timestamp: new Date().toISOString()
    }

    dispatch({ type: 'ADD_CHAT_MESSAGE', payload: userMessage })
    setMessage('')
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponses = [
        'I\'ve found several properties that match your criteria. Would you like me to show you the top recommendations?',
        'Based on your preferences, I suggest looking at properties in Dubai Marina or Downtown Dubai. These areas have excellent investment potential.',
        'Great choice! I can schedule a virtual tour for this property. When would be a convenient time for you?',
        'Our AI analysis shows this property has a 95% match with your preferences. Let me send you the detailed report.',
        'I\'ve connected you with Sarah Johnson, our specialist agent for this area. She\'ll contact you within 30 minutes.',
        'This property qualifies for our green certification program. Would you like to learn about the sustainability features?'
      ]

      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)]
      
      const aiMessage = {
        id: Date.now() + 1,
        type: 'bot',
        text: randomResponse,
        timestamp: new Date().toISOString()
      }

      dispatch({ type: 'ADD_CHAT_MESSAGE', payload: aiMessage })
      setIsTyping(false)
    }, 1500)
  }

  const quickResponses = [
    'Find me properties under $1M',
    'Show me sustainable homes',
    'Schedule a property tour',
    'Investment opportunities',
    'Market analysis report'
  ]

  const handleQuickResponse = (text) => {
    setMessage(text)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Chat Widget */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 100 }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed bottom-4 right-4 w-96 h-[600px] bg-slate-800 rounded-xl shadow-2xl z-50 flex flex-col border border-white/10"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-t-xl flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Bot className="w-8 h-8 text-white" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">GRETP AI Assistant</h3>
                  <p className="text-blue-100 text-sm">Always here to help</p>
                </div>
              </div>
              
              <button
                onClick={onClose}
                className="text-white hover:text-gray-300 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
              {/* Welcome Message */}
              {chatMessages.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-slate-700 rounded-lg p-3 max-w-xs">
                    <p className="text-white text-sm">
                      Welcome to GRETP! I'm your AI assistant. I can help you find properties, 
                      schedule viewings, provide market insights, and answer any questions you have. 
                      What would you like to explore today?
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Chat Messages */}
              {chatMessages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-start space-x-3 ${
                    msg.type === 'user' ? 'justify-end' : ''
                  }`}
                >
                  {msg.type === 'bot' && (
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                  )}
                  
                  <div
                    className={`max-w-xs rounded-lg p-3 ${
                      msg.type === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-700 text-white'
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                  </div>
                  
                  {msg.type === 'user' && (
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-5 h-5 text-white" />
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-slate-700 rounded-lg p-3">
                    <div className="flex space-x-1">
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity }}
                        className="w-2 h-2 bg-gray-400 rounded-full"
                      />
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, delay: 0.1, repeat: Infinity }}
                        className="w-2 h-2 bg-gray-400 rounded-full"
                      />
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, delay: 0.2, repeat: Infinity }}
                        className="w-2 h-2 bg-gray-400 rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Responses */}
            <div className="p-4 border-t border-slate-700">
              <p className="text-xs text-gray-400 mb-2">Quick responses:</p>
              <div className="flex flex-wrap gap-2">
                {quickResponses.map((response, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickResponse(response)}
                    className="bg-slate-700 hover:bg-slate-600 text-white px-3 py-1 rounded-full text-xs transition-colors"
                  >
                    {response}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Form */}
            <form onSubmit={handleSendMessage} className="p-4 border-t border-slate-700">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-slate-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={!message.trim()}
                  className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Floating Action Button */}
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.2}
            className="fixed bottom-20 right-4 w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:shadow-xl transition-shadow"
            onClick={onClose}
          >
            <Heart className="w-6 h-6 text-white" />
          </motion.button>
        </>
      )}
    </AnimatePresence>
  )
}

export default ChatWidget