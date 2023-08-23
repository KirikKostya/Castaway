import React from 'react';
import { IReview, reviews } from '../../ui/data/data';
import ReviewCard from '../../ui/reviewCard/ReviewCard';

const Reviews: React.FC = () => {
  return (
    <div className='max-w-[1250px] w-full mt-[50px]'>
        <div className='flex flex-wrap items-stretch lg:justify-start md:justify-start justify-center lg:mx-[60px] md:mx-[50px] sm:mx-[40px] mx-[20px]'>
            {
                reviews.map((review:IReview)=>(
                    <ReviewCard key={review.id} review={review} />
                ))
            }
        </div>
    </div>
  )
}

export default Reviews;