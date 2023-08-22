import React from 'react';
import Spotify from '../svg/Spotify';
import Second from '../svg/Second';
import SoundCloud from '../svg/SoundCloud';
import Fourth from '../svg/Fourth';
import Fifth from '../svg/Fifth';

const SoundsList:React.FC = () => {
  return (
    <div className='flex items-center cursor-pointer'>
        <Spotify />
        <Second />
        <SoundCloud />
        <Fourth />
        <Fifth />
    </div>
  )
}

export default SoundsList;