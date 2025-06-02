import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaPalette, FaCode, FaCube, FaMobileAlt, FaRocket, FaEdit } from 'react-icons/fa'
import ServiceCard from '../../components/ServiceCard/ServiceCard'
import Seo from '../../components/Seo/Seo'

const Services = () => {
  const services = [
    {
      icon: <FaPalette />,
      title: 'Graphic Design',
      description: 'Create visually stunning designs that communicate your brand message effectively.',
      longDescription: 'Our graphic design services include logo design, branding, print materials, social media graphics, and more. We combine creativity with strategy to deliver designs that not only look great but also achieve your business objectives.',
    },
    {
      icon: <FaCode />,
      title: 'UI/UX Design',
      description: 'Design intuitive and engaging user interfaces that enhance user experience.',
      longDescription: 'We follow a user-centered design process to create interfaces that are both beautiful and functional. Our services include user research, wireframing, prototyping, and usability testing to ensure the best possible experience for your users.',
    },
    {
      icon: <FaCube />,
      title: '3D Animation',
      description: 'Bring your ideas to life with high-quality 3D animations and visualizations.',
      longDescription: 'From product visualizations to animated explainer videos, our 3D animation services help you showcase your products or concepts in the most engaging way possible. We use the latest tools and techniques to create realistic and captivating animations.',
    },
    {
      icon: <FaMobileAlt />,
      title: 'Web Development',
      description: 'Build responsive, high-performance websites that work across all devices.',
      longDescription: 'Our web development services cover everything from simple landing pages to complex web applications. We use modern technologies like React, Next.js, and Gatsby to build fast, secure, and scalable websites that deliver exceptional user experiences.',
    },
    {
      icon: <FaRocket />,
      title: 'Landing Pages',
      description: 'Create high-converting landing pages tailored to your marketing campaigns.',
      longDescription: 'We design and develop landing pages that are optimized for conversions. Our approach combines persuasive copywriting, strategic design, and technical optimization to maximize your campaign performance and ROI.',
    },
    {
      icon: <FaEdit />,
      title: 'Content Creation',
      description: 'Create engaging and compelling content that resonates with your audience.',
      longDescription: 'Our content creation services help you develop high-quality, engaging content that connects with your target audience. From social media posts to blog articles, we create content that tells your story and drives engagement.',
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
  padding-top: 80px;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
`

const Hero = styled.section`
  height: 50vh;
  min-height: 400px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  width: 100%;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.background} 0%,
    rgba(15, 15, 26, 0.9) 50%,
    ${({ theme }) => theme.colors.background} 100%
  );

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('/assets/images/services-image.jpg') center/cover no-repeat;
    opacity: 0.2;
    z-index: -1;
  }
`

const HeroContent = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 5vw;
  z-index: 1;

  h1 {
    font-size: clamp(2.5rem, 6vw, 4rem);
    line-height: 1.2;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  p {
    font-size: 1.2rem;
    max-width: 600px;
    color: ${({ theme }) => theme.colors.textSecondary};
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
  max-width: 100%;
  margin: 0 auto;

  @media ${({ theme }) => theme.breakpoints.mobile} {
    grid-template-columns: 1fr;
  }
`

export default Services