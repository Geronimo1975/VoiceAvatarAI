import React from 'react'
import {motion} from "framer-motion"
import { Link } from 'react-router-dom'

const featuresData = [
    {
        id: 1,
        icon: "fi fi-tr-file-user",
        title: "We analyzing Experience",
        desc: "Easy to grasp, rewarding to perfect. Be proficient in producing exquisite content quickly and efficiently.",
        link: "/about"
    },
    {
        id: 2,
        icon: "fi fi-tr-graphic-style",
        title: "From Concept To Final",
        desc: "Easy to grasp, rewarding to perfect. Be proficient in producing exquisite content quickly and efficiently.",
        link: "/about"
    },
    {
        id: 3,
        icon: "fi fi-tr-user-astronaut",
        title: "New Thinking For Result",
        desc: "Easy to grasp, rewarding to perfect. Be proficient in producing exquisite content quickly and efficiently.",
        link: "/about"
    },
    {
        id: 4,
        icon: "fi fi-tr-biking-mountain",
        title: "New Thinking For Result",
        desc: "Easy to grasp, rewarding to perfect. Be proficient in producing exquisite content quickly and efficiently.",
        link: "/about"
    },

]
const Fetuses = () => {
    return (
        <section id="features" className="fetuses-area pt-70">
            <div className="container-fluid">
                <div className="row justify-content-center g-0">
                    {
                        featuresData.map(({ id, desc, icon, link, title }) => {
                            return (
                                <div key={id} className="col-lg-3 col-md-6">
                                    <motion.div className="single-fetuses-box"
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
                                        <div className="icon">
                                            <i className={icon}></i>
                                        </div>
                                        <h3>{title}</h3>
                                        <p>{desc}</p>
                                        <Link to={link}>Read More</Link>
                                    </motion.div>
                                </div>
                            )
                        })
                    }



                </div>
            </div>
        </section>
    )
}

export default Fetuses