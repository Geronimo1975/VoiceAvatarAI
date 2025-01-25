import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules"
import 'swiper/css';

import user_1 from '../assets/img/user-1.jpg'
import user_2 from '../assets/img/user-2.jpg'
import user_3 from '../assets/img/user-3.jpg'
import user_4 from '../assets/img/user-4.jpg'
import TestimonialCard from './common/testimonialCard';

const testimonialData = [
    {
        id: 1,
        name: "Aloin Lden",
        position: "Web Developer",
        img: user_1,
        rating: 5,
        review: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using'
    },
    {
        id: 2,
        name: "Jacob Daniels",
        position: "Engineer",
        img: user_3,
        rating: 5,
        review: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using'
    },
    {
        id: 3,
        name: "Aloin Lden",
        position: "Web Developer",
        img: user_4,
        rating: 5,
        review: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using'
    },
    {
        id: 4,
        name: "Jacob Daniels",
        position: "Engineer",
        img: user_2,
        rating: 5,
        review: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using'
    },
]

const Testimonial = () => {
    const swiperRef = useRef();

    return (
        <div className="testimonial-area ptb-100">
            <div className='container'>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    loop
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    className='image-courser'
                    modules={[Navigation]}
                >
                    {
                        testimonialData.map(({ id, img, position, rating, review, name }) => {
                            return (
                                <SwiperSlide key={id}> <TestimonialCard  img={img} position={position} name={name} rating={rating} review={review} /> </SwiperSlide>
                            )
                        })
                    }
                    <div className='d-flex align-items-center justify-content-center mt-3 gap-2  '>
                        <div onClick={() => swiperRef.current?.slidePrev()}><i className="fi fi-tr-arrow-left"></i></div>
                        <div onClick={() => swiperRef.current?.slideNext()}><i className="fi fi-tr-arrow-right"></i></div>
                    </div>
                </Swiper>

                {
                    testimonialData.map(({ id, img }) => {
                        return (
                            <div key={id} className="user">
                                <img src={img} alt="image" />
                            </div>
                        )
                    })
                }
            </div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
        </div>
    )
}

export default Testimonial