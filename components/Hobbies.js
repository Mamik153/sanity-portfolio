import {useState, useEffect} from 'react'
import { sanityClient, urlFor } from "../sanity"
import { IconDeviceGamepad2, IconMusic, IconBeach, IconBarbell, IconDeviceTv, IconPalette } from '@tabler/icons'
import { motion } from "framer-motion"

const Hobbies = () => {
  return (
    <div className='max-w-5xl h-full mx-auto pt-14 sm:pt-40 px-5 sm:px-14'>   
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
        >
            Some of my Hobbies.
        </motion.h2>
        <div className="grid grid-cols-3 md:grid-cols-4  gap-4 justify-between bg-slate-800 p-5 rounded-3xl text-sky-400"> 
            <motion.div 
                initial={{
                    y:50,
                    opacity: 0,
                    scale: 0
                }}
                whileInView={{
                    y:0,
                    opacity: 1,
                    scale:1
                }}
                className='w-full'>
                <IconDeviceGamepad2 className='w-8 md:w-12 h-8 md:h-12 mx-auto' />
                <p className='text-white py-1 text-xs md:text-sm font-semibold text-center'>Gaming</p>
            </motion.div>
            <motion.div 
                initial={{
                    y:50,
                    opacity: 0,
                    scale: 0
                }}
                whileInView={{
                    y:0,
                    opacity: 1,
                    scale:1
                }}
                transition={{ delay: 0.15 }}
                className='w-full'>
                <IconMusic className='w-8 md:w-12 h-8 md:h-12 mx-auto' />
                <p className='text-white py-1 text-xs md:text-sm font-semibold text-center'>Music</p>
            </motion.div>
            <motion.div 
                initial={{
                    y:50,
                    opacity: 0,
                    scale: 0
                }}
                whileInView={{
                    y:0,
                    opacity: 1,
                    scale:1
                }}
                transition={{ delay: 0.20 }}
                className='w-full'>
                <IconBeach className='w-8 md:w-12 h-8 md:h-12 mx-auto' />
                <p className='text-white py-1 text-xs md:text-sm font-semibold text-center'>Travel</p>
            </motion.div>
            <motion.div 
                initial={{
                    y:50,
                    opacity: 0,
                    scale: 0
                }}
                whileInView={{
                    y:0,
                    opacity: 1,
                    scale:1
                }}
                transition={{ delay: 0.25 }}
                className='w-full'>
                <IconBarbell className='w-8 md:w-12 h-8 md:h-12 mx-auto' />
                <p className='text-white py-1 text-xs md:text-sm font-semibold text-center'>Gym</p>
            </motion.div>
            <motion.div 
                initial={{
                    y:50,
                    opacity: 0,
                    scale: 0
                }}
                whileInView={{
                    y:0,
                    opacity: 1,
                    scale:1
                }}
                transition={{ delay: 0.30 }}
                className='w-full'>
                <IconDeviceTv className='w-8 md:w-12 h-8 md:h-12 mx-auto' />
                <p className='text-white py-1 text-xs md:text-sm font-semibold text-center'>Anime</p>
            </motion.div>
            <motion.div 
                initial={{
                    y:50,
                    opacity: 0,
                    scale: 0
                }}
                whileInView={{
                    y:0,
                    opacity: 1,
                    scale:1
                }}
                transition={{ delay: 0.35 }}
                className='w-full'>
                <IconPalette className='w-8 md:w-12 h-8 md:h-12 mx-auto' />
                <p className='text-white py-1 text-xs md:text-sm font-semibold text-center'>Painting</p>
            </motion.div>
        </div>
    </div>
  )
}

export default Hobbies