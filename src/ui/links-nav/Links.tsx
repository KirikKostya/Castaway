import React from 'react';
import { Link } from 'react-scroll';

interface ILinks{
    className: string
    setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>
}
const Links: React.FC<ILinks> = (props) => {

    const {className, setIsOpen} = props;

  return (
    <nav className={className}>
        <Link to='preview' spy={true} smooth={true} offset={-95} duration={500} activeClass='text-[#118DA8]' className='mx-4 cursor-pointer transition-all ease-in-out duration-300 hover:text-[#118DA8]' onClick={()=>setIsOpen && setIsOpen(false)}>Home</Link>
        <Link to='episodes' spy={true} smooth={true} offset={-80} duration={500} activeClass='text-[#118DA8]' className='mx-4 cursor-pointer transition-all ease-in-out duration-300 hover:text-[#118DA8]' onClick={()=>setIsOpen && setIsOpen(false)}>Episodes</Link>
        <Link to='about' spy={true} smooth={true} offset={-80} duration={500} activeClass='text-[#118DA8]' className='mx-4 cursor-pointer transition-all ease-in-out duration-300 hover:text-[#118DA8]' onClick={()=>setIsOpen && setIsOpen(false)}>About</Link>
        <Link to='reviews' spy={true} smooth={true} offset={-95} duration={500} activeClass='text-[#118DA8]' className='mx-4 cursor-pointer transition-all ease-in-out duration-300 hover:text-[#118DA8]' onClick={()=>setIsOpen && setIsOpen(false)}>Reviews</Link>
    </nav>
  )
}

export default Links;