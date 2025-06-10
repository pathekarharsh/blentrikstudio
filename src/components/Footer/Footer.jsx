import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <StyledFooter>
      <Content>
        <LogoSection>
          <Logo>BLENTRIK</Logo>
          <Tagline>Creative digital solutions for modern businesses</Tagline>
          <SocialLinks>
            <SocialLink
              href="https://www.instagram.com/blentrik.studio/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
            >
              <FaInstagram />
            </SocialLink>
          </SocialLinks>
        </LogoSection>

        <LinksSection>
          <LinkGroup>
            <h4>Quick Links</h4>
            <LinkItem to="/">Home</LinkItem>
            <LinkItem to="/portfolio">Portfolio</LinkItem>
            <LinkItem to="/services">Services</LinkItem>
            <LinkItem to="/about">About</LinkItem>
            <LinkItem to="/contact">Contact</LinkItem>
          </LinkGroup>

          <LinkGroup>
            <h4>Services</h4>
            <LinkItem to="/services">Graphic Design</LinkItem>
            <LinkItem to="/services">UI/UX Design</LinkItem>
            <LinkItem to="/services">3D Animation</LinkItem>
            <LinkItem to="/services">Web Development</LinkItem>
          </LinkGroup>

          <LinkGroup>
            <h4>Contact</h4>
            <p>blentrik.studio@gmail.com</p>
            <p>+91 88309 58681</p>
            <p>Nagpur, Maharashtra, India</p>
          </LinkGroup>
        </LinksSection>
      </Content>

      <Copyright>
        © {new Date().getFullYear()} Blentrik. All rights reserved.
      </Copyright>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.colors.backgroundLight};
  padding: ${({ theme }) => theme.spacing.xl} 5vw;
  color: ${({ theme }) => theme.colors.text};
  width: 100%;
`

const Content = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: ${({ theme }) => theme.spacing.xxl};
  width: 100%;
  max-width: 100%;
  margin: 0 auto;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`

const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  max-width: 400px;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    max-width: 100%;
  }
`

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.secondary};
`

const Tagline = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
`

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.sm};
`

const SocialLink = styled(motion.a)`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.2rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`

const LinksSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
  width: 100%;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${({ theme }) => theme.breakpoints.mobile} {
    grid-template-columns: 1fr;
  }
`

const LinkGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};

  h4 {
    font-size: 1.1rem;
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.secondary};
  }

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 0.9rem;
    line-height: 1.6;
  }
`

const LinkItem = styled(motion(Link))`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`

const Copyright = styled.div`
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.xl};
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.backgroundLighter};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.8rem;
  width: 100%;
`

export default Footer