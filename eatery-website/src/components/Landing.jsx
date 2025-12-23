import React, { useEffect, useState } from 'react'
import chefVideo1 from '../assets/Professional cooker adding grated cheese into noodles - Free Stock Video Footage.mp4'
import chefVideo2 from '../assets/Professional cooker preparing noodles with sauce - Free Stock Video Footage.mp4'

const videos = [chefVideo1, chefVideo2]

const Landing = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % videos.length)
    }, 8000) // 8 seconds per slide

    return () => clearInterval(interval)
  }, [])

  return (
    <div className='relative w-full h-[70vh] overflow-hidden'>
      {/* Video carousel */}
      {videos.map((videoSrc, index) => (
        <video
          key={index}
          src={videoSrc}
          autoPlay
          loop
          muted
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* Dark overlay for readability */}
      <div className='absolute inset-0 bg-black/40' />

      {/* Text overlay */}
      <div className='absolute inset-0 flex flex-col items-center justify-center text-center px-4'>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg'>
          Welcome to Eatery
        </h1>
        <p className='text-lg md:text-xl lg:text-2xl text-gray-100 max-w-2xl drop-shadow-md'>
          Experience delicious, chef-crafted meals made with the freshest ingredients, served with warmth and care.
        </p>
      </div>
    </div>
  )
}

export default Landing