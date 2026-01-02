import React from 'react'
import { motion } from 'motion/react'
import menuImage from '../assets/john-prefer-lfHAuclmbJM-unsplash.jpg';
import menuImage2 from '../assets/phil-hearing-Ee5FZp9MJlI-unsplash.jpg';
import menuImage3 from '../assets/louis-hansel-LIJujhJviMI-unsplash.jpg';
import menuImage4 from '../assets/michael-lee-UsyysdcEz3U-unsplash.jpg';
import menuImage5 from '../assets/top-view-table-full-delicious-food-composition.jpg';

const Menu = () => {
  return (
    <div className='w-full h-fit pt-3.5 pb-3.5 bg-black'>
      <div className="grid grid-cols-1 md:grid-cols-2">
        
       
        <div className="py-3 px-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 justify-items-center">
          <motion.img 
          initial={{ scale: 0, opacity: 0 }} 
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{
                delay: 0.1,
                scale: { type: "spring", stiffness: 100, damping: 15, mass: 1 },
                opacity: { duration: 0.3 }
            }}
          viewport={{ once: true, amount: 0.3 }}
          src={menuImage5} className='w-80 h-fit px-1.5 rounded-lg py-1.5' alt="" />
          <motion.img 
          initial={{ scale: 0, opacity: 0 }} 
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{
                delay: 0.25,
                scale: { type: "spring", stiffness: 100, damping: 15, mass: 1 },
                opacity: { duration: 0.3 }
            }}
          viewport={{ once: true, amount: 0.3 }}
          src={menuImage3} className='w-80 h-fit px-1.5 rounded-lg py-1.5' alt="" />
          <motion.img 
          initial={{ scale: 0, opacity: 0 }} 
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{
                delay: 0.4,
                scale: { type: "spring", stiffness: 100, damping: 15, mass: 1 },
                opacity: { duration: 0.3 }
            }}
          viewport={{ once: true, amount: 0.3 }}
          src={menuImage4} className='w-80 h-fit px-1.5 rounded-lg py-1.5' alt="" />
          <motion.img 
          initial={{ scale: 0, opacity: 0 }} 
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{
                delay: 0.55,
                scale: { type: "spring", stiffness: 100, damping: 15, mass: 1 },
                opacity: { duration: 0.3 }
            }}
          viewport={{ once: true, amount: 0.3 }}
          src={menuImage5} className='w-80 h-fit px-1.5 rounded-lg py-1.5' alt="" />
        </div>
        <div className='w-fit items-center '>
        <h1 className="text-5xl md:text-6xl text-amber-500 font-extrabold font-stretch-75%  py-2 ps-1.5">Menu</h1>
        <br />
        <ul className="text-amber-500 text-2xl text-start">
          <motion.li initial={{ opacity: 0, rotateZ: -10 }} whileInView={{ opacity: 1, rotateZ: 0 }} transition={{ type: "spring", stiffness: 60, damping: 10, delay: 0 }} viewport={{ once: true, amount: 0.3 }} className="py-2.5 scroll-py-1.5 font-light ">Club Sandwiches - GHC28.00</motion.li>
          <motion.li initial={{ opacity: 0, rotateZ: -10 }} whileInView={{ opacity: 1, rotateZ: 0 }} transition={{ type: "spring", stiffness: 60, damping: 10, delay: 0.1 }} viewport={{ once: true, amount: 0.3 }} className="py-2.5 scroll-py-1.5 font-light">Jollof Rice w/ Chicken - GHC35.00</motion.li>
          <motion.li initial={{ opacity: 0, rotateZ: -10 }} whileInView={{ opacity: 1, rotateZ: 0 }} transition={{ type: "spring", stiffness: 60, damping: 10, delay: 0.2 }} viewport={{ once: true, amount: 0.3 }} className="py-2.5 scroll-py-1.5 font-light">Fried Rice w/ fish or chicken - GHC15.00</motion.li>
          <motion.li initial={{ opacity: 0, rotateZ: -10 }} whileInView={{ opacity: 1, rotateZ: 0 }} transition={{ type: "spring", stiffness: 60, damping: 10, delay: 0.3 }} viewport={{ once: true, amount: 0.3 }} className="py-2.5 scroll-py-1.5 font-light">Club Sandwiches - GHC28.00</motion.li>
          <motion.li initial={{ opacity: 0, rotateZ: -10 }} whileInView={{ opacity: 1, rotateZ: 0 }} transition={{ type: "spring", stiffness: 60, damping: 10, delay: 0.4 }} viewport={{ once: true, amount: 0.3 }} className="py-2.5 scroll-py-1.5 font-light">Jollof Rice w/ Chicken - GHC35.00</motion.li>
          <motion.li initial={{ opacity: 0, rotateZ: -10 }} whileInView={{ opacity: 1, rotateZ: 0 }} transition={{ type: "spring", stiffness: 60, damping: 10, delay: 0.5 }} viewport={{ once: true, amount: 0.3 }} className="py-2.5 scroll-py-1.5 font-light">Fried Rice w/ fish or chicken - GHC15.00</motion.li>
          <motion.li initial={{ opacity: 0, rotateZ: -10 }} whileInView={{ opacity: 1, rotateZ: 0 }} transition={{ type: "spring", stiffness: 60, damping: 10, delay: 0.6 }} viewport={{ once: true, amount: 0.3 }} className="py-2.5 scroll-py-1.5 font-light">Club Sandwiches - GHC28.00</motion.li>
          <motion.li initial={{ opacity: 0, rotateZ: -10 }} whileInView={{ opacity: 1, rotateZ: 0 }} transition={{ type: "spring", stiffness: 60, damping: 10, delay: 0.7 }} viewport={{ once: true, amount: 0.3 }} className="py-2.5 scroll-py-1.5 font-light">Jollof Rice w/ Chicken - GHC35.00</motion.li>
          <motion.li initial={{ opacity: 0, rotateZ: -10 }} whileInView={{ opacity: 1, rotateZ: 0 }} transition={{ type: "spring", stiffness: 60, damping: 10, delay: 0.8 }} viewport={{ once: true, amount: 0.3 }} className="py-2.5 scroll-py-1.5 font-light">Fried Rice w/ fish or chicken - GHC15.00</motion.li>
        </ul>
      </div>
      </div>
    </div>
    
  )
}

export default Menu