import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getArticles, clean } from '../../redux/articles/articles';

const Category = () => {
  const { categoryName } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getArticles(categoryName));
    dispatch(clean);
  }, []);

  const articles = useSelector((state) => state.articles);
  return (
    <div>
      {categoryName.toUpperCase()}
      {articles && articles.map((article) => (
        <div key={article.title}>
          <img alt="img" src={article.img} />
          <h2>{article.price}</h2>
          <h4>{article.title}</h4>
          <button type="button">
            Description
          </button>
          <p style={{ display: 'none' }}>{article.description}</p>
          <span>{`${article.rate}/5`}</span>
          {' '}
          <span>{article.count}</span>
        </div>
      ))}
      ;

    </div>
  );
};
export default Category;
