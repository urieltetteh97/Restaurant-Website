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
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }}
          transition={{ type: "tween", duration: 0.6, delay: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          src={menuImage5} className='w-80 h-fit px-1.5 rounded-lg py-1.5' alt="" />
          <motion.img 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }}
          transition={{ type: "tween", duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
          src={menuImage3} className='w-80 h-fit px-1.5 rounded-lg py-1.5' alt="" />
          <motion.img 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }}
          transition={{ type: "tween", duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          src={menuImage4} className='w-80 h-fit px-1.5 rounded-lg py-1.5' alt="" />
          <motion.img 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }}
          transition={{ type: "tween", duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
          src={menuImage5} className='w-80 h-fit px-1.5 rounded-lg py-1.5' alt="" />
        </div>
        <div className='w-fit items-center '>
        <h1 className="text-xl md:text-5xl text-amber-500 font-light font-stretch-75%  py-2 ps-1.5">Popular Menu</h1>
        <br />
        <h1 className="leading text-amber-500 text-7xl font-bold">Starters</h1>
        <ul className="text-amber-500 text-xl text-start">
          <motion.li initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ type: "tween", duration: 0.4, delay: 0 }} viewport={{ once: true, amount: 0.3 }} className="py-2.5 scroll-py-1.5 font-light ">Club Sandwiches - GHC28.00</motion.li>
          <motion.li initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ type: "tween", duration: 0.4, delay: 0.08 }} viewport={{ once: true, amount: 0.3 }} className="py-2.5 scroll-py-1.5 font-light">Jollof Rice w/ Chicken - GHC35.00</motion.li>
          <motion.li initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ type: "tween", duration: 0.4, delay: 0.16 }} viewport={{ once: true, amount: 0.3 }} className="py-2.5 scroll-py-1.5 font-light">Fried Rice w/ fish or chicken - GHC15.00</motion.li>
          <motion.li initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ type: "tween", duration: 0.4, delay: 0.24 }} viewport={{ once: true, amount: 0.3 }} className="py-2.5 scroll-py-1.5 font-light">Club Sandwiches - GHC28.00</motion.li>
          <motion.li initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ type: "tween", duration: 0.4, delay: 0.32 }} viewport={{ once: true, amount: 0.3 }} className="py-2.5 scroll-py-1.5 font-light">Jollof Rice w/ Chicken - GHC35.00</motion.li>
          <motion.li initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ type: "tween", duration: 0.4, delay: 0.40 }} viewport={{ once: true, amount: 0.3 }} className="py-2.5 scroll-py-1.5 font-light">Fried Rice w/ fish or chicken - GHC15.00</motion.li>
          <motion.li initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ type: "tween", duration: 0.4, delay: 0.48 }} viewport={{ once: true, amount: 0.3 }} className="py-2.5 scroll-py-1.5 font-light">Club Sandwiches - GHC28.00 </motion.li>
          <motion.li initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ type: "tween", duration: 0.4, delay: 0.56 }} viewport={{ once: true, amount: 0.3 }} className="py-2.5 scroll-py-1.5 font-light">Jollof Rice w/ Chicken - GHC35.00</motion.li>
          <motion.li initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ type: "tween", duration: 0.4, delay: 0.64 }} viewport={{ once: true, amount: 0.3 }} className="py-2.5 scroll-py-1.5 font-light">Fried Rice w/ fish or chicken - GHC15.00</motion.li>
        </ul>
        <br />
        <motion.button
        initial={{ opacity: 0, x: 50 }}
        whileInView={{opacity:1}}
        transition={{type: "decay" , duration: 0.5, delay: 0}}
        viewport={{ once: true, amount: 0.3 }}
        className="lg rounded py-2 px-5 bg-linear-to-r from-amber-500 to-yellow-300 hover:from-yellow-300 t0-amber-500 transition-colors duration-100 cursor-pointer">
          <span className="text-black text-lg font-stretch-95% font-sans font-bold">See More</span>
        </motion.button>
      </div>
      </div>
    </div>
    
  )
}

export default Menu