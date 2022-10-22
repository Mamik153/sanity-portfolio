import { useState, useEffect } from 'react';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'
import { IconBrandGithub } from '@tabler/icons';
import { sanityClient, urlFor } from '../sanity'
import moment from 'moment';
import { motion } from "framer-motion"

const Projects = ({ theme, projects }) => {
    
    // projects?.map(item => {

    //     console.log("moment()", moment(item._createdAt).format('h:mm:ss'))
    // })
    let sortedprojects = projects?.sort((a, b) => a._createdAt.localeCompare(b._createdAt));

    return (
    <div className="max-w-5xl min-h-screen mx-auto pt-20 sm:pt-40 px-5 sm:px-14" id="projects">
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
        >Some Projects I built.</motion.h2>
        <div className="flex flex-col space-y-20 py-5">

            {
                sortedprojects?.map((project, index) => {
                    if(index == 0 || index % 2== 0){
                        return(
                            <div key={project._id} className="flex flex-col lg:flex-row items-center lg:space-x-5"> 
                                    
                                {project.type.type == "Mobile App" ? (
                                    <motion.div 
                                        initial={{
                                            x:-100,
                                            y: 100,
                                            opacity: 0,
                                            scale: 0.25
                                        }}
                                        whileInView={{
                                            x:0,
                                            y: 0,
                                            opacity: 1,
                                            scale:1
                                        }}                                       
                                        className="mockup-phone border-primary shadow-md">
                                        <div className="camera"></div> 
                                        <div className="display">                                            
                                            <img loading='lazy' src={urlFor(project.image).url()} className="pt-2 bg-white w-60 lg:w-72" />
                                        </div>
                                    </motion.div>
                                ):(
                                    <motion.div 
                                        initial={{
                                            x:-100,
                                            y: 100,
                                            opacity: 0,
                                            scale: 0.25
                                        }}
                                        whileInView={{
                                            x:0,
                                            y: 0,
                                            opacity: 1,
                                            scale:1
                                        }}  
                                        className="mockup-window bg-sky-400 w-full lg:w-1/2 shadow-md">
                                        <img loading='lazy' className='w-full' src={urlFor(project.image).url()} />
                                    </motion.div>
                                )}
                                
                                <motion.div 
                                    initial={{
                                        opacity: 0,
                                        scale: 0.15
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        scale:1
                                    }} 
                                    transition={{ delay: 0.15 }}
                                    className="flex-1 text-center lg:text-right pt-5 lg:pt-0 w-full">
                                    <p className={`${theme == 'default' ? 'text-sky-400' : 'text-black'}`}>Featured Project</p>
                                    <h3 className={`${theme == 'default' ? 'text-gray-300' : 'text-slate-900'}  text-2xl font-bold`}>{project.title}</h3>
                                    <p className={`py-5 text-md  ${theme == 'default' ? 'text-emerald-300 font-semibold' : 'text-black'}`}>{project.short_description}</p>
                                    <div className="flex items-center gap-2 flex-wrap text-sm  justify-start lg:justify-end">
                                        {
                                            project.technologies.map(tech => (
                                                <p key={tech.title} className={`px-3 py-1 rounded-3xl whitespace-nowrap ${theme == 'default' ? 'bg-sky-800 font-bold text-white' : 'border border-solid border-sky-200 shadow-sm shadow-sky-200 text-black font-medium'}`}>{tech.title}</p>
                                            ))
                                        }
                                    </div>
                                    <div className="flex items-center space-x-3 py-5  lg:justify-end">
                                        {
                                            project.repolink  && (
                                                <a href={project.repolink } target="_blank" rel="noreferrer" className={`${theme == 'default' ? 'text-gray-300 hover:text-white ' : 'text-black hover:text-slate-700'}`}>
                                                    <IconBrandGithub className='w-6 h-6' />
                                                </a>
                                            )
                                        }
                                        {
                                            project.livelink  && (
                                                <a href={project.livelink} target="_blank" rel="noreferrer" className={`${theme == 'default' ? 'text-gray-300 hover:text-white ' : 'text-black hover:text-slate-700'}`}>
                                                    <ArrowTopRightOnSquareIcon className='w-6 h-6' />
                                                </a>
                                            )
                                        }
                                        
                                    
                                    </div>
                                </motion.div>
                                
                            </div>
                        )
                    }else{
                        return(
                            <div  key={project._id} className="flex flex-col-reverse lg:flex-row items-center lg:space-x-5">
                    
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        scale: 0.15
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        scale:1
                                    }} 
                                    transition={{ delay: 0.15 }}
                                    className="flex-1 text-center lg:text-left pt-5 lg:pt-0 w-full">
                                    <p className={`${theme == 'default' ? 'text-sky-400' : 'text-black'}`}>Featured Project</p>
                                    <h3 className={`${theme == 'default' ? 'text-gray-300' : 'text-slate-900'}  text-2xl font-bold`}>{project.title}</h3>
                                    <p className={`py-5 text-md  ${theme == 'default' ? 'text-emerald-300 font-semibold' : 'text-black'}`}>{project.short_description}</p>
                                    <div className="flex items-center gap-2 flex-wrap text-sm justify-start">
                                        {
                                            project.technologies.map(tech => (
                                                <p key={tech.title} className={`px-3 py-1 rounded-3xl whitespace-nowrap ${theme == 'default' ? 'bg-sky-800 font-bold text-white' : 'border border-solid border-sky-200 shadow-sm shadow-sky-200 text-black font-medium'}`}>{tech.title}</p>
                                            ))
                                        }
                                    </div>
                                    <div className="flex items-center space-x-3 py-5">
                                        {
                                            project.repolink  && (
                                                <a href={project.repolink} target="_blank" rel="noreferrer" className={`${theme == 'default' ? 'text-gray-300 hover:text-white ' : 'text-black hover:text-slate-700'}`}>
                                                    <IconBrandGithub className='w-6 h-6' />
                                                </a>
                                            )
                                        }
                                        {
                                            project.livelink  && (
                                                <a href={project.livelink} target="_blank" rel="noreferrer" className={`${theme == 'default' ? 'text-gray-300 hover:text-white ' : 'text-black hover:text-slate-700'}`}>
                                                    <ArrowTopRightOnSquareIcon className='w-6 h-6' />
                                                </a>
                                            )
                                        }
                                        

                                    </div>
                                </motion.div>

                                {project.type.type == "Mobile App" ? (
                                    <motion.div 
                                        initial={{
                                            x:100,
                                            y: -100,
                                            opacity: 0,
                                            scale: 0.25
                                        }}
                                        whileInView={{
                                            x:0,
                                            y: 0,
                                            opacity: 1,
                                            scale:1
                                        }}  
                                        className="mockup-phone border-primary shadow-md">
                                        <div className="camera"></div> 
                                        <div className="display">                                            
                                            <img loading='lazy' src={urlFor(project.image).url()} className="pt-2 bg-white w-60 lg:w-72" />
                                        </div>
                                    </motion.div>
                                ):(
                                    <motion.div 
                                        initial={{
                                            x:100,
                                            y: -100,
                                            opacity: 0,
                                            scale: 0.25
                                        }}
                                        whileInView={{
                                            x:0,
                                            y: 0,
                                            opacity: 1,
                                            scale:1
                                        }} 
                                        className="mockup-window bg-sky-400 w-full lg:w-1/2 shadow-md">
                                        <img loading='lazy' className='w-full' src={urlFor(project.image).url()} />
                                    </motion.div>
                                )}

                                
                            </div>
                        )
                    }
                })
            }
            

            

            
            
        </div>
    </div>
  )
}

export default Projects