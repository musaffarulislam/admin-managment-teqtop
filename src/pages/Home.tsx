import React from 'react'
import { Navbar } from '../layouts/Navbar'
import { Hero } from '../layouts/Hero'

export const Home = () => {
  return (
    <div className='h-screen bg-background'>
        <Navbar />
        <Hero />
    </div>
  )
}
