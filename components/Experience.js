import { useState, useEffect } from 'react';
import { PlayIcon } from '@heroicons/react/24/solid'
import { sanityClient, urlFor } from '../sanity'
import { motion } from "framer-motion"

const Experience = () => {
   
    const [experience, setExperience ] = useState([]); 
    const [selectedTab, setSelectedTab ] = useState('')
    const handleClick = (id) => {
        setSelectedTab(id)
    }
    useEffect(() => {
        sanityClient.fetch(`*[_type == 'experience']{
          _id,
          name,
          position,
          from,
          to,
          responsibilities[]
        }`).then(data => {
            setExperience(data)
            setSelectedTab(data[0]._id)
        })
      }, [])
    
    return (
        <>
        {
            
            experience !== undefined && (
                <div className="max-w-5xl h-full mx-auto pt-40 lg:px-5">
                    <motion.h2 
                        initial={{
                            x:100,
                            opacity: 0,
                            scale: 0.25,
                            
                        }}
                        whileInView={{
                            x:0,
                            opacity: 1,
                            scale:1,
                            animationDelay: 1000
                        }}
                        transition={{ type: "tween" }}
                        viewport={{ once: false }}
                        className="text-left  text-sky-400 font-bold text-3xl pb-10 px-5"
                    >Where I have worked.</motion.h2>
                    <div className="flex flex-col lg:flex-row vertical-tabs mt-5">
                        <div className="vertical-tabs--title flex flex-nowrap overflow-x-scroll pb-5 sm:px-14 lg:pb-0 lg:overflow-x-hidden lg:flex-col px-5 lg:px-0">
                            {
                                experience?.map(header => (
                                    <a key={header._id}  id={header._id} 
                                        className={`vertical-tabs--label p-3 border-b-2 lg:border-b-0 lg:border-l-2 border-solid  text-md font-semibold cursor-pointer whitespace-pre ${selectedTab == header._id ? "border-white text-white bg-slate-800 lg:rounded-r-md" : "border-none lg:border-gray-500 text-gray-500 hover:bg-slate-900"}`}
                                        onClick={() => handleClick(header._id)}    
                                    >{header.position}</a>
                                ))
                            }
                            
                        </div>
                        {
                            experience?.map(data=> (
                                <motion.div 
                                    key={data._id} data-content-for="exp" 
                                    className={`vertical-tabs--content mx-5 sm:px-14 py-1 flex-1 space-y-5 ${selectedTab == data._id ? "" : "hidden"}`}
                                    initial={{
                                        y:50,
                                        opacity: 0,
                                        scale: 0.25,
                                        
                                    }}
                                    whileInView={{
                                        y:0,
                                        opacity: 1,
                                        scale:1
                                    }}
                                    viewport={{ once: false }}
                                    >
                                    <div>
                                        <h2 className="text-sky-300 text-xl font-bold">{data.name}</h2>
                                        <p className="text-sky-600 py-1 text-md font-medium">{data.from} - {data.to ? data.to : "present"}</p>
                                        <ul className='py-6 space-y-5'>
                                        {
                                            data.responsibilities.map(res => (
                                                <li key={res._key} className='flex items-start space-x-2 text-slate-400 text-sm'>
                                                    &#x25B8; {res.children[0].text}
                                                </li>
                                            ))
                                        }
                                        </ul>
                                    </div>            
                                </motion.div>
                            ))
                        }
                        

                        
                    </div>
                </div>
            )
        }
        </>
    )
}

export default Experience