import { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import { ArrowDownIcon } from '@heroicons/react/24/solid'
import { sanityClient, urlFor } from '../sanity'
import { motion } from "framer-motion"

const Hero = ({ theme }) => {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight+20,
      behavior: 'smooth',
    })
  }
  return (
    <div className="hero min-h-screen relative px-5">   
    {
      theme == 'default'? (
        <div className="hero-content text-center text-neutral-content max-w-5xl">
            <div style={{ width: "calc(100vw - 60px)" }}>
                <p className="text-left mb-1 text-md font-light text-white">Hi, my name is</p>
                <h1 className='text-5xl font-bold text-left  mb-2'>Mamik Das</h1>
                <div className='text-5xl font-bold text-left text-sky-500'>
                  {<Typewriter
                    options={{
                      loop: true,
                    }}
                    onInit={(typewriter) => {                    
                      typewriter.typeString('I am a Mobile Dev.')
                        .pauseFor(2500)
                        .deleteChars(11)
                        .pauseFor(1000)
                        .typeString("Front-End Dev.")
                        .pauseFor(2500)
                        .deleteChars(14)
                        .pauseFor(1000)
                        .typeString("Full-Stack Dev.")
                        .pauseFor(2500)
                        .deleteChars(16)
                        .pauseFor(0)
                        .typeString("n")
                        .pauseFor(1000)
                        .typeString(" UI/UX Designer.")
                        .pauseFor(2500)
                        .start();
                        
                    }}
                  />}
                </div>
                
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute bottom-12 mt-10 btn btn-square bg-white animate-bounce rounded-full" 
                  style={{ left: '46%' }} 
                  onClick={handleScroll}
                >
                  <ArrowDownIcon className='h-6 w-6 text-sky-600' />
                </motion.button>
            </div>
        </div>
      ):(
        <div className="hero-content text-center text-neutral-content max-w-5xl">
            <div style={{ width: "calc(100vw - 60px)" }}>
                <p className="text-left mb-1 text-md font-light text-gray-700">Hi, my name is</p>
                <h1 className='text-7xl font-semibold text-left text-black mb-2'>Mamik Das</h1>
                <div className='text-2xl font-semibold text-left text-black'>
                  {<Typewriter
                    options={{
                      loop: true,
                    }}
                    onInit={(typewriter) => {                    
                      typewriter.typeString('I am a Mobile Dev.')
                        .pauseFor(2500)
                        .deleteChars(11)
                        .pauseFor(1000)
                        .typeString("Front-End Dev.")
                        .pauseFor(2500)
                        .deleteChars(14)
                        .pauseFor(1000)
                        .typeString("Full-Stack Dev.")
                        .pauseFor(2500)
                        .deleteChars(16)
                        .pauseFor(0)
                        .typeString("n")
                        .pauseFor(1000)
                        .typeString(" UI/UX Designer.")
                        .pauseFor(2500)
                        .start();
                        
                    }}
                  />}
                </div>
                
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute bottom-12 mt-10 btn btn-ghost btn-square bg-white animate-bounce rounded-full shadow-md shadow-blue-500" 
                  style={{ left: '46%' }} 
                  onClick={handleScroll}
                >
                  <ArrowDownIcon className='h-6 w-6 text-sky-900' />
                </motion.button>
            </div>
        </div>
      )
    }    
        
    </div>
  )
}

export default Hero