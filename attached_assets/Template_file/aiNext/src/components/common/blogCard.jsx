import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({ date, link, title, thumb }) => {
    return (
        <div className="item">
            <img src={thumb} alt="image" />
            <div className="pop-content">
                <h3><Link to={link}>{title}</Link></h3>
                <ul>
                    <li>{date}</li>
                    <li><span>0</span>Comments</li>
                </ul>
            </div>
            <Link to={link}>
                <div className="go-corner">
                    <div className="go-arrow">
                        <i className="ri-arrow-right-up-line"></i>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default BlogCard