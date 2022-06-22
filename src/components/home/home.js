import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../../redux/categories/categories';
import home from '../../assets/home.jpg';
import './home.css';

const HomeList = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  useEffect(() => {
    dispatch(getCategories);
  }, []);

  return (
    <div className="articles_container">

      <h2 className="store-name">
        Premium store
        <i className="fa-solid fa-store home-icon" />
      </h2>
      <img className="home-img" src={home} alt="home" />
      <div className="categories">
        {categories && categories.map(
          (category) => (
            <Link to={`/category/${category.name}`} key={category.name} className={category.class}>
              <p>{category.name}</p>
              <span>
                (
                {category.productsCount}
                )
              </span>
            </Link>
          ),
        )}
      </div>
    </div>

  );
};

export default HomeList;
