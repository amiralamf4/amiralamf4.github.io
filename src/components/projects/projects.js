import React from 'react'

const projects = (props) => {
  return ( 
    <>
     <div className='w-1/2 h-ful overflow-hidden hover:rounded-3xl transition-all duration-500 hover:scale-99'>
          <img className='w-full h-full object-center object-cover hover:scale-105 transition-all duration-500' src={props.img1} alt=""/>
          </div>
          <div className='w-1/2 h-full overflow-hidden hover:rounded-3xl transition-all duration-500 hover:scale-99'>
          <img className='w-full h-full object-center object-cover hover:scale-105 transition-all duration-500' src={props.img2} alt=""/>
          </div>    
    </>     
  )
}

export default projects