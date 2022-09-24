import { sanityClient, urlFor } from '../sanity'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'
import { motion } from "framer-motion"

const UXProjects = ({ projects }) => {

    let sortedprojects = projects?.sort((a, b) => -a._createdAt.localeCompare(b._createdAt));
    //console.log("sortedprojects", sortedprojects)
  return (
    <div className='max-w-5xl min-h-screen sm:min-h-full mx-auto pt-14 sm:pt-40 px-5 sm:px-14'>
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
        >UI/UX Projects.</motion.h2>
        <div className="flex flex-col py-5 md:grid md:grid-cols-3 md:gap-4 md:justify-between space-y-5 md:space-y-0">
        {
            sortedprojects?.map(project => {
                return(
                    <div key={project._id}>
                        <motion.img 
                            initial={{
                                y:100,
                                opacity: 0,
                                scale: 0.25
                            }}
                            whileInView={{
                                y:0,
                                opacity: 1,
                                scale:1
                            }}
                            viewport={{ once: false }}
                            src={urlFor(project.image).url()} 
                            className="bg-white w-full sm:w-60 lg:w-72 aspect-square object-cover rounded-3xl" />
                        <motion.div 
                            initial={{
                                x:-100,
                                opacity: 0,
                                scale: 0.25
                            }}
                            whileInView={{
                                x:0,
                                opacity: 1,
                                scale:1
                            }}
                            transition={{ delay: 0.15 }}
                            viewport={{ once: false }}
                            className='py-5 px-2'>
                            <h3 className="text-gray-300 text-2xl md: text-md font-bold">{project.title}</h3>
                            <p className="py-3 text-md font-semibold text-emerald-300">{project.short_description}</p>

                            <div className="flex items-center space-x-5 text-sm font-bold text-white justify-start pb-4">
                            {
                                project.technologies.map(tech => (
                                    <p key={tech.title} className="bg-sky-800 px-3 py-1 rounded-3xl">{tech.title}</p>
                                ))
                            }
                            </div>

                            <a href={project.livelink} target="_blank" rel="noreferrer" className='text-gray-300 hover:text-white'>
                            <ArrowTopRightOnSquareIcon className='w-6 h-6' />
                            </a>
                        </motion.div>    
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default UXProjects