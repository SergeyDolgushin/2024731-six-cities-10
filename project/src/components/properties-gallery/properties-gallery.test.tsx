import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import PropertiesGallery from './properties-gallery';

const mockStore = configureMockStore();

describe('Component: PropertiesGallery', () => {
  it('should render correctly if is isDataLoading=false', () => {

    const store = mockStore({
      DATA: { isDataLoaded: false },
    });

    const images = [
      'image',
      'image',
      'image',
      'image',
      'image',
      'image',
    ];

    const title = 'title';

    render(
      <Provider store={store}>
        <PropertiesGallery images={images} title={title} />
      </Provider>
    );

    expect(screen.getAllByTestId('Image').length).toBe(images.length);
  });

  it('should render correctly if is isDataLoading=true', () => {

    const store = mockStore({
      DATA: { isDataLoaded: true },
    });

    const images = [
      'image',
      'image',
      'image',
      'image',
      'image',
      'image',
    ];

    const title = 'title';

    render(
      <Provider store={store}>
        <PropertiesGallery images={images} title={title} />
      </Provider>
    );

    expect(screen.queryByTestId('Image')).not.toBeInTheDocument();
  });
});
