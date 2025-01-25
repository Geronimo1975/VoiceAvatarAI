import React from 'react'
import author_1 from "../../assets/img/us-1.jpg"
const Author = () => {
    return (
        <div className="article-author">
            <div className="author-profile-header"></div>
            <div className="author-profile">
                <div className="author-profile-title">
                    <img src={author_1} className="shadow-sm" alt="image" />
                    <h4>Chris Orwig</h4>
                    <span className="d-block">Photographer, Author, Writer</span>
                    <p>Chris Orwig is a celebrated photographer, author, and writer who brings passion to everything he does. Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor.</p>
                </div>
            </div>
        </div>
    )
}

export default Author