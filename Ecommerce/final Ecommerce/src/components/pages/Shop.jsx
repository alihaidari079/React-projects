import React from 'react'
import Hero from '../components/Hero/Hero'
import Pubular from '../components/Pupular/Pubular'
import Offers from '../components/Offers/Offers'
import NewCollections from '../components/NewCollections/NewCollections'
import NewsLetter from '../components/NewLetter/NewsLetter'
import Footer from '../components/Footer/Footer'

const Shop = () => {
  return (
    <div>
      <Hero />
      <Pubular/>
      <Offers  />
      <NewCollections />
      <NewsLetter />
      
    </div>
  )
}

export default Shop

