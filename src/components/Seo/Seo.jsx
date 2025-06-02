// src/components/Seo.jsx
import React from 'react'
import { Helmet } from 'react-helmet-async'

const Seo = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title} | Blentrik</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={`${title} | Blentrik`} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} | Blentrik`} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}

export default Seo
