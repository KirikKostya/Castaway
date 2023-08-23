import React from 'react';
import { IImage } from '../CardInterface';

const Image: React.FC<IImage> = ({image}) => {
  return (
    <img src={image} alt='episode' className='lg:w-[350px] md:w-[290px] sm:w-[240px] w-[220px] my-[30px] lg:mx-[40px] md:mx-[30px] mx-[20px] rounded-[10px]'/>
  )
}

export default React.memo(Image);