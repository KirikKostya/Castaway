import React from 'react'
import { IName } from '../CardInterface';

const Name:React.FC<IName> = ({name}) => {
  return (
    <h1 className='text-[48pt] tracking-[2.56px] leading-[70.4px]'>{name}</h1>
  )
}

export default React.memo(Name);