import { ReviewsItem } from '../rewiew-item/review-item';
import { useAppSelector } from '../../hooks';
import { getComments } from '../../store/data-process/selectors';


function ReviewsList() {

  const comments = useAppSelector(getComments);
  const reviewsAmount = comments.length;

  const sortedComments = [...comments];
  sortedComments.sort((commentA, commentB) => Date.parse(commentB.date) - Date.parse(commentA.date));

  const reviewsList: JSX.Element[] = sortedComments.map((comment) => (
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
