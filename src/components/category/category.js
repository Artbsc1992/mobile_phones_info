import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getArticles } from '../../redux/articles/articles';

const Category = () => {
  const { categoryName } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getArticles(categoryName));
  }, []);

  const articles = useSelector((state) => state.articles);
  return (
    <div>
      Category Page
      <img alt="img" src={articles[0].image} />
    </div>
  );
};
export default Category;
