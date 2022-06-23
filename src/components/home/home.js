import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../../redux/categories/categories';
import LoadingPage from '../loadingPage/loadingPage';
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
      {categories.length === 0
        ? (
          <div className="loading">
            <LoadingPage />
          </div>
        )
        : (
          <div className="articles_container">
            <img className="home-img" src={home} alt="home" />
            <div className="presentation">
              <h2 className="open">We are open!</h2>
              We are PREMIUM STORE, we deliver the most
              trending articles just for exclusive customers like you!
            </div>
            <h4 className="categories-selector">Categories:</h4>
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
              <span>
                Project build by
                {' '}
                <a href="https://github.com/Artbsc1992">Arturo</a>
              </span>
            </footer>
          </div>
        )}
    </>
  );
};

export default HomeList;
