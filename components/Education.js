import { useState, useEffect } from 'react';
import { sanityClient, urlFor } from "../sanity"
import { IconBook2 } from '@tabler/icons'
import { motion } from "framer-motion"


const Education = () => {

    const [education, setEducation] = useState([]); 

    useEffect(() => {
        sanityClient.fetch(`*[_type == 'education']{
            _id,
            name,
            course,
            course_start,
            course_complete,
            issuedBy
          }`).then(data => {
            setEducation(data);            
                
        })
      }, [])

      education?.sort((a, b) => b.course_complete - a.course_complete)
    
  return (
    <div className="max-w-5xl min-h-full mx-auto pt-24 md:pt-40 px-5 sm:px-14">
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
        >My Educational background.</motion.h2>
        <div className="flex flex-col  justify-between divide-y divide-dashed divide-slate-500 bg-slate-800 px-5 rounded-3xl"> 

        {
             education?.map(ed => (
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
                    key={ed._id}
                    className='w-full flex items-center space-x-3 py-5'>
                    <IconBook2 className='w-12 h-12 text-white' />
                    <div>
                        <h3 className='text-white py-1 text-sm font-bold text-left'>{ ed.course }</h3>                    
                        <p className='text-sky-300 text-xs md:text-sm font-semibold pb-1'>{ ed.name }</p>
                        <p className='text-xs font-semibold text-slate-400'>{ ed.issuedBy } &nbsp;&nbsp;({ ed.course_start !== null ? `${ed.course_start} - ${ed.course_complete}` : (ed.course_complete == null ? `Ongoing` : `${ed.course_complete}`) })</p>
                    </div>
                    
                </motion.div>
             ))
        }
            
        </div> 
    </div>
  )
}

export default Education