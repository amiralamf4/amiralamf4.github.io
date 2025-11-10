"use client"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { usePathname } from 'next/navigation'


const loadAnimation = () => {

    const pathname = usePathname()
    console.log(pathname);
    
    const stairParentRef = React.useRef(null)
    useGSAP(function(){
        const tl = gsap.timeline()

        tl.to(stairParentRef.current,{
            display:'block '
        })

        tl.from('.stair',{
            height : 0,
            stagger:{
                amount: -0.3
            },
        })

        tl.to('.stair',{
            y:'100%',
            stagger:{
                amount: -0.25
            },
        })
        tl.to(stairParentRef.current,{
            display:'none'
        })
        tl.to('.stair',{
            y:0,
        })
    },[pathname])

    

  return (
    <div ref={stairParentRef} className='w-full h-screen z-50 fixed top-0 left-0'>
        <div className='w-full h-full flex'>
            <div className=' stair h-hull w-1/5 bg-black'></div>
            <div className=' stair h-hull w-1/5 bg-black'></div>
            <div className=' stair h-hull w-1/5 bg-black'></div>
            <div className=' stair h-hull w-1/5 bg-black'></div>
            <div className=' stair h-hull w-1/5 bg-black'></div>
        </div>
    </div>
  )
}

export default loadAnimation