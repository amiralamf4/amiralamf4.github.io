"use client"
import Navbaar from "@/components/navbar/Navbaar";
import React from 'react'
import Projectshow from '../components/home/Projectshow';
import Herosection from '../components/home/Herosection'
import Skills from '../components/home/Skills'
import Eyes from '../components/home/Eyes'
import Pictures from '../components/home/Pictures'
import Socialmedia from '../components/home/Socialmedia'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const page = () => {

  useGSAP(() => {
    gsap.to('.main', {
      display: 'none',
      delay: 1,
    })
  })

  return (
    <div className='w-full pt-0.5 bg-[color:var(--bg)]'>
      <div className='main w-full h-full bg-[color:var(--bg)] absolute z-30'></div>
      <Navbaar />
      <Herosection />
      <Projectshow />
      <Skills />
      <Eyes />
      <Pictures />
      <Socialmedia />
    </div>
  )
}

export default page