import { ReviewForm } from '../review-form/review-form';
import { ReviewsList } from '../reviews-list/reviews-list';
import { useAppSelector } from '../../hooks';
import { AuthorizationStatus } from '../../const';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

function ReviewSection() {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <section className="property__reviews reviews">
      <ReviewsList />
      {(authorizationStatus === AuthorizationStatus.Auth) ? <ReviewForm /> : null}
    </section>
  );
}

export { ReviewSection };
