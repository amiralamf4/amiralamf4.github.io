"use client"
import React, { useEffect, useState, useRef } from 'react';
import { motion } from "framer-motion";
// import { div } from 'motion/react-client';

const eyes = () => {
    const eyeRef = useRef(null);

    const [leftPos, setLeftPos] = useState({ x: 0, y: 0 });
    const [rotate, setRotate]= useState(0)
    useEffect(() => {
        const handleMouseMove = (e) => {
            const moveEye = (eyeRef, setPos) => {
                if (!eyeRef.current) return;

                const rect = eyeRef.current.getBoundingClientRect();
                const radius = rect.width / 2;
                const centerX = rect.left + radius;
                const centerY = rect.top + radius;

                const dx = e.clientX - centerX;
                const dy = e.clientY - centerY;

                const distance = Math.sqrt(dx * dx + dy * dy);
                const maxDistance = radius /3 -10;    


                let finalX = dx;
                let finalY = dy;

                if (distance > maxDistance) {
                    const ratio = maxDistance / distance;
                    finalX = dx * ratio;
                    finalY = dy * ratio;
                }

                setPos({ x: finalX , y: finalY });
            };
         moveEye(eyeRef, setLeftPos);

            const moveWhiteEye = (e) => {            
             let mouseX = e.clientX;
             let mouseY = e.clientY
             let daltaX= mouseX - window.innerWidth/2;
             let daltaY= mouseY - window.innerHeight/2;
             var angle = Math.atan2(daltaY, daltaX) * (180/Math.PI)
             setRotate( angle - 180)
            };           
            moveWhiteEye(e);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
    <div className='eyes w-full h-screen bg-cover bg-center bg-[color:var(--eyesbg)] overflow-hidden rounded-t-3xl'>        
        <div data-scroll data-scroll-speed="-.8" className='relative eyes w-full h-full flex justify-center'>
        <h1 className='text-6xl sm:text-[10rem] md:text-[8rem] font-[dt] mt-40 md:mt-20 text-[color:var(--eyestext)]'>Reach Out</h1>
            <div  className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-10 items-center justify-between'>
                
                {/* Left */}
                <div  className='w-[10rem] h-[10rem] sm:w-[15rem] sm:h-[15rem] bg-white rounded-full flex items-center justify-center '> 
                    <motion.div ref={eyeRef} className='w-2/3 h-2/3 bg-black rounded-full relative flex items-center justify-center' //black ball
                        animate={{ x: leftPos.x, y: leftPos.y }} transition={{ type: "spring", stiffness: 200, damping: 20 }}>
                        <div style={{ transform: `rotate(${rotate}deg)` }}  className='w-full'>
                        <div className='w-7 h-7 bg-white rounded-full relative flex items-center justify-center' //Mini white ball
                        ></div>
                        </div>

                    </motion.div>
                </div>

                {/* Right */}
                <div  className='w-[10rem] h-[10rem] sm:w-[15rem] sm:h-[15rem] bg-white rounded-full flex items-center justify-center'> 
                    <motion.div ref={eyeRef} className='w-2/3 h-2/3 bg-black rounded-full relative flex items-center justify-center' //black ball
                        animate={{ x: leftPos.x, y: leftPos.y }} transition={{ type: "spring", stiffness: 200, damping: 20 }}>
                       <div style={{ transform: `rotate(${rotate}deg)` }}  className='w-full'>
                        <div className='w-7 h-7 bg-white rounded-full relative flex items-center justify-center' //Mini white ball
                        ></div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </div>
        </div>

    );
};

export default eyes;
