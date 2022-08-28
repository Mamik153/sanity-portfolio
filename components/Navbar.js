import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const [color, setColor] = useState('transparent');
    
  return (
    <div className="navbar fixed left-0 z-50 justify-center">
        <div className="navbar-start w-full p-2 xl:w-11/12 xl:m-2 mx-auto rounded-xl"  style={{ backgroundColor: `rgba(25, 31, 78, 0.9)` }}>
            <img src="/Assets/Mamik.png" alt="MD" className="w-20 ml-2 p-2" />
            {/* <div className="dropdown">
                <label tabIndex="0" className="btn btn-ghost btn-circle" >
                    <img src="/Assets/Mamik.png" alt="MD" className=" w-20 lg:w-24 ml-2" />
                </label>
                <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-2xl w-52">
                    <li><a>Homepage</a></li>
                    <li><a>Portfolio</a></li>
                    <li><a>About</a></li>
                </ul>
            </div> */}
        </div>
        {/* <div class="navbar-center">
            <a class="btn btn-ghost normal-case text-xl text-white">Mamik Das</a>
        </div> */}
        
    </div>
  )
}

export default Navbar