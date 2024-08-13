import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <>
    <div className='flex justify-between items-center w-full font-semibold'>
      <div className="flex items-center gap-2">
        <img className='w-7 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt="" />
        <img className='w-7 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt="" />
      </div>
      <div className="flex items-center gap-4">
        <p className="bg-white text-black py-1 px-6 text-[15px] rounded-2xl hidden md:block capitalize cursor-pointer">explore premium</p>
        <p className="bg-black text-white py-1 px-3 text-[15px] rounded-2xl  capitalize cursor-pointer">install app</p>
        <p className='bg-purple-500 rounded-full w-7 h-7 flex items-center justify-center text-black '>M</p>
      </div>
    </div>
    <div className="flex items-center gap-2 mt-4">
      <p className="bg-white rounded-2xl py-1 px-4  cursor-pointer text-black">All</p>
      <p className="bg-black rounded-2xl py-1 px-4 cursor-pointer">Music</p>
      <p className="bg-black rounded-2xl py-1 px-4  cursor-pointer">Podcasts</p>
    </div>
    </>
  )
}

export default Navbar
