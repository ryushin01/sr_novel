import { useNavigate } from 'react-router-dom';
import './BackButton.scss';

const BackButton = () => {
  const navigate = useNavigate();
  const goToBackPage = () => {
    navigate(-1);
  };

  return (
    <button
      type="button"
      onClick={goToBackPage}
      className="btn-back"
      aria-label="이전 화면 이동"
    >
      이전 화면 이동
    </button>
  );
};

export default BackButton;
