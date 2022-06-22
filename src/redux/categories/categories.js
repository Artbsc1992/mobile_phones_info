import { fetchCategories } from '../../helper/fetch';

const SHOW_CATEGORIES = 'articles/SHOW_CATEGORIES';

const getCategories = async (dispatch) => {
  // const { categories: currentCategories } = getState();
  // if (currentCategories.length === 0) {
  const categories = await fetchCategories();
  dispatch({ type: SHOW_CATEGORIES, payload: categories });
  // }
};

const initialState = [];
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SHOW_CATEGORIES:
      return action.payload;
    default:
      return state;
  }
}

export { getCategories };
