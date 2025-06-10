import { useState, useEffect } from 'react';
import '../styles/ImagePreloader.css';

const ImagePreloader = ({ images, onLoadComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let loadedImages = 0;
    const totalImages = images.length;

    const preloadImage = (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          loadedImages++;
          resolve();
        };
        img.onerror = reject;
      });
    };

    const preloadAllImages = async () => {
      try {
        await Promise.all(images.map(preloadImage));
        setIsLoading(false);
        onLoadComplete();
      } catch (error) {
        console.error('Error preloading images:', error);
        setIsLoading(false);
        onLoadComplete();
      }
    };

    preloadAllImages();
  }, [images, onLoadComplete]);

  if (!isLoading) return null;

  return (
    <div className="preloader-container">
      <div className="preloader-spinner"></div>
    </div>
  );
};

export default ImagePreloader; 