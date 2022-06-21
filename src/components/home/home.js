import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../../redux/categories/categories';

const HomeList = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  useEffect(() => {
    dispatch(getCategories);
  }, []);

  return (
    <div className="articles_container">
      <h2>Articles</h2>
      <div>
        {categories && categories.map(
          (category) => (
            <Link to={`/${category.name}`} key={category.name}>
              {category.name}
              {' '}
              {category.productsCount}
            </Link>
          ),
        )}
      </div>
    </div>

  );
};

export default HomeList;
