"use client"

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

const herosection = () => {

  const img=[
    "picture/pic13.jpg",
    "picture/pic14.jpg",
    "picture/pic15.jpg",
    "picture/pic11.jpg",
    "picture/pic4.png",
    "picture/pic7.jpg",
    "picture/pic5.png",
    "picture/pic6.png",
    "picture/pic8.jpg",
    "picture/pic9.jpg",
    "picture/pic10.jpg",
    "picture/pic1.png",
    // "picture/pic2.png",
    "picture/pic3.png",
    "picture/pic12.jpg",
    "picture/pic13.jpg",
    ]

  gsap.registerPlugin(ScrollTrigger)
  const imgRef = useRef()
  const imgsRef = useRef()

  useGSAP(() => {
    gsap.to(imgRef.current, {
      scrollTrigger: {
        trigger: imgRef.current,
        start: 'top 30%',
        end: 'top -60%',
        pin: true,
        scrub: true,
        onUpdate:(elem)=>{
          let imageIndex;
          if(elem.progress<1){
            imageIndex = Math.floor(elem.progress * img.length)
          }else{
            imageIndex = img.length-1
          }
          imgsRef.current.src = img[imageIndex]
        }
      }
    })
  })
  return (
    <div className='pb-5'>
      <div ref={imgRef} className=" absolute w-[9rem] md:w-[13rem] overflow-hidden rounded-xl md:rounded-3xl left-[22%] top-[35%] md:left-[23%] md:top-[30%] lg:top-[35%] bg-red-300">
        <img ref={imgsRef} className="w-full h-full object-cover" src={img[10]} alt="photo" />
      </div>
      <div className='relative mt-[55vh]'>
        <h1 className='text-[13vw] font-bold text-center font-[dt]'>AMIR ALAM</h1>
      </div>
      <div className='pl-[29%] md:pl-[30%] pr-12 relative'>
        <p className=' text-xl sm:text-3xl md:text-4xl lg:text-5xl font-[hermione] font-semibold lg:text-justify'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I am passionate about transforming imagination into immersive digital experiences.
          I specialize in crafting interfaces that seamlessly blend creativity with functionality, ensuring every interaction is intuitive and engaging.
          Every project I undertake reflects a commitment to purpose, precision, and thoughtful design — turning ideas into meaningful realities that inspire, connect, and leave a lasting impact on users.
          With a focus on innovation and attention to detail, I strive to create experiences that not only solve problems but also resonate emotionally, making technology both functional and delightful.</p>
      </div>
    </div>
  )
}

export default herosection