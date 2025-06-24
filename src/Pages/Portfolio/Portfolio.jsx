import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaSearch, FaTimes, FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import Seo from '../../components/Seo/Seo'
import OptimizedImage from '../../components/OptimizedImage'
import serviceImage from '../../assets/zimages/service.webp'

// Import all images with corrected paths
// 3D Animation
import geometryNodes from '../../assets/3danimation/1703.webp'
import coco from '../../assets/3danimation/coco.webp'
import lighthouse from '../../assets/3danimation/lighthouse.webp'
import lowpoly from '../../assets/3danimation/lowpoly.webp'

// Content (Thumbnails)
import fear from '../../assets/content/fear.webp'
import sasuke from '../../assets/content/sasuke.webp'
import thumb from '../../assets/content/thumb.webp'
import yoru from '../../assets/content/YORU.webp'

// Graphic (Instagram posts)
import dakshinPost from '../../assets/graphic/dakshin.webp'
import newone from '../../assets/graphic/newone.webp'
import option from '../../assets/graphic/option.webp'
import pne from '../../assets/graphic/pne.webp'

// Landing Pages
import dakshinLanding from '../../assets/landingpage/four.webp'
import medicalLanding from '../../assets/landingpage/one.webp'
import nikeLanding from '../../assets/landingpage/three.webp'
import portfolioLanding from '../../assets/landingpage/two.webp'

// Posters
import kashivanPoster from '../../assets/posters/five.webp'
import dakshinPoster from '../../assets/posters/four.webp'
import workshopPoster from '../../assets/posters/one.webp'
import ramtekPoster from '../../assets/posters/three.webp'
import designWorkshopPoster from '../../assets/posters/two.webp'

// Test (3D Renders)
import deadPlant from '../../assets/test/four.webp'
import sportscar from '../../assets/test/one.webp'
import thorHammer from '../../assets/test/six.webp'
import scifiWorld from '../../assets/test/three.webp'
import natureHome from '../../assets/test/two.webp'

// UI/UX
import coffeeShopUI from '../../assets/uiux/one.webp'
import medicalUI from '../../assets/uiux/three.webp'
import arsenalUI from '../../assets/uiux/two.webp'

// Web Development
import collegeProject from '../../assets/webdev/four.webp'
import medicalWebsite from '../../assets/webdev/one.webp'
import aiSummariser from '../../assets/webdev/three.webp'
import hackathonProject from '../../assets/webdev/two.webp'

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  // Portfolio items data with proper categorization and descriptions
  const portfolioItems = [
    // 3D Animation
    { id: 1, category: '3d', image: geometryNodes, title: 'Geometry Nodes Project', description: 'Advanced Blender geometry nodes creation', aspect: 'landscape', size: '1920x1080' },
    { id: 2, category: '3d', image: coco, title: 'Coca-Cola Can Model', description: 'Hyper-realistic Blender model of Coca-Cola cans', aspect: 'landscape', size: '1920x1080' },
    { id: 3, category: '3d', image: lighthouse, title: 'Low Poly Lighthouse', description: 'Stylized low poly lighthouse scene', aspect: 'landscape', size: '1920x1080' },
    { id: 4, category: '3d', image: lowpoly, title: 'Mountain Sunrise', description: 'Low poly mountain landscape at sunrise', aspect: 'landscape', size: '1920x1080' },
    // Test (Additional 3D Renders)
    { id: 22, category: '3d', image: deadPlant, title: 'Dead Plant Sci-Fi', description: '3D render of sci-fi environment', aspect: 'landscape', size: '1920x1080' },
    { id: 23, category: '3d', image: sportscar, title: 'Sports Car Render', description: '3D render of luxury sports car', aspect: 'landscape', size: '1920x1080' },
    { id: 24, category: '3d', image: thorHammer, title: "Thor's Hammer", description: '3D model of Mjolnir', aspect: 'landscape', size: '1920x1080' },
    { id: 25, category: '3d', image: scifiWorld, title: 'Sci-Fi World', description: 'Futuristic cityscape render', aspect: 'landscape', size: '1920x1080' },
    { id: 26, category: '3d', image: natureHome, title: 'Peaceful Nature Home', description: '3D render of cabin in nature', aspect: 'landscape', size: '1920x1080' },

    // Web Development
    { id: 30, category: 'web', image: collegeProject, title: 'College Project', description: 'Educational web application', aspect: 'landscape', size: '1920x1080' },
    { id: 31, category: 'web', image: medicalWebsite, title: 'Medical Website', description: 'Healthcare information portal', aspect: 'landscape', size: '1920x1080' },
    { id: 32, category: 'web', image: aiSummariser, title: 'AI Summarizer', description: 'Personal project for text processing', aspect: 'landscape', size: '1920x1080' },
    { id: 33, category: 'web', image: hackathonProject, title: 'Hackathon Winner', description: 'Award-winning web project', aspect: 'landscape', size: '1920x1080' },

    // UI/UX
    { id: 27, category: 'uiux', image: coffeeShopUI, title: 'Coffee Shop UI', description: 'Mobile app design for cafe', aspect: 'landscape', size: '1920x1080' },
    { id: 28, category: 'uiux', image: medicalUI, title: 'Medical Website UI', description: 'Healthcare platform design', aspect: 'landscape', size: '1920x1080' },
    { id: 29, category: 'uiux', image: arsenalUI, title: 'Arsenal FC Clone', description: 'Football club website redesign', aspect: 'landscape', size: '1920x1080' },

    // Graphic Design (includes all posters, thumbnails, posts, etc.)
    // Thumbnails
    { id: 5, category: 'graphic', image: fear, title: 'PUBG Montage Thumbnail', description: 'Thumbnail for gaming montage video', aspect: 'landscape', size: '1920x1080' },
    { id: 6, category: 'graphic', image: sasuke, title: 'Sasuke Edit Thumbnail', description: 'Anime edit thumbnail featuring Sasuke', aspect: 'landscape', size: '1920x1080' },
    { id: 7, category: 'graphic', image: thumb, title: 'Dakshin Documentary Thumbnail', description: 'Thumbnail for travel documentary', aspect: 'landscape', size: '1920x1080' },
    { id: 8, category: 'graphic', image: yoru, title: 'Valorant Edit Thumbnail', description: 'Thumbnail featuring Valorant agent Yoru', aspect: 'landscape', size: '1920x1080' },
    // Instagram posts
    { id: 9, category: 'graphic', image: dakshinPost, title: 'Dakshin 2.0 Trip Post', description: 'Instagram post for travel group', aspect: 'square', size: '1080x1080' },
    { id: 10, category: 'graphic', image: newone, title: 'Dakshin Poster Variant 2', description: 'Alternative design for travel poster', aspect: 'square', size: '1080x1080' },
    { id: 11, category: 'graphic', image: option, title: 'Blentrik Instagram Post', description: 'Promotional post for creative services', aspect: 'square', size: '1080x1080' },
    { id: 12, category: 'graphic', image: pne, title: 'Dakshin Poster Variant 3', description: 'Third variant of travel poster design', aspect: 'square', size: '1080x1080' },
    // Posters
    { id: 17, category: 'graphic', image: kashivanPoster, title: 'Kashivan Trip Poster', description: 'Travel poster for Kashivan trip', aspect: 'portrait', size: '2480x3508' },
    { id: 18, category: 'graphic', image: dakshinPoster, title: 'Dakshin 2.0 Poster', description: 'Official trip poster design', aspect: 'portrait', size: '2480x3508' },
    { id: 19, category: 'graphic', image: workshopPoster, title: 'Workshop Poster', description: 'Poster for creative workshop', aspect: 'portrait', size: '2480x3508' },
    { id: 20, category: 'graphic', image: ramtekPoster, title: 'Ramtek Trip Poster', description: 'Poster for Ramtek travel event', aspect: 'portrait', size: '2480x3508' },
    { id: 21, category: 'graphic', image: designWorkshopPoster, title: 'Design Workshop', description: 'Poster for graphic design workshop', aspect: 'portrait', size: '2480x3508' },
  ]

  // Filter items based on selected category
  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory)

  // Find current image index for lightbox navigation
  const currentIndex = filteredItems.findIndex(item => item.id === selectedImage?.id)

  // Lightbox navigation functions
  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % filteredItems.length
    setSelectedImage(filteredItems[nextIndex])
    setLightboxIndex(nextIndex)
  }

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length
    setSelectedImage(filteredItems[prevIndex])
    setLightboxIndex(prevIndex)
  }

  return (
    <Container>
      <Seo 
        title="Portfolio"
        description="Explore our creative portfolio featuring graphic design, UI/UX, 3D animation, and web development projects."
        keywords="portfolio, graphic design, ui/ux, 3d animation, web development"
      />
      
      <HeroSection>
        <HeroContent>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our <Highlight>Portfolio</Highlight>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore our creative work across various disciplines
          </motion.p>
        </HeroContent>
      </HeroSection>

      <PortfolioControls>
        <FilterButtons>
          <FilterButton 
            $active={selectedCategory === 'all'}
            onClick={() => setSelectedCategory('all')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            All Work
          </FilterButton>
          <FilterButton 
            $active={selectedCategory === '3d'}
            onClick={() => setSelectedCategory('3d')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            3D World
          </FilterButton>
          <FilterButton 
            $active={selectedCategory === 'web'}
            onClick={() => setSelectedCategory('web')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Web Development
          </FilterButton>
          <FilterButton 
            $active={selectedCategory === 'uiux'}
            onClick={() => setSelectedCategory('uiux')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            UI/UX Design
          </FilterButton>
          <FilterButton 
            $active={selectedCategory === 'graphic'}
            onClick={() => setSelectedCategory('graphic')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Graphic Design
          </FilterButton>
        </FilterButtons>
      </PortfolioControls>

      <PortfolioGrid>
        {filteredItems
          .sort((a, b) => {
            if (a.category === 'poster' && b.category !== 'poster') return 1;
            if (a.category !== 'poster' && b.category === 'poster') return -1;
            return 0;
          })
          .map((item) => (
            <PortfolioItem 
              key={item.id}
              $aspect={item.aspect}
              $category={item.category}
              onClick={() => {
                setSelectedImage(item)
                setLightboxIndex(filteredItems.findIndex(i => i.id === item.id))
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              layout
            >
              <OptimizedImage
                src={item.image}
                alt={item.title}
                objectFit="cover"
                placeholderColor="#1a1a1a"
              />
              <ItemOverlay>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <FaSearch size={20} />
              </ItemOverlay>
            </PortfolioItem>
          ))}
      </PortfolioGrid>

      {selectedImage && (
        <Lightbox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <LightboxContent>
            <CloseButton onClick={() => setSelectedImage(null)}>
              <FaTimes size={24} />
            </CloseButton>
            <LightboxImage>
              <OptimizedImage
                src={selectedImage.image}
                alt={selectedImage.title}
                objectFit="contain"
                placeholderColor="#1a1a1a"
              />
              <LightboxNav>
                <NavButton onClick={prevImage}>
                  <FaArrowLeft size={24} />
                </NavButton>
                <NavButton onClick={nextImage}>
                  <FaArrowRight size={24} />
                </NavButton>
              </LightboxNav>
            </LightboxImage>
            <LightboxInfo>
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
              <p>{selectedImage.size} • {currentIndex + 1} of {filteredItems.length}</p>
            </LightboxInfo>
          </LightboxContent>
        </Lightbox>
      )}
    </Container>
  )
}

// Styled Components
const Container = styled.div`
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  background: ${({ theme }) => theme.colors.background};
`

const HeroSection = styled.section`
  height: 70vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  width: 100%;
  background: url(${serviceImage}) center/cover no-repeat;
  background-size: cover;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(15, 15, 26, 0.7) 0%, rgba(23, 23, 38, 0.7) 100%);
    z-index: -1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 30%, rgba(255, 242, 0, 0.05) 0%, transparent 20%),
      radial-gradient(circle at 80% 70%, rgba(255, 242, 0, 0.05) 0%, transparent 20%);
    z-index: -1;
  }
`

const HeroContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 5vw;
  padding-top: 80px;
  z-index: 2;

  h1 {
    font-size: clamp(2.5rem, 6vw, 5rem);
    line-height: 1.1;
    margin-bottom: ${({ theme }) => theme.spacing.md};
    color: white;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    font-weight: 800;
    letter-spacing: -0.5px;
  }

  p {
    font-size: 1.3rem;
    max-width: 700px;
    margin: 0 auto ${({ theme }) => theme.spacing.lg};
    color: rgba(255, 255, 255, 0.85);
    line-height: 1.6;
  }

  @media ${({ theme }) => theme.breakpoints.mobile} {
    h1 {
      font-size: 2.8rem;
    }
    p {
      font-size: 1.1rem;
    }
  }
`

const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    height: 8px;
    background: ${({ theme }) => theme.colors.primary};
    opacity: 0.3;
    z-index: -1;
    border-radius: 4px;
  }
`

const PortfolioControls = styled.div`
  padding: ${({ theme }) => theme.spacing.xl} 5vw;
  background: ${({ theme }) => theme.colors.backgroundLight};
  position: sticky;
  top: 80px;
  z-index: 100;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`

const FilterButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
`

const FilterButton = styled(motion.button)`
  background: ${({ $active, theme }) => $active ? theme.colors.primary : 'transparent'};
  color: ${({ $active, theme }) => $active ? theme.colors.background : theme.colors.text};
  border: 1px solid ${({ $active, theme }) => $active ? theme.colors.primary : theme.colors.border};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.lg}`};
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    background: ${({ $active, theme }) => $active ? theme.colors.primary : theme.colors.backgroundLight};
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
  }
`

const PortfolioGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(80px, auto);
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.xl} 5vw;
  width: 100%;
  margin: 0 auto;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    grid-template-columns: repeat(6, 1fr);
  }

  @media ${({ theme }) => theme.breakpoints.mobile} {
    grid-template-columns: repeat(4, 1fr);
  }
`

const PortfolioItem = styled(motion.div)`
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  grid-column: ${props => {
    switch (props.$aspect) {
      case 'portrait':
        return 'span 2';
      case 'landscape':
        return 'span 4';
      case 'square':
        return 'span 3';
      default:
        return 'span 3';
    }
  }};
  grid-row: ${props => {
    switch (props.$aspect) {
      case 'portrait':
        return 'span 4';
      case 'landscape':
        return 'span 3';
      case 'square':
        return 'span 3';
      default:
        return 'span 3';
    }
  }};

  &:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    z-index: 10;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const ItemOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(15, 15, 26, 0.9) 0%, transparent 50%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: ${({ theme }) => theme.spacing.md};
  color: white;
  opacity: 0;
  transition: opacity 0.4s ease;

  h3 {
    font-size: 1.1rem;
    margin-bottom: ${({ theme }) => theme.spacing.xs};
    text-align: left;
    font-weight: 600;
    transform: translateY(20px);
    transition: transform 0.4s ease;
  }

  p {
    font-size: 0.8rem;
    margin-bottom: ${({ theme }) => theme.spacing.xs};
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.4s ease 0.1s;
    line-height: 1.4;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.8);
    opacity: 0;
    transition: all 0.4s ease;
  }

  ${PortfolioItem}:hover & {
    opacity: 1;
    
    h3, p {
      transform: translateY(0);
      opacity: 1;
    }
    
    svg {
      opacity: 0.3;
      transform: translate(-50%, -50%) scale(1);
    }
  }
`

const Lightbox = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px);
`

const LightboxContent = styled.div`
  position: relative;
  max-width: 90%;
  max-height: 90%;
  width: 1200px;
`

const CloseButton = styled.button`
  position: absolute;
  top: -50px;
  right: 0;
  background: transparent;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.sm};
  z-index: 1001;
  opacity: 0.7;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`

const LightboxImage = styled.div`
  position: relative;
  max-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);

  img {
    max-width: 100%;
    max-height: 80vh;
    object-fit: contain;
    border-radius: 12px;
  }
`

const LightboxNav = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  padding: 0 ${({ theme }) => theme.spacing.xl};
  pointer-events: none;
`

const NavButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: color 0.3s ease;
  pointer-events: auto;
  box-shadow: none;
  backdrop-filter: none;
  padding: 0;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background: transparent;
    transform: none;
  }

  svg {
    width: 32px;
    height: 32px;
  }

  @media ${({ theme }) => theme.breakpoints.mobile} {
    svg {
      width: 24px;
      height: 24px;
    }
  }
`

const LightboxInfo = styled.div`
  text-align: center;
  color: white;
  margin-top: ${({ theme }) => theme.spacing.lg};
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  h3 {
    font-size: 1.8rem;
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    font-weight: 600;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
    
    &:last-child {
      color: rgba(255, 255, 255, 0.6);
      font-size: 0.9rem;
      margin-top: ${({ theme }) => theme.spacing.sm};
    }
  }
`

export default Portfolio