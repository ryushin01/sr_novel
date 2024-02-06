import { Link } from 'react-router-dom';
import './MainTitle.scss';

const MainTitle = ({ link, title }) => {
  return (
    <h2 className="main-title">
      <Link to={link}>{title}</Link>
    </h2>
  );
};

export default MainTitle;
