import {
  render, screen, act,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import HomeList from '../components/home/home';
import store from '../redux/configure_store';

describe('Home page component', () => {
  afterEach(() => {
    act(() => store.dispatch({
      type: 'articles/SHOW_CATEGORIES',
      payload: [],
    }));
  });

  it('should render the categories', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <HomeList />
        </MemoryRouter>
      </Provider>,
    );
    const category = await screen.findByText('electronics');
    expect(category).toBeInTheDocument();
  });

  it('Should match the snapshot', async () => {
    const dom = render(<Provider store={store}><HomeList /></Provider>);
    await act(() => expect(dom).toMatchSnapshot());
  });
});
