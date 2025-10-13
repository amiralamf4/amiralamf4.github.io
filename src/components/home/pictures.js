"use client"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useEffect, useRef } from 'react'

const pictures = () => {

    gsap.registerPlugin(ScrollTrigger)

    const containerRef = useRef(null)

    useEffect(() => {
        const children = containerRef.current.children;

        // Timeline for all images
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "+=200%",      // scroll distance for the animation
                scrub: true,
                pin: true,          // parent pinned during animation
                anticipatePin: 1,
                // markers: true
            },
        });

        // Show each child one by one
        tl.fromTo(
            children,
            { opacity: 0, y: 100 },
            { opacity: 1, y: 0, stagger: 0.3, duration: 0.5, ease: "power2.out" }
        )
            // Hide all children one by one
            .to(children, { opacity: 0, y: -100, stagger: 0.3, duration: 0.5, ease: "power2.in" });
    }, []);

    return (
        <div  ref={containerRef} className='w-full h-screen bg-black relative z-10'>
            <div className='w-[7rem] md:w-[13rem] h-[18rem] absolute top-28 left-22 md:top-28 md:left-58 border-none'>
                <img src="../picture/pic1.png" alt="pic" />
            </div>
            <div className='w-[7rem] md:w-[13rem] h-[18rem] absolute bottom-20 left-18 md:bottom-28 md:left-88'>
                <img src="../picture/pic11.jpg" alt="pic" />
            </div>
            <div className='w-[7rem] md:w-[13rem] h-[18rem] absolute top-38 right-18 md:top-20 md:right-98'>
                <img src="../picture/pic4.png" alt="pic" />
            </div>
            <div className='w-[7rem] md:w-[13rem] h-[18rem] absolute bottom-10 right-24 md:bottom-28 md:right-58'>
                <img src="../picture/pic7.jpg" alt="pic" />
            </div>
            <div className='w-[7rem] md:w-[13rem] h-[18rem] absolute hidden md:block md:bottom-28 md:right-1/3'>
                <img src="../picture/pic15.jpg" alt="pic" /></div>
            <div className='w-[7rem] md:w-[13rem] h-[18rem] absolute hidden md:block md:top-28 md:left-1/3'>
                <img src="../picture/pic3.png" alt="pic" /></div>
           
        </div>
    )
}

export default pictures