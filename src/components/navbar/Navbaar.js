"use client"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Link from 'next/link'
import React, { useRef } from 'react'

const Navbaar = () => {
  const helloRef = useRef()
  const helloTextRef = useRef()
  const menuRef = useRef()
  const menuTextRef = useRef()

  useGSAP(()=>{
    gsap.from('.menu',{
      height:0,
      delay:1.5,
    })
    gsap.from('.sayhello',{
      height:0,
      delay:1.5,
    })
  })

  return (
    <div className=' fixed top-0 left-0 w-full h-[5rem] flex justify-end z-20'>
      {/* MENU */}
      <div className=' flex justify-between w-[50vw] md:w-[40vw] lg:w-[20rem] font-semibold tracking-wide md:text-[1rem]'>
       
        {/* SAY HELLO */}
        <div 
        onMouseEnter={()=>{
          helloRef.current.style.height = '100%'
          helloTextRef.current.style.color = 'black'
        }}
        onMouseLeave={()=>{
          helloRef.current.style.height = '0'
           helloTextRef.current.style.color = 'white'
        }}
        className='sayhello relative bg-black w-1/2 h-14 flex items-end pl-5 cursor-pointer'>
          <div className='w-full h-full flex items-center'>
            <h3 ref={helloTextRef} className='w-full text-white font-[ligema] text-2xl md:text-4xl font-thin tracking-widest z-10 transition-all'><Link href='/gamilhaveto write'>Say Hello</Link></h3>
          </div>
          <div ref={helloRef} className='w-full h-0 bg-[color:var(--elemColor)] transition-all absolute top-0 left-0'></div>
        </div>

        {/* MENU */}
        <div 
        onMouseEnter={()=>{
          menuRef.current.style.height = '100%'
          menuTextRef.current.style.color = 'black'
        }}
        onMouseLeave={()=>{
          menuRef.current.style.height = '0'
          menuTextRef.current.style.color = 'white'
        }}
        className=' menu bg-black w-1/2 flex items-end pl-5 pb-1 cursor-pointer relative'>
          <div className='w-full h-full flex justify-center items-end'>
          <h3 ref={menuTextRef} className='w-full text-white font-[hermione] text-2xl md:text-3xl font-thin tracking-widest z-10 transitio-all'><Link href='/menu'>Menu</Link></h3>
          </div>
          <div ref={menuRef} className='w-full h-0 bg-[color:var(--elemColor)] absolute top-0 left-0 transition-all'></div>
        </div>
      </div>

    </div>
  )
}

export default Navbaar