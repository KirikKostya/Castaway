import React from 'react';
import { IType } from '../CardInterface';

const Type: React.FC<IType> = ({type}) => {

  return (
    <span className='text-[18px] py-[5px] px-[10px] rounded-[6px] bg-[#191919]'>#{type}</span>
  )
}

export default React.memo(Type);