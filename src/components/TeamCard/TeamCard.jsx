import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'

const TeamCard = ({ name, role, bio, image, index }) => {
  return (
    <Card
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <ImageContainer>
        <img src={image} alt={name} />
      </ImageContainer>
      <Content>
        <h3>{name}</h3>
        <Role>{role}</Role>
        <Bio>{bio}</Bio>
        <SocialLinks>
          <SocialLink href="#" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </SocialLink>
          <SocialLink href="#" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </SocialLink>
          <SocialLink href="#" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </SocialLink>
        </SocialLinks>
      </Content>
    </Card>
  )
}

const Card = styled(motion.div)`
  background: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.backgroundLighter};
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.primary};
    transform: translateY(-5px);
  }
`

const ImageContainer = styled.div`
  width: 100%;
  height: 250px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;

    ${Card}:hover & {
      transform: scale(1.05);
    }
  }
`

const Content = styled.div`
  padding: ${({ theme }) => theme.spacing.md};

  h3 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }
`

const Role = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

const Bio = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`

const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`

export default TeamCard