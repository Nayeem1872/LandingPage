"use client"

import React, { useEffect, useState } from 'react'
import {motion, AnimatePresence} from "framer-motion"
import Image from 'next/image'

const images =[
    {
        url:"/image/11.jpg",
        alt:"logo"
    },
    {
        url:"/image/12.jpg",
        alt:"logo"
    },
    {
        url:"/image/13.jpg",
        alt:"logo"
    },
    {
        url:"/image/14.png",
        alt:"logo"
    },
    {
        url:"/image/15.jpg",
        alt:"logo"
    },
    {
        url:"/image/16.png",
        alt:"logo"
    },
    {
        url:"/image/17.jpg",
        alt:"logo"
    },
]

const Carousel = () => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    useEffect(()=>{
        const interval =setInterval(()=>{
            setCurrentImageIndex((prevIndex)=>
            prevIndex === images.length - 1?0:prevIndex+1)
        },3000)

        return()=>{
            clearInterval(interval)
        }


    },[])

  return (
    <>
        <div className='items-center justify-center flex text-3xl font-bold md:pb-10 px-10
        bg-gradient-to-r
        from-blue-500
        to-green-300
        bg-clip-text
        text-transparent        
        '>
            More than 1000+ product we have build!
        </div>
        <div className='grid grid-cols-3 md:flex'>
            <AnimatePresence
            custom={currentImageIndex}>
                {images.map((image,index)=>
                <motion.div
                key={index}
                initial={{opacity:0}}
                animate={{
                    opacity:index === currentImageIndex?1:0.5,
                    scale:index === currentImageIndex?1.2:1,
                    transition:{duration:0.5}
                }}

                className="flex items-center justify-center h-40 w-40 md:w-80"
                exit={{opacity:0}}
                custom={index}
                transition={{
                    opacity:{duration:0.5},
                }}
                >
                    <Image
                    src={image.url}
                    alt={image.alt}
                    width={400}
                    height={400}
                    className="object-contain h-20 w-20 items-center justify-center flex mx-auto"
                    
                    />

                </motion.div>
                
                )}
            
        



            </AnimatePresence>

        </div>
    
    
    </>
  )
}

export default Carousel