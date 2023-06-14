import { useState, useEffect } from 'react';

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { SwatchIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/router'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import DevProjects from '../components/DevProjects'
import Certifications from '../components/Certifications'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { sanityClient, urlFor } from "../sanity"
import UXProjects from '../components/UXProjects';
import Skills from '../components/Skills';
import Hobbies from '../components/Hobbies';
import Education from '../components/Education';


export default function Home() {

  const [loading, setLoading] = useState(true)
  const [theme, setTheme] = useState('meta')
  const [displayPicture, setDisplayPicture] = useState('')
  const [intro, setIntro] = useState([])
  const [logo, setLogo] = useState('')
  const [technologies, setTechnologies] = useState([]);  
  const [featuredProjects, setfeaturedProjects] = useState([]); 
  const [designProjects, setDesignProjects] = useState([]); 
  const [certifications, setCertifications ] = useState([]); 
  const [activeID, setActiveID] = useState('');
  

  useEffect(() => {
    let isMounted = true;
  
    sanityClient.fetch(`*[_type == 'about']{
      name,
      logo,
      phonenumber,
      email,
      shortAddress,
      longAddress,
      image,
      about[],
      contact[]->{
        icon,
        link,
        title
      },
      technology[]->{
        _id,
        title
      }
    }[0]`).then(data => {
      if (isMounted) {
        setIntro(data.about);
        setDisplayPicture(urlFor(data.image).url());
        setLogo(urlFor(data.logo).url());
        setTechnologies(data.technology);
      }
    });
  
    return () => {
      isMounted = false;
    };
  }, []);
  
  useEffect(() => {
    let isMounted = true;
  
    sanityClient.fetch(`*[_type == 'dev_project']{
      ...,
      type[0]->{
        type
      },
      technologies[]->{
        title
      }
    }`).then(data => {
      if (isMounted) {
        setfeaturedProjects(data);
      }
    });
  
    return () => {
      isMounted = false;
    };
  }, []);
  
  useEffect(() => {
    let isMounted = true;
  
    sanityClient.fetch(`*[_type == 'ux_project']{
      ...,
      type[0]->{
        type
      },
      technologies[]->{
        title
      }
    }`).then(data => {
      if (isMounted) {
        setDesignProjects(data);
      }
    });
  
    return () => {
      isMounted = false;
    };
  }, []);
  
  useEffect(() => {
    let isMounted = true;
  
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
      if (isMounted) {
        setCertifications(data);
      }
    });
  
    return () => {
      isMounted = false;
    };
  }, []);
  

  setTimeout(() => {
    setLoading(false)
  }, 2000)

  const loadingLogo = () => {
    setLoading(true)
  }

  const handleThemeChange = (theme) => {
    console.log("CHANGE TO", theme)    
    //location.reload()
    setTheme(theme);
  }

  
  return (
    <div className={`${theme}Theme overflow-x-hidden`}>
      <Head>
        <title>Mamik Das</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href={logo} />
      </Head>
      {
        loading == false ? <div className=''>
        {/* NAVBAR START */}
        {
          theme == 'default' ? (
            <div className="navbar fixed left-0 z-50 justify-center">
              <div className="navbar-start w-full p-2 xl:w-11/12 xl:m-2 mx-auto rounded-xl"  style={{ backgroundColor: `rgba(25, 31, 78, 0.9)` }}>
              <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost border border-solid border-sky-200 p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current text-white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow text-white rounded-box w-52 bg-blue-900">
                    <li><a href='#hero'>Home</a></li>
                      <li><a href='#about'>About</a></li>
                      <li><a href="#skills">Skills</a></li>
                      <li><a href="#experience">Experience</a></li>
                      <li><a href="#education">Education</a></li>
                      <li><a href="#projects">Projects</a></li>
                      <li><a href="#certifications">Certifications</a></li>
                      <li><a href="#hobbies">Hobbies</a></li>
                      <li><a href='#contact'>Contact</a></li>
                    </ul>
                  </div>
                  <img src={logo} alt="MD" className="w-12 ml-2 px-2 bg-blue-200 rounded-full" />
                  
                  {/* <a className='ml-auto mr-3 text-white text-xs font-medium bg-slate-900 px-4 py-3 rounded-md' download={true} target="_blank" href='/Assets/CV.pdf'>Download CV</a> */}
    
                  {/* <a className='ml-auto mr-3 text-white text-sm font-semibold  rounded-md px-5'>
                    <DocumentIcon className='w-6 h-6 text-white mx-auto'  />
                  </a> */}
                  <div className="dropdown dropdown-end ml-auto">
                    <label tabIndex={0} className="btn bg-blue-900 hover:bg-slate-900 m-1 shadow-sm"><SwatchIcon className='w-6 h-6' /></label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow-md rounded-box w-52 bg-slate-900">
                      
                      <li><a className='text-xs text-white' onClick={() => handleThemeChange('meta')}>Meta</a></li>
                      <li className='rounded-2xl'><a className='rounded-2xl text-xs bg-sky-400 font-medium'>Navy</a></li>
                    </ul>
                  </div>
              </div>     
                
            </div>
          ):(
            <div className="navbar w-full fixed left-0 top-0 z-50 justify-center bg-white border-b border-solid border-sky-200 py-0">
              <div className='max-w-5xl w-full mx-auto sm:px-14'>
                <div className="navbar-start w-full flex items-center">               
                  <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost border border-solid border-sky-200 p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a href='#hero'>Home</a></li>
                      <li><a href='#about'>About</a></li>
                      <li><a href="#skills">Skills</a></li>
                      <li><a href="#experience">Experience</a></li>
                      <li><a href="#education">Education</a></li>
                      <li><a href="#projects">Projects</a></li>
                      <li><a href="#certifications">Certifications</a></li>
                      <li><a href="#hobbies">Hobbies</a></li>
                      <li><a href='#contact'>Contact</a></li>
                    </ul>
                  </div>
                  <img src={logo} alt="MD" className="w-10 ml-2" />
                  <div className="dropdown dropdown-end ml-auto">
                    <label tabIndex={0} className="btn bg-white hover:bg-slate-100 border-blue-300 m-1 shadow-sm"><SwatchIcon className='text-blue-600 w-6 h-6' /></label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow-md rounded-box w-52 bg-white border border-solid border-slate-300">
                      <li><a className='rounded-2xl text-xs bg-sky-400 font-medium' >Meta</a></li>
                      <li className='rounded-2xl'><a className='text-xs text-black' onClick={() => handleThemeChange('default')}>Navy</a></li>
                     
                    </ul>
                  </div>
                </div> 
              </div>
            </div>
          )
        }
       
        {/* NAVBAR END */}
        <Hero theme={theme} />
        <About theme={theme} intro={intro} displayPicture={displayPicture} recentTechnologies={technologies} />
        <Skills theme={theme} />
        <Experience theme={theme} />    
        <Education theme={theme} />    
        <DevProjects theme={theme} projects={featuredProjects} />
        <UXProjects theme={theme} projects={designProjects} />        
        <Certifications theme={theme} certificates={certifications} />
        <Hobbies theme={theme} />
        <Contact theme={theme} />
        <Footer logo={logo} theme={theme} />
      </div> :

      <div className={`w-screen h-screen`} style={ theme == 'default' ? {backgroundColor: '#0b192f'} : {backgroundColor: '#FFF'}  }>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center loading'>
          <img src={logo} className='w-28 object-contain' />
          <p className={`text-3xl font-semibold -mt-8  font-quicksand ${theme == 'default' ? 'text-white' : 'text-black'}`}>Mamik Das</p>
        </div>
      </div>
      }

      
      
    </div>
  )
}