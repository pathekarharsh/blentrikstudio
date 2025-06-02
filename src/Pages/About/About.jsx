import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Seo from '../../components/Seo/Seo'

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
        <SectionTitle>
          <span>Who We Are</span>
          <h2>About Blentrik</h2>
        </SectionTitle>

        <AboutContent>
          <AboutText
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p>
              Blentrik is a student-led creative studio built by a bunch of passionate college freelancers who love designing, coding, and animating. From clean websites to bold posters, sleek UI/UX to engaging 3D visuals — we turn ideas into digital reality.
            </p>
            <p>
              Born from the creative energy of young minds, we bring a fresh perspective to every project. Our team of college freelancers combines academic knowledge with real-world creativity, allowing us to approach challenges with innovative solutions that larger agencies might miss. We're not just students; we're digital artists, developers, and animators who are passionate about creating exceptional work.
            </p>
            <p>
              What sets us apart is our ability to blend technical expertise with creative thinking. Whether it's crafting a stunning website, designing eye-catching social media content, or creating immersive 3D animations, we pour our passion into every pixel and line of code. Our work reflects the energy and innovation of youth, while maintaining professional standards that exceed expectations.
            </p>
            <p>
              Young minds, fresh vibes, real results.
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
  max-width: 100%;
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
  }
`

const AboutImage = styled(motion.div)`
  img {
    width: 100%;
    border-radius: 8px;
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