import {
  render, screen, act,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import Category from '../components/category/category';
import store from '../redux/configure_store';

describe('Category page component', () => {
  afterEach(() => {
    act(() => store.dispatch({
      type: 'articles/SHOW_ARTICLES',
      payload: [],
    }));
  });

  it('should render the categories', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Category />
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