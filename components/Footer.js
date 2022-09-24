import { useState, useEffect } from 'react';
import { sanityClient, urlFor } from '../sanity'
import { IconBrandGithub, IconBrandCodepen, IconBrandBehance, IconBrandLinkedin  } from '@tabler/icons'

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
    <div className='flex flex-col items-center justify-center py-12 bg-black px-10'>
        <div className='flex flex-col justify-center items-center'>
            <img src="Assets/Logo.png" className='w-20 object-contain' />
            <p className='text-white text-3xl font-bold portfolioName'>Mamik Das</p>
        </div>
        <div className='flex items-center space-x-5 py-10'>
            <a href='https://github.com/Mamik153' rel='noreferrer' target="_blank">
                <IconBrandGithub className='text-slate-200 hover:text-white w-8 h-8' />
            </a>

            <a href='https://codepen.io/Mamik153' rel='noreferrer' target="_blank">
                <IconBrandCodepen className='text-slate-200 hover:text-white w-8 h-8' />
            </a>

            <a href='https://www.behance.net/mamikdas153' rel='noreferrer' target="_blank">
                <IconBrandBehance className='text-slate-200 hover:text-white w-8 h-8' />
            </a>

            <a href='https://www.linkedin.com/in/mamik-das-6033a8139/' rel='noreferrer' target="_blank">
                <IconBrandLinkedin className='text-slate-200 hover:text-white w-8 h-8' />
            </a>
        
        </div>
    </div>
  )
}

export default Footer