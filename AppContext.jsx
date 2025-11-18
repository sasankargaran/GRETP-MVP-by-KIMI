import React, { createContext, useContext, useReducer, useEffect } from 'react'

const AppContext = createContext()

const initialState = {
  user: {
    id: 'user_001',
    name: 'John Smith',
    email: 'john.smith@email.com',
    phone: '+971 50 123 4567',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200',
    role: 'buyer',
    preferences: {
      priceRange: [500000, 2000000],
      propertyTypes: ['apartment', 'villa'],
      locations: ['Dubai Marina', 'Downtown Dubai'],
      sustainability: true
    }
  },
  properties: [],
  favorites: [],
  notifications: [],
  chatMessages: [],
  selectedProperty: null,
  searchFilters: {
    priceMin: '',
    priceMax: '',
    bedrooms: '',
    propertyType: '',
    location: '',
    sustainability: false
  },
  marketData: {
    averagePrice: 1250000,
    priceChange: '+12.5%',
    totalListings: 10234,
    averageDaysOnMarket: 18
  },
  isLoading: false,
  error: null
}

const appReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload }
    
    case 'SET_ERROR':
      return { ...state, error: action.payload, isLoading: false }
    
    case 'SET_PROPERTIES':
      return { ...state, properties: action.payload, isLoading: false }
    
    case 'SET_FAVORITES':
      return { ...state, favorites: action.payload }
    
    case 'ADD_FAVORITE':
      return { ...state, favorites: [...state.favorites, action.payload] }
    
    case 'REMOVE_FAVORITE':
      return { ...state, favorites: state.favorites.filter(id => id !== action.payload) }
    
    case 'SET_NOTIFICATIONS':
      return { ...state, notifications: action.payload }
    
    case 'ADD_NOTIFICATION':
      return { ...state, notifications: [action.payload, ...state.notifications] }
    
    case 'SET_CHAT_MESSAGES':
      return { ...state, chatMessages: action.payload }
    
    case 'ADD_CHAT_MESSAGE':
      return { ...state, chatMessages: [...state.chatMessages, action.payload] }
    
    case 'SET_SELECTED_PROPERTY':
      return { ...state, selectedProperty: action.payload }
    
    case 'SET_SEARCH_FILTERS':
      return { ...state, searchFilters: { ...state.searchFilters, ...action.payload } }
    
    case 'CLEAR_FILTERS':
      return { 
        ...state, 
        searchFilters: {
          priceMin: '',
          priceMax: '',
          bedrooms: '',
          propertyType: '',
          location: '',
          sustainability: false
        }
      }
    
    case 'UPDATE_USER':
      return { ...state, user: { ...state.user, ...action.payload } }
    
    default:
      return state
  }
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState)

  // Load data from localStorage on mount
  useEffect(() => {
    try {
      const savedFavorites = localStorage.getItem('gretp_favorites')
      const savedMessages = localStorage.getItem('gretp_messages')
      
      if (savedFavorites) {
        dispatch({ type: 'SET_FAVORITES', payload: JSON.parse(savedFavorites) })
      }
      
      if (savedMessages) {
        dispatch({ type: 'SET_CHAT_MESSAGES', payload: JSON.parse(savedMessages) })
      }
    } catch (error) {
      console.error('Error loading saved data:', error)
    }
  }, [])

  // Save favorites to localStorage
  useEffect(() => {
    localStorage.setItem('gretp_favorites', JSON.stringify(state.favorites))
  }, [state.favorites])

  // Save chat messages to localStorage
  useEffect(() => {
    localStorage.setItem('gretp_messages', JSON.stringify(state.chatMessages))
  }, [state.chatMessages])

  const value = {
    ...state,
    dispatch
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useApp must be used within an AppProvider')
  }
  return context
}