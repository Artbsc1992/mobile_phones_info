import { fetchArticles } from '../../helper/fetch_articles';

const SHOW_ARTICLES = 'articles/SHOW_ARTICLES';

const getArticles = (categoryName) => async (dispatch, getState) => {
  const { articles: currentArticles } = getState();
  if (currentArticles.length === 0) {
    const articles = await fetchArticles(categoryName);
    dispatch({ type: SHOW_ARTICLES, payload: articles });
  }
};

const initialState = [];
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SHOW_ARTICLES:
      return action.payload;
    default:
      return state;
  }
}

export { getArticles };
