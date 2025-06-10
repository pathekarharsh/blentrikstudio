import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const PageWrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
`;

const RouteTransition = ({ children, location }) => {
  return (
    <AnimatePresence mode="wait">
      <PageWrapper
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {children}
      </PageWrapper>
    </AnimatePresence>
  );
};

export default RouteTransition; 