import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const [color, setColor] = useState('transparent');
    
  return (
    <div className="navbar fixed left-0 z-50 justify-center">
        <div className="navbar-start w-full p-2 xl:w-11/12 xl:m-2 mx-auto rounded-xl"  style={{ backgroundColor: `rgba(25, 31, 78, 0.9)` }}>
            <img src="/Assets/Mamik.png" alt="MD" className="w-20 ml-2 p-2" />
            
            {/* <a className='ml-auto mr-3 text-white text-xs font-medium bg-slate-900 px-4 py-3 rounded-md' download={true} target="_blank" href='/Assets/CV.pdf'>Download CV</a> */}
        </div>
        
        
        
    </div>
  )
}

export default Navbar