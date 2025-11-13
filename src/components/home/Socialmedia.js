"use client"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

const Socialmedia = () => {
    gsap.registerPlugin(ScrollTrigger)
    const h1 = useRef()
    const body = useRef()
  // useGSAP(()=>{
    
  //   gsap.from(h1.current,{
  //    opacity: 0,
  //    scale: 0,
  //    x: 50,
  //   duration: 1,
  //   scrollTrigger: {
  //     trigger: body.current, // jis element se trigger lena hai
  //     start: "top 60%",      // jab body ka top viewport ke 80% height pe aaye
  //     end: "top 40%",        // jab thoda aur upar aaye
  //     scrub: true,           // scroll ke sath smoothly chale
  //     markers: true,   
  //   }})
  // })

  return (
    <div data-scroll data-scroll-section data-scroll-speed='-.8' ref={body} className='w-full h-screen bg-black text-white p-5 border-none'>
        <h1 className='mt-30 text-6xl font-[corpta] font-semibold tracking-widest border-none'>Contacts</h1>
        <div className='grid md:grid-cols-2 gap-x-20 w-[90vw] m-auto mt-20 text-[10vw] font-[ligema]'>
            <div className='border-gray-500 border-b-2'><a href="https://www.linkedin.com/in/amiralamf4/">LinkedIn</a></div>
            <div className='border-gray-500 border-b-2'><a href="github.com/amiralamf4">GitHub</a></div>
            <div className='border-gray-500 border-b-2'><a  href="mailto:amiralam.72135@gmail.com?subject=Hello&body=Hi%20Amir!">Email</a></div>
            <div className='border-gray-500 border-b-2'><a href="https://x.com/AmirAlam_18">x</a></div>
        </div>
    </div>
  )
}

export default Socialmedia