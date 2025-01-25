import React from 'react'
import PageHeader from '../components/common/pageHeader'
import TeamComponent from '../components/teamComponent'
import Brands from '../components/brands'
import InstagramGallery from '../components/instagramGallery'
import { ScrollRestoration } from 'react-router-dom'

const Team = () => {
    return (
        <>
            <PageHeader pageName={"Team"} />
            <TeamComponent prentClass="ptb-100"/>
            <Brands/>
            <InstagramGallery/>
            <ScrollRestoration/>
        </>
    )
}

export default Team