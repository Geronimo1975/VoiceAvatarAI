import React from 'react'
import PageHeader from '../components/common/pageHeader'
import BlogsComponent from '../components/blogsComponent'
import { blogData } from '../utlits/blogData'
import BlogCard from '../components/common/blogCard'
import InstagramGallery from '../components/instagramGallery'
import { ScrollRestoration } from 'react-router-dom'

const Blog = () => {
  return (
    <>
      <PageHeader pageName={"Blog"} />
      <div className="blog-area article-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            {
              blogData.map(({ author, date, desc, id, link, thumb, title }) => {
                return (
                  <div className="col-lg-4">
                    <BlogCard key={id} date={date} link={link} thumb={thumb} title={title} />
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <InstagramGallery />
      <ScrollRestoration/>
    </>
  )
}

export default Blog