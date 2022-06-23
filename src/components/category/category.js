import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getArticles, clean, showDescription, hideDescription,
} from '../../redux/articles/articles';
import LoadingPage from '../loadingPage/loadingPage';
import BackButton from '../backButton/backButton';
import './category.css';

const Category = () => {
  const { categoryName } = useParams();
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles);
  useEffect(() => {
    dispatch(getArticles(categoryName));
    dispatch(clean);
  }, []);

  return (
    <>
      {articles.length === 0
        ? (
          <div className="loading">
            <LoadingPage />
          </div>
        )
        : (
          <div className="category-container">
            <BackButton />
            <h1 className="category-title">
              {categoryName.toUpperCase()}
            </h1>
            {articles && articles.map((article) => (
              <div key={article.title} className="element">
                <img alt="img" src={article.img} className="image" />
                <span className="rating">{`Rating ${article.rate}/5 - Stock: ${article.count} units`}</span>
                <h2 className="price">
                  Price:
                  $
                  {article.price}
                </h2>
                <h4 className="name">{article.title}</h4>
                {!article.show
                  ? (
                    <button className="desc" type="button" onClick={() => dispatch(showDescription(article.id))}>
                      Tap for Description
                    </button>
                  )
                  : (
                    <button className="desc" type="button" onClick={() => dispatch(hideDescription(article.id))}>
                      Hide
                    </button>
                  )}
                <p className="text-desc" style={{ display: article.show ? 'block' : 'none' }}>{article.description}</p>
              </div>
            ))}
          </div>
        )}
    </>
  );
};
export default Category;
