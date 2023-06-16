import { sanityClient, urlFor } from '../sanity'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'
import { motion } from "framer-motion"

const UXProjects = ({ projects, theme }) => {

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
            className={`text-left ${theme == 'default' ? 'text-sky-400 font-bold':`text-slate-900`}   text-4xl pb-10 flex items-start gap-1`}
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
                            className="bg-white w-full sm:w-60 lg:w-72 aspect-square object-cover rounded-3xl shadow-md" />
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
                            <h3 className={`${theme == 'default' ? 'text-gray-300' : 'text-slate-900'}  text-2xl font-bold`}>{project.title}</h3>
                            <p className={`py-5 text-md  ${theme == 'default' ? ' font-semibold text-emerald-300' : 'text-black'}`}>{project.short_description}</p>

                            <div className="flex items-center space-x-5 text-sm font-bold text-white justify-start pb-4">
                            {
                                project.technologies.map(tech => (
                                    <p key={tech.title} className={`text-xs px-3 py-1 rounded-3xl whitespace-nowrap ${theme == 'default' ? 'bg-sky-800 font-bold text-white' : 'border border-solid border-sky-200 shadow-sm shadow-sky-200 bg-emerald-100 text-emerald-700 font-medium'}`}>{tech.title}</p>
                                ))
                            }
                            </div>

                            <a href={project.livelink} target="_blank" rel="noreferrer" className={`${theme == 'default' ? 'text-gray-300 hover:text-white ' : 'text-black hover:text-slate-700'}`}>
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