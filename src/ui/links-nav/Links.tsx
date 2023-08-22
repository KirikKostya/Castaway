import React from 'react';
import { Link } from 'react-scroll';

interface ILinks{
    className: string
}
const Links: React.FC<ILinks> = (props) => {

    const {className} = props;

  return (
    <nav className={className}>
        <Link to='preview' spy={true} smooth={true} offset={-95} duration={500} activeClass='text-[#118DA8]' className='mx-4 cursor-pointer'>Home</Link>
        <Link to='episodes' spy={true} smooth={true} offset={-80} duration={500} activeClass='text-[#118DA8]' className='mx-4 cursor-pointer'>Episodes</Link>
        <Link to='about' spy={true} smooth={true} offset={-80} duration={500} activeClass='text-[#118DA8]' className='mx-4 cursor-pointer'>About</Link>
        <Link to='reviews' spy={true} smooth={true} offset={-95} duration={500} activeClass='text-[#118DA8]' className='mx-4 cursor-pointer'>Reviews</Link>
    </nav>
  )
}

export default Links;