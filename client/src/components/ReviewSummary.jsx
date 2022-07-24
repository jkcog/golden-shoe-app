import { useEffect } from 'react';

const ReviewSummary = ({ product }) => {
  useEffect(() => {
    console.log('review product ', product);
    console.log('rating ', product.rating);
  });

  return (
    <div className="my-8">
      <div>
        Rating: {product.rating}/5 ({product.reviewCount})
      </div>
      <div>Fit: {product.ratedSize}</div>
      <div>
        {product.reviews.map((review, i) => {
          console.log(review);
          return (
            <div className="my-4">
              <h1>{review.rating}/5</h1>
              <h1>{review.title}</h1>
              <p>{review.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReviewSummary;
