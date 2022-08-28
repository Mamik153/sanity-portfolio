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


export default function Home() {
  //const router = useRouter()
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
        <About />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
        <Footer />
      </div>
      
    </div>
  )
}
