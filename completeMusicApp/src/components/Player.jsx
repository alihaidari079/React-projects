import React, { useContext } from 'react'
import {assets } from '../assets/assets'
import { playerContext } from '../context/PlayerContext'
const Player = () => {
  const {seekBar, seekBg, playStatus, play,pause, track,time, previous,next} = useContext(playerContext);
  return (
    <div className='h-[10%] flex items-center justify-between bg-black text-white px-4'>
      <div className="hidden lg:flex items-center gap-4">
        <img className='w-12' src={track.image} alt="" />
        <div>
          <p>{track.name}</p>
          <p>{track.desc.slice(0,12)}</p>
        </div>
      </div>
      <div className="flex items-center flex-col gap-1 m-auto">
        <div className="flex gap-4">
          <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="" />
          <img onClick={previous} className='w-4 cursor-pointer' src={assets.prev_icon} alt="" />
          {playStatus 
          ? <img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} alt="" />
        : <img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} alt="" />}

          <img onClick={next} className='w-4 cursor-pointer' src={assets.next_icon} alt="" />
          <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="" />
        </div>
        <div className="flex items-center  gap-5">
          <p>{time.currentTime.minute}:{time.currentTime.second}</p>
          <div ref={seekBg} className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
            <hr ref={seekBar} className="h-1 border-none w-0 bg-green-800 rounded-full" />
          </div>
          <p>{time.totalTime.minute}:{time.totalTime.second}</p>
        </div>
      </div>
        
          <div className=" gap-2 hidden lg:flex items-center opacity-75">
            <img className='w-4' src={assets.plays_icon} alt="" />
            <img className='w-4' src={assets.mic_icon} alt="" />
            <img className='w-4' src={assets.queue_icon} alt="" />
            <img className='w-4' src={assets.speaker_icon} alt="" />
            <img className='w-4' src={assets.volume_icon} alt="" />
            <div className="w-20 bg-slate-50 h-1 rounded"></div>
            <img className='w-4' src={assets.mini_player_icon} alt="" />
            <img className='w-4' src={assets.zoom_icon} alt="" />
          </div>
       
      
    </div>
  )
}

export default Player
