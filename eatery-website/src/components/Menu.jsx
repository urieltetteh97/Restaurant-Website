import React from 'react'
import menuImage from '../assets/john-prefer-lfHAuclmbJM-unsplash.jpg';
import menuImage2 from '../assets/phil-hearing-Ee5FZp9MJlI-unsplash.jpg';
import menuImage3 from '../assets/osama-bgid-uOsGAtKos8g-unsplash.jpg';

const Menu = () => {
  return (
    <div className='w-full h-75 pt-3.5 pb-3.5 bg-black'>
      <div className="grid grid-cols-2 gap-x-3">
        <div className="grid grid-cols-2 gap-x-4">
            <ul className="text-start px-3 py-4 text-amber-500">
                <li className="font-bold text-lg pb-2">Starters</li>
                <br />
                <li className="font-light pb-1">Bruschetta - $8</li>
                <li className="font-light pb-1">Stuffed Mushrooms - $9</li>
                <li className="font-light pb-1">Garlic Bread - $7</li>
                <li className="font-light pb-1">Caprese Salad - $10</li>
            </ul>
            <ul className="text-end px-3 py-4 text-amber-500">
                <li className="font-bold text-lg pb-2"></li>
                <br />
                <li className="font-light pb-1"> - $18</li>
            </ul>
                
        </div>
        <div className="py-3 px-4 flex flex-nowrap gap-2">
            <img src={menuImage} alt="Menu Item 1" className="w-40 h-40 object-fit mb-2 rounded-lg"/>
            <img src={menuImage2} alt="Menu Item 2" className="w-40 h-40 object-fit mb-2 rounded-lg"/>
            <img src={menuImage3} alt="Menu Item 3" className="w-40 h-40 object-fit rounded-lg"/>
        </div>
      </div>
    </div>
    
  )
}

export default Menu