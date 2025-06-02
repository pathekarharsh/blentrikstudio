import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <StyledNav $scrolled={scrolled}>
      <Logo to="/"> <span>BLENTRIK</span> </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </Hamburger>

      <Menu isOpen={isOpen}>
        <MenuLink to="/" initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3 }}>Home</MenuLink>
        <MenuLink to="/services" initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.4 }}>Services</MenuLink>
        <MenuLink to="/about" initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>About</MenuLink>
        <MenuLink to="/contact" initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>Contact</MenuLink>
      </Menu>
    </StyledNav>
  )
}

// Styled Components

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5vw;
  z-index: 1000;
  width: 100%;
  background: ${({ $scrolled, theme }) =>
    $scrolled ? 'rgba(15, 15, 26, 0.95)' : 'transparent'};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? 'blur(10px)' : 'none')};
  transition: all 0.3s ease;
  border-bottom: ${({ $scrolled, theme }) =>
    $scrolled ? `1px solid ${theme.colors.primary}` : 'none'};
`

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.secondary};
  letter-spacing: 1px;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};

  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: block;
  }
`

const Menu = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};

  @media ${({ theme }) => theme.breakpoints.tablet} {
    position: fixed;
    top: 80px;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.colors.background};
    flex-direction: column;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.lg};
    clip-path: ${({ isOpen }) =>
      isOpen ? 'circle(150% at 90% -10%)' : 'circle(0px at 90% -10%)'};
    transition: clip-path 0.8s ease;
    z-index: 999;
  }
`

const MenuLink = styled(motion.create(Link))`
  font-size: 1rem;
  font-weight: 500;
  position: relative;
  color: ${({ theme }) => theme.colors.text};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.primary};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`

export default Navbar
