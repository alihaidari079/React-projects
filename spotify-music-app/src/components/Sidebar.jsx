import React from 'react'
import {assets} from '../assets/assets'
const Sidebar = () => {
  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">    
         <div className='flex items-center gap-3 pl-8 cursor-pointer'>
        <img className='w-6' src={assets.home_icon} alt="" />
        <p className='font-bold'>Home</p>
      </div>
      <div className='flex items-center gap-3 pl-8 cursor-pointer'>
        <img className='w-6' src={assets.search_icon} alt="" />
        <p className='font-bold'>Search</p>
      </div>
      </div>
      <div className="h-[85%] bg-[#121212] rounded" >
        <div className='flex items-center justify-between p-4'>
          <div className="flex items-center gap-3">
            <img src={assets.stack_icon} alt="" />
            <p className='font-semibold'>Your Library</p>
          </div>
          <div className="flex items-center gap-3">
           <img className='w-5 ' src={assets.arrow_icon} alt="arrow-icon" />
           <img className='w-5' src={assets.plus_icon} alt="plus-icon" />
          </div>
        </div>
        <div className=" bg-[#242424] p-4 m-2 rounded flex flex-col font-semibold items-start justify-start gap-1 pl-4">
            <h1>Create your first playlist</h1>
            <p className='font-light'>it&apos;s easy we&apos;ll help you</p>
            <button className='py-1.5 px-4 mt-2 text-[15px] bg-white rounded-full text-black capitalize'>create playlist</button>
        </div>
        <div className=" bg-[#242424] p-4 m-2 rounded flex flex-col font-semibold items-start justify-start gap-1 pl-4">
            <h1>let&apos;s findsome podcasts to follow</h1>
            <p className='font-light'>we&apos;ll keep you updated on new eposides</p>
            <button className='py-1.5 px-4 mt-2 text-[15px] bg-white rounded-full text-black capitalize'>browse podcasts</button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
