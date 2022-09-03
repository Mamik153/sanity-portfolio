import { useState } from 'react';

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { useRouter } from 'next/router'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Certifications from '../components/Certifications'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { sanityClient, urlFor } from "../sanity"


export default function Home({ about, certificates, experience, projects }) {
  let recentTechnologies = about.technology;
  let intro = about.about;
  let displayPicture = urlFor(about.image).url();
  let experiences = experience;
  let featuredProjects = projects;
  let certifications = certificates;

  //console.log("recentTechnologies, intro, displayPicture : ", recentTechnologies, intro, displayPicture)
  return (
    <div>
      <Head>
        <title>Mamik Das</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=''>
        <Navbar />
        <Hero />
        <About intro={intro} displayPicture={displayPicture} recentTechnologies={recentTechnologies} />
        <Experience experience={experiences} />
        <Projects projects={featuredProjects} />
        <Certifications certificates={certifications} />
        <Contact />
        <Footer />
      </div>
      
    </div>
  )
}


export async function getStaticProps(context) {
  const aboutQuery = `*[_type == 'about']{
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
  }[0]`;

  const certificationQuery = `*[_type == 'certificate']{
    _createdAt,
    _id,
    certificate_id,
    certificate_link,
    certificate_provider,
    image,
    issued,
    name
  }`

  const experienceQuery = `*[_type == 'experience']{
    _id,
    name,
    position,
    from,
    to,
    responsibilities[]
  }`

  const projectsQuery = `*[_type == 'dev_project']{
    ...,
    type[0]->{
      type
    },
    technologies[]->{
     title
    }
  }`

  const about = await sanityClient.fetch(aboutQuery);
  const certificates = await sanityClient.fetch(certificationQuery);
  const experience = await sanityClient.fetch(experienceQuery);
  const projects = await sanityClient.fetch(projectsQuery);
  return {
    props: {
      about,
      certificates,
      experience,
      projects
    },
    revalidate: 10,
  }
}