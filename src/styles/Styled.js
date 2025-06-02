import styled, { keyframes } from 'styled-components'

export const GlassCard = styled.div`
  background: ${({ theme }) => theme.colors.backgroundGlass};
  box-shadow: 0 8px 32px 0 rgba(0,240,255,0.25);
  backdrop-filter: blur(8px);
  border-radius: 1.5rem;
  border: 1px solid rgba(0,240,255,0.18);
  padding: 2rem;
  margin: 1rem 0;
  transition: box-shadow 0.3s;
  @media ${({ theme }) => theme.breakpoints.mobile} {
    padding: 1rem;
  }
  &:hover {
    box-shadow: 0 12px 40px 0 rgba(0,240,255,0.35);
  }
`

export const NeonButton = styled.button`
  font-family: 'Bruno Ace', 'Righteous', 'Segoe UI', Arial, sans-serif;
  background: ${({ theme }) => theme.colors.gradient};
  color: #fff;
  border: none;
  border-radius: 2rem;
  padding: 0.75rem 2rem;
  font-size: 1.1rem;
  letter-spacing: 0.05em;
  box-shadow: ${({ theme }) => theme.shadows.neon};
  cursor: pointer;
  transition: box-shadow 0.3s, transform 0.2s, background 0.3s;
  outline: none;
  margin: 0.5rem 0;
  &:hover, &:focus {
    box-shadow: 0 0 24px #00f0ff, 0 0 48px #ff2d75;
    transform: translateY(-2px) scale(1.04);
    background: linear-gradient(90deg, #ff2d75 0%, #00f0ff 100%);
  }
`

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`

export const AnimatedContainer = styled.div`
  animation: ${fadeIn} 1s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: opacity, transform;
`
