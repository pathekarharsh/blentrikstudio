import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane, FaWhatsapp } from 'react-icons/fa'
import Seo from '../../components/Seo/Seo'

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // FormSubmit will handle the email submission
    // The form will be submitted to the email specified in the action URL
    // No need for additional handling as FormSubmit takes care of it
  }

  const handleWhatsAppClick = () => {
    const phoneNumber = '918830958681' // Your WhatsApp number without + or spaces
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
            <Form 
              action="https://formsubmit.co/blentrik.studio@gmail.com" 
              method="POST"
              onSubmit={handleSubmit}
            >
              {/* Honeypot to prevent spam */}
              <input type="text" name="_honey" style={{ display: 'none' }} />
              
              {/* Disable Captcha */}
              <input type="hidden" name="_captcha" value="false" />
              
              {/* Specify redirect after submission */}
              <input type="hidden" name="_next" value={window.location.href} />

              <FormGroup>
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="message">Message</Label>
                <TextArea
                  id="message"
                  name="message"
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

const Container = styled.div`
  padding-top: 80px;
  width: 100vw;
  max-width: 100vw;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
`

const Hero = styled.section`
  height: 50vh;
  min-height: 400px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  width: 100vw;
  max-width: 100vw;
  margin: 0;
  padding: 0 5vw;
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
  margin: 0;
  padding: 0;
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

const ContactSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl} 5vw;
  background: ${({ theme }) => theme.colors.background};
  width: 100vw;
  max-width: 100vw;
  margin: 0;
`

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    grid-template-columns: 1fr;
  }
`

const ContactForm = styled(motion.div)`
  background: ${({ theme }) => theme.colors.backgroundLight};
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: 8px;
  width: 100%;
  max-width: 100%;

  h2 {
    margin-bottom: ${({ theme }) => theme.spacing.lg};
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
  gap: ${({ theme }) => theme.spacing.sm};
`

const Label = styled.label`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`

const Input = styled.input`
  padding: ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => theme.colors.backgroundLight};
  border: 1px solid ${({ theme }) => theme.colors.backgroundLighter};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary};
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.primary};
  }
`

const TextArea = styled.textarea`
  padding: ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => theme.colors.backgroundLight};
  border: 1px solid ${({ theme }) => theme.colors.backgroundLighter};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary};
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.primary};
  }
`

const SubmitButton = styled(motion.button)`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  border: none;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  font-size: 1rem;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: ${({ theme }) => theme.fonts.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing.sm};

  &:hover {
    background: ${({ theme }) => theme.colors.primaryLight};
    box-shadow: ${({ theme }) => theme.shadows.primary};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.textDark};
    cursor: not-allowed;
  }
`

const SubmitMessage = styled.div`
  margin-top: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.sm};
  background: ${({ theme, type }) => 
    type === 'success' ? 'rgba(76, 175, 80, 0.1)' : 'rgba(244, 67, 54, 0.1)'};
  color: ${({ theme, type }) => 
    type === 'success' ? theme.colors.success : theme.colors.error};
  border: 1px solid ${({ theme, type }) => 
    type === 'success' ? theme.colors.success : theme.colors.error};
  border-radius: 4px;
  text-align: center;
`

const ContactInfo = styled(motion.div)`
  width: 100%;
  max-width: 100%;

  h2 {
    margin-bottom: ${({ theme }) => theme.spacing.lg};
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
  gap: ${({ theme }) => theme.spacing.md};
  align-items: flex-start;

  h4 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.6;
  }
`

const InfoIcon = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.2rem;
  margin-top: 4px;
`

const MapContainer = styled.div`
  width: 100%;
  max-width: 100%;
  
  iframe {
    width: 100%;
    max-width: 100%;
    filter: grayscale(50%) contrast(1.2) brightness(0.8);
    transition: filter 0.3s ease;

    &:hover {
      filter: grayscale(0%) contrast(1) brightness(1);
    }
  }
`

const WhatsAppButton = styled(motion.button)`
  background: #25D366;
  color: white;
  border: none;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  font-size: 1rem;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: ${({ theme }) => theme.fonts.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing.md};
  width: 100%;

  &:hover {
    background: #128C7E;
    box-shadow: 0 4px 12px rgba(37, 211, 102, 0.2);
  }
`

export default Contact