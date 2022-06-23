import './navBar.css';

const NavBar = () => (
  <div className="nav">
    <div className="logo">
      <h2 className="store-name">
        Premium store
        <i className="fa-solid fa-store home-icon" />
      </h2>
    </div>
    <div className="cart">
      <i className="fa-solid fa-cart-shopping" />
    </div>
  </div>
);

export default NavBar;
