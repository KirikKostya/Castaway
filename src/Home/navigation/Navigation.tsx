import React from 'react';
import Links from '../../ui/links-nav/Links';

const Navigation:React.FC = () => {
  return (
    <div className='max-w-7xl w-full h-16 px-16 flex items-center justify-between pt-4 pb-3 fixed top-0 bg-[#31383E] z-50'>
        <h3 className='font-bold text-2xl text-white'>Castaway</h3>
        <Links className='text-white flex items-center' />
    </div>
  )
}

export default Navigation;