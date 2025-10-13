import Projectshow from '@/components/home/projectshow'
import Herosection from '../components/home/herosection'
import React from 'react'
import Skills from '@/components/home/skills'
import Eyes from '@/components/home/eyes'
import Pictures from '@/components/home/pictures'
import Socialmedia from '@/components/home/socialmedia'

const page = () => { 
  return (
    <div className='w-full pt-0.5 bg-[color:var(--bg)] '> 
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