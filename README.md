# GRETP - AI-Powered Global Real Estate Trading Platform

A modern, feature-rich real estate platform built with React, featuring AI-powered property matching, comprehensive analytics, and a stunning user interface.

## Features

### 🏠 Core Functionality
- **AI-Powered Property Matching**: Advanced algorithms match properties to user preferences
- **Comprehensive Property Search**: Advanced filters and search capabilities
- **Real-time Analytics**: Market trends, price analysis, and investment insights
- **User Dashboard**: Personalized experience with favorites, activity tracking
- **Interactive Chat**: AI assistant for property recommendations and support

### 🎨 Design & User Experience
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Responsive Design**: Works perfectly on all devices
- **Interactive Elements**: Hover effects, transitions, and micro-interactions
- **Data Visualizations**: Charts and graphs for market analysis
- **Loading States**: Smooth loading animations and skeleton screens

### 🔧 Technical Features
- **React 18**: Latest React features with hooks and context
- **TypeScript Support**: Type-safe development (ready for TS migration)
- **Performance Optimized**: Lazy loading, code splitting, and optimization
- **State Management**: Context API for global state management
- **Routing**: React Router for seamless navigation
- **Animations**: Framer Motion for smooth animations

## Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **Charts**: Recharts for data visualization
- **Icons**: Lucide React
- **Notifications**: React Hot Toast
- **Development**: ESLint, modern JavaScript features

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd gretp-ai-platform
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation component
│   ├── Footer.jsx      # Footer component
│   ├── HeroSection.jsx # Landing page hero
│   ├── PropertyCard.jsx # Property listing card
│   ├── ChatWidget.jsx  # AI chat interface
│   └── LoadingScreen.jsx # Loading animation
├── pages/              # Page components
│   ├── LandingPage.jsx # Main landing page
│   ├── Dashboard.jsx   # User dashboard
│   ├── Properties.jsx  # Property listings
│   ├── Analytics.jsx   # Market analytics
│   └── Profile.jsx     # User profile
├── context/            # React context providers
│   └── AppContext.jsx  # Global state management
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
└── data/               # Sample data and constants
```

## Key Components

### PropertyCard
Reusable component for displaying property listings with:
- Image carousel
- Property details and features
- Favorite functionality
- Sustainability badges
- Energy ratings

### ChatWidget
AI-powered chat interface featuring:
- Real-time messaging
- Quick response buttons
- Typing indicators
- Draggable interface
- Message history

### Analytics Dashboard
Comprehensive analytics with:
- Price trend charts
- Market insights
- Location analysis
- Investment performance metrics
- Interactive visualizations

## Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
VITE_API_URL=your_api_url_here
VITE_MAPS_API_KEY=your_maps_api_key_here
VITE_AI_SERVICE_URL=your_ai_service_url_here
```

### Customization

The application is highly customizable:

1. **Theme Colors**: Modify Tailwind configuration in `tailwind.config.js`
2. **Animations**: Adjust animation settings in individual components
3. **Data Sources**: Update API endpoints in the context providers
4. **Features**: Enable/disable features through feature flags

## Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`

### Netlify
1. Connect your repository to Netlify
2. Configure build settings:
   - Build Command: `npm run build`
   - Publish Directory: `dist`

### GitHub Pages
1. Build the project: `npm run build`
2. Deploy the `dist` folder to your GitHub Pages branch

## Performance Features

- **Code Splitting**: Automatic code splitting for optimal loading
- **Image Optimization**: Lazy loading and responsive images
- **Animation Performance**: Hardware-accelerated animations
- **State Management**: Efficient re-rendering with React Context
- **Bundle Optimization**: Tree-shaking and minification

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions:
- Create an issue in the repository
- Check the documentation
- Review existing issues and discussions

## Roadmap

- [ ] Integration with real estate APIs
- [ ] Advanced AI recommendations
- [ ] Virtual property tours
- [ ] Mortgage calculator
- [ ] Market prediction models
- [ ] Mobile app development
- [ ] Multi-language support
- [ ] Blockchain integration for transactions

---

Built with ❤️ using React, Vite, and modern web technologies.