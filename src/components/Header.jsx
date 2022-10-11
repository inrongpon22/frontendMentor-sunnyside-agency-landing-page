import React from 'react'
import Nav from './Nav'
import ArrowDown from '../assets/img/images/icon-arrow-down.svg'

function Header() {
  return (
    <div className='h-[47rem] bg-header bg-cover bg-bottom text-center'>
        <Nav />
        <h1 className='text-7xl uppercase text-white mt-5'>We are creatives</h1>
        <div className='flex justify-center mt-20'>
            <img src={ArrowDown} alt="" className='self-center' />
        </div>
    </div>
  )
}

export default Header