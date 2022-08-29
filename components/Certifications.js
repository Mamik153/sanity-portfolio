import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'
import { useState, useEffect } from 'react';
import { sanityClient, urlFor } from '../sanity'

const Certifications = () => {
    const [certificates, setCertificates] = useState([])

    useEffect(() => {
        sanityClient.fetch(`*[_type == 'certificate']{
            _createdAt,
            _id,
            certificate_id,
            certificate_link,
            certificate_provider,
            image,
            issued,
            name
          }`).then(data => {
          
          setCertificates(data);
          //console.log("certificates", certificates);
        })
      }, [])

    return (
    <div className="max-w-5xl min-h-screen sm:min-h-full mx-auto pt-40 px-5 sm:px-14">
        <h2 className="text-left text-sky-400 font-bold text-3xl pb-10">Some of my Certifications.</h2>
        <div className="flex flex-col justify-between divide-y divide-dashed divide-slate-500 bg-slate-800 p-5 rounded-3xl"> 
            {
                certificates?.map(item => {
                    return(
                        <div key={item._id} className="flex items-start space-x-5 py-3">
                            <img src={urlFor(item.image).url()} className="w-16 object-contain aspect-square bg-white rounded-md p-1" loading='lazy' />
                            <div className='space-y-2'>
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
                                    <a target="_blank" className="" href={item.certificate_link}>
                                     <ArrowTopRightOnSquareIcon className='w-5 h-5 text-slate-500 hover:text-white' />
                                </a>
                                )}
                            
                               
                            </div>
                        </div>
                    )
                })
            }
            

            

        </div>
    </div>
  )
}

export default Certifications