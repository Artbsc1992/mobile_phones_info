import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getArticles, clean, showDescription, hideDescription,
} from '../../redux/articles/articles';

const Category = () => {
  const { categoryName } = useParams();
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles);
  useEffect(() => {
    dispatch(getArticles(categoryName));
    dispatch(clean);
  }, []);

  return (
    <div>
      {categoryName.toUpperCase()}
      {articles && articles.map((article) => (
        <div key={article.title}>
          <img alt="img" src={article.img} />
          <h2>{article.price}</h2>
          <h4>{article.title}</h4>
          {!article.show
            ? (
              <button type="button" onClick={() => dispatch(showDescription(article.id))}>
                Description
              </button>
            )
            : (
              <button type="button" onClick={() => dispatch(hideDescription(article.id))}>
                Hide
              </button>
            )}
          <p style={{ display: article.show ? 'block' : 'none' }}>{article.description}</p>
          <span>{`${article.rate}/5`}</span>
          {' '}
          <span>{article.count}</span>
        </div>
      ))}

    </div>
  );
};
export default Category;
