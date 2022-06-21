import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getArticles } from '../../redux/articles/articles';

const Category = () => {
  const { categoryName } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getArticles(categoryName));
  }, []);

  return (
    <div>
      Category Page
      {categoryName}
    </div>
  );
};
export default Category;
