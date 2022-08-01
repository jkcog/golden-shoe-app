import { useEffect } from 'react';
import StarRatings from 'react-star-ratings';

const ReviewSummary = ({ product }) => {
  return (
    <div className="my-2 max-w-full xl:w-1/2 mx-auto px-4">
      <div className="flex justify-center items-center mb-8">
        <StarRatings
          rating={product.rating}
          starRatedColor="black"
          numberOfStars={5}
          name="rating"
          starDimension={'20px'}
        />
        <p className="ml-4 text-xs">
          {product.rating}/5 ({product.reviewCount})
        </p>
      </div>
      <div className="px-8 xl:px-48 my-24">
        <h2 className="font-bold text-center mb-4 text-xl">Fit</h2>
        <div className="w-full bg-gray-300 h-4">
          <div
            className="bg-black w-2 h-4"
            style={{ marginLeft: `${product.ratedSize * 10}%` }}
          ></div>
        </div>

        <div className="w-full flex justify-between">
          <p>Small</p>
          <p>Large</p>
        </div>
      </div>
      <div>
        {product.reviews.map((review, i) => {
          return (
            <div className="my-4 w-auto text-center border-b-2 py-8" key={i}>
              <StarRatings
                rating={review.rating}
                starRatedColor="black"
                numberOfStars={5}
                name="rating"
                starDimension={'15px'}
              />
              <h1 className="font-semibold mt-2">{review.title}</h1>
              <p>{review.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReviewSummary;
