import { ReviewForm } from '../review-form/review-form';
import { ReviewsList } from '../reviews-list/reviews-list';
import { useAppSelector } from '../../hooks';
import { AuthorizationStatus } from '../../const';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { LoadingScreen } from '../loading-screen/loading-screen';

function ReviewSection() {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const { isCommentsLoaded } = useAppSelector((state) => state.DATA);

  return (
    <section className="property__reviews reviews">
      {isCommentsLoaded ?
        <div style={{ marginLeft: '43%' }}>
          <LoadingScreen />
        </div> :
        <ReviewsList />}
      {(authorizationStatus === AuthorizationStatus.Auth) ? <ReviewForm /> : null}
    </section>
  );
}

export { ReviewSection };
