import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="inner-wrap">
        <h1>
          <Link to="/">SR NOVEL</Link>
        </h1>

        <div className="btn-group">
          <button type="button" className="btn-signin">
            로그인
          </button>
          <button type="button" className="btn-signup">
            회원가입
          </button>
          <Link to="/search" className="link-search">
            검색 페이지 이동
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
