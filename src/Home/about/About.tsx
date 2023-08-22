import React from 'react';

const About: React.FC = () => {
  return (
    <article id={'about'} className='max-w-[1250px] flex items-center justify-between mb-[60px] mx-[60px]'>
        <div className='text-white flex flex-col items-start flex-[.9]'>
            <h2 className='text-[65px] tracking-[2.88px] leading-[79px]'>Jacob Paulaner</h2>
            <p className='text-[rgba(255,255,255,.7)] leading-[33px] text-[16px]'>Jacob has a background in audio engineering, and has been podcasting since the early days.</p>
            <p className='text-[rgba(255,255,255,.7)] leading-[33px] text-[16px]'>He’s here to help you level up your game by sharing everything he’s learned along the way.</p>
        </div>
        <img src={require('../../ui/photos/About.png')} className='w-[45%] h-[500px] rounded-[12px]' alt='about'/>
    </article>
  )
}

export default About