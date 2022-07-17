import { useState, ChangeEvent, Fragment } from 'react';

const ratingStars: ReadonlyArray<number> = [5, 4, 3, 2, 1];

function ReviewForm() {
  const [formData, setFormData] = useState({
    review: '',
    rating: 0
  });

  const handleOnChangeField = (evt: ChangeEvent<HTMLInputElement> & ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };

  const ratingInputs: JSX.Element[] = ratingStars.map((item) => (
    <Fragment key={item}>
      <input className="form__rating-input visually-hidden"
        onChange={handleOnChangeField}
        name="rating"
        value={item}
        id={`${item}-stars`}
        type="radio"
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
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formData.review}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={false}>Submit</button>
      </div>
    </form>
  );
}

export { ReviewForm };
