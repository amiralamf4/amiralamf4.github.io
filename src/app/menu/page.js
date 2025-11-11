"use client"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Link from 'next/link'
import React, { useRef } from 'react'
import dynamic from "next/dynamic";
const Clock = dynamic(() => import("@/components/clock/clock"), { ssr: false });

const page = () => {

  const homeDev = useRef()
  const homeRef = useRef()
  const aboutDev = useRef()
  const aboutRef = useRef()
  const projectDev = useRef()
  const projectRef = useRef()

  useGSAP(()=>{
    gsap.to('.wall',{
      display:'none',
      delay:.6,
    })
  })

  return (
    <div className='w-full h-screen bg-black relative text-white'>
         <div className='w-full h-24 md:h-30 m-auto flex justify-start items-center py-2 px-10 absolute top-0'>
            <h3 className='text-4xl font-[hermione]'>AMIR ALAM</h3>
         </div>

         {/* Links */}
         <div className='w-full h-full bg-black flex flex-col justify-center items-center'>
            {/* Home Link */}
            <div 
            onMouseEnter={()=>{
              homeDev.current.style.height = '100%',
              homeRef.current.style.display= 'block',
              homeRef.current.style.color= 'black'
            }}
            onMouseLeave={()=>{
              homeDev.current.style.height = '0',
              homeRef.current.style.display = 'none'

            }}
            className='w-full h-24 md:h-40 border-white border-y-2 flex justify-center items-center cursor-pointer relative text-[6vw] font-[hermione]'><Link href='/'><h2 >Home</h2>
            <div ref={homeDev} className=' absolute top-0 left-0 transition-all w-full h-0 bg-[color:var(--elemColor)] flex justify-center items-center'><h2 ref={homeRef} className='hidden text-black transition-all'>Home</h2></div></Link>
            </div>

            {/* About Link */}
            <div 
            onMouseEnter={()=>{
              aboutDev.current.style.height = '100%',
              aboutRef.current.style.display= 'block',
              aboutRef.current.style.color= 'black'
            }}
            onMouseLeave={()=>{
              aboutDev.current.style.height = '0',
              aboutRef.current.style.display = 'none'

            }}
            className='w-full h-24 md:h-40 border-white border-y-2 flex justify-center items-center cursor-pointer relative text-[6vw] font-[hermione]'><Link href='/about'><h2 >About</h2>
            <div ref={aboutDev} className=' absolute top-0 left-0 transition-all w-full h-0 bg-[color:var(--elemColor)] flex justify-center items-center'><h2 ref={aboutRef} className='hidden text-black transition-all'>About</h2></div></Link>
            </div>
         
         {/* Project Link */}
         <div 
            onMouseEnter={()=>{
              projectDev.current.style.height = '100%',
              projectRef.current.style.display= 'block',
              projectRef.current.style.color= 'black'
            }}
            onMouseLeave={()=>{
              projectDev.current.style.height = '0',
              projectRef.current.style.display = 'none'

            }}
            className='w-full h-24 md:h-40 border-white border-y-2 flex justify-center items-center cursor-pointer relative text-[6vw] font-[hermione]'><Link href='/projects'><h2 >Projects</h2>
            <div ref={projectDev} className=' absolute top-0 left-0 transition-all w-full h-0 bg-[color:var(--elemColor)] flex justify-center items-center'><h2 ref={projectRef} className='hidden text-black transition-all'>Projects</h2></div></Link>
            </div>
         </div>
         
         <div className='w-full h-24 md:h-30 absolute bottom-10 left-0 flex items-center justify-start px-10'>
            <div className='w-[10vw] h-[10vw] md:w-[5vw] md:h-[5vw] rounded-3xl overflow-hidden border-2'>
              <img src="./avtaar/avatar1.png" alt=""/>
            </div>
            <Clock/>
         </div>


         <div className='wall w-full h-full bg-amber-50 absolute top-0 left-0'></div>
    </div>
  )
}

export default page