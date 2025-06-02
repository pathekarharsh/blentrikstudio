import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { motion } from 'framer-motion'

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark')
    }
  }, [])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light')
    // You would update your theme context/provider here
  }

  return (
    <ToggleButton
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {isDarkMode ? (
        <MdLightMode size="1.5rem" />
      ) : (
        <MdDarkMode size="1.5rem" />
      )}
    </ToggleButton>
  )
}

const ToggleButton = styled(motion.button)`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(108, 99, 255, 0.1);
  }
`

export default ThemeToggle