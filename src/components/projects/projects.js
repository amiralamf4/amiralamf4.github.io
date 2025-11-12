import Link from 'next/link'
import React from 'react'

const projects = (props) => {
console.log(props.link2);

  return (
    <>
      <div className='w-full relative sm:w-1/2 h-1/2 sm:h-full overflow-hidden rounded-2xl hover:rounded-3xl transition-all duration-500 hover:scale-99'>
        <Link href={props.link1} target="_blank" rel="noopener noreferrer">
          <img className='w-full h-full object-cover object-fit hover:scale-105 transition-all duration-500' src={props.img1} alt="" />
        </Link>
      </div>
      <div className='w-full sm:w-1/2 h-1/2 sm:h-full overflow-hidden rounded-2xl hover:rounded-3xl transition-all duration-500 hover:scale-99'>
        <Link href={props.link2} target="_blank" rel="noopener noreferrer">
          <img className='w-full h-full object-cover object-fit hover:scale-105 transition-all duration-500' src={props.img2} alt="" />
        </Link>
      </div>
    </>
  )
}

export default projects