import React from 'react'
import { Navbar } from '../layouts/Navbar'
import { Hero } from '../layouts/Hero'

export const Home = () => {
  return (
    <div className='bg-background'>
        <Navbar />
        <Hero />
    </div>
  )
}
