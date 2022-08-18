import { render, screen } from '@testing-library/react';
import { CLASS_EMPTY } from './constants';
import { MainSection } from './main-section';

describe('Component: MainSection', () => {
  it('should render correctly if is not Empty', () => {

    const childrens = [
      <h1 key={1}>MainSection is rendered</h1>,
      <h1 key={2}>MainSection is rendered</h1>,
    ];

    render(
      <MainSection isEmpty={false}>
        {childrens}
      </MainSection>
    );

    expect(screen.queryByTestId(CLASS_EMPTY)).not.toBeInTheDocument();
    expect(screen.getAllByText('MainSection is rendered').length).toBe(childrens.length);
  });

  it('should render correctly if is Empty', () => {

    const childrens = [
      <h1 key={1}>MainSection is rendered</h1>,
      <h1 key={2}>MainSection is rendered</h1>,
    ];

    render(
      <MainSection isEmpty>
        {childrens}
      </MainSection>
    );

    expect(screen.getByTestId(CLASS_EMPTY)).toBeInTheDocument();
  });

});
