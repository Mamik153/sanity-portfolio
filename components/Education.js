import { useState, useEffect } from 'react';
import { sanityClient, urlFor } from "../sanity"
import { IconBook2, IconCaretRight } from '@tabler/icons'
import { motion } from "framer-motion"


const Education = ({ theme }) => {

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
            className={`text-left ${theme == 'default' ? 'text-sky-400 font-bold':`text-slate-900`}   text-4xl pb-10 flex items-start gap-1`}
        >
          {/* <IconCaretRight className='w-10 mt-2' style={{ color: '#1EFFFF' }} />  */} My Educational background.</motion.h2>
        <div className={`flex flex-col  justify-between  px-5 rounded-3xl ${theme == 'default' ? 'bg-slate-800 divide-slate-500 divide-y divide-dashed ' : 'gap-2'}`}> 

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
                    className={`flex items-start space-x-5 py-3 ${theme == 'default' ? '' : 'border border-solid border-slate-200 px-2 rounded-2xl shadow-md shadow-emerald-200'}`}>
                    <IconBook2 className={`w-12 h-12 ${ theme == 'default' ? 'text-white' : 'text-slate-900' }`} />
                    <div>
                        <h3 className={`${ theme == 'default' ? 'text-white text-sm font-bold py-1' : 'text-slate-900 text-lg font-medium pt-1' }   text-left`}>{ ed.course }</h3>                    
                        <p className={`${theme == 'default' ? 'text-sky-300  font-semibold' : 'text-black'}  text-xs md:text-sm pb-1`}>{ ed.name }</p>
                        <p className={`text-xs  ${theme == 'default' ? 'font-semibold text-slate-400' : 'text-black'}`}>{ ed.issuedBy } &nbsp;&nbsp;({ ed.course_start !== null ? `${ed.course_start} - ${ed.course_complete}` : (ed.course_complete == null ? `Ongoing` : `${ed.course_complete}`) })</p>
                    </div>
                    
                </motion.div>
             ))
        }
            
        </div> 
    </div>
  )
}

export default Education