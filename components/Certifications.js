import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'
import { urlFor } from '../sanity'
import { motion } from "framer-motion"

const Certifications = ({ certificates }) => {

    return (
    <div className="max-w-5xl min-h-screen sm:min-h-full mx-auto pt-40 px-5 sm:px-14">
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
        >Some of my Certifications.</motion.h2>
        <div className="flex flex-col justify-between divide-y divide-dashed divide-slate-500 bg-slate-800 p-5 rounded-3xl"> 
            {
                certificates?.map(item => {
                    return(
                        <div key={item._id} className="flex items-start space-x-5 py-3">
                            <motion.img
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
                                loading='lazy' 
                                src={urlFor(item.image).url()} 
                                className="w-16 object-contain aspect-square bg-white rounded-md p-1" />
                            <motion.div 
                                initial={{                                    
                                    opacity: 0,
                                    scale: 0.25
                                }}
                                whileInView={{
                                    opacity: 1,
                                    scale:1
                                }}
                                transition={{ delay: 0.15 }}
                                className='space-y-2'>
                                <div>
                                    <h4 className='text=xl font-bold text-white'>{item.name}</h4>
                                    <p className='text-sm font-semibold text-blue-500'>{item.certificate_provider}</p>
                                </div>
                                <div>
                                    <p className='text-xs text-slate-400 font-medium'>Issued {item.issued}. No expiration date</p>
                                    <p className='text-xs text-slate-400 font-medium'>Credential ID - {item.certificate_id}</p>
                                </div>                 
                                <div></div>
                                {item.certificate_link !== "" && (
                                    <a target="_blank" rel="noreferrer" className="" href={item.certificate_link}>
                                     <ArrowTopRightOnSquareIcon className='w-5 h-5 text-slate-500 hover:text-white' />
                                </a>
                                )}
                            
                               
                            </motion.div>
                        </div>
                    )
                })
            }
            

            

        </div>
    </div>
  )
}

export default Certifications