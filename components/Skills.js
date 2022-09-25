import {useState, useEffect} from 'react'
import { sanityClient, urlFor } from "../sanity"
import { motion } from "framer-motion"

const Skills = () => {
    
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        sanityClient.fetch(`*[_type == 'skills']{
            technology[]->{
             ...
            }
          }[0].technology`).then(data => {
            setSkills(data);    
        })
    }, [])
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
            My Skillset.</motion.h2>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
            {
                
                skills?.sort().map((item, index) => (
                    <motion.div
                        initial={{
                            y:-100,
                            opacity: 0,
                            scale: 0.25
                        }}
                        whileInView={{
                            y:0,
                            opacity: 1,
                            scale:1
                        }}
                        key={item._id}
                    >
                        <img viewport={{ once: false }}
                            loading='lazy' 
                            key={item._id} 
                            src={urlFor(item.logo).url()} 
                            className='rounded-full' />
                            <p className='text-sky-200 text-sm text-center font-bold mt-2'>{item.title}</p>
                    </motion.div>
                    
                ))
                    
                
            }
            
        </div>
    </div>
  )
}

export default Skills