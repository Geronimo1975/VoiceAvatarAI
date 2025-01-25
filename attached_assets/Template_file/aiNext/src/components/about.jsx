import React from 'react'
import { Link } from 'react-router-dom';
import SlotCounter from 'react-slot-counter';
import { motion } from "framer-motion";

import about_2 from "../assets/img/about-2.jpg"

const About = () => {

    return (
        <div className="about-area ptb-100 section-bg">
            <div className="container">
                <motion.div className="row align-items-center"
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
                    <div className="col-lg-6">
                        <div className="image">
                            <img src={about_2} alt="image" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="content">
                            <div className="sub-t">About Us</div>
                            <h2>Create your own AI business easily.</h2>
                            <p>Malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel. Nam aliquam sem et tortor consequat. Porttitor leo a diam sollicitudin tempor id eu. Nisl pretium fusce id velit ut. At lectus urna duis convallis convallis tellus id interdum.</p>
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-4">
                                    <div className="sub-counter">
                                        <h3>
                                            <SlotCounter
                                                value={5000}
                                                animateOnVisible={{ triggerOnce: false, rootMargin: '0px 0px -100px 0px' }}
                                            />
                                        </h3>
                                        <p>Clients</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-4">
                                    <div className="sub-counter">
                                        <h3 className='d-flex  align-items-center '>
                                            <SlotCounter
                                                value={10}
                                                animateOnVisible={{ triggerOnce: false, rootMargin: '0px 0px -100px 0px' }}
                                            />
                                            <span className="target">K</span>
                                        </h3>
                                        <p>Projects</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-4">
                                    <div className="sub-counter">
                                        <h3>
                                            <SlotCounter
                                                value={250}
                                                animateOnVisible={{ triggerOnce: false, rootMargin: '0px 0px -100px 0px' }}
                                            />
                                        </h3>
                                        <p>Years</p>
                                    </div>
                                </div>
                            </div>
                            <Link className="main-btn" href="/about"><span></span><i className="ri-quill-pen-line"></i> About Us</Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default About