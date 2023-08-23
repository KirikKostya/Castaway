import React from 'react';
import SoundsList from '../../ui/sounds/SoundsList';

const Preview:React.FC = () => {
  return (
    <article id='preview' className='max-w-[1250px] w-full flex items-center mt-[70px]'>
        <img src={require('../../ui/photos/Preview.png')} alt='preview' className='lg:w-[450px] lg:ml-16 md:w-[300px] md:ml-12 sm:w-[150px] max-h-[550px] ml-8 rounded-lg w-[150px]'/>
        <div className='lg:ml-[10em] sm:ml-[2em] ml-[1.5em] text-white'>
            <h1 className='lg:text-[70px] md:text-[50px] md:leading-[60px] sm:text-[30px] sm:tracking-[1px] sm:leading-[40px] text-[20px] font-light tracking-[1px] leading-[30px]'>Take your<br/> podcast to the<br/> next <b className='tracking-[2px]'>level</b></h1>
            <div className='flex flex-col mt-10 mx-[10px]'>
                <p className='pb-[10px] text-[9pt]'>Listen with:</p>
                <SoundsList className='flex items-center cursor-pointer'/>
            </div>
        </div>
    </article>
  )
}

export default Preview;