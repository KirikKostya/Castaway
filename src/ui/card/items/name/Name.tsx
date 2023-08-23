import React from 'react'
import { IName } from '../CardInterface';

const Name:React.FC<IName> = ({name}) => {
  return (
    <h1 className='lg:text-[48pt] md:text-[22pt] sm:text-[17pt] text-[12pt] lg:tracking-[2.56px] tracking-[1px] lg:leading-[70.4px] md:leading-[40px] leading-[25px]'>{name}</h1>
  )
}

export default React.memo(Name);