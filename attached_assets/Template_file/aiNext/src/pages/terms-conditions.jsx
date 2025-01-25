import React from 'react'
import PageHeader from '../components/common/pageHeader'
import InstagramGallery from '../components/instagramGallery'
import { ScrollRestoration } from 'react-router-dom'

const TermsConditions = () => {
    return (
        <>
            <PageHeader pageName={"Terms & Conditions"} />
            <div className="terms-conditions-area pt-100 pb-70">
                <div className="container">
                    <div className="content">

                        <h4>What information do we collect?</h4>
                        <p>
                            We collect personal information that you provide to us, such as name, contact information, email address, and any other information you choose to provide. We may also collect information about how you interact with our website and services.
                        </p>

                        <h4>Use of Services</h4>
                        <ol type="a">
                            <li>You must be at least <b>18</b> years old to access and use our services.</li>
                            <li>You agree to use the services only for lawful purposes and in accordance with these Terms.</li>
                            <li>You are solely responsible for any content you post, upload, or transmit through our services.</li>
                        </ol>

                        <h4>User Accounts</h4>
                        <ol type="a">
                            <li>When you create an account with us, you must provide accurate, complete, and up-to-date information.</li>
                            <li>You are responsible for safeguarding the password that you use to access the services and for any activities or actions under your password.</li>
                        </ol>

                        <h4>Privacy</h4>
                        <p>
                            Your use of the services is also governed by our Privacy Policy. Please review our Privacy Policy <a href="privacy-policy.html">Privacy Policy</a> for more information on how we collect, use, and share your personal information.
                        </p>

                        <h4>Termination</h4>
                        <p>
                            These Terms shall be governed and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law provisions..
                        </p>

                        <h4>Governing Law</h4>
                        <p>
                            We may terminate or suspend your account and access to the services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.
                        </p>

                        <h4>Changes</h4>
                        <p>
                            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least [number] days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                        </p>
                    </div>
                </div>
            </div>
            <InstagramGallery/>
            <ScrollRestoration/>
        </>
    )
}

export default TermsConditions