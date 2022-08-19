import { ReviewsItem } from '../rewiew-item/review-item';
import { useAppSelector } from '../../hooks';
import { selectSortedComments, getComments } from '../../store/data-process/selectors';
import { Comment } from '../../types/types';

const makeReviewList = (dataArray: Comment[]) => (
  dataArray.map((comment) => (
    <ReviewsItem review={comment} key={comment.id} />
  )
  ));

function ReviewsList() {

  const sortedComments = useAppSelector(selectSortedComments);
  const comments = useAppSelector(getComments);
  const reviewsAmount = comments.length;

  return (
    <>
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{reviewsAmount}</span>
      </h2>
      <ul className="reviews__list">
        {makeReviewList(sortedComments)}
      </ul>
    </>
  );
}

export { ReviewsList };
