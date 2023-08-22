import React from 'react';
import SoundsList from '../../ui/sounds/SoundsList';
import {FacebookOutlined, InstagramOutlined, TwitterOutlined}  from '@ant-design/icons'; 
import Links from '../../ui/links-nav/Links';

const Footer:React.FC = () => {
  return (
    <footer className='max-w-[1250px] w-full mt-[150px] cursor-pointer'>
        <div className='flex items-start justify-between text-white text-[27px] leading-[27px] mx-[80px]'>
            <article className='mr-[10px] mb-[10px]'>
                <h1 className='text-4xl font-bold mb-[10px]'>Castaway</h1>
                <div className='flex items-center'>
                    <InstagramOutlined className='mr-[10px]'/>
                    <TwitterOutlined className='mr-[10px]'/>
                    <FacebookOutlined />
                </div>
            </article>
            <Links className='flex flex-col items-start text-[17px] leading-[27px]' />
            <article className='flex flex-col items-start text-[17px] leading-[27px]'>
                <p>Style Guide</p>
                <p>Instructions</p>
                <p>Changelog</p>
                <p>Credit</p>
                <p>Powered by Webflow</p>
                <p>Licenses</p>
            </article>
            <article className='flex-[.5]'>
                <SoundsList/>
            </article>
        </div>
    </footer>
  )
}

export default Footer;