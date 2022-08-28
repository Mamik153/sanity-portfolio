import { useState, useEffect } from 'react';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'
import { IconBrandGithub } from '@tabler/icons';
import { sanityClient, urlFor } from '../sanity'

const Projects = () => {
    const [projects, setProjects] = useState([])
    let sortedProjects;
    useEffect(() => {
        sanityClient.fetch(`*[_type == 'dev_project']{
            ...,
            type[0]->{
              type
            },
            technologies[]->{
             title
            }
          }`).then(data => {
            setProjects(data);
            
        })
    }, [])

    
    // sortedProjects = projects?.sort(function(x, y){
    //     return x._createdAt - y._createdAt;
    // })
    // console.log("sortedProjects", sortedProjects)
    return (
    <div className="max-w-5xl min-h-screen mx-auto pt-40 px-5">
        <h2 className="text-left  text-sky-400 font-bold text-3xl pb-10">Some Projects I built.</h2>
        <div className="flex flex-col space-y-20 py-5">

            {
                projects?.map((project, index) => {
                    if(index == 0 || index % 2== 0){
                        return(
                            <div key={project._id} className="flex flex-col lg:flex-row items-center lg:space-x-5"> 
                                    
                                {project.type.type == "Mobile App" ? (
                                    <div className="mockup-phone border-primary">
                                        <div className="camera"></div> 
                                        <div className="display">                                            
                                            <img src={urlFor(project.image).url()} className="pt-2 bg-white w-60 lg:w-72" />
                                        </div>
                                    </div>
                                ):(
                                    <div className="mockup-window bg-sky-400 w-full lg:w-1/2">
                                        <img src={urlFor(project.image).url()} loading="lazy" />
                                    </div>
                                )}
                                
                                <div className="flex-1 text-center lg:text-right pt-5 lg:pt-0">
                                    <p className="text-sky-400">Featured Project</p>
                                    <h3 className="text-gray-300 text-2xl font-bold">{project.title}</h3>
                                    <p className="py-5 text-md font-semibold text-emerald-300">{project.short_description}</p>
                                    <div className="flex items-center space-x-5 text-sm font-extrabold text-slate-500 justify-start lg:justify-end">
                                        {
                                            project.technologies.map(tech => (
                                                <p key={tech.title}>{tech.title}</p>
                                            ))
                                        }
                                    </div>
                                    <div className="flex items-center space-x-3 py-5  lg:justify-end">
                                        {
                                            project.repolink  && (
                                                <a href={project.repolink } target="_blank" className='text-gray-300 hover:text-white'>
                                                    <IconBrandGithub className='w-6 h-6' />
                                                </a>
                                            )
                                        }
                                        {
                                            project.livelink  && (
                                                <a href={project.livelink} target="_blank" className='text-gray-300 hover:text-white'>
                                                    <ArrowTopRightOnSquareIcon className='w-6 h-6' />
                                                </a>
                                            )
                                        }
                                        
                                    
                                    </div>
                                </div>
                                
                            </div>
                        )
                    }else{
                        return(
                            <div  key={project._id} className="flex flex-col-reverse lg:flex-row items-center lg:space-x-5">
                    
                                <div className="flex-1 text-center lg:text-left pt-5 lg:pt-0">
                                    <p className="text-sky-400">Featured Project</p>
                                    <h3 className="text-gray-300 text-2xl font-bold">{project.title}</h3>
                                    <p className="py-5 text-md font-semibold text-emerald-300">{project.short_description}</p>
                                    <div className="flex items-center space-x-5 text-sm font-extrabold text-slate-500 justify-start">
                                        {
                                            project.technologies.map(tech => (
                                                <p key={tech.title}>{tech.title}</p>
                                            ))
                                        }
                                    </div>
                                    <div className="flex items-center space-x-3 py-5">
                                        {
                                            project.repolink  && (
                                                <a href={project.repolink} target="_blank" className='text-gray-300 hover:text-white'>
                                                    <IconBrandGithub className='w-6 h-6' />
                                                </a>
                                            )
                                        }
                                        {
                                            project.livelink  && (
                                                <a href={project.livelink} target="_blank" className='text-gray-300 hover:text-white'>
                                                    <ArrowTopRightOnSquareIcon className='w-6 h-6' />
                                                </a>
                                            )
                                        }
                                        

                                    </div>
                                </div>

                                {project.type.type == "Mobile App" ? (
                                    <div className="mockup-phone border-primary">
                                        <div className="camera"></div> 
                                        <div className="display">                                            
                                            <img src={urlFor(project.image).url()} className="pt-2 bg-white w-60 lg:w-72" />
                                        </div>
                                    </div>
                                ):(
                                    <div className="mockup-window bg-sky-400 w-full lg:w-1/2">
                                        <img src={urlFor(project.image).url()} loading="lazy" />
                                    </div>
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