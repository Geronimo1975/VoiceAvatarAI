import React from 'react'
import { motion } from "framer-motion";

const GalleryCard = ({img}) => {
    return (
        <motion.div
            layout
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opactiy: 0 }}
        >
            <div className="item-box All Brand">
                <img src={img} alt="image" />
            </div>
        </motion.div>
    )
}

export default GalleryCard