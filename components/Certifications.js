import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'
import { urlFor } from '../sanity'
import { motion } from "framer-motion"

const Certifications = ({ certificates, theme }) => {

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
            className={`text-left ${theme == 'default' ? 'text-sky-400 font-bold':`text-slate-900`}   text-4xl pb-10`}
        >Some of my Certifications.</motion.h2>
        <div className={`flex flex-col  justify-between ${theme == 'default' ? 'bg-slate-800 divide-slate-500 divide-y divide-dashed px-5 rounded-3xl' : 'gap-2'}`}> 
            {
                certificates?.map(item => {
                    return(
                        <div key={item._id} className={`flex items-start space-x-5 py-3 ${theme == 'default' ? '' : 'border border-solid border-slate-200 px-2 rounded-2xl shadow-md shadow-emerald-200'}`}>
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
                                className={`w-16 object-contain aspect-square bg-white rounded-md p-1 ${theme == 'default' ? '' : 'border border-solid border-sky-300 shadow-md shadow-sky-200'}`} />
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
                                    <h4 className={`text=xl font-bold  ${theme == 'default' ? 'text-white' : 'text-black'}`}>{item.name}</h4>
                                    <p className={`text-sm  ${theme == 'default' ? 'font-semibold text-blue-500' : 'font-slate-900'}`}>{item.certificate_provider}</p>
                                </div>
                                <div>
                                    <p className={`text-xs  ${theme == 'default' ? 'text-slate-400 font-medium' : 'text-black'}`}>Issued {item.issued}. No expiration date</p>
                                    <p className={`text-xs  ${theme == 'default' ? 'text-slate-400 font-medium' : 'text-black'}`}>Credential ID - {item.certificate_id}</p>
                                </div>                 
                                <div></div>
                                {item.certificate_link !== "" && (
                                    <a target="_blank" rel="noreferrer" className={`${theme == 'default' ? 'text-gray-300 hover:text-white ' : 'text-black hover:text-slate-700'}`} href={item.certificate_link}>
                                     <ArrowTopRightOnSquareIcon className='w-5 h-5' />
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