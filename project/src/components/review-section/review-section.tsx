import { ReviewForm } from '../review-form/review-form';
import { ReviewsList } from '../reviews-list/reviews-list';
import { comments } from '../../mock/mock';

function ReviewSection() {

  return (
    <section className="property__reviews reviews">
      <ReviewsList comments={comments} />
      <ReviewForm />
    </section>
  );
}

export { ReviewSection };
