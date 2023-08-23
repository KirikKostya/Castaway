import React from 'react'
import { IEpisode } from '../CardInterface';

const Episode:React.FC<IEpisode> = ({episode}) => {
  return (
    <p className='text-[#118DA8] lg:text-[17px] md:text-[14px] text-[12px] lg:mt-[10px] mt-0'>{episode}</p>
  )
}

export default React.memo(Episode);