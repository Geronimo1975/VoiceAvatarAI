import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from "framer-motion";

import img_1 from "../assets/img/gallery/gallery-image1.jpg"
import img_2 from "../assets/img/gallery/gallery-image2.jpg"
import img_3 from "../assets/img/gallery/gallery-image3.jpg"
import img_4 from "../assets/img/gallery/gallery-image4.jpg"
import img_15 from "../assets/img/gallery/gallery-image15.jpg"
import img_6 from "../assets/img/gallery/gallery-image6.jpg"
import img_7 from "../assets/img/gallery/gallery-image7.jpg"
import img_8 from "../assets/img/gallery/gallery-image8.jpg"
import img_17 from "../assets/img/gallery/gallery-image17.jpg"
import img_16 from "../assets/img/gallery/gallery-image16.jpg"
import img_13 from "../assets/img/gallery/gallery-image13.jpg"
import img_11 from "../assets/img/gallery/gallery-image11.jpg"
import img_12 from "../assets/img/gallery/gallery-image12.jpg"

import GalleryFilter from './common/galleryFilter'
import GalleryCard from './common/galleryCard'

const galleryData = [
    {
        id: 1,
        img: img_1,
        group: "brand"
    },
    {
        id: 2,
        img: img_2,
        group: "design"
    },
    {
        id: 3,
        img: img_3,
        group: "motion"
    },
    {
        id: 4,
        img: img_4,
        group: "printing"
    },
    {
        id: 5,
        img: img_15,
        group: "design"
    },
    {
        id: 6,
        img: img_6,
        group: "motion"
    },
    {
        id: 7,
        img: img_7,
        group: "brand"
    },
    {
        id: 8,
        img: img_8,
        group: "motion"
    },
    {
        id: 9,
        img: img_17,
        group: "printing"
    },
    {
        id: 10,
        img: img_16,
        group: "printing"
    },
    {
        id: 11,
        img: img_13,
        group: "motion"
    },
    {
        id: 12,
        img: img_11,
        group: "brand"
    },
    {
        id: 13,
        img: img_12,
        group: "design"
    },

]

const Gallery = () => {
    const [filtered, setFiltered] = useState(galleryData);
    const [activeGroup, setActiveGroup] = useState("all");

    return (
        <motion.div className="gallery-area ptb-100 overflow-hidden"
            initial={{
                opacity: 0,
                y: 150
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
            <div className="container">
                <div className="gallery-table" >
                    <div className="section-title">
                        <div className="width">
                            <div className="sub-t">Image Generation</div>
                            <h2>Unveil New Creative Horizons with Models</h2>
                        </div>
                        <GalleryFilter
                            activeGroup={activeGroup}
                            setActiveGroup={setActiveGroup}
                            galleryData={galleryData}
                            setFiltered={setFiltered}
                        />
                    </div>

                    <div className="gallery">

                        <motion.div layout>
                            <AnimatePresence>
                                {filtered.map(({ id, img }) => {
                                    return <GalleryCard img={img} key={id} />;
                                })}
                            </AnimatePresence>
                        </motion.div>

                    </div>
                    <div className="gallery-btn">
                        <Link className="main-btn" to="/portfolio"><span></span><i className="ri-function-line"></i> View All Images</Link>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Gallery