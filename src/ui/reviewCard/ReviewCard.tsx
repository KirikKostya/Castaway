import React from 'react';
import { Rate } from 'antd';
import { IReview } from '../data/data';

interface IReviewCard{
    review: IReview
}
const ReviewCard:React.FC<IReviewCard> = (props) => {

    const { review } = props;

  return (
    <div id={'reviews'} className='lg:w-[31.5%] md:w-[33.5%] w-[36.5%] bg-black flex flex-col items-start justify-between text-white rounded-[32px] px-[15px] py-[30px] lg:m-[10px] md:m-[8px] m-[4px]'>
        <Rate className='lg:text-[25px] md:text-[20px] text-[15px]' value={review.mark}/>
        <h2 className='lg:text-[34px] md:text-[25px] sm:text-[20px] text-[17px] lg:leading-[43.2px] md:leading-[33.2px] leading-[23.2px]'>{review.review}</h2>
        <p className='lg:text-[20px] md:text-[17px] sm:text-[14px] text-[11px] text-[rgba(255,255,255,.7)] lg:leading-[28.8px] md:leading-[23.8px] sm:leading-[18.3x]'>{review.sender}</p>
    </div>
  )
}

export default React.memo(ReviewCard);