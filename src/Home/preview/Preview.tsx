import React from 'react';
import SoundsList from '../../ui/sounds/SoundsList';

const Preview:React.FC = () => {
  return (
    <article id='preview' className='max-w-[1250px] w-full flex items-center mt-[70px]'>
        <img src={require('../../ui/photos/Preview.png')} alt='preview' className='w-[450px] max-h-[550px] ml-16 rounded-lg'/>
        <div className='ml-[10em] text-white'>
            <h1 className='font-light tracking-[3.2px] leading-[88px] text-[70px]'>Take your<br/> podcast to the<br/> next <b className='tracking-[2px]'>level</b></h1>
            <div className='flex flex-col mt-10 mx-[10px]'>
                <p className='pb-[10px] text-[9pt]'>Listen with:</p>
                <SoundsList />
            </div>
        </div>
    </article>
  )
}

export default Preview;