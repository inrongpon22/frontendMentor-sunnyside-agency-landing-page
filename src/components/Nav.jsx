import React from 'react'
import { useState } from 'react'
import Logo from '../assets/img/images/logo.svg'
import HamMenu from '../assets/img/images/icon-hamburger.svg'

function Nav() {
  const [clicked, setClicked] = useState(false);
  const toggleHam = () => {
    setClicked(!clicked);
  }

  return (
    <main className='flex md:flex-row lg:flex-row justify-between px-[4rem] py-[3rem] text-white'>
        <div className="logo flex items-center">
            <a href="#">
                <img src={Logo} alt="" className='' />
            </a>
        </div>
        <div className={clicked ? 'showHamMenu' : 'hideHamMenu'}>
          <ul className="absolute -right-10 sm:-right-[14rem] md:static flex flex-col items-center bg-white md:bg-transparent text-[#818498] md:text-white font-semibold py-5 px-5 md:flex-row">
              <li className='mx-[40px] my-2'><a href="#">About</a></li>
              <li className='mx-[40px] my-2'><a href="#">Services</a></li>
              <li className='mx-[40px] my-2'><a href="#">Projects</a></li>
              <li className='mx-[40px] my-2 font-fraunces uppercase bg-[#FAD400] text-black md:bg-white rounded-full px-5 py-3 md:hover:text-white md:hover:bg-blue-300'><a href="#">Contact</a></li>
          </ul>
          <div className='z-10 w-0 h-0 absolute -top-3 -right-[2.8rem] sm:-right-[14.3rem]
              border-l-[20px] border-l-transparent
              border-t-[30px] border-t-white
              border-r-[20px] border-r-transparent
              rotate-90
              md:hidden
              '>
          </div>
        </div>
        <div className='md:hidden'>
          <img src={HamMenu} onClick={()=>setClicked((prev)=>(!prev))} alt="" />
        </div>
    </main>
  )
}

export default Nav