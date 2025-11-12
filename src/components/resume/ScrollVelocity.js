"use client"
import React from 'react'
import ScrollVelocityText from './ScrollVelocityText'


const ScrollVelocity = () => {
  const velocity = 100;
  return (
    <div className='w-full absolute top-44'>
      <ScrollVelocityText
        texts={['RESUME','EDUCATION','EXPERIENCE','SKILLS SKILLS','PROJECTS','CONTACT']}
        velocity={velocity}
        className="custom-scroll-text"
      />
    </div>
  )
}

export default ScrollVelocity