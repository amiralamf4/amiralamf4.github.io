"use client"
import React from 'react'
import Resume from '../../components/resume/ScrollVelocity'
import Navbaar from '../../components/navbar/Navbaar'
import ResumeCard from "../../components/resume/ResumeCard"
// import CursorEffect1 from '@/components/cursor/CursorEffect1'

const Page = () => {
  return (
    <div className='w-full h-screen relative bg-[color:var(--bg)]'>
      <Navbaar/>
      {/* <CursorEffect1/> */}
      <Resume/>
        {/* Extra space to enable scrolling */}
      <div className='w-full h-full'>
          <ResumeCard/>
      </div>
    </div>
  )
}

export default Page