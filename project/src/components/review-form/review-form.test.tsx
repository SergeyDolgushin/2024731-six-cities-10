import { render, screen } from '@testing-library/react';
import { ReviewForm } from './review-form';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import userEvent from '@testing-library/user-event';
import { ReviewLengthType } from './constants';

const { MinReviewLength, MaxReviewLength } = ReviewLengthType;
const mockStore = configureMockStore();
const store = mockStore({
  DATA: { isDataLoaded: false },
});

describe('Component: ReviewForm', () => {

  it('should be rendered correctly', () => {
    render(
      <Provider store={store}>
        <ReviewForm />
      </Provider>
    );

    expect(screen.getByText(/To submit review please make sure to set/i))
      .toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should set submit button disabled when form isn\'t valid and vice versa', async () => {
    render(
      <Provider store={store}>
        <ReviewForm />
      </Provider>
    );

    const textarea = screen.getByRole('textbox');
    const [star] = screen.getAllByRole('radio');

    await userEvent.type(textarea, '*'.repeat(MaxReviewLength / 2));
    expect(screen.getByRole('button')).toHaveAttribute('disabled');

    await userEvent.click(star);

    await userEvent.type(textarea, '*'.repeat(MaxReviewLength + 2));
    expect(screen.getByRole('button')).toHaveAttribute('disabled', '');

    await userEvent.clear(textarea);
    await userEvent.type(textarea, '*'.repeat(MinReviewLength - 1));
    expect(screen.getByRole('button')).toHaveAttribute('disabled', '');

    await userEvent.clear(textarea);
    await userEvent.type(textarea, '*'.repeat(Math.round(MaxReviewLength / 2)));

    expect(screen.getByRole('button')).not.toHaveAttribute('disabled');

  }, 15000);
});
