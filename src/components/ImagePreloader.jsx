import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import '../styles/ImagePreloader.css';

const ImagePreloader = ({ images, onLoadComplete }) => {
  const [loadedImages, setLoadedImages] = useState(0);
  const [errorCount, setErrorCount] = useState(0);
  const [failedImages, setFailedImages] = useState([]);

  useEffect(() => {
    const loadImage = (src) => {
      return new Promise((resolve) => {
        const img = new Image();
        
        // Handle successful load
        img.onload = () => {
          setLoadedImages(prev => prev + 1);
          resolve();
        };

        // Handle load error
        img.onerror = (error) => {
          console.error(`Failed to load image: ${src}`);
          setErrorCount(prev => prev + 1);
          setFailedImages(prev => [...prev, src]);
          resolve(); // Resolve to continue loading other images
        };

        // Convert the URL to use Vite's import.meta.url
        const imageUrl = new URL(src, import.meta.url).href;
        img.src = imageUrl;
      });
    };

    const loadAllImages = async () => {
      try {
        const loadPromises = images.map(loadImage);
        await Promise.all(loadPromises);
        
        if (failedImages.length > 0) {
          console.warn('Some images failed to load:', failedImages);
        }
        
        onLoadComplete();
      } catch (error) {
        console.error('Error in image preloading:', error);
        onLoadComplete(); // Complete even if there are errors
      }
    };

    loadAllImages();
  }, [images, onLoadComplete, failedImages]);

  const progress = (loadedImages / images.length) * 100;

  return (
    <PreloaderContainer>
      <LoadingBar>
        <ProgressBar 
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </LoadingBar>
      <LoadingText>
        Loading Experience {Math.round(progress)}%
        {errorCount > 0 && (
          <ErrorText>
            ({errorCount} images failed to load)
          </ErrorText>
        )}
      </LoadingText>
    </PreloaderContainer>
  );
};

const PreloaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const LoadingBar = styled.div`
  width: 300px;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: 20px;
`;

const ProgressBar = styled(motion.div)`
  height: 100%;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 2px;
`;

const LoadingText = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const ErrorText = styled.span`
  color: ${({ theme }) => theme.colors.error || '#ff4444'};
  font-size: 0.8rem;
`;

export default ImagePreloader; 