import { motion } from "framer-motion"
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = ({ theme }) => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <div className="max-w-5xl h-full mx-auto py-40 flex flex-col items-center justify-center px-5 sm:px-14" id="contact">
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
      className={`text-center ${theme == 'default' ? 'text-sky-400 font-bold':`text-slate-900`}   text-4xl pb-10`}>Get In Touch.</motion.h2>
      <motion.div 
        initial={{
          opacity: 0,
          scale: 0
        }}
        whileInView={{
            opacity: 1,
            scale:1
        }}
        className={`text-center ${theme == 'default' ? 'text-white text-sm font-medium ' : 'text-black'}`}>
          Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
      </motion.div>
        {/* <motion.a 
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
          className={`mt-4 uppercase font-medium text-xs ${theme == 'default' ? 'px-5 py-3 bg-sky-700 hover:bg-sky-800 active:bg-sky-900 text-white rounded-xl' : 'text-black rounded-3xl shadow-sm shadow-emerald-200 border border-solid border-sky-300 px-10 py-3'}`}
        >Say Hello</motion.a> */}
      <form 
        className="w-full pt-16 flex flex-col gap-5" 
        ref={form} 
        onSubmit={sendEmail}>
        <div className="md:flex md:items-center md:gap-5">
          <motion.div 
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
            className="form-control w-full">
            <label className="label">
              <span className={`label-text font-medium ${theme == 'default' ? 'text-white text-sm font-medium ' : 'text-black'}`}>What is your name?</span>
            </label>
            <input type="text" name="user_name" placeholder="Type your name here" className="input input-bordered w-full" />
          </motion.div>

          <motion.div 
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
            className="form-control w-full">
            <label className="label">
              <span className={`label-text font-medium ${theme == 'default' ? 'text-white text-sm font-medium ' : 'text-black'}`}>What is your email id?</span>
            </label>
            <input type="text" name="user_email" placeholder="Type your email here" className="input input-bordered w-full" />
          </motion.div>
        </div>
        

        <motion.div 
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
          className="form-control">
          <label className="label">
            <span className={`label-text font-medium ${theme == 'default' ? 'text-white text-sm font-medium ' : 'text-black'}`}>Your message</span>
          </label>
          <textarea name="message" className="textarea textarea-bordered h-24" placeholder="Type your message or query here"></textarea>
        </motion.div>
        <input type="submit" className="text-white w-max rounded-md px-5 py-2 bg-blue-500" value="Send" />
      </form>
    </div>
  )
}

export default Contact