import { useState, ChangeEvent, Fragment, MouseEvent } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { sendComment } from '../../store/api-actions';
import { ReviewLengthType, ratingStars } from './constants';


const checkLength = (data: string, isLoaded: boolean, isRating: number) => {
  const { MinReviewLength, MaxReviewLength } = ReviewLengthType;
  const lengthData = data.length;
  return !(lengthData >= MinReviewLength && lengthData <= MaxReviewLength && isRating) && !isLoaded;

};

const isChecked = (rating: number, index: number): boolean => rating === index;

function ReviewForm() {
  const [formData, setFormData] = useState({
    comment: '',
    rating: 0
  });
  const dispatch = useAppDispatch();
  const { selectedCard } = useParams<string>();
  const { isDataLoaded } = useAppSelector((state) => state.DATA);

  const handleOnChangeField = (evt: ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOnSubmit = (evt: MouseEvent) => {
    evt.preventDefault();
    dispatch(sendComment({ selectedCard, ...formData }));
    setFormData({ comment: '', rating: 0 });
  };


  const ratingInputs: JSX.Element[] = ratingStars.map((item) => (
    <Fragment key={item}>
      <input className="form__rating-input visually-hidden"
        onChange={handleOnChangeField}
        name="rating"
        value={item}
        id={`${item}-stars`}
        type="radio"
        checked={isChecked(Number(formData.rating), item)}
      />
      <label htmlFor={`${item}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
        <svg className="form__star-image" width="37" height="33" >
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </Fragment>
  ));

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratingInputs}
      </div>
      <textarea className="reviews__textarea form__textarea"
        onChange={handleOnChangeField}
        id="review"
        name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formData.comment}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={checkLength(formData.comment, isDataLoaded, formData.rating)} onClick={handleOnSubmit}>Submit</button>
      </div>
    </form>
  );
}

export { ReviewForm };
