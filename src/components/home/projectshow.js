"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

const ProjectShow = () => {

  
  const containerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const boxes = gsap.utils.toArray(".box"); // sab boxes select kar le
    const totalWidth = (boxes.length - 1) * 100; // kitna move karna hai

    gsap.to(boxes, {
      xPercent: -totalWidth, // horizontally move
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${(boxes.length - 1) * 100}%`,// scroll distance
        scrub: true, // smooth scroll-based animation
        pin: true, // section ko scroll ke time pe pin rakhta hai
        anticipatePin: 1,
        // markers: true, // debug ke liye
      },
    });
  }, []);

  return (
    <div  className="w-full h-screen px-[3vw]" ref={containerRef}>
      <div className="border-t-2 border-gray-500">
        <h2 className="mt-30 md:mt-20 text-6xl font-semibold font-[corpta] tracking-wider">
          Things I've built
        </h2>

        {/* Horizontal scroll area */}
        <div className="parent mt-5 w-full h-[50vh] sm:h-[70vh] md:h-[80vh] rounded-2xl flex gap-5 overflow-hidden">
          <div className="box w-full h-full flex-shrink-0 rounded-3xl bg-amber-600 overflow-hidden">
            <img className="w-full h-full object-cover" src="./project/03.png" alt="project"/>
          </div>
          <div className="box w-full h-full flex-shrink-0 rounded-3xl bg-amber-600 overflow-hidden">
            <img className="w-full h-full object-cover" src="./project/02.png" alt="project"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectShow;
