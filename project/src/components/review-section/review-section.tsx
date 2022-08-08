import { ReviewForm } from '../review-form/review-form';
import { ReviewsList } from '../reviews-list/reviews-list';
import { useAppSelector } from '../../hooks';
import { AuthorizationStatus } from '../../const';

function ReviewSection() {
  const { authorizationStatus } = useAppSelector((state) => state);

  return (
    <section className="property__reviews reviews">
      <ReviewsList />
      {(authorizationStatus === AuthorizationStatus.Auth) ? <ReviewForm /> : null}
    </section>
  );
}

export { ReviewSection };
