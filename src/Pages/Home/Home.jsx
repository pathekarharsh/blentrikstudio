import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaPalette, FaCode, FaCube, FaMobileAlt, FaRocket, FaEdit } from 'react-icons/fa'
import ServiceCard from '../../components/ServiceCard/ServiceCard'
import Seo from '../../components/Seo/Seo'
import {Link} from 'react-router-dom'
import heroImage from '../../assets/zimages/heroimage.png'
import heroAboutImage from '../../assets/zimages/heroabout.png'

const Home = () => {
  const services = [
    {
      icon: <FaRocket />,
      title: 'Landing Pages',
      description: 'Create high-converting landing pages tailored to your marketing campaigns.',
    },
    {
      icon: <FaPalette />,
      title: 'Graphic Design',
      description: 'Eye-catching logos, posters, and thumbnails that make your brand stand out.',
    },
    {
      icon: <FaCode />,
      title: 'UI/UX Design',
      description: 'Intuitive and modern interfaces that provide seamless user experiences.',
    },
    {
      icon: <FaCube />,
      title: '3D Animation',
      description: 'Dynamic 3D animations that bring your ideas to life with stunning visuals.',
    },
  ]

  return (
    <Container>
      <Seo 
        title="Home"
        description="Blentrik provides creative digital solutions including graphic design, UI/UX, 3D animation, and web development."
        keywords="graphic design, ui/ux, 3d animation, web development, digital solutions"
      />
      
      <HeroSection>
        <HeroContent>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Bringing <Highlight>Your Brand </Highlight> to Life with Design, Code & Motion
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We blend creativity with technology to deliver exceptional digital experiences that drive results.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <CTAButton 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              as={motion(Link)}
              to="/portfolio"
            >
              Explore Our Work
            </CTAButton>
          </motion.div>
        </HeroContent>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          style={{
            position: 'absolute',
            bottom: '5%',
            left: 0,
            right: 0,
            textAlign: 'center',
            color: '#fff200',
            fontSize: '1.2rem',
            fontFamily: 'monospace',
            zIndex: 2,
          }}
        >
          Design. Code. Animate.
        </motion.p>
      </HeroSection>

      <ServicesSection>
        <SectionTitle>
          <span>Our Services</span>
          <h2>What We Offer</h2>
        </SectionTitle>

        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </ServicesGrid>
      </ServicesSection>

      <AboutSection>
        <AboutContent>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Why Choose Blentrik?</h2>
            <p>
              We're a team of passionate creatives and developers dedicated to delivering exceptional digital solutions. 
              Our approach combines artistic vision with technical expertise to create products that stand out.
            </p>
            <AboutButton 
              to="/about"
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              as={motion(Link)}
            >
              Learn More About Us
            </AboutButton>
          </motion.div>
          <AboutImage
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            as={motion.div}
          >
            <img src={heroAboutImage} alt="Why Choose Blentrik" />
          </AboutImage>
        </AboutContent>
      </AboutSection>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  background: transparent;
`

const HeroSection = styled.section`
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  width: 100%;
  background: url(${heroImage}) center/cover no-repeat;
  background-size: cover;
  z-index: 1;

  @media ${({ theme }) => theme.breakpoints.mobile} {
    min-height: 500px;
  }
`

const HeroContent = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 5vw;
  padding-top: 80px;
  z-index: 1;

  h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    line-height: 1.2;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  p {
    font-size: 1.2rem;
    max-width: 600px;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    color: ${({ theme }) => theme.colors.text};
  }

  @media ${({ theme }) => theme.breakpoints.mobile} {
    h1 {
      font-size: 2.5rem;
    }
  }
`

const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`

const CTAButton = styled(motion.button)`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  border: none;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  font-size: 1rem;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: ${({ theme }) => theme.fonts.primary};

  &:hover {
    background: ${({ theme }) => theme.colors.primaryLight};
    box-shadow: ${({ theme }) => theme.shadows.primary};
  }
`

const ServicesSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl} 5vw;
  background: ${({ theme }) => theme.colors.background};
  width: 100%;
`

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};

  span {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    display: block;
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }

  h2 {
    font-size: clamp(1.8rem, 4vw, 3rem);
    line-height: 1.3;
  }
`

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
`

const AboutSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl} 5vw;
  background: ${({ theme }) => theme.colors.backgroundLight};
  width: 100%;
`

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  align-items: center;

  h2 {
    font-size: clamp(1.8rem, 4vw, 3rem);
    margin-bottom: ${({ theme }) => theme.spacing.md};
    line-height: 1.3;
  }

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    line-height: 1.6;
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    grid-template-columns: 1fr;
  }
`

const AboutImage = styled(motion.div)`
  img {
    width: 90%;
    max-width: 600px;
    border-radius: 8px;
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    order: -1;
  }
`

const AboutButton = styled(motion(Link))`
  display: inline-block;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  border: none;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  font-size: 1rem;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryLight};
    box-shadow: ${({ theme }) => theme.shadows.primary};
  }
`

export default Home