import React from 'react';
import { IEpisode, episodes } from '../../ui/data/data';
import Card from '../../ui/card/Card';

const Episodes: React.FC = () => {
  return (
    <article id='episodes' className='max-w-[1250px] w-full lg:px-16 md:px-14 sm:px-10 px-8 mt-[2em] flex flex-col item-center justify-between'>
        <div className='w-full flex items-center justify-between text-white lg:text-[27pt] md:text-[16pt] sm:text-[14pt] text-[14pt]'>
          Latest episodes 
          <button className='text-[10pt] lg:p-[10px] md:p-[6px] sm:p-[5px] p-[5px] bg-[#118DA8] rounded-[6px]'>
            View all episodes
          </button>
        </div>
        <div>
          {
            episodes.map((episode: IEpisode)=>(
              <Card key={episode.id} episode={episode} />
            ))
          }
        </div>
    </article>
  )
}

export default Episodes;