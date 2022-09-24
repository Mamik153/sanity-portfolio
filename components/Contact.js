import { motion } from "framer-motion"

const Contact = () => {
  return (
    <div className="max-w-5xl h-full mx-auto py-40 flex flex-col items-center justify-center px-5 sm:px-14">
        <motion.h2 
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
          className="text-center text-sky-400 font-bold text-3xl pb-10">Get In Touch.</motion.h2>
        <motion.div 
          initial={{
            opacity: 0,
            scale: 0
          }}
          whileInView={{
              opacity: 1,
              scale:1
          }}
          className='text-center text-white text-sm font-medium'>
            I am not currently looking for opportunities but a hello never hurt anyone 😀. Send a mail to discuss topics or ask doubts.
        </motion.div>
        <motion.a 
          initial={{
            y:100,
            opacity: 0,
            scale: 2
          }}
          whileInView={{
              y:0,
              opacity: 1,
              scale:1
          }}
          href="mailto:mamikdas153@gmail.com" 
          rel="noopener noreferrer" 
          target="_blank" 
          className='px-5 py-3 mt-4 bg-sky-700 hover:bg-sky-800 active:bg-sky-900 text-white rounded-xl'
        >Say Hello</motion.a>
    </div>
  )
}

export default Contact