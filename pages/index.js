import { useState, useEffect } from 'react';

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

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


export default function Home() {

  const [displayPicture, setDisplayPicture] = useState('')
  const [intro, setIntro] = useState([])
  const [technologies, setTechnologies] = useState([]);  
  const [featuredProjects, setfeaturedProjects] = useState([]); 
  const [designProjects, setDesignProjects] = useState([]); 
  const [certifications, setCertifications ] = useState([]); 
  const [activeID, setActiveID] = useState('');
  

  useEffect(() => {
    sanityClient.fetch(`*[_type == 'about']{
      name,
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
      setIntro(data.about)
      setDisplayPicture(urlFor(data.image).url())
      setTechnologies(data.technology)
    })
  }, [])
  
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
      setfeaturedProjects(data);
    })
  }, [])

  useEffect(() => {
    sanityClient.fetch(`*[_type == 'ux_project']{
      ...,
      type[0]->{
        type
      },
      technologies[]->{
       title
      }
    }`).then(data => {
      setDesignProjects(data);
    })
  }, [])


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
      setCertifications(data);
    })
  }, [])

  return (
    <div>
      <Head>
        <title>Mamik Das</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/Assets/Logo.png" />
      </Head>

      <div className=''>
        <Navbar />
        <Hero />
        <About intro={intro} displayPicture={displayPicture} recentTechnologies={technologies} />
        <Skills />
        <Experience />        
        <DevProjects projects={featuredProjects} />
        <UXProjects projects={designProjects} />        
        <Certifications certificates={certifications} />
        <Contact />
        <Footer />
      </div>
      
    </div>
  )
}