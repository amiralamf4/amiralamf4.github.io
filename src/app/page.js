"use client"
import Navbaar from "@/components/navbar/Navbaar";
import React from 'react'
import Projectshow from '../components/home/projectshow';
import Herosection from '../components/home/herosection'
import Skills from '../components/home/skills'
import Eyes from '../components/home/eyes'
import Pictures from '../components/home/pictures'
import Socialmedia from '../components/home/socialmedia'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


const page = () => { 
  
  useGSAP(() => {
    gsap.to('.main',{
      display:'none',
      delay:1,
    })
  })

  return (
    <div className='w-full pt-0.5 bg-[color:var(--bg)]'> 
      <div className='main w-full h-full bg-[color:var(--bg)] absolute z-30'></div>
      <Navbaar />
      <Herosection/>
      <Projectshow/>
      <Skills/>
      <Eyes/>
      <Pictures/>
      <Socialmedia/>
    </div>
  )
}

export default page