import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const ServiceCard = ({ icon, title, description, longDescription, index, images = [] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    if (images.length > 0) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
      }, 3000)

      return () => clearInterval(interval)
    }
  }, [images.length])

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <Card
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      expanded={isExpanded}
    >
      {images.length > 0 && (
        <ImageGallery>
          {images.map((image, idx) => (
            <GalleryImage
              key={idx}
              src={image}
              alt={`${title} showcase ${idx + 1}`}
              style={{
                opacity: currentImageIndex === idx ? 1 : 0,
                transform: `translateX(${(idx - currentImageIndex) * 100}%)`
              }}
            />
          ))}
        </ImageGallery>
      )}
      <Icon>{icon}</Icon>
      <h3>{title}</h3>
      <p>{description}</p>
      {longDescription && (
        <ExpandedContent expanded={isExpanded}>
          <p>{longDescription}</p>
        </ExpandedContent>
      )}
      {longDescription && (
        <ReadMoreButton onClick={toggleExpanded}>
          {isExpanded ? 'Show Less' : 'Read More'}
        </ReadMoreButton>
      )}
    </Card>
  )
}

const Card = styled(motion.div)`
  background: ${({ theme }) => theme.colors.backgroundLight};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.backgroundLighter};
  transition: all 0.3s ease;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.primary};
    transform: translateY(-5px);
  }

  h3 {
    color: ${({ theme }) => theme.colors.primary};
    margin: ${({ theme }) => `${theme.spacing.sm} 0`};
    font-size: 1.2rem;
  }

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.6;
    font-size: 0.9rem;
  }
`

const Icon = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

const ExpandedContent = styled.div`
  overflow: hidden;
  max-height: ${({ expanded }) => (expanded ? '500px' : '0')};
  transition: max-height 0.5s ease-in-out;
  margin-top: ${({ theme, expanded }) => (expanded ? theme.spacing.md : '0')};
  padding-top: ${({ theme, expanded }) => (expanded ? theme.spacing.md : '0')};
  border-top: ${({ theme, expanded }) => (expanded ? `1px solid ${theme.colors.backgroundLighter}` : 'none')};

  p {
    font-size: 1rem;
  }
`

const ImageGallery = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  border-radius: 4px;
  overflow: hidden;
`

const GalleryImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s ease;
`

const ReadMoreButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  border: none;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: ${({ theme }) => theme.spacing.md};

  &:hover {
    background: ${({ theme }) => theme.colors.primaryLight};
    box-shadow: ${({ theme }) => theme.shadows.primary};
  }
`

export default ServiceCard