import { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import { ArrowDownIcon } from '@heroicons/react/24/solid'
import { sanityClient, urlFor } from '../sanity'

const Hero = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    sanityClient.fetch(`*[_type == 'about']{
      about[0],
      contact[]->{
        icon,
        link,
        title
      },
      image,
      technology[]->{
        _id,
        title
      }
    }[0]`).then(data => {
      setLoading(true)
    })
  }, [])
  return (
    <div className="hero min-h-screen relative px-5">       
        <div className="hero-content text-center text-neutral-content max-w-5xl">
            <div style={{ width: "calc(100vw - 60px)" }}>
                <p className="text-left mb-1 text-md font-light text-white">Hi, my name is</p>
                <h1 className='text-5xl font-bold text-left  mb-2'>Mamik Das</h1>
                <div className='text-5xl font-bold text-left text-sky-500'>
                  {loading && <Typewriter
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
                
                <button className="absolute bottom-8 mt-10 btn btn-square bg-white animate-bounce rounded-full">
                  <ArrowDownIcon className='h-6 w-6 text-sky-600' />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Hero