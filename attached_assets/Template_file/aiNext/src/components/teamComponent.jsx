import React, { useRef } from 'react'
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import img_1 from "../assets/img/about-image-1.jpg"
import img_2 from "../assets/img/about-image-2.jpg"
import img_3 from "../assets/img/about-image-3.jpg"
import img_4 from "../assets/img/about-image-4.jpg"
import img_5 from "../assets/img/about-image-5.jpg"
import TeamCard from './common/teamCard';

const teamData = [
    {
        id: 1,
        img: img_1,
        name: "Christian Haol",
        position: "Web Developer",
        socal_link: [
            {
                id: 1,
                link: "#",
                icon: "ri-facebook-fill"
            },
            {
                id: 2,
                link: "#",
                icon: "ri-instagram-line"
            },
            {
                id: 3,
                link: "#",
                icon: "ri-linkedin-fill"
            },
        ]
    },
    {
        id: 2,
        img: img_2,
        name: "Christian Haol",
        position: "Web Developer",
        socal_link: [
            {
                id: 1,
                link: "#",
                icon: "ri-facebook-fill"
            },
            {
                id: 2,
                link: "#",
                icon: "ri-instagram-line"
            },
            {
                id: 3,
                link: "#",
                icon: "ri-linkedin-fill"
            },
        ]
    },
    {
        id: 3,
        img: img_3,
        name: "Christian Haol",
        position: "Web Developer",
        socal_link: [
            {
                id: 1,
                link: "#",
                icon: "ri-facebook-fill"
            },
            {
                id: 2,
                link: "#",
                icon: "ri-instagram-line"
            },
            {
                id: 3,
                link: "#",
                icon: "ri-linkedin-fill"
            },
        ]
    },
    {
        id: 4,
        img: img_4,
        name: "Christian Haol",
        position: "Web Developer",
        socal_link: [
            {
                id: 1,
                link: "#",
                icon: "ri-facebook-fill"
            },
            {
                id: 2,
                link: "#",
                icon: "ri-instagram-line"
            },
            {
                id: 3,
                link: "#",
                icon: "ri-linkedin-fill"
            },
        ]
    },
    {
        id: 5,
        img: img_5,
        name: "Christian Haol",
        position: "Web Developer",
        socal_link: [
            {
                id: 1,
                link: "#",
                icon: "ri-facebook-fill"
            },
            {
                id: 2,
                link: "#",
                icon: "ri-instagram-line"
            },
            {
                id: 3,
                link: "#",
                icon: "ri-linkedin-fill"
            },
        ]
    },
]
const TeamComponent = ({prentClass}) => {
    const swiperRef = useRef();

    return (
        <div className={`team-area pt-100 ${prentClass}`}>
            <div className="container">
                <motion.div className="position-relative" 
                    initial={{
                        opacity: 0,
                        y: 200
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 1,
                        },
                    }}
                    viewport={{ once: true }}
                >
                    <Swiper
                        spaceBetween={30}
                        // slidesPerView={3}
                        breakpoints={{
                            0: {
                                slidesPerView: 1
                            },
                            576: {
                                slidesPerView: 2
                            },
                            768: {
                                slidesPerView: 2
                            },
                            992: {
                                slidesPerView: 3
                            },
                            1200: {
                                slidesPerView: 3
                            }
                        }}
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        loop
                        className='image-courser'
                    >
                        {
                            teamData.map(({ id, img, name, position, socal_link }) => {
                                return (
                                    <SwiperSlide key={id}> <TeamCard img={img} name={name} position={position} socal_link={socal_link} /> </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                    <div className='d-flex align-items-center justify-content-center justify-content-lg-start  navigation '>
                        <div onClick={() => swiperRef.current?.slidePrev()}><i className="fi fi-tr-angle-small-left"></i></div>
                        <div onClick={() => swiperRef.current?.slideNext()}><i className="fi fi-tr-angle-small-right"></i></div>
                    </div>

                </motion.div>
            </div>
        </div>
    )
}

export default TeamComponent