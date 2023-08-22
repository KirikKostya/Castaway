import React from 'react';
import { IEpisode, episodes } from '../../ui/data/data';
import Card from '../../ui/card/Card';

const Episodes: React.FC = () => {
  return (
    <article id='episodes' className='max-w-[1250px] w-full px-16 mt-[2em] flex flex-col item-center justify-between'>
        <div className='w-full flex items-center justify-between text-[27pt] text-white'>Latest episodes <button className='text-[10pt] p-[10px] bg-[#118DA8] rounded-[6px]'>View all episodes</button></div>
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