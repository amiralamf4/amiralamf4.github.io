"use client"
import React from 'react'
import Navbaar from '@/components/navbar/Navbaar';
import ProjectCards from '@/components/projects/projects';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const projects = () => {

  const projectList = [
    {
      img1: "./project/03.png",
      img2: "./project/02.png"
    },
    {
      img1: "./project/01.png",
      img2: "./project/bmi.png"
    },
    {
      img1: "./project/fourCards.png",
      img2: "./project/ratingCard.png"
    }
  ]
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(()=>{
    gsap.to('.wall',{
      display:'none',
      delay:1,
    })

    gsap.from('.hero',{
      height:"100px",
      stagger:{
        amount:0.3
      },
     scrollTrigger:{
       trigger:'.main',
        start:"top 100%",
        end: "top -150%",
        scrub:true,
     }
    })
  })

  return (
    <div className='w-full bg-[color:var(--bg)] relative'>
      <Navbaar />
      <div className='pt-[45vh] px-5'>
        <h2 className='font-[corpta] text-[8.5vw] uppercase'>Projects</h2>
      </div>
      <div className='main -mt-10 px-5'>
        {projectList.map(function (item, idx) {
          return (
            <div key={idx} className='hero w-full h-[600px] mb-5 flex gap-5'>
              <ProjectCards img1={item.img1} img2={item.img2} />
            </div>
          )
        })}
      </div>
        <div className='wall w-full h-full absolute top-0 left-0 bg-[color:var(--bg)]'></div>
    </div>
  )
}

export default projects