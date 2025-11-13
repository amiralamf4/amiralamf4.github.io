"use client"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useEffect, useRef } from 'react'

const Skills = () => {
  gsap.registerPlugin(ScrollTrigger)
  const textRef = useRef(null);

  useEffect(() => {
    const element = textRef.current;

    const words = element.innerText.split(" ");
    element.innerHTML = words
      .map(
        (word) =>
          `<span class='word inline-block opacity-0 translate-y-5 mr-1'>${word}</span>`
      )
      .join(" ");

    // Scroll-triggered animation
    gsap.to(".word", {
      opacity: 1,
      y: 0,
      ease: "power1.out",
      stagger: 0.05,
      scrollTrigger: {
        trigger: element,
        start: "top 90%",   // jab paragraph viewport me aaye
        end: "bottom 70%",  // jab tak poora paragraph scroll ho jaye
        scrub: true,        // <- scroll ke sath sath animate hoga
      },
    });
  }, []);

  const mernRef=useRef()
  const nextRef=useRef()
  const taildwinRef=useRef()
  const SaasCss=useRef()
  const GsapRef=useRef()
  const MotionRef=useRef()

  return (
    <div data-scroll data-scroll-section data-scroll-speed='-.01' className='w-full h-screen px-[3vw] bg-[color:var(--bg)]'>
      <div className='w-full border-t-2 border-gray-500 flex flex-col items-center'>
        <div ref={textRef} className='mt-24 md:mt-25 text-xl md:text-3xl font-[hermione] font-semibold tracking-wider'>
          <p>I blend creativity with cutting-edge technology to craft digital experiences that leave a lasting impact.
            Every project I undertake is a reflection of thoughtful design, seamless functionality, and purposeful innovation.<br />
            This is my digital toolbox — a space where ideas transform into meaningful, engaging, and impactful creations that resonate with users and inspire growth.</p>
        </div>
        <div className='mt-5 md:mt-10 grid grid-cols-2 w-full h-full text-xl sm:text-2xl lg:text-4xl gap-y-22 md:gap-y-10 lg:gap-y-20 gap-x-10 px-5 md:px-20 font-[hermione] font-semibold'>
          
          {/* JAVASCRIPT */}
          <div onMouseEnter={()=>{taildwinRef.current.style.height='100%'}}
          onMouseLeave={()=>{taildwinRef.current.style.height='0'}}
          className='w-full h-full border-b-2 border-gray-500 relative'>
            <div className='w-full h-full flex'>
          <h2 className='py-2 md:py-3 lg:py-6  z-10'><span className='text-[color:var(--numbertext)] font-semibold text-2xl lg:text-5xl pl-5'>01</span>&nbsp;&nbsp;JavaScript</h2>
            </div>
          <div ref={taildwinRef} className='w-full h-0 bg-[color:var(--elemColor)] absolute bottom-0 left-0 transition-all rounded-t-2xl'></div>
          </div>
          
          {/* Mern */}
          <div onMouseEnter={()=>{mernRef.current.style.height='100%'}}
          onMouseLeave={()=>{mernRef.current.style.height='0'}}
          className='w-full h-full border-b-2 border-gray-500 relative'>
            <div className='w-full h-full flex'>
          <h2 className='py-2 md:py-3 lg:py-6  z-10'><span className='text-[color:var(--numbertext)] font-semibold text-2xl lg:text-5xl pl-5'>02</span>&nbsp;&nbsp;Mearn Stack</h2>
            </div>
          <div ref={mernRef} className='w-full h-0 bg-[color:var(--elemColor)] absolute bottom-0 left-0 transition-all rounded-t-2xl'></div>
          </div>

          {/* Next */}
          <div onMouseEnter={()=>{nextRef.current.style.height='100%'}}
          onMouseLeave={()=>{nextRef.current.style.height='0'}}
          className='w-full h-full border-b-2 border-gray-500 relative'>
            <div className='w-full h-full flex'>
          <h2 className='py-2 md:py-3 lg:py-6  z-10'><span className='text-[color:var(--numbertext)] font-semibold text-2xl lg:text-5xl pl-5'>03</span>&nbsp;&nbsp;Next Js</h2>
            </div>
          <div ref={nextRef} className='w-full h-0 bg-[color:var(--elemColor)] absolute bottom-0 left-0 transition-all rounded-t-2xl'></div>
          </div>

          {/* SaasCss */}
          <div 
          onMouseEnter={()=>{SaasCss.current.style.height='100%'}}
          onMouseLeave={()=>{SaasCss.current.style.height='0'}}
          className='w-full h-full border-b-2 border-gray-500 relative'>
            <div className='w-full h-full flex'>
          <h2 className='py-2 md:py-3 lg:py-6  z-10'><span className='text-[color:var(--numbertext)] font-semibold text-2xl lg:text-5xl pl-5'>04</span>&nbsp;&nbsp;SaasCss</h2>
            </div>
          <div ref={SaasCss} className='w-full h-0 bg-[color:var(--elemColor)] absolute bottom-0 left-0 transition-all rounded-t-2xl'></div>
          </div>

          {/* Gsap */}
          <div onMouseEnter={()=>{GsapRef.current.style.height='100%'}}
          onMouseLeave={()=>{GsapRef.current.style.height='0'}}
          className='w-full h-full border-b-2 border-gray-500 relative'>
            <div className='w-full h-full flex'>
          <h2 className='py-2 md:py-3 lg:py-6  z-10'><span className='text-[color:var(--numbertext)] font-semibold text-2xl lg:text-5xl pl-5'>05</span>&nbsp;&nbsp;Gsap</h2>
            </div>
          <div ref={GsapRef} className='w-full h-0 bg-[color:var(--elemColor)] absolute bottom-0 left-0 transition-all rounded-t-2xl'></div>
          </div>

          {/* Motion */}
          <div onMouseEnter={()=>{MotionRef.current.style.height='100%'}}
          onMouseLeave={()=>{MotionRef.current.style.height='0'}}
          className='w-full h-full border-b-2 border-gray-500 relative'>
            <div className='w-full h-full flex'>
          <h2 className='py-2 md:py-3 lg:py-6  z-10'><span className='text-[color:var(--numbertext)] font-semibold text-2xl lg:text-5xl pl-5'>06</span>&nbsp;&nbsp;Motion</h2>
            </div>
          <div ref={MotionRef} className='w-full h-0 bg-[color:var(--elemColor)] absolute bottom-0 left-0 transition-all rounded-t-2xl'></div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Skills