import React from 'react'
import PageHeader from '../components/common/pageHeader'
import LiveReplay from '../components/liveReplay'
import Comments from '../components/comments'
import BlogSidebarComponent from '../components/common/blogSidebarComponent'
import Author from '../components/common/author'
import BlogDetailsContent from '../components/blogDetailsContent'
import BlogDetailsFooter from '../components/blogDetailsFooter'
import InstagramGallery from '../components/instagramGallery'
import { ScrollRestoration } from 'react-router-dom'

const BlogDetails = () => {
  return (
    <>
      <PageHeader pageName={"Blog Details"} />
      <div className="blog-details pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-8"> 
              <div className="blog-details-desc">
                <BlogDetailsContent />
                <BlogDetailsFooter />
                <Author />
                <div className="comments-area">
                  <h3 className="comments-title">2 Comments:</h3>
                  <Comments />
                  <LiveReplay />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <BlogSidebarComponent />
            </div>
          </div>
        </div>
      </div>
      <InstagramGallery />
      <ScrollRestoration/>
    </>
  )
}

export default BlogDetails