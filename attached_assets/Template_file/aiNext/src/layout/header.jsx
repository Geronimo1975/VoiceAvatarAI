import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const menuList = [
    {
        id: "1",
        path: "/",
        name: "Home",
        dropDownList: false
    },
    {
        id: "2",
        path: "#dropdown",
        name: "Pages",
        dropDownList: [
            {
                id: "1",
                path: "/about",
                name: "About"
            },
            {
                id: "2",
                path: "/team",
                name: "Team"
            },
            {
                id: "3",
                path: "/pricing",
                name: "Pricing"
            },
            {
                id: "4",
                path: "/terms-conditions",
                name: "Terms & Conditions"
            },
            {
                id: "5",
                path: "/privacy-policy",
                name: "Privacy Policy"
            },
            {
                id: "6",
                path: "/not-found",
                name: "404 Error Page"
            },

        ]
    },
    {
        id: "3",
        path: "/portfolio",
        name: "Portfolio",
        dropDownList: false
    },
    {
        id: "4",
        path: "#dropdown",
        name: "Blog",
        dropDownList: [
            {
                id: "1",
                path: "/blog",
                name: "Blog Grid"
            },
            {
                id: "2",
                path: "/blog-sidebar",
                name: "Blog Right Sidebar"
            },
            {
                id: "3",
                path: "/blog-details",
                name: "Blog Details"
            }

        ]
    },
    {
        id: "5",
        path: "/contact",
        name: "Contact",
        dropDownList: false
    },
]
const Header = () => {
    const location = useLocation();
    const [dropdownOpen, setDropdownOpen] = useState("")
    const [mobileNavActive, setMobileNavActive] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", stickyHeader)
        return () => window.removeEventListener("scroll", stickyHeader)
    }, [])


    // ------- body scroll hiden when mobile menu active
    useEffect(() => {
        if (mobileNavActive) {
            document.body.style.overflow = "hidden"
        }
        else {
            document.body.style.overflow = "auto"
        }

    }, [mobileNavActive])

    // ------- scroll sticky header
    const stickyHeader = () => {
        const navbar = document.querySelector(".navbar")
        const scrollTop = window.scrollY;

        scrollTop >= 100
            ? navbar.classList.add("sticky")
            : navbar.classList.remove("sticky");
    }

    // -------- dropdown show and hidden
    const handleDropdown = (dropDownList, id) => {
        if (dropDownList) {
            setDropdownOpen(id)
        }
        else {
            setDropdownOpen("")
            setMobileNavActive(false)
        }
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg mb-nav" id="navbar">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <h2>AiNext</h2>
                    </Link>
                    <div onClick={() => setMobileNavActive(true)} className="navbar-toggler text-decoration-none">
                        <span className="burger-menu">
                            <span className="top-bar"></span>
                            <span className="middle-bar"></span>
                            <span className="bottom-bar"></span>
                        </span>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            {
                                menuList.map(({ id, dropDownList, name, path }) => {
                                    return (
                                        <li key={id} className="nav-item">
                                            <Link to={path} className={`${dropDownList ? "dropdown-toggle" : ""} nav-link`}>
                                                {name}
                                            </Link>
                                            {
                                                dropDownList &&
                                                <ul className="dropdown-menu">
                                                    {
                                                        dropDownList.map(({ id, path, name }) => {
                                                            return (
                                                                <li key={id} className="nav-item">
                                                                    <Link to={path} className="nav-link">
                                                                        {name}
                                                                    </Link>
                                                                </li>
                                                            )
                                                        })
                                                    }

                                                </ul>
                                            }

                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <div className="nav-btn">
                            <Link to="/contact" className="default-btn">
                                Get Started
                                <i className="ri-arrow-right-line"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* --------- Mobile navbar start */}
            <div className={`responsive-navbar ${mobileNavActive ? 'show' : ''}`} >
                <div className="offcanvas-header">
                    <Link to="/" className="logo d-inline-block">
                        <h2>AiNext</h2>
                    </Link>
                    <button onClick={() => setMobileNavActive(false)} type="button" className="close-btn bg-transparent position-relative lh-1 p-0 border-0" >
                        <i className="ri-close-line"></i>
                    </button>
                </div>
                <div className="offcanvas-body">
                    <ul className="responsive-menu">
                        {
                            menuList.map(({ id, dropDownList, name, path }) => {
                                return (
                                    <li key={id} className={`responsive-menu-list ${dropdownOpen === id ? "activeDropdown" : ""} ${dropDownList ? "" : 'without-icon'}`}>
                                        <NavLink onClick={(e) => handleDropdown(dropDownList, id)} to={path}>{name}</NavLink>
                                        {
                                            dropDownList &&
                                            <ul className="responsive-menu-items">
                                                {
                                                    dropDownList.map(({ id, name, path }) => <li key={id} onClick={() => setMobileNavActive(false)}><NavLink to={path}>{name}</NavLink></li>)
                                                }
                                            </ul>
                                        }

                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className="others-option d-md-flex align-items-center">
                        <div className="option-item">
                            <a to="contact.html" className="default-btn">
                                <i className="ri-arrow-right-line"></i>
                                <span>Get Started</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
             {/* --------- Mobile navbar end */}
        </>
    )
}

export default Header