import React from 'react'

const Contact = () => {
  return (
    <div className="max-w-5xl min-h-screen mx-auto pt-40 flex flex-col items-center justify-center px-5">
        <h2 className="text-center text-sky-400 font-bold text-3xl pb-10">Get In Touch.</h2>
        <div className='text-center text-white text-sm font-medium'>
            I am not currently looking for opportunities but a hello never hurt anyone 😀. Send a mail to discuss topics or ask doubts.
        </div>
        <a href="mailto:mamikdas153@gmail.com" rel="noopener noreferrer" target="_blank" className='px-5 py-3 mt-4 bg-sky-700 hover:bg-sky-800 active:bg-sky-900 text-white rounded-xl'>Say Hello</a>
    </div>
  )
}

export default Contact