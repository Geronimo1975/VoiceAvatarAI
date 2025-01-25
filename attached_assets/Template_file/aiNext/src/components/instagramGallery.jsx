import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from "swiper/modules"

import insta_1 from "../assets/img/gallery/insta-1.jpg"
import insta_10 from "../assets/img/gallery/insta-10.jpg"
import insta_2 from "../assets/img/gallery/insta-2.jpg"
import insta_3 from "../assets/img/gallery/insta-3.jpg"
import insta_4 from "../assets/img/gallery/insta-4.jpg"
import insta_5 from "../assets/img/gallery/insta-5.jpg"
import insta_6 from "../assets/img/gallery/insta-6.jpg"
import insta_7 from "../assets/img/gallery/insta-7.jpg"
import insta_8 from "../assets/img/gallery/insta-8.jpg"
import insta_9 from "../assets/img/gallery/insta-9.jpg"


const instaGalleryData = [
    {
        id: "1",
        link: "https://www.instagram.com/",
        img: insta_1
    },
    {
        id: "2",
        link: "https://www.instagram.com/",
        img: insta_10
    },
    {
        id: "3",
        link: "https://www.instagram.com/",
        img: insta_2
    },
    {
        id: "4",
        link: "https://www.instagram.com/",
        img: insta_3
    },
    {
        id: "5",
        link: "https://www.instagram.com/",
        img: insta_4
    },
    {
        id: "6",
        link: "https://www.instagram.com/",
        img: insta_5
    },
    {
        id: "7",
        link: "https://www.instagram.com/",
        img: insta_6
    },
    {
        id: "8",
        link: "https://www.instagram.com/",
        img: insta_7
    },
    {
        id: "9",
        link: "https://www.instagram.com/",
        img: insta_8
    },
    {
        id: "10",
        link: "https://www.instagram.com/",
        img: insta_9
    },
    {
        id: "11",
        link: "https://www.instagram.com/",
        img: insta_1
    },
    {
        id: "12",
        link: "https://www.instagram.com/",
        img: insta_10
    },
    {
        id: "13",
        link: "https://www.instagram.com/",
        img: insta_2
    },
    {
        id: "14",
        link: "https://www.instagram.com/",
        img: insta_5
    },
    {
        id: "15",
        link: "https://www.instagram.com/",
        img: insta_6
    },
]
const InstagramGallery = () => {
    return (
        <div className="insta-gallery">
            <div className="conatiner-fluid">
                <div className="ins-gallery owl-carousel owl-theme">
                    <Swiper
                        spaceBetween={0}
                        // slidesPerView={10}
                        breakpoints={{
                            0: {
                                slidesPerView: 3
                            },
                            576: {
                                slidesPerView: 2
                            },
                            768: {
                                slidesPerView: 5
                            },
                            992: {
                                slidesPerView: 6
                            },
                            1200: {
                                slidesPerView: 10
                            }
                        }}
                        autoplay
                        loop
                        className=''
                        modules={[Autoplay]}
                    >
                        {
                            instaGalleryData.map(({ id, link, img }) => {
                                return (
                                    <SwiperSlide key={id}>
                                        <div className="items">
                                            <Link to={link} target="_blank" >
                                                <img src={img} alt="image" />
                                                <i className="ri-instagram-line"></i>
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }

                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default InstagramGallery