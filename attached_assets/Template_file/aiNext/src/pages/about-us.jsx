import React from 'react'
import PageHeader from '../components/common/pageHeader'
import About from '../components/about'
import Testimonial from '../components/testimonial'
import Brands from '../components/brands'
import InstagramGallery from '../components/instagramGallery'
import { ScrollRestoration } from 'react-router-dom'

const AboutUs = () => {
  return (
    <>
      <PageHeader pageName ="About Us" />
      <About />
      <Testimonial />
      <Brands />
      <InstagramGallery />
      <ScrollRestoration/>
    </>
  )
}

export default AboutUs