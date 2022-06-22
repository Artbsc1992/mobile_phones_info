import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button type="button" onClick={() => navigate(-1)}>
        <i className="fa-solid fa-arrow-left-long" aria-label="go back" />
      </button>
    </div>
  );
};

export default NavBar;
