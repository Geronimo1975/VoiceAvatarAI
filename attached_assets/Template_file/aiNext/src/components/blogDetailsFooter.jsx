import React from 'react'
import { Link } from 'react-router-dom'

const BlogDetailsFooter = () => {
    return (
        <div className="article-footer">
            <div className="article-tags">
                <span><i className="ri-price-tag-3-line"></i></span>
                <Link href="#">City</Link>,
                <Link href="#">Games</Link>,
                <Link href="#">Travel</Link>
            </div>
            <div className="article-share">
                <ul className="social">
                    <li><span>Share:</span></li>
                    <li><Link href="#" className="facebook" target="_blank"><i className="ri-facebook-fill"></i></Link></li>
                    <li><Link href="#" className="twitter" target="_blank"><i className="ri-twitter-line"></i></Link></li>
                    <li><Link href="#" className="linkedin" target="_blank"><i className="ri-linkedin-fill"></i></Link></li>
                    <li><Link href="#" className="instagram" target="_blank"><i className="ri-instagram-line"></i></Link></li>
                </ul>
            </div>
        </div>
    )
}

export default BlogDetailsFooter