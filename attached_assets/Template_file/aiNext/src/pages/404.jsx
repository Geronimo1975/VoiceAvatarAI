import React from 'react'
import not_found_img from "../assets/img/404.png"
import PageHeader from '../components/common/pageHeader'
import InstagramGallery from '../components/instagramGallery'
import { Link, ScrollRestoration } from 'react-router-dom'
const NotFound = () => {
    return (
        <>
            <PageHeader pageName={"404 Error Page"} />
            <div className="not-found-area ptb-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="content">
                                <img src={not_found_img} alt="image" />
                                <h3>Oops! That page can't be found</h3>
                                <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                                <Link href="/" className="default-btn">Back to Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <InstagramGallery />
            <ScrollRestoration/>
        </>
    )
}

export default NotFound