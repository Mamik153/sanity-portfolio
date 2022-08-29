import { useState, useEffect } from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { sanityClient, urlFor } from '../sanity'

const About = ({ about }) => {
    // setInterval(() => {
    //     console.log("first", posts);
    // }, 10000)
    //console.log("first", about);
    const [recentTechnologies, setRecentTechnologies] = useState([]);
    const [intro, setIntro] = useState('');
    const [displayPicture, setDisplayPicture] = useState('')
    const [loading, setLoading] = useState(false)
    useEffect(() => {
      sanityClient.fetch(`*[_type == 'about']{
        about[],
        contact[]->{
          icon,
          link,
          title
        },
        image,
        technology[]->{
          _id,
          title
        }
      }[0]`).then(data => {

        setIntro(data.about)
        setRecentTechnologies(data.technology)        
        setDisplayPicture(urlFor(data.image).url())
        setLoading(true)
      })
    }, [])
    
    // intro?.map(item => {
    //   console.log("OKAY", item)
    // })
  return (
    <div className="max-w-5xl min-h-screen mx-auto pt-40 px-5 sm:px-14">
        <h2 className="text-left text-sky-400 font-bold text-3xl pb-10">About Me.</h2>
        <div className="flex flex-col-reverse lg:flex-row justify-between space-y-10 lg:space-x-10">
          <div className="text-white text-sm sm:text-xl lg:text-base w-full lg:w-2/4 py-10 lg:py-0">
            {
              loading && intro?.map(item => (
                <span key={item._key}>{item.children[0].text}<br /></span>
              ))
            }
            <br /><br/>
            Recent Technologies I have worked on:
            <br/><br/>
            <div className="grid grid-cols-2">   
            {
                recentTechnologies?.map(item => {
                    return(
                        <span key={`${item._id}`} className="items-center flex text-md lg:text-sm font-medium text-sky-500">
                            <ChevronRightIcon className=' h-3 w-3' /> {item.title}
                        </span>
                    )
                })
            }                 
                    
                                 
            </div>
          </div>
          <img src={displayPicture} alt="" className="w-full lg:w-2/5 h-auto rounded-3xl object-cover" />
        </div>
        
    </div>
  )
}

export async function getStaticProps() {
    const query = `*[_type == 'about']{
      about[0],
      contact[]->{
        icon,
        link,
        title
      },
      image,
      technology[]->{
        title
      }
    }[0]`;

    const about = await sanityClient.fetch(query);
  
    return {
      props: {
        about
      },
      revalidate: 10,
    }
}

export default About