import React from 'react'
import Navbar from './Navbar'
import { albumsData, songsData } from '../assets/assets'
import Albumitem from './Albumitem'
import SongsItem from './SongsItem'

const DisplayHome = () => {
  return (
    <>
     <Navbar />
     <div className="mb-4">
      <p className="text-2xl font-bold my-5 capitalize">featured Charts</p>
      <div className="overflow-auto flex">
      {albumsData.map((item,index)=> <Albumitem key={index} name={item.name} image={item.image} desc={item.desc} id={item.id} />)}
      </div>
      </div> 
      <div className="mb-4">
      <p className="text-2xl font-bold my-5 capitalize">Today's biggest hits</p>
      <div className="overflow-auto flex">
      {songsData.map((item,index)=> (<SongsItem key={index} name={item.name} image={item.image} desc={item.desc} id={item.id}/>))}
      </div>
      </div> 
    </>
  )
}

export default DisplayHome
