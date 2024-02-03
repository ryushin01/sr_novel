import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="leftWrap">
        <ul>
          <li>
            <h1>SR_NOVEL</h1>
          </li>
          <li>
            <NavLink to="/">랭킹</NavLink>
          </li>
          <li>
            <NavLink to="#">서재</NavLink>
          </li>
          <li>
            <NavLink to="#">게시판</NavLink>
          </li>
        </ul>
      </div>
      <div className="rightWrap">
        <ul>
          <li>
            <NavLink to="/login">로그인</NavLink>
          </li>
          <li>
            <NavLink to="#">회원가입</NavLink>
          </li>
          <li>
            <NavLink to="#">검색</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
