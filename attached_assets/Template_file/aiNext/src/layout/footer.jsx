import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="footer-top-area pt-100">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <Link href="/" className="logo">
                  <h2>AiNext</h2>
                </Link>
                <p>Lorem ipsum amet, consectetur adipiscing elit. Suspendis varius enim eros elementum tristique. Duis cursus.</p>
                <ul className="social-links">
                  <li><Link to="https://www.facebook.com/" target="_blank"><i className="ri-facebook-fill"></i></Link></li>
                  <li><Link to="https://www.instagram.com/" target="_blank"><i className="ri-instagram-line"></i></Link></li>
                  <li><Link to="https://www.linkedin.com/" target="_blank"><i className="ri-linkedin-fill"></i></Link></li>
                  <li><Link to="https://www.youtube.com/" target="_blank"><i className="ri-youtube-line"></i></Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="single-footer-widget pl-5">
                <h3>Links</h3>
                <ul className="links-list">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/pricing">Pricing</Link></li>
                  <li><Link to="/blog">Blog</Link></li>
                  <li><Link to="/contact">Contact Us</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h3>Legal</h3>
                <ul className="links-list">
                  <li><Link to="/contact">Legal</Link></li>
                  <li><Link to="/terms-conditions">Tearms of Use</Link></li>
                  <li><Link to="/terms-conditions">Tearm & Condition</Link></li>
                  <li><Link to="/contact">Payment Method</Link></li>
                  <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h3>Newsletter</h3>
                <div className="footer-newsletter-info">
                  <p>Join over <span>68,000</span> people getting our emails Lorem ipsum dolor sit amet consectet </p>
                  <form className="newsletter-form" data-toggle="validator">
                    <label><i className='bx bx-envelope-open'></i></label>
                    <input type="text" className="input-newsletter" placeholder="Enter your email address" name="EMAIL" required autoComplete="off" />
                    <button type="submit" className="default-btn"><i className="ri-send-plane-line"></i> Subscribe Now</button>
                    <div id="validator-newsletter2" className="form-result"></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pr-line"></div>
        <div className="footer-bottom-area">
          <p>© Copyright | <Link href="https://themeforest.net/user/theme_ocean" target="_blank">Theme Ocean</Link>  | All Rights Reserved is Proudly </p>
        </div>
      </div>
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </footer>
  )
}

export default Footer