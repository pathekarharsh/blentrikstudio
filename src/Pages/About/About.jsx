import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Seo from '../../components/Seo/Seo'
import thumb from '../../assets/about.webp'

const About = () => {
  return (
    <Container>
      <Seo 
        title="About Us"
        description="Blentrik is a student-led creative studio built by passionate college freelancers specializing in design, technology, and animation."
        keywords="student-led studio, creative design, digital solutions, 3D animation, college freelancers"
      />
      
      <Hero>
        <HeroContent>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About <Highlight>Us</Highlight>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A student-led creative studio built by passionate college freelancers.
          </motion.p>
        </HeroContent>
      </Hero>

      <AboutSection>
        <AboutContent>
          <AboutImage
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img src={thumb} alt="About Blentrik" />
          </AboutImage>
          <AboutText
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p>
              We're a young creative studio that's been crafting digital experiences for the past two years. While we're just starting our journey as a studio, our team members have been working in design, development, and animation for a while now.
            </p>
            <p>
              From websites to social media graphics, UI/UX to 3D animations - we're passionate about turning ideas into reality. We might be new as a studio, but we bring real experience and fresh perspectives to every project.
            </p>
            <p>
              What makes us different? We're young, we're hungry, and we're not afraid to try new things.
            </p>
            <p>
              Young team, fresh ideas, real experience.
            </p>
          </AboutText>
        </AboutContent>
      </AboutSection>

      <ValuesSection>
        <SectionTitle>
          <span>Our Values</span>
          <h2>What Guides Our Work</h2>
        </SectionTitle>

        <ValuesGrid>
          <ValueCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3>Student-Led</h3>
            <p>Young, innovative minds bringing fresh perspectives to every project.</p>
          </ValueCard>

          <ValueCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Passionate</h3>
            <p>Driven by our love for design, code, and animation in everything we create.</p>
          </ValueCard>

          <ValueCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3>Results-Driven</h3>
            <p>Focused on delivering real, impactful solutions that exceed expectations.</p>
          </ValueCard>
        </ValuesGrid>
      </ValuesSection>
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
`

const HeroContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 5vw;
  text-align: center;
  z-index: 1;

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

const AboutSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl} 5vw;
  background: ${({ theme }) => theme.colors.background};
  width: 100%;
`

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  align-items: center;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    grid-template-columns: 1fr;
  }
`

const AboutText = styled(motion.div)`
  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.6;
    font-size: 1.1rem;
  }
`

const AboutImage = styled(motion.div)`
  img {
    width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`

const ValuesSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl} 5vw;
  background: ${({ theme }) => theme.colors.background};
  width: 100%;
`

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
`

const ValueCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.backgroundLight};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.backgroundLighter};
  transition: all 0.3s ease;

  h3 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    font-size: 1.3rem;
  }

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.6;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.primary};
    transform: translateY(-5px);
  }
`

export default About