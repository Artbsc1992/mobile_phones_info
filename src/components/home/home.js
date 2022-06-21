import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { getArticles } from '../../redux/articles/articles';

/* eslint no-plusplus: "error" */
const HomeList = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles);
  useEffect(() => {
    dispatch(getArticles);
  }, []);

  const categories = [...new Set(articles.map(((article) => (article.category))))];
  /*eslint-disable */
  const count = [...articles.reduce((mp, o) => {
    if (!mp.has(o.category)) mp.set(o.category, { ...o, count: 0 });
    mp.get(o.category).count++;
    return mp;
  }, new Map()).values()];
  /*eslint-disable */
  
  return (
    <div className="articles_container">
      <h2>Articles</h2>
      <div>
      {categories && categories.map(
        (category) => (
          <div key={uuid()}>
            {category}
          </div>
        ),
      )}
      {count && count.map(
        (e) => (
          <span key={uuid()}>
            {e.count}
          </span>
        ),
      )}
    </div>
    </div>

  );
};

export default HomeList;
