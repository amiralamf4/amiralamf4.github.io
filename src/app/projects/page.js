"use client"
import React from 'react'
import Navbaar from '@/components/navbar/Navbaar';
import ProjectCards from '../../components/projects/Projects';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const Projects = () => {

  const projectList = [
    {
      name1: "Ochi Clone Website",
      img1: "./project/03.png",
      link1: "https://ochi-design-page.vercel.app/",
      name2: "GitHub Finder",
      img2: "./project/02.png",
      link2: "https://github-api-phi-self.vercel.app/"
    },
    {
      name1: "Guess the number",
      img1: "./project/01.png",
      link1: "https://gussing-game.netlify.app/",
      name12: "BMI Calculator",
      img2: "./project/bmi.png",
      link2: "https://bmi-checks.netlify.app/",
    },
    {
      name1: "Four Cards Feature",
      img1: "./project/fourCards.png",
      link1: "https://amiralam.is-a.dev/four-card-feature/",
      name2: "Rating Card",
      img2: "./project/ratingCard.png",
      link2: "https://cardrating.netlify.app/",
    }
  ]
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to('.wall', {
      display: 'none',
      delay: 1,
    })

    gsap.from('.hero', {
      height: "100px",
      stagger: {
        amount: 0.3
      },
      scrollTrigger: {
        trigger: '.main',
        start: "top 100%",
        end: "top -150%",
        scrub: true,
      }
    })
  })

  return (
    <div className='w-full bg-[color:var(--bg)] relative'>
      <Navbaar />
      {/* Projects */}
      <div className='pt-[55vh] sm:pt-[65vh] px-5'>
        <h2 className='font-[corpta] text-[8.5vw] uppercase'>Projects</h2>
      </div>
      {/* Cards */}
      <div className='main sm:mt-10 md:-mt-10 px-5'>
        {projectList.map(function (item, idx) {
          return (
            <div key={idx} className='hero w-full h-[800px] sm:h-[400px] md:h-[600px] mb-5 flex flex-col sm:flex-row gap-5'>
              <ProjectCards img1={item.img1} link1={item.link1} img2={item.img2} link2={item.link2} />
            </div>
          )
        })}
      </div>
      <div className='wall w-full h-full absolute top-0 left-0 bg-[color:var(--bg)]'></div>
    </div>
  )
}

export default Projects