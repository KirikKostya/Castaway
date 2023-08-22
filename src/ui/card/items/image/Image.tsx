import React from 'react';
import { IImage } from '../CardInterface';

const Image: React.FC<IImage> = ({image}) => {
  return (
    <img src={image} alt='episode' className='w-[350px] my-[30px] mx-[40px] rounded-[10px]'/>
  )
}

export default React.memo(Image);