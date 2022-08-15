import { render, screen } from '@testing-library/react';
import { ReviewsItem } from './review-item';
import { mockComments } from '../../utils/mocks';


describe('component: ReviewsItem', () => {
  it('should render ReviewsItem properly', () => {

    render(
      <ReviewsItem review={mockComments[0]} />
    );

    expect(screen.getByText('August 2022')).toBeInTheDocument();
    expect(screen.getByText(mockComments[0].comment)).toBeInTheDocument();
  });

});
