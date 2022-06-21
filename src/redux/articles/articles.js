import fetchArticles from '../../helper/fetch_articles';

const SHOW_ARTICLES = 'articles/SHOW_ARTICLES';
const SHOW_CATEGORIES = 'articles/SHOW_CATEGORIES';

const getArticles = async (dispatch, getState) => {
  const { articles: currentArticles } = getState();
  if (currentArticles.length === 0) {
    const articles = await fetchArticles();
    dispatch({ type: SHOW_ARTICLES, payload: articles });
  }
};

const getCategories = (articles) => ({
  type: SHOW_CATEGORIES,
  payload: articles,
});

const initialState = [];
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SHOW_ARTICLES:
      return action.payload;
    case SHOW_CATEGORIES:
      return [...state, { category: state.category.concat(action.payload) }];
    default:
      return state;
  }
}

export { getArticles, getCategories };
