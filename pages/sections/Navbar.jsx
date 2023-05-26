
import React from 'react'
import { FaChevronDown } from "react-icons/fa"
import LogoAnimation from '../animation/LogoAnimated'

export default function Navbar() {
    return (
        <>
        <nav className='flex items-center justify-between px-2 xl:px-0 max-w-7xl mx-auto'>
            <a href="/"><LogoAnimation /></a>
            <div className='relative'>
            <button className='m-1 px-3 py-2 rounded-xl flex items-center justify-center border border-gray-50 bg-gray-100 hover:bg-gray-200 hover:border-gray-100 active:border-gray-300 relative'>Menu <FaChevronDown className='h-4 ml-2'/> </button>
            </div>
        </nav>
      </>
    )
}