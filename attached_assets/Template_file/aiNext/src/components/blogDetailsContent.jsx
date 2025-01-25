import React from 'react'
import details_img_1 from "../assets/img/blog-details.jpg"
import details_img_2 from "../assets/img/gallery/insta-1.jpg"
import details_img_3 from "../assets/img/gallery/insta-2.jpg"
import details_img_4 from "../assets/img/gallery/insta-3.jpg"

const BlogDetailsContent = () => {
    return (
        <>
            <div className="article-image">
                <img src={details_img_1} alt="image" />
            </div>
            <div className="blog-content">
                <div className="entry-meta">
                    <ul>
                        <li>By: <a href="#">Chris Orwig</a></li>
                        <li>Last Updated: August 28, 2020</li>
                        <li><a href="#">4 Comments</a></li>
                    </ul>
                </div>

                <p>Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quia non numquam eius modi tempora incidunt ut labore et dolore magnam dolor sit amet, consectetur adipisicing.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>

                <blockquote className="wp-block-quote">
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <cite>Tom Cruise</cite>
                </blockquote>

                <p>Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quia non numquam eius modi tempora incidunt ut labore et dolore magnam dolor sit amet, consectetur adipisicing.</p>

                <ul className="wp-block-gallery columns-3">
                    <li className="blocks-gallery-item">
                        <figure>
                            <img src={details_img_2} alt="image" />
                        </figure>
                    </li>

                    <li className="blocks-gallery-item">
                        <figure>
                            <img src={details_img_3} alt="image" />
                        </figure>
                    </li>

                    <li className="blocks-gallery-item">
                        <figure>
                            <img src={details_img_4} alt="image" />
                        </figure>
                    </li>
                </ul>

                <h3>Four major elements that we offer:</h3>
                <ul className="features-list">
                    <li><i className="ri-check-line"></i> Scientific skills for getting a better result</li>
                    <li><i className="ri-check-line"></i> Communication skills to getting in touch</li>
                    <li><i className="ri-check-line"></i> A career overview opportunity available</li>
                    <li><i className="ri-check-line"></i> A good work environment for work</li>
                </ul>

                <h3>Setting the mood with incense</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                <h3>The rise of marketing and why you need it</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
            </div>
        </>
    )
}

export default BlogDetailsContent