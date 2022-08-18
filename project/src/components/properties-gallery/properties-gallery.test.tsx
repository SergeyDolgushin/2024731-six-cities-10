import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { idForTest, imagesForTest, titleForTest } from './constants';
import PropertiesGallery from './properties-gallery';

const mockStore = configureMockStore();

describe('Component: PropertiesGallery', () => {
  it('should render correctly if is isDataLoading=false', () => {

    const store = mockStore({
      DATA: { isDataLoaded: false },
    });

    render(
      <Provider store={store}>
        <PropertiesGallery images={imagesForTest} title={titleForTest} />
      </Provider>
    );

    expect(screen.getAllByTestId(idForTest).length).toBe(imagesForTest.length);
  });

  it('should render correctly if is isDataLoading=true', () => {

    const store = mockStore({
      DATA: { isDataLoaded: true },
    });

    render(
      <Provider store={store}>
        <PropertiesGallery images={imagesForTest} title={titleForTest} />
      </Provider>
    );

    expect(screen.queryByTestId(idForTest)).not.toBeInTheDocument();
  });
});
