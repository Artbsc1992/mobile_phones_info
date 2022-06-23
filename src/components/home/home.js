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
    <>
      <div className="articles_container">
        <img className="home-img" src={home} alt="home" />
        <p className="presentation">
          <h2>We are open!</h2>
          We are an online store with the newest technologie
          and electronics
        </p>
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
        <footer className="footer">
          <span>Project build by Arturo</span>
        </footer>
      </div>

    </>
  );
};

export default HomeList;
