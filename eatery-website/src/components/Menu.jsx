import React from 'react'
import { motion } from 'motion/react'
import menuImage from '../assets/john-prefer-lfHAuclmbJM-unsplash.jpg';
import menuImage2 from '../assets/phil-hearing-Ee5FZp9MJlI-unsplash.jpg';
import menuImage3 from '../assets/louis-hansel-LIJujhJviMI-unsplash.jpg';
import menuImage4 from '../assets/mick-brown-fbZMzJVBkJg-unsplash.jpg';
import menuImage5 from '../assets/top-view-table-full-delicious-food-composition.jpg';

const Menu = () => {
  return (
    <div className='w-full h-fit pt-3.5 pb-3.5 bg-black'>
      <div className="grid grid-cols-2">
        <div className="grid grid-cols-1 w-60 gap-x-0.5 gap-y-0.5">
            <ul className="text-start lg:ms-9.5 px-3 py-4 text-amber-500">
                <li className="font-bold text-lg pb-2">Starters</li>
                <br />
                <li className="font-light pb-1">Bruschetta - $8</li>
                <li className="font-light pb-1">Stuffed Mushrooms - $9</li>
                <li className="font-light pb-1">Garlic Bread - $7</li>
                <li className="font-light pb-1">Caprese Salad - $10</li>
                <li className="font-light pb-1">Bruschetta - $8</li>
                <li className="font-light pb-1">Stuffed Mushrooms - $9</li>
                <li className="font-light pb-1">Garlic Bread - $7</li>
                <li className="font-light pb-1">Caprese Salad - $10</li>
            </ul>
                
        </div>
        <div className="py-3 px-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2">
          <motion.img 
          initial={{ scale: 0 }} animate={{ scale: 1 }}
          transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.5, bounce: 0.7 },
            }} 
          src={menuImage5} className='w-80 h-fit px-1.5 rounded-lg py-1.5' alt="" />
          <motion.img 
          initial={{ scale: 0 }} animate={{ scale: 1 }}
          transition={{
                duration: 0.6,
                scale: { type: "spring", visualDuration: 0.5, bounce: 0.7 },
            }}
          src={menuImage5} className='w-80 h-fit px-1.5 rounded-lg py-1.5' alt="" />
          <motion.img 
          initial={{ scale: 0 }} animate={{ scale: 1 }}
          transition={{
                duration: 0.8,
                scale: { type: "spring", visualDuration: 0.5, bounce: 0.7 },
            }}
          src={menuImage5} className='w-80 h-fit px-1.5 rounded-lg py-1.5' alt="" />
          <motion.img 
          initial={{ scale: 0 }} animate={{ scale: 1 }}
          transition={{
                duration: 1.0,
                scale: { type: "spring", visualDuration: 0.5, bounce: 0.7 },
            }}  
          src={menuImage5} className='w-80 h-fit px-1.5 rounded-lg py-1.5' alt="" />
        </div>
      </div>
    </div>
    
  )
}

export default Menu