import { fetchArticles } from '../../helper/fetch';

const SHOW_ARTICLES = 'articles/SHOW_ARTICLES';
const CLEAN_ARTICLES = 'articles/CLEAN_ARTICLES';
const SHOW_MORE = 'articles/SHOW_MORE';
const SHOW_LESS = 'articles/SHOW_LESS';

const getArticles = (categoryName) => async (dispatch) => {
  const articles = await fetchArticles(categoryName);
  dispatch({ type: SHOW_ARTICLES, payload: articles });
};

const clean = (dispatch, getState) => {
  const { categories: currentCategories } = getState();
  if (currentCategories.length !== 0) {
    const categories = [];
    dispatch({ type: CLEAN_ARTICLES, payload: categories });
  }
};

const showDescription = (id) => ({
  type: SHOW_MORE,
  payload: id,
});

const hideDescription = (id) => ({
  type: SHOW_LESS,
  payload: id,
});

const initialState = [];
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SHOW_ARTICLES:
      return action.payload;
    case CLEAN_ARTICLES:
      return action.payload;
    case SHOW_MORE:
      return state.map((article) => {
        if (article.id !== action.payload) {
          return article;
        }
        return { ...article, show: true };
      });
    case SHOW_LESS:
      return state.map((article) => {
        if (article.id !== action.payload) {
          return article;
        }
        return { ...article, show: false };
      });
    default:
      return state;
  }
}

export {
  getArticles, clean, showDescription, hideDescription,
};
