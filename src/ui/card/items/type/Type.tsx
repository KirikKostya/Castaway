import React from 'react';
import { IType } from '../CardInterface';

const Type: React.FC<IType> = ({type}) => {

  return (
    <span className='lg:text-[18px] text-[14px] lg:py-[5px] lg:px-[10px] py-[3py] px-[7px] rounded-[6px] bg-[#191919]'>#{type}</span>
  )
}

export default React.memo(Type);