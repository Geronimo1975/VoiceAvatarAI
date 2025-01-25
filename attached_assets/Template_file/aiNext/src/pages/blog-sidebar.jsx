import React from 'react'
import PageHeader from '../components/common/pageHeader'
import InstagramGallery from '../components/instagramGallery'
import { blogData } from '../utlits/blogData'
import BlogCard from '../components/common/blogCard'
import BlogSidebarComponent from '../components/common/blogSidebarComponent'
import { ScrollRestoration } from 'react-router-dom'

const BlogSidebar = () => {
    return (
        <>
            <PageHeader pageName={"Blog Right Sidebar"} />
            <div className="blog-area article-area pt-100 pb-70">
                <div className="container">
                    <div className='row'>
                        <div className="col-lg-8">
                            <div className="row">
                                {
                                    blogData.map(({ author, date, desc, id, link, thumb, title }) => {
                                        return (
                                            <div className="col-lg-6">
                                                <BlogCard key={id} date={date} link={link} thumb={thumb} title={title} />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <   BlogSidebarComponent />
                        </div>
                    </div>

                </div>
            </div>
            <InstagramGallery />
            <ScrollRestoration/>
        </>
    )
}

export default BlogSidebar