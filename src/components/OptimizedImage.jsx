import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: ${props => props.height || 'auto'};
  background-color: ${props => props.placeholderColor || '#f0f0f0'};
  overflow: hidden;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: ${props => props.objectFit || 'cover'};
  opacity: ${props => props.isLoaded ? 1 : 0};
  transition: opacity 0.3s ease-in-out;
`;

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  objectFit = 'cover',
  placeholderColor = '#f0f0f0',
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
  }, [src]);

  return (
    <ImageContainer
      height={height}
      placeholderColor={placeholderColor}
      className={className}
    >
      <StyledImage
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        objectFit={objectFit}
        isLoaded={isLoaded}
        loading="lazy"
        {...props}
      />
    </ImageContainer>
  );
};

export default OptimizedImage; 