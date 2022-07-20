import { Comment } from '../../types/types';
import { ReviewsItem } from '../rewiew-item/review-item';

type ReviewsListProps = {
  comments: Comment[];
}

function ReviewsList({ comments }: ReviewsListProps) {
  const reviewsAmount = comments.length;

  const reviewsList: JSX.Element[] = comments.map((comment) => (
    <ReviewsItem review={comment} key={comment.id} />
  )
  );

  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsAmount}</span></h2>
      <ul className="reviews__list">
        {reviewsList}
      </ul>
    </>
  );
}

export { ReviewsList };
