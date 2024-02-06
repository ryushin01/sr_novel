import { Link } from 'react-router-dom';
import { ReactComponent as Arrow } from '@svg/right_arrow.svg';
import './MainTitle.scss';

const MainTitle = ({ link, title }) => {
  return (
    <h2 className="main-title">
      <Link to={link}>
        {title}
        <span className="main-title-svg">
          <Arrow />
        </span>
      </Link>
    </h2>
  );
};

export default MainTitle;
