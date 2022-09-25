import { useState, useEffect } from 'react';
import { sanityClient, urlFor } from '../sanity'
import { IconBrandGithub, IconBrandCodepen, IconBrandBehance, IconBrandLinkedin  } from '@tabler/icons'
import { motion } from "framer-motion"

const Footer = () => {
    const [socials, setSocials] = useState([])
    useEffect(() => {
        sanityClient.fetch(`*[_type == 'about']{
            contact[]->{
              title,
              link
            }
          }[0]`).then(data => {
            setSocials(data.contact)
        })
    }, [])

    //console.log("SOCIAL", socials)
  return (
    <div className='flex flex-col items-center justify-center py-12 bg-black px-10 rounded-t-3xl'>
        <div className='flex flex-col justify-center items-center'>
            <motion.img 
                initial={{
                    opacity: 0,
                    scale: .15
                }}
                whileInView={{
                    opacity: 1,
                    scale:1
                }}
                transition={{ type: 'just' }}
                viewport={{ once: true }}
                src="Assets/Logo.png" 
                className='w-20 object-contain' />
            <p className='text-white text-3xl font-bold portfolioName'>Mamik Das</p>
        </div>
        <div className='flex items-center space-x-5 py-10'>
            <motion.a 
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
                href='https://github.com/Mamik153' 
                rel='noreferrer' 
                target="_blank"
            >
                <IconBrandGithub className='text-slate-200 hover:text-white w-8 h-8' />
            </motion.a>

            <motion.a 
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
                transition={{ delay: 0.15 }}
                href='https://codepen.io/Mamik153' 
                rel='noreferrer' 
                target="_blank"
            >
                <IconBrandCodepen className='text-slate-200 hover:text-white w-8 h-8' />
            </motion.a>

            <motion.a 
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
                transition={{ delay: 0.20 }}
                href='https://www.behance.net/mamikdas153' 
                rel='noreferrer' 
                target="_blank"
            >
                <IconBrandBehance className='text-slate-200 hover:text-white w-8 h-8' />
            </motion.a>

            <motion.a 
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
                transition={{ delay: 0.25 }}
                href='https://www.linkedin.com/in/mamik-das-6033a8139/' 
                rel='noreferrer' 
                target="_blank"
            >
                <IconBrandLinkedin className='text-slate-200 hover:text-white w-8 h-8' />
            </motion.a>
        
        </div>
    </div>
  )
}

export default Footer