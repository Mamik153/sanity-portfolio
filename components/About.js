import { useState, useEffect } from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { sanityClient, urlFor } from '../sanity'
import { motion } from "framer-motion"

export default function About({ recentTechnologies, intro, displayPicture }){

  return (
    <div className="max-w-5xl min-h-screen mx-auto pt-40 px-5 sm:px-14">
        <motion.h2 
            initial={{
                x:100,
                opacity: 0,
                scale: 0.25
            }}
            whileInView={{
                x:0,
                opacity: 1,
                scale:1
            }}
            transition={{ type: "tween" }}
            viewport={{ once: false }}
            className="text-left  text-sky-400 font-bold text-3xl pb-10"
        >About Me.</motion.h2>
        <div className="flex flex-col-reverse lg:flex-row justify-between space-y-10 lg:space-x-10">
          <motion.div 
            className="text-white text-md sm:text-xl lg:text-base w-full lg:w-2/4 py-10 lg:py-0"
            initial={{
              y:-100,
              opacity: 0,
              scale: 0.5
            }}
            whileInView={{
              y:0,
              opacity: 1,
              scale:1
            }}
            viewport={{ once: false }}
            >
            {
              intro?.map(item => (
                <span key={item._key}>{item.children[0].text}<br /></span>
              ))
            }
            <br /><br/>
            Recent Technologies I am working with:
            <br/><br/>
            <div className="grid grid-cols-2">   
            {
                recentTechnologies?.map(item => {
                    return(
                        <span key={`${item._id}`} className="items-center flex text-md lg:text-sm font-medium text-sky-500">
                            <ChevronRightIcon className=' h-3 w-3' /> {item.title}
                        </span>
                    )
                })
            }                 
                    
                                 
            </div>
          </motion.div>          
          <motion.img 
            initial={{
              x:-100,
              opacity: 0,
              scale: 0.5
            }}
            whileInView={{
              x:0,
              opacity: 1,
              scale:1
            }}
            viewport={{ once: false }}
            loading='lazy'
            src={displayPicture} 
            alt="" 
            className="w-full sm:w-3/5 lg:w-2/5 h-auto rounded-3xl object-cover mx-auto" 
          />         
        </div>
        
    </div>
  )
}