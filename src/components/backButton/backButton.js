import { useNavigate } from 'react-router-dom';
import './backButton.css';

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <div className="back">
      <button type="button" onClick={() => navigate(-1)}>
        <i className="fa-solid fa-arrow-left-long" aria-label="go back" />
      </button>
    </div>
  );
};

export default BackButton;
