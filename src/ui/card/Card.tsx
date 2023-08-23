import React from 'react'
import { IEpisode } from '../data/data';
import Image from './items/image/Image';
import Type from './items/type/Type';
import Episode from './items/episode/Episode';
import Name from './items/name/Name';
import Description from './items/description/Description';

interface ICard {
    episode: IEpisode
}
const Card: React.FC<ICard> = (props) => {
    
  const {episode} = props;

  return (
    <article key={episode.id} className='w-full flex items-stretch bg-black rounded-[32px] lg:my-[60px] md:my-[50px] my-[30px]'>
      <Image image={episode.image}/>
      <div id='box' className='flex flex-col items-start justify-between text-white my-[30px] lg:mx-[20px] md:mx-[15px] mx-[5px]'>
          <Type type={episode.type}/>
          <Episode episode={episode.episode}/>
          <Name name={episode.name} />
          <Description description={episode.description} />
          <button className='text-[10pt] lg:p-[10px] md:p-[6px] sm:p-[5px] p-[5px] bg-[#118DA8] rounded-[6px]'>View Details</button>
      </div>
    </article>
  )
}

export default Card;