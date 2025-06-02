import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const ServiceCard = ({ icon, title, description, longDescription, index, expanded = false }) => {
  return (
    <Card
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={!expanded ? { y: -5 } : {}}
      expanded={expanded}
    >
      <Icon>{icon}</Icon>
      <h3>{title}</h3>
      <p>{description}</p>
      {expanded && longDescription && (
        <ExpandedContent>
          <p>{longDescription}</p>
        </ExpandedContent>
      )}
    </Card>
  )
}

const Card = styled(motion.div)`
  background: ${({ theme }) => theme.colors.backgroundLight};
  padding: ${({ theme, expanded }) => 
    expanded ? theme.spacing.lg : theme.spacing.md};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.backgroundLighter};
  transition: all 0.3s ease;
  cursor: ${({ expanded }) => (expanded ? 'default' : 'pointer')};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.primary};
    ${({ expanded }) => !expanded && 'transform: translateY(-5px);'}
  }

  h3 {
    color: ${({ theme }) => theme.colors.primary};
    margin: ${({ theme }) => `${theme.spacing.sm} 0`};
    font-size: 1.2rem;
  }

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.6;
    font-size: ${({ expanded }) => (expanded ? '1rem' : '0.9rem')};
  }
`

const Icon = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

const ExpandedContent = styled.div`
  margin-top: ${({ theme }) => theme.spacing.md};
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.backgroundLighter};
`

export default ServiceCard