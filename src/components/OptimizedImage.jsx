import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ImageContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${props => props.placeholderColor || '#1a1a1a'};
  overflow: hidden;
`;

const StyledImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: ${props => props.objectFit || 'cover'};
  opacity: ${props => props.isLoaded ? 1 : 0};
  transition: opacity 0.3s ease-in-out, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform;

  ${ImageContainer}:hover & {
    transform: scale(1.1);
  }
`;

const LoadingPlaceholder = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    ${props => props.placeholderColor || '#1a1a1a'} 0%,
    #2a2a2a 50%,
    ${props => props.placeholderColor || '#1a1a1a'} 100%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  opacity: ${props => props.isLoaded ? 0 : 1};
  transition: opacity 0.3s ease-in-out;

  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
`;

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  objectFit = 'cover',
  placeholderColor = '#1a1a1a',
  className,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
    };
    img.onerror = () => {
      console.error(`Failed to load image: ${src}`);
      setIsLoaded(true); // Still set loaded to true to remove loading state
    };
  }, [src]);

  return (
    <ImageContainer
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <LoadingPlaceholder
        isLoaded={isLoaded}
        placeholderColor={placeholderColor}
      />
      <StyledImage
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        objectFit={objectFit}
        isLoaded={isLoaded}
        loading="lazy"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        {...props}
      />
    </ImageContainer>
  );
};

export default OptimizedImage; 