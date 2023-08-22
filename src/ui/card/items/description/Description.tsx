import React from 'react'
import { IDecription } from '../CardInterface';

const Description:React.FC<IDecription> = ({description}) => {
  return (
    <p className='text-[rgba(255,255,255,0.7)]'>{description}</p>
  )
}

export default React.memo(Description);