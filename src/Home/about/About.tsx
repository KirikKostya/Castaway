import React from 'react';

const About: React.FC = () => {
  return (
    <article id={'about'} className='max-w-[1250px] flex items-center justify-between mb-[60px] lg:mx-[60px] md:mx-[50px] sm:mx-[40px] mx-[30px]'>
        <div className='text-white flex flex-col items-start flex-[.9]'>
            <h2 className='lg:text-[65px] md:text-[50px] sm:text-[35px] text-[25px] lg:tracking-[2.88px] tracking-[1px] lg:leading-[79px] md:leading-[60px] sm:leading-[40px] leading-[35px]'>Jacob Paulaner</h2><br/>
            <p className='text-[rgba(255,255,255,.7)] lg:leading-[33px] md:leading-[25px] sm:leading-[18px] leading-[15px] lg:text-[16px] md:text-[14px] sm:text-[12px] text-[12px]'>Jacob has a background in audio engineering, and has been podcasting since the early days.</p><br/>
            <p className='text-[rgba(255,255,255,.7)] lg:leading-[33px] md:leading-[25px] sm:leading-[18px] leading-[15px] lg:text-[16px] md:text-[14px] sm:text-[12px] text-[12px]'>He’s here to help you level up your game by sharing everything he’s learned along the way.</p>
        </div>
        <img src={require('../../ui/photos/About.png')} className='w-[45%] max-h-[500px] rounded-[12px]' alt='about'/>
    </article>
  )
}

export default About