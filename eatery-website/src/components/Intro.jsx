import React from 'react'
import { motion } from 'motion/react'
import Meal1 from '../assets/john-prefer-lfHAuclmbJM-unsplash.jpg'
import Meal2 from '../assets/mick-brown-fbZMzJVBkJg-unsplash.jpg'
import bgImage1 from '../assets/24783.jpg'

const Intro = () => {
  return (
    <div className='w-full h-auto bg-cover py-10 relative' style={{ backgroundImage: `url(${bgImage1})` }}>
        <div className='absolute inset-0 bg-black/50'></div>
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-x-2.5 gap-y-6 px-3.5 pt-5.5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4 text-start justify-items-center md:justify-items-start">
                <motion.img
                initial={{ opacity: 0, translateY: -100 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
                className='w-full max-w-sm rounded h-fit shadow-lg will-change-transform' src={Meal1} alt="" />
                <motion.img 
                initial={{ opacity: 0, translateY: 100 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                className='w-full max-w-sm rounded h-fit shadow-lg md:mt-8 will-change-transform' src={Meal2} alt="" />

            </div>
            <div className="w-auto px-3.5 py-5 text-center md:text-start">
                <motion.h1 
                initial={{ opacity: 0, translateY: 100 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 15, duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
                className="leading animate-fade-in duration-75 transition-opacity font-light text-4xl md:text-5xl lg:text-6xl text-start font-monospace text-amber-500">Our Story</motion.h1>
                <br />
                <motion.p
                initial={{ opacity: 0, translateY: 100 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 15, duration: 0.8, delay: 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="h2 text-lg md:text-xl lg:text-2xl text-start font-bolder text-amber-500 pt-4.5">We believe the best conversations and the greatest memories are born around food.
                    <br /> The camraderie,
                     the sense of community and the joy that fills the room is why we do what we do.</motion.p>
                <motion.p 
                initial={{ opacity: 0, translateY: 100 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 15, duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                className="h2 text-lg md:text-xl lg:text-2xl text-start font-bolder text-amber-500 pt-4.5">We believe the best conversations and the greatest memories are born around food.
                    <br /> The camraderie,
                     the sense of community and the joy that fills the room is why we do what we do.</motion.p>
                     <br />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 5 py-3 md:py-8">
                    <ul className="text-center md:text-start text-amber-500 font-bold list-none">
                        <li className="py-1 flex items-start gap-2">
                            <svg className="w-5 h-5 mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Good cuisine starts with good ingredients.</span>
                        </li>
                        <li className="py-1 flex items-start gap-2">
                            <svg className="w-5 h-5 mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>We use the best ingredients to make the best food.</span>
                        </li>
     
                    </ul>
                    <ul className="text-center md:text-start text-amber-500 font-bold list-none">
                        <li className="py-1 flex items-start gap-2">
                            <svg className="w-5 h-5 mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Good cuisine starts with good ingredients.</span>
                        </li>
                        <li className="py-1 flex items-start gap-2">
                            <svg className="w-5 h-5 mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>We use the best ingredients to make the best food.</span>
                        </li>
                    </ul>     
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Intro