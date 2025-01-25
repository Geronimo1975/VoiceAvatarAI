import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header'
import Footer from './footer'

const RootLayout = () => {
    useEffect(() => {
        buttonHover()
        window.addEventListener("scroll", calcScrollValue)
        return () => window.removeEventListener("scroll", calcScrollValue)
    }, [])


    // ------------- bottom back to top circle
    const calcScrollValue = () => {
        let scrollProgress = document.getElementById("progress");
        let progressValue = document.getElementById("progress-value");
        let pos = document.documentElement.scrollTop;
        let calcHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        let scrollValue = Math.round((pos * 100) / calcHeight);
        if (pos > 100) {
            scrollProgress.style.display = "grid";
        } else {
            scrollProgress.style.display = "none";
        }
        scrollProgress.addEventListener("click", () => {
            document.documentElement.scrollTop = 0;
        });
        scrollProgress.style.background = `conic-gradient(#7f00ff ${scrollValue}%, #9094a6 ${scrollValue}%)`;
    };

    // ------------- button hover effect
    const buttonHover = () => {
        const mainBtn = document.querySelectorAll(".main-btn")
        mainBtn.forEach((e) => {
            e.addEventListener("mouseenter", (event) => {
                const rect = e.getBoundingClientRect()
                const offset = {
                    top: rect.top + window.scrollY,
                    left: rect.left + window.scrollX,
                };
                const relX = event.pageX - offset.left
                const relY = event.pageY - offset.top;
                e.querySelector('span').style.top = relY + "px"
                e.querySelector('span').style.left = relX + "px"
            })
        })
    }

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
            <div id="progress">
                <span id="progress-value"><i className="ri-arrow-up-line"></i></span>
            </div>
        </>
    )
}

export default RootLayout