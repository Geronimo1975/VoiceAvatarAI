import React from 'react'
import PageHeader from '../components/common/pageHeader'
import PricingComponent from '../components/pricingComponent'
import Blogs from '../components/blogsComponent'
import Brands from '../components/brands'
import InstagramGallery from '../components/instagramGallery'
import { ScrollRestoration } from 'react-router-dom'

const Pricing = () => {
    return (
        <>
            <PageHeader pageName={"Pricing"} />
            <PricingComponent prentClass="ptb-100" />
            <Blogs />
            <Brands />
            <InstagramGallery />
            <ScrollRestoration/>
        </>
    )
}

export default Pricing