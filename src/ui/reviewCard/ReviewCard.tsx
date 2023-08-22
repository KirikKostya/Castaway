import React from 'react';
import { Rate } from 'antd';
import { IReview } from '../data/data';

interface IReviewCard{
    review: IReview
}
const ReviewCard:React.FC<IReviewCard> = (props) => {

    const { review } = props;

  return (
    <div id={'reviews'} className='w-[31.5%] bg-black flex flex-col items-start justify-between text-white rounded-[32px] px-[15px] py-[30px] m-[10px]'>
        <Rate value={review.mark}/>
        <h2 className='text-[34px] leading-[43.2px]'>{review.review}</h2>
        <p className='text-[20px] text-[rgba(255,255,255,.7)] leading-[28.8px]'>{review.sender}</p>
    </div>
  )
}

export default ReviewCard;