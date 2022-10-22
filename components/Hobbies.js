import {useState, useEffect} from 'react'
import { sanityClient, urlFor } from "../sanity"
import { IconDeviceGamepad2, IconMusic, IconBeach, IconBarbell, IconDeviceTv, IconPalette } from '@tabler/icons'
import { motion } from "framer-motion"

const Hobbies = ({ theme }) => {
  return (
    <div className='max-w-5xl h-full mx-auto pt-24 sm:pt-40 px-5 sm:px-14' id="hobbies">   
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
            className={`text-left ${theme == 'default' ? 'text-sky-400 font-bold':`text-slate-900`}   text-4xl pb-10`}
        >
            Some of my Hobbies.
        </motion.h2>
        <div className={`grid grid-cols-3 md:grid-cols-4  gap-4 justify-between text-sky-400 ${theme == 'default' ? 'bg-slate-800 p-5 rounded-3xl' : ''}`}> 
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
                className={`${theme == 'default' ? 'w-full ' : 'border border-solid border-sky-300 shadow-md shadow-emerald-200 rounded-xl w-24 mx-auto py-3'}`}>
                <IconDeviceGamepad2 className='w-8 md:w-12 h-8 md:h-12 mx-auto' />
                <p className={`py-1 text-xs md:text-sm  text-center ${theme == 'default' ? 'text-white font-semibold' : 'text-black'}`}>Gaming</p>
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
                className={`${theme == 'default' ? 'w-full ' : 'border border-solid border-sky-300 shadow-md shadow-emerald-200 rounded-xl w-24 mx-auto py-3'}`}>
                <IconMusic className='w-8 md:w-12 h-8 md:h-12 mx-auto' />
                <p className={`py-1 text-xs md:text-sm  text-center ${theme == 'default' ? 'text-white font-semibold' : 'text-black'}`}>Music</p>
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
                className={`${theme == 'default' ? 'w-full ' : 'border border-solid border-sky-300 shadow-md shadow-emerald-200 rounded-xl w-24 mx-auto py-3'}`}>
                <IconBeach className='w-8 md:w-12 h-8 md:h-12 mx-auto' />
                <p className={`py-1 text-xs md:text-sm  text-center ${theme == 'default' ? 'text-white font-semibold' : 'text-black'}`}>Travelling</p>
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
                className={`${theme == 'default' ? 'w-full ' : 'border border-solid border-sky-300 shadow-md shadow-emerald-200 rounded-xl w-24 mx-auto py-3'}`}>
                <IconBarbell className='w-8 md:w-12 h-8 md:h-12 mx-auto' />
                <p className={`py-1 text-xs md:text-sm  text-center ${theme == 'default' ? 'text-white font-semibold' : 'text-black'}`}>Gym</p>
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
                className={`${theme == 'default' ? 'w-full ' : 'border border-solid border-sky-300 shadow-md shadow-emerald-200 rounded-xl w-24 mx-auto py-3'}`}>
                <IconDeviceTv className='w-8 md:w-12 h-8 md:h-12 mx-auto' />
                <p className={`py-1 text-xs md:text-sm  text-center ${theme == 'default' ? 'text-white font-semibold' : 'text-black'}`}>Anime</p>
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
                className={`${theme == 'default' ? 'w-full ' : 'border border-solid border-sky-300 shadow-md shadow-emerald-200 rounded-xl w-24 mx-auto p-3'}`}>
                <IconPalette className='w-8 md:w-12 h-8 md:h-12 mx-auto' />
                <p className={`py-1 text-xs md:text-sm  text-center ${theme == 'default' ? 'text-white font-semibold' : 'text-black'}`}>Painting</p>
            </motion.div>
        </div>
    </div>
  )
}

export default Hobbies