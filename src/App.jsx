import React, { lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/GlobalStyles'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { motion, AnimatePresence } from 'framer-motion'
import { HelmetProvider } from 'react-helmet-async'
import { FaWhatsapp } from 'react-icons/fa'
import styled from 'styled-components'

// Lazy loaded pages
const Home = lazy(() => import('./Pages/Home/Home'))
const Services = lazy(() => import('./Pages/Services/Services'))
const About = lazy(() => import('./Pages/About/About'))
const Contact = lazy(() => import('./Pages/Contact/Contact'))

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

const App = () => {
  const location = useLocation()

  const handleWhatsAppClick = () => {
    const phoneNumber = '918830958681'
    const message = 'Hello! I would like to discuss a project with Blentrik.'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navbar />
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Suspense fallback={<div style={{ padding: '4rem', textAlign: 'center' }}>Loading...</div>}>
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Suspense>
          </motion.div>
        </AnimatePresence>
        <Footer />
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
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App
