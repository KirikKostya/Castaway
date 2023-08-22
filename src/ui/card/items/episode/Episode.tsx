import React from 'react'
import { IEpisode } from '../CardInterface';

const Episode:React.FC<IEpisode> = ({episode}) => {
  return (
    <p className='text-[#118DA8] text-[17px] mt-[10px]'>{episode}</p>
  )
}

export default React.memo(Episode);