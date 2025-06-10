import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane, FaWhatsapp } from 'react-icons/fa'
import Seo from '../../components/Seo/Seo'

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbwqhClvb7CTGtGCQPhVroYQ0gdrcmKT2c2Des0AX2hCORND5t9joFAThqTD6MmKbomN/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      setSubmitMessage({
        type: 'success',
        text: 'Thank you! Your message has been sent successfully.'
      })
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      })
    } catch (error) {
      setSubmitMessage({
        type: 'error',
        text: 'There was an error sending your message. Please try again later.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleWhatsAppClick = () => {
    const phoneNumber = '918830958681'
    const message = 'Hello! I would like to discuss a project with Blentrik.'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <Container>
      <Seo 
        title="Contact Us"
        description="Get in touch with Blentrik for your graphic design, UI/UX, 3D animation, and web development needs."
        keywords="contact blentrik, get a quote, digital services contact"
      />
      
      <Hero>
        <HeroContent>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Get in <Highlight>Touch</Highlight>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Have a project in mind or want to discuss how we can help? Reach out to us.
          </motion.p>
        </HeroContent>
      </Hero>

      <ContactSection>
        <ContactGrid>
          <ContactForm
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Send Us a Message</h2>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="message">Message</Label>
                <TextArea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <SubmitButton
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    <FaPaperPlane style={{ marginRight: '8px' }} />
                    Send Message
                  </>
                )}
              </SubmitButton>
              {submitMessage && (
                <SubmitMessage type={submitMessage.type}>
                  {submitMessage.text}
                </SubmitMessage>
              )}
            </Form>

            <WhatsAppButton
              onClick={handleWhatsAppClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp style={{ marginRight: '8px' }} />
              Chat on WhatsApp
            </WhatsAppButton>
          </ContactForm>

          <ContactInfo
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Contact Information</h2>
            <InfoList>
              <InfoItem>
                <InfoIcon>
                  <FaMapMarkerAlt />
                </InfoIcon>
                <div>
                  <h4>Location</h4>
                  <p>Nagpur, Maharashtra, India</p>
                </div>
              </InfoItem>
              <InfoItem>
                <InfoIcon>
                  <FaPhone />
                </InfoIcon>
                <div>
                  <h4>Phone</h4>
                  <p>+91 88309 58681</p>
                </div>
              </InfoItem>
              <InfoItem>
                <InfoIcon>
                  <FaEnvelope />
                </InfoIcon>
                <div>
                  <h4>Email</h4>
                  <p>blentrik.studio@gmail.com</p>
                </div>
              </InfoItem>
            </InfoList>

            <MapContainer>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215256751766!2d79.08784492416463!3d21.14844097138991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0c0c0c0c0c0%3A0x0!2sNagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1689878389432!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </MapContainer>
          </ContactInfo>
        </ContactGrid>
      </ContactSection>
    </Container>
  )
}

// Styled Components
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
`

const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`

const ContactSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl} 5vw;
  background: ${({ theme }) => theme.colors.background};
  width: 100%;
`

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    grid-template-columns: 1fr;
  }
`

const ContactForm = styled(motion.div)`
  background: ${({ theme }) => theme.colors.backgroundLight};
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.backgroundLighter};

  h2 {
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    font-size: 1.8rem;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`

const Label = styled.label`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
`

const Input = styled.input`
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.backgroundLighter};
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`

const TextArea = styled.textarea`
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.backgroundLighter};
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`

const SubmitButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: ${({ theme }) => theme.spacing.md};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

const SubmitMessage = styled.div`
  margin-top: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: 6px;
  text-align: center;
  background: ${({ type, theme }) => 
    type === 'success' ? 'rgba(46, 213, 115, 0.1)' : 'rgba(255, 71, 87, 0.1)'};
  color: ${({ type, theme }) => 
    type === 'success' ? '#2ed573' : '#ff4757'};
`

const WhatsAppButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  background: #25D366;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: ${({ theme }) => theme.spacing.md};
`

const ContactInfo = styled(motion.div)`
  h2 {
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    font-size: 1.8rem;
  }
`

const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.md};

  h4 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  }

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`

const InfoIcon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.2rem;
`

const MapContainer = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
`

export default Contact