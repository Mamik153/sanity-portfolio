import {useState, useEffect} from 'react'
import { sanityClient, urlFor } from "../sanity"

const Skills = () => {
    
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        sanityClient.fetch(`*[_type == 'skills']{
            skills[]->{
             ...
            }
          }[0].skills`).then(data => {
            setSkills(data);            
        })
    }, [])
  return ( 
    <div className='max-w-5xl h-full mx-auto pt-14 sm:pt-40 px-5 sm:px-14'>
        <h2 className="text-left  text-sky-400 font-bold text-3xl pb-10">My Skills.</h2>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
            {
                
                skills?.map(item => (
                    <img loading='lazy' key={item._id} src={urlFor(item.logo).url()} className='rounded-full' />
                ))
                    
                
            }
            
        </div>
    </div>
  )
}

export default Skills