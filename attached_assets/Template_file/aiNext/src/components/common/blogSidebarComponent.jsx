import React from 'react'
import { Link } from 'react-router-dom'

const recentPost = [
    {
        id: 1,
        date: "November 6, 2023",
        tag: "Trends",
        title: "AI Awakenings A Journey into the Future"
    },
    {
        id: 2,
        date: "November 6, 2023",
        tag: "Trends",
        title: "The AI Narrative Beyond Ones and Zeros"
    },
    {
        id: 3,
        date: "November 6, 2023",
        tag: "Trends",
        title: "AI Evolutions Trends and Transformations"
    },


]
const tagList = [
    {
        id: "1",
        path: "/blog",
        tag: "Ai"
    },
    {
        id: "2",
        path: "/blog",
        tag: "app"
    },
    {
        id: "3",
        path: "/blog",
        tag: "creative"
    },
    {
        id: "4",
        path: "/blog",
        tag: "chatbot"
    },
    {
        id: "5",
        path: "/blog",
        tag: "generator"
    },
    {
        id: "6",
        path: "/blog",
        tag: "design"
    },
    {
        id: "7",
        path: "/blog",
        tag: "technology"
    },
]
const BlogSidebarComponent = () => {
    return (
        <div className="blog-sidebar">
            <div className="widget search_widget">
                <h5 className="widget-title">Search</h5>
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search Here.." aria-describedby="button-addon2" />
                    <button className="btn" type="button"><i className="ri-search-line"></i></button>
                </div>
            </div>
            <div className="widget recent_post_widget">
                <h5 className="widget-title">Recent Posts</h5>
                {
                    recentPost.map(({ id, date, tag, title }) => {
                        return (
                            <div key={id} className="post-item">
                                <div className="info">
                                    <ul>
                                        <li><Link to="#">{tag}</Link></li>
                                        <li><Link to="#">{date}</Link></li>
                                    </ul>
                                </div>
                                <h6 className="post-title">
                                    <Link to="blog-details">{title}</Link>
                                </h6>
                            </div>
                        )
                    })
                }


            </div>
            <div className="widget tags_widget">
                <h5 className="widget-title">Tags</h5>
                <ul>
                    {
                        tagList.map(({ id, path, tag }) => <li key={id}><Link to={path}>{tag}</Link></li>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default BlogSidebarComponent