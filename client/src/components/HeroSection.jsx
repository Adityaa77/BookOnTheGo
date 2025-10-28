import React from 'react'
import { assets } from '../assets/assets'
import bgImage from '../assets/chainsaw-man-reze-arc-movie.jpg'
import { CalendarIcon, ClockIcon } from 'lucide-react'

const HeroSection = () => {
  return (
    <div
      className='flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 bg-cover bg-center h-screen'
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <img src={assets.mappalogo} alt="Mappa logo" className='max-h-11 lg:h-11 mt-20' />
      <h1 className='text-5xl md:text-[70px] md:leading-[1.2] font-semibold max-w-[1100px]'>
        Chainsaw Man<br />Reze Arc Movie
      </h1>
      <div className='flex items-center gap-4 text-gray-300'>
        <span>Anime | Horror | Adventure</span>
        <div className='flex items-center gap-1'>
          <CalendarIcon className='w-4.5 h-4.5' /> 2025
        </div>
        <div className='flex items-center gap-1'>
          <ClockIcon className='w-4.5 h-4.5' /> 1h 40m
        </div>
      </div>
    </div>
  )
}

export default HeroSection
