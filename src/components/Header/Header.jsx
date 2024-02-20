import { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '@components/Modal/Modal';
import LoginModal from '@components/Modal/components/LoginModal';
import './Header.scss';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <header className="header">
      <div className="inner-wrap">
        <h1>
          <Link to="/">SR NOVEL</Link>
        </h1>

        <div className="btn-group">
          <button type="button" className="btn-signin" onClick={handleModalToggle}>
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
        {isModalOpen && (
          <Modal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            title="SR NOVEL"
            content={<LoginModal setIsModalOpen={setIsModalOpen} />}
          />
        
        )}
    </header>
  );
};

export default Header;
