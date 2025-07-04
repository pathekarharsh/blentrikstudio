import React, { lazy, Suspense, useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/GlobalStyles'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { motion, AnimatePresence } from 'framer-motion'
import { HelmetProvider } from 'react-helmet-async'
import { FaWhatsapp } from 'react-icons/fa'
import styled from 'styled-components'
import ImagePreloader from './components/ImagePreloader'
import RouteTransition from './components/RouteTransition'

// Lazy loaded pages with preloading
const Home = lazy(() => import('./Pages/Home/Home'))
const Services = lazy(() => import('./Pages/Services/Services'))
const About = lazy(() => import('./Pages/About/About'))
const Contact = lazy(() => import('./Pages/Contact/Contact'))
const Portfolio = lazy(() => import('./Pages/Portfolio/Portfolio'))

// Preload routes
const preloadRoute = (route) => {
  const preload = () => {
    switch (route) {
      case '/services':
        Services.preload?.()
        break
      case '/about':
        About.preload?.()
        break
      case '/contact':
        Contact.preload?.()
        break
      case '/portfolio':
        Portfolio.preload?.()
        break
      default:
        break
    }
  }
  return preload
}

// Theme settings
const theme = {
  colors: {
    primary: '#fff200',
    primaryLight: '#fff566',
    text: '#ffffff',
    textSecondary: '#a0a0a0',
    background: '#0f0f1a',
    backgroundLight: '#1a1a2e'
  },
  fonts: {
    primary: 'Inter, sans-serif',
    secondary: 'Poppins, sans-serif'
  },
  spacing: {
    xxl: '4rem',
    xl: '2rem',
    lg: '1.5rem',
    md: '1rem',
    sm: '0.5rem'
  },
  breakpoints: {
    mobile: 'only screen and (max-width: 480px)',
    tablet: 'only screen and (max-width: 768px)'
  },
  shadows: {
    primary: '0 4px 12px rgba(255, 242, 0, 0.2)',
    lg: '0 10px 30px rgba(0, 0, 0, 0.2)'
  }
}

const MainContentWrapper = styled.div`
  background: transparent;
  position: relative; /* Ensure it respects z-index for children */
  width: 100%;
`

const WhatsAppButton = styled(motion.a)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: #25D366;
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3);
  z-index: 1000;
  transition: all 0.3s ease;

  &:hover {
    background: #128C7E;
    transform: scale(1.1);
  }

  @media ${({ theme }) => theme.breakpoints.mobile} {
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
    bottom: 1.5rem;
    right: 1.5rem;
  }
`

const LoadingScreen = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999;
  backdrop-filter: blur(5px);
`

const LoadingSpinner = styled(motion.div)`
  width: 50px;
  height: 50px;
  border: 3px solid ${({ theme }) => theme.colors.backgroundLight};
  border-top: 3px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`

const PageTransitionWrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
`

const App = () => {
  const location = useLocation()
  const [isLoading, setIsLoading] = useState(true)
  const [isPageLoading, setIsPageLoading] = useState(false)

  const imagesToPreload = [
    // Hero images
    '../assets/zimages/heroimage.webp',
    '../assets/zimages/heroabout.webp',
    '../assets/zimages/service.webp',
    
    // 3D Animation
    '../assets/3danimation/1703.webp',
    '../assets/3danimation/coco.webp',
    '../assets/3danimation/lighthouse.webp',
    '../assets/3danimation/lowpoly.webp',
    
    // Content
    '../assets/content/fear.webp',
    '../assets/content/sasuke.webp',
    '../assets/content/thumb.webp',
    '../assets/content/YORU.webp',
    
    // Graphic Design
    '../assets/graphic/dakshin.webp',
    '../assets/graphic/newone.webp',
    '../assets/graphic/option.webp',
    '../assets/graphic/pne.webp',
    
    // Landing Pages
    '../assets/landingpage/one.webp',
    '../assets/landingpage/two.webp',
    '../assets/landingpage/three.webp',
    '../assets/landingpage/four.webp',
    
    // Posters
    '../assets/posters/five.webp',
    '../assets/posters/four.webp',
    '../assets/posters/one.webp',
    '../assets/posters/three.webp',
    '../assets/posters/two.webp',
    
    // Test Images
    '../assets/test/four.webp',
    '../assets/test/one.webp',
    '../assets/test/six.webp',
    '../assets/test/three.webp',
    '../assets/test/two.webp',
    
    // UI/UX
    '../assets/uiux/one.webp',
    '../assets/uiux/three.webp',
    '../assets/uiux/two.webp',
    
    // Web Development
    '../assets/webdev/four.webp',
    '../assets/webdev/one.webp',
    '../assets/webdev/three.webp',
    '../assets/webdev/two.webp'
  ]

  const handleLoadComplete = () => {
    setIsLoading(false)
  }

  const handleWhatsAppClick = () => {
    const phoneNumber = '918830958681'
    const message = 'Hello! I would like to discuss a project with Blentrik.'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  useEffect(() => {
    // Preload next route when hovering over nav links
    const navLinks = document.querySelectorAll('a[href^="/"]')
    navLinks.forEach(link => {
      link.addEventListener('mouseenter', () => {
        const path = link.getAttribute('href')
        preloadRoute(path)()
      })
    })

    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('mouseenter', () => {})
      })
    }
  }, [])

  useEffect(() => {
    setIsPageLoading(true)
    const timer = setTimeout(() => {
      setIsPageLoading(false)
    }, 300) // Reduced from 500ms to 300ms
    return () => clearTimeout(timer)
  }, [location])

  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {isLoading ? (
          <ImagePreloader 
            images={imagesToPreload} 
            onLoadComplete={handleLoadComplete} 
          />
        ) : (
          <>
            <RouteTransition location={location}>
              <Navbar />
              <Suspense fallback={
                <LoadingScreen>
                  <LoadingSpinner />
                </LoadingScreen>
              }>
                <Routes location={location} key={location.pathname}>
                  <Route path="/" element={<Home />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                </Routes>
              </Suspense>
              <Footer />
            </RouteTransition>
            <WhatsAppButton
              href="#"
              onClick={handleWhatsAppClick}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <FaWhatsapp />
            </WhatsAppButton>
          </>
        )}
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App
