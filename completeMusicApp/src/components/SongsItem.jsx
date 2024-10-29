import React, { useContext } from 'react'
import { playerContext } from '../context/PlayerContext'

const SongsItem = ({name,image,desc,id}) => {


  const {playWithId} = useContext(playerContext);

  return (
    <div onClick={()=>playWithId(id)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
      <img className='roudned' src={image} alt="" />
      <p className="font-bold my-5 text-2xl">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  )
}

export default SongsItem
