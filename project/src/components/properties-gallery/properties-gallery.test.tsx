import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ID_FOR_TEST, testImages, titleForTest } from './constants';
import PropertiesGallery from './properties-gallery';

const mockStore = configureMockStore();

describe('Component: PropertiesGallery', () => {
  it('should render correctly if is isDataLoading=false', () => {

    const store = mockStore({
      DATA: { isDataLoaded: false },
    });

    render(
      <Provider store={store}>
        <PropertiesGallery images={testImages} title={titleForTest} />
      </Provider>
    );

    expect(screen.getAllByTestId(ID_FOR_TEST).length).toBe(testImages.length);
  });

  it('should render correctly if is isDataLoading=true', () => {

    const store = mockStore({
      DATA: { isDataLoaded: true },
    });

    render(
      <Provider store={store}>
        <PropertiesGallery images={testImages} title={titleForTest} />
      </Provider>
    );

    expect(screen.queryByTestId(ID_FOR_TEST)).not.toBeInTheDocument();
  });
});
