import { Comment } from '../../types/types';
import { convertRatingtoStar } from '../../utils/converter';

type ReviewsItemProps = {
  review: Comment;
}

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June', 'Jule', 'August', 'September', 'October', 'November', 'December',
];

const formatDate = (dateString: string) => {
  const dateObject = new Date(dateString);

  return `${MONTHS[dateObject.getMonth()]} ${dateObject.getFullYear()}`;
};

function ReviewsItem({ review }: ReviewsItemProps) {
  const { rating, comment, date, user: { avatarUrl, name } } = review;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${convertRatingtoStar(rating)}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{formatDate(date)}</time>
      </div>
    </li>
  );
}


export { ReviewsItem };
