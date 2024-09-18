import React from 'react'
import SwiperCarousel from './SwiperCarousel'

const Hero = () => {
  return (
    <div className='flex flex-col'>
        <h1 className='text-2xl text-center mt-10'>What we're cooking right now</h1>
        <SwiperCarousel />
    </div>
  )
}

export default Hero