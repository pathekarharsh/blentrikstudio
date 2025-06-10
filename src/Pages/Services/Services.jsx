import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaPalette, FaCode, FaCube, FaMobileAlt, FaRocket, FaEdit } from 'react-icons/fa'
import ServiceCard from '../../components/ServiceCard/ServiceCard'
import Seo from '../../components/Seo/Seo'

// Import all images
import dakshin from '../../assets/graphic/dakshin.webp'
import newone from '../../assets/graphic/newone.webp'
import option from '../../assets/graphic/option.webp'
import pne from '../../assets/graphic/pne.webp'

import uiuxOne from '../../assets/uiux/one.webp'
import uiuxTwo from '../../assets/uiux/two.webp'
import uiuxThree from '../../assets/uiux/three.webp'

import animation1703 from '../../assets/3danimation/1703.webp'
import animationCoco from '../../assets/3danimation/coco.webp'
import animationLighthouse from '../../assets/3danimation/lighthouse.webp'
import animationLowpoly from '../../assets/3danimation/lowpoly.webp'

import webdevOne from '../../assets/webdev/one.webp'
import webdevTwo from '../../assets/webdev/two.webp'
import webdevThree from '../../assets/webdev/three.webp'
import webdevFour from '../../assets/webdev/four.webp'

import landingOne from '../../assets/landingpage/one.webp'
import landingTwo from '../../assets/landingpage/two.webp'
import landingThree from '../../assets/landingpage/three.webp'
import landingFour from '../../assets/landingpage/four.webp'

import contentFear from '../../assets/content/fear.webp'
import contentSasuke from '../../assets/content/sasuke.webp'
import contentThumb from '../../assets/content/thumb.webp'
import contentYoru from '../../assets/content/YORU.webp'

const Services = () => {
  const services = [
    {
      icon: <FaPalette />,
      title: 'Graphic Design',
      description: 'Create visually stunning designs that communicate your brand message effectively.',
      longDescription: 'Our graphic design services include branding, print materials, social media graphics, and more. We combine creativity with strategy to deliver designs that not only look great but also achieve your business objectives.',
      images: [dakshin, newone, option, pne]
    },
    {
      icon: <FaCode />,
      title: 'UI/UX Design',
      description: 'Design intuitive and engaging user interfaces that enhance user experience.',
      longDescription: 'We follow a user-centered design process to create interfaces that are both beautiful and functional. Our services include user research, wireframing and prototyping to ensure the best possible experience for your users.',
      images: [uiuxOne, uiuxTwo, uiuxThree]
    },
    {
      icon: <FaCube />,
      title: '3D Animation',
      description: 'Bring your ideas to life with high-quality 3D animations and visualizations.',
      longDescription: 'Our 3D animation services help you showcase your products, 3d Model or concepts in the most engaging way possible. We use the latest tools and techniques to create realistic and captivating animations.',
      images: [animation1703, animationCoco, animationLighthouse, animationLowpoly]
    },
    {
      icon: <FaMobileAlt />,
      title: 'Web Development',
      description: 'Build responsive, high-performance websites that work across all devices.',
      longDescription: 'Our web development services cover everything from simple landing pages to complex web applications. We use modern technologies like React to build fast, secure, and scalable websites that deliver exceptional user experiences.',
      images: [webdevOne, webdevTwo, webdevThree, webdevFour]
    },
    {
      icon: <FaRocket />,
      title: 'Landing Pages',
      description: 'Create high-converting landing pages tailored to your marketing campaigns.',
      longDescription: 'We design and develop landing pages that are optimized for conversions. Our approach combines strategic design, and technical optimization to maximize your campaign performance and ROI.',
      images: [landingOne, landingTwo, landingThree, landingFour]
    },
    {
      icon: <FaEdit />,
      title: 'Content Creation',
      description: 'Create engaging and compelling content that resonates with your audience.',
      longDescription: 'Our content creation services help you develop high-quality, engaging content that connects with your target audience. We can help you with the shoot of the content and storywriting.',
      images: [contentFear, contentSasuke, contentThumb, contentYoru]
    },
  ]

  return (
    <Container>
      <Seo 
        title="Services"
        description="Explore our comprehensive digital services including graphic design, UI/UX, 3D animation, web development, and more."
        keywords="graphic design services, ui/ux design, 3d animation, web development, digital strategy"
      />
      
      <Hero>
        <HeroContent>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our <Highlight>Services</Highlight>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive digital solutions tailored to your business needs.
          </motion.p>
        </HeroContent>
      </Hero>

      <ServicesSection>
        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              longDescription={service.longDescription}
              images={service.images}
              index={index}
              expanded
            />
          ))}
        </ServicesGrid>
      </ServicesSection>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  background: transparent;
`

const Hero = styled.section`
  height: 60vh;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  width: 100%;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.background} 0%,
    rgba(15, 15, 26, 0.9) 50%,
    ${({ theme }) => theme.colors.background} 100%
  );
  z-index: 1;
`

const HeroContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 5vw;
  text-align: center;
  z-index: 2;

  h1 {
    font-size: clamp(3rem, 8vw, 5rem);
    line-height: 1.2;
    margin-bottom: ${({ theme }) => theme.spacing.md};
    font-weight: 700;
  }

  p {
    font-size: clamp(1.2rem, 3vw, 1.5rem);
    max-width: 800px;
    margin: 0 auto;
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.6;
  }

  @media ${({ theme }) => theme.breakpoints.mobile} {
    h1 {
      font-size: 3rem;
    }
    p {
      font-size: 1.2rem;
    }
  }
`

const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`

const ServicesSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl} 5vw;
  background: ${({ theme }) => theme.colors.background};
  width: 100%;
`

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;

  @media ${({ theme }) => theme.breakpoints.mobile} {
    grid-template-columns: 1fr;
  }
`

export default Services