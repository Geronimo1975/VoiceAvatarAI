import React from 'react'
import { Link } from 'react-router-dom'
import BlogCard from './common/blogCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from "swiper/modules"
import { blogData } from '../utlits/blogData'


const BlogsComponent = () => {
  const pagination = {
    el: ".containerForBullets",
    type: "bullets",
    bulletClass: "swiper-custom-bullet",
    bulletActiveClass: "swiper-custom-bullet-active",
    clickable: true,
  }
  return (
    <div className="article-area ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="section-title">
              <div className="width">
                <div className="sub-t">Our Latest News</div>
                <h2>Latest News & Articles</h2>
                <Link className="main-btn" to="/blog"><span></span><i className="ri-pencil-line"></i> See More</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="article-content">
              <Swiper
                spaceBetween={30}
                // slidesPerView={2}
                breakpoints={{
                  0: {
                    slidesPerView: 1
                  },
                  576: {
                    slidesPerView: 1
                  },
                  768: {
                    slidesPerView: 2
                  },
                  992: {
                    slidesPerView: 1
                  },
                  1200: {
                    slidesPerView: 2
                  }
                }}
                pagination={pagination}
                loop
                className=''
                modules={[Pagination]}
              >
                {
                  blogData.slice(0, 4).map(({ id, date, link, title, thumb }) => {
                    return (
                      <SwiperSlide key={id}> <BlogCard date={date} link={link} title={title} thumb={thumb} /> </SwiperSlide>
                    )
                  })
                }

              </Swiper>
              <div className='containerForBullets'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogsComponent